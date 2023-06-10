export interface IJwtConfig {
  secret: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

export interface IRedisConfig {
  host: string;
  password: string;
  port: number;
  db: number;
  ttl: number;
  store?: unknown;
}

export interface IMongooseConfig {
  uri: string;
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

export interface IThrottlerConfig {
  limit: number;
  ttl: number;
}

export interface IStorageConfig {
  projectId: string;
  clientEmail: string;
  clientId: string;
  privateKey: string;
  bucketName: string;
  expired: number;
}
