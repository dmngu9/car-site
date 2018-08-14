import 'mocha';
import * as sinon from 'sinon';
import {MakeController} from './make.controller';
import {MakeService} from './make.service';

describe('Make Controller', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('when the getMakes method is called', () => {
        it('should return all makes from the makeService', () => {
            const getAllResponse = 'makes';
            const carServiceStub = sandbox.stub(MakeService, 'getAll').returns(getAllResponse);
            const sendSpy = sandbox.spy();
            const res = {
                send: sendSpy
            };

            MakeController.getMakes({} as any, res as any);

            sinon.assert.calledWith(carServiceStub);
            sinon.assert.calledWith(sendSpy, getAllResponse);
        });
    });
});