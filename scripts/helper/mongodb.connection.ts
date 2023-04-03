import { MongoClient } from 'mongodb';
import { connect } from 'mongoose';

export async function connectionMongo(uri) {
  const client = new MongoClient(uri);
  return client.connect();
}

export async function connectionMongoose(uri, dbName) {
  const client = connect(uri, { dbName });
  return client;
}
