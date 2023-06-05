export const RedisCacheKey = {
  USER: {
    name: 'user',
    ttl: Number(process.env.REDIS_TTL) || 5000,
    ttlShared: Number(process.env.REDIS_SHARED_TTL) || 5000,
  },
  VEHICLE: {
    name: 'vehicle',
    ttl: Number(process.env.REDIS_TTL) || 5000,
    ttlShared: Number(process.env.REDIS_SHARED_TTL) || 5000,
  },
};
