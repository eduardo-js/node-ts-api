import 'dotenv/config';
import app from './app';
import config from './config';
import prisma from './repository/Prisma';

const main = async () => {
  try {
    await prisma.$connect();
    await prisma.$disconnect();
    app.listen(config.app.port);
    console.log(`Server is running on port ${config.app.port || 3000}`);
  } catch (error) {
    console.info(error);
  }
};

void main();
