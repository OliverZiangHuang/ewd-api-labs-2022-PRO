import ValidationController from '../controllers/ValidationController'; //add to import statements at top of file
import express from 'express';
import AccountsController from '../controllers';

const createRouter = (dependencies) => {
    const router = express.Router();
//    const javascriptrouter = express.Javascriptrouter();

const validationController = ValidationController(dependencies);//Add this lineLoad validation controller with dependencies

    // load controller with dependencies
const accountsController = AccountsController(dependencies);

    router.route('/')
        .post(validationController.validateAccount,accountsController.createAccount); //add validateAccount to route

    router.route('/')
        .post(accountsController.createAccount);

        router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);

    router.route('/:id')
        .post(accountsController.getAccount);

    router.route('/:id')
        .post(accountsController.updateAccount);


    return router;
};
export default createRouter;