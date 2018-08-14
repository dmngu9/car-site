import {Request, Response} from 'express';
import {CarService} from './car.service';

export class CarController {
    public static getCars(req: Request, res: Response) {
        const cars = CarService.getAll();
        res.send(cars);
    }

    public static getByMakeName(req: Request, res: Response) {
        const makeName = req.params.makeName;
        const cars = 
            CarService
                .getAll()
                .filter(car => car.makeName === makeName)
                .sort((carA, carB) => carA.price - carB.price);
                
        res.status(200).json(cars);
    }
}