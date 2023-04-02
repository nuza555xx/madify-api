import { connection } from '../helper/mongodb.connection';

(async () => {
  try {
    const args = {} as Record<string, string>;
    process.argv.forEach((arg) => {
      const v = arg.match(/--(\w+)=(.+)/);
      if (v) args[v[1]] = v[2];
    });

    const dbName = args['dbName'] || 'test';
    const url = args['url'] || `mongodb://localhost:27017/${dbName}`;
    const collectionViewName = 'vehicles-view';
    const conn = await connection(url);
    const db = conn.db(dbName);
    const collection = db.collection(collectionViewName);

    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((c) => c.name);
    const isExisting = collectionNames.includes(collectionViewName);

    if (isExisting) process.exit(1);

    db.createCollection('vehicles-view', {
      viewOn: 'vehicles',
    });
    process.exit(1);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
