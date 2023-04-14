import { readFileSync } from 'fs';
import { connectionMongoose } from '../helper/mongodb.connection';
import { sortBy, uniq, uniqBy } from 'lodash';
import { Schema, SchemaTypes, model } from 'mongoose';
import { inspect } from 'util';

(async () => {
  const args = {} as Record<string, string>;
  process.argv.forEach((arg) => {
    const v = arg.match(/--(\w+)=(.+)/);
    if (v) args[v[1]] = v[2];
  });

  const dbName = args['dbName'] || 'test';
  const url = args['url'] || `mongodb://localhost:27017/${dbName}`;
  await connectionMongoose(url, dbName);

  const brandSchema = model(
    'VehicleBrand',
    new Schema(
      {
        slug: SchemaTypes.String,
        name: {
          th: SchemaTypes.String,
          en: SchemaTypes.String,
        },
        imageKey: SchemaTypes.String,
      },
      { timestamps: true }
    )
  );

  const json = readFileSync(`${process.cwd()}/scripts/asset/new-vehicle.json`, {
    encoding: 'utf8',
  });
  const vehicles = JSON.parse(json);

  const brands = sortBy<any>(
    uniqBy(
      [...vehicles.map((e) => ({ brand: e.brand, model: e.model }))],
      'model'
    ),
    ['brand']
  );
  console.log(`Inserting brand is successfully`);

  await brandSchema
    .insertMany(
      brands.map((e) => {
        return {
          name: {
            en: e,
            th: null,
          },
          slug: e.toLowerCase().trim().replace(/\s|-/g, '_'),
          imageKey: `madify/static/brand-car/${e
            .toLowerCase()
            .trim()
            .replace(/\s|-/g, '_')}_logo.png`,
        };
      }),
      { ordered: true }
    )
    .then(() => {
      console.log(`Insert brand is successfully`);
    })
    .catch(console.error);

  process.exit(1);
})();
