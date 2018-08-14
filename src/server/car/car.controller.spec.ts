import 'mocha';
import * as sinon from 'sinon';
import {CarController} from './car.controller';
import {CarService} from './car.service';

describe('Car Controller', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('when the getCars method is called', () => {
        it('should return all cars from the carService', () => {
            const getAllResponse = 'cars';
            const carServiceStub = sandbox.stub(CarService, 'getAll').returns(getAllResponse);
            const sendSpy = sandbox.spy();
            const res = {
                send: sendSpy
            };

            CarController.getCars({} as any, res as any);

            sinon.assert.calledWith(carServiceStub);
            sinon.assert.calledWith(sendSpy, getAllResponse);
        });
    });
});