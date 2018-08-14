import * as bodyParser from 'body-parser';
import * as express from 'express';
import {CarController} from './car/car.controller';
import {MakeController} from './make/make.controller';

const routes = express.Router();
const app = express();

routes.get('/makes', MakeController.getMakes);
routes.get('/cars', CarController.getCars);
routes.get('/cars/:makeName', CarController.getByMakeName);

app.use(bodyParser.json());
app.use(routes);

app.listen(3010, () => {
    console.log('app started on port 3010');
});