import {expect} from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import {Car} from './car';
import {CarService} from './car.service';

describe('Car Service', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('when the getAll method is called', () => {
        it('should return all the cars from the databse', () => {
            const expectedOutput: Car[] = [
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

            const getAllOutput = CarService.getAll();

            expect(getAllOutput).to.deep.equal(expectedOutput);
        });
    });
});