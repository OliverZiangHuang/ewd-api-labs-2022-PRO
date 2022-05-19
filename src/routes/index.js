import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers'; //ADD THIS: imports accounts controller

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);//ADD THIS: Create accountsController with dependencies

    router.route('/*')
    .all(accountsController.verifyToken); //ADD THIS: require token for all routes


    router.route('/:id')
        .get(moviesController.getMovie);

    router.route('/upcoming')
        .get(moviesController.getUpcomingMovie);

    router.route('/')
        .get(moviesController.find);

    return router;
};
export default createMoviesRouter;