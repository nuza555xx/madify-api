import { MongoClient } from 'mongodb';

export async function connection(uri) {
  const client = new MongoClient(uri);
  return client.connect();
}
