export enum APIPrefix {
  AUTHENTICATION = 'api/authentication',
  USER = 'api/user',
  VEHICLE = 'api/vehicle',
  QUEUE = 'api/queue',
}

export enum ConfigKey {
  ELASTICSEARCH = 'elasticsearch',
  STORE = 'redis-store',
  CACHE = 'redis-cache',
  JWT = 'jwt',
  MONGOOSE = 'mongoose',
  THROTTLER = 'throttler',
  STORAGE = 'storage',
  QUEUE = 'queue',
}

export enum ElasticsearchIndexes {
  VEHICLE = 'vehicles',
}

export enum QueueName {
  NOTIFY = 'notify',
}
