import 'reflect-metadata';
import 'dotenv/config';
import App from './app';
import container from './shared/container';
import config from './config';

const main = () => {
  try {
    container.resolve(App).app.listen(config.app.port || 3000);
    console.log(`Server is running on port ${config.app.port || 3000}`);
  } catch (error) {
    console.info(error);
  }
};

void main();
