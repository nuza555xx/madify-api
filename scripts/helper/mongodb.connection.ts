import { MongoClient } from 'mongodb';
import { connect } from 'mongoose';

export async function connectionMongo(uri: string): Promise<MongoClient> {
  const client = new MongoClient(uri);
  return client.connect();
}

export async function connectionMongoose(
  uri: string,
  dbName: string
): Promise<void> {
  await connect(uri, { dbName });
}
