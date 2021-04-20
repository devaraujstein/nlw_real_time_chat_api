import "reflect-metadata";
import "express-async-errors";
import "@shared/container";

import express from "express";
import { routes } from './routes';

import "../typeorm";

const app = express();

app.use(express.json());

app.use(routes);

export { app }
