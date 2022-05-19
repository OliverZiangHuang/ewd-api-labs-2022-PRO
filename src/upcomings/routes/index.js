import express from 'express';
import UpcomingsController from '../controllers';
import AccountsController from '../../accounts/controllers'; //ADD THIS: imports accounts controller

const createUpcomingsRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const upcomingsController = UpcomingsController(dependencies);
    const accountsController = AccountsController(dependencies);//ADD THIS: Create accountsController with dependencies

    router.route('/*')
    .all(accountsController.verifyToken); //ADD THIS: require token for all routes


    router.route('/:id')
        .get(upcomingsController.getMovie);

    router.route('/upcomings')
        .get(upcomingsController.getUpcomingMovie);

    router.route('/')
        .get(upcomingsController.find);

    return router;
};
export default createUpcomingsRouter;