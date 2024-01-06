import express from 'express';
import cors from 'cors';
import { DataSource } from "typeorm";

import { Character } from './entity/gameEntities/Character';
import { Ban } from './entity/gameEntities/Ban'; 
import { Inventory } from './entity/gameEntities/Inventory'; 
import { Whitelist } from './entity/gameEntities/Whitelist'; 
import { User } from './entity/gameEntities/Users'; 
import { Horse } from './entity/gameEntities/Horse'; 
import { Wagon } from './entity/gameEntities/Wagon'; 

import charactersRouter from './routes/gameRoutes/R_characters';
import usersRouter from './routes/gameRoutes/R_users';
import w_usersRouter from './routes/webRoutes/R_users';
import bansRouter from './routes/gameRoutes/R_bans';
import inventoryRouter from './routes/gameRoutes/R_inventory';
import whitelistRouter from './routes/gameRoutes/R_whitelist';
import horsesRouter from './routes/gameRoutes/R_horses';
import wagonsRouter from './routes/gameRoutes/R_wagons'; 
import W_Users from './entity/webEntities/Users';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: undefined,
    database: "mt_rd",
    entities: [Character, Ban, Inventory, Whitelist, User, Horse, Wagon], 
    synchronize: true,
});

export const WebDBDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: undefined,
  database: "webdb",
  entities: [W_Users], 
  synchronize: true,
});

function initializeDataSources() {
  return Promise.all([
    AppDataSource.initialize(),
    WebDBDataSource.initialize(),
  ]);
}

initializeDataSources().then(() => {
  console.log("Data Source has been initialized!");

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/w_users', w_usersRouter);
  app.use('/characters', charactersRouter);
  app.use('/users', usersRouter);
  app.use('/bans', bansRouter);
  app.use('/inventory', inventoryRouter);
  app.use('/whitelist', whitelistRouter);
  app.use('/mtrd_horses', horsesRouter);
  app.use('/mtrd_wagons', wagonsRouter); 

  const PORT = 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => console.log(error));
