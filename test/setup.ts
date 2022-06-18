import dotenv from 'dotenv';
import 'reflect-metadata';

export default () => dotenv.config({path: './test/.test.env'});
