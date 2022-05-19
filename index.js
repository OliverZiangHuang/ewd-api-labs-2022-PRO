import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './src/movies';
import upcomingsRouter from './src/movies'
import genresRouter from './src/genres';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from "./src/config/dependencies";
import createMoviesRouter from './src/movies/routes';
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';


dotenv.config();
db.init(); //add BELOW dotenv.config();

const app = express();
const port = 8080;
const dependencies = buildDependencies();

app.use(errorHandler);

app.use(express.json());


app.use('/api/movies', moviesRouter);
app.use('/api/upcomings', upcomingsRouter);
app.use('/api/genres', genresRouter);
app.use('/api/accounts', createAccountsRouter(dependencies));
app.use('/api/movies', createMoviesRouter(dependencies));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});//.. Add this after db.init();



 
