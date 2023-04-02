export const RedisCacheKey = {
  USER: {
    name: 'user',
    ttl: Number(process.env.REDIS_CACHED_TTL) || 5000,
  },
  VEHICLE: {
    name: 'vehicle',
    ttl: Number(process.env.REDIS_CACHED_TTL) || 5000,
  },
};
