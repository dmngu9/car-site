import {Car} from './car';

export class CarService {
    // This is our mock database :)
    private static readonly cars: Car[] = [
        {
            id: '1',
            makeName: 'Ford',
            modelName: 'Focus',
            price: 23900
        },
        {
            id: '2',
            makeName: 'Ford',
            modelName: 'Fiesta',
            price: 13450
        },
        {
            id: '3',
            makeName: 'Holden',
            modelName: 'Astra',
            price: 21750
        },
        {
            id: '4',
            makeName: 'BMW',
            modelName: '5',
            price: 41490
        },
        {
            id: '5',
            makeName: 'Tesla',
            modelName: 'Model X',
            price: 60300
        },
        {
            id: '6',
            makeName: 'Honda',
            modelName: 'Civic',
            price: 17000
        },
        {
            id: '7',
            makeName: 'Ford',
            modelName: 'Mustang',
            price: 33450
        }
    ];

    public static getAll() {
        return this.cars;
    }
}