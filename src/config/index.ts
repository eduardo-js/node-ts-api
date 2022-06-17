const config = Object.freeze({
  app: {
    port: parseInt(process.env.PORT!, 10),
  },
  db: {
    connectionString: process.env.DATABASE_CONNECTION_STRING!,
  },
});

export default config;
