const config = Object.freeze({
  app: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  },
  db: {
    connectionString: process.env.DATABASE_CONNECTION_STRING!,
  },
});

export default config;
