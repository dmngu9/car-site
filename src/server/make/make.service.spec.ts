import {expect} from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import {Make} from './make';
import {MakeService} from './make.service';

describe('Make Service', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('when the getAll method is called', () => {
        it('should return all the makes from the databse', () => {
            const expectedOutput: Make[] = [
                {
                    id: '1',
                    name: 'Ford'
                },
                {
                    id: '2',
                    name: 'Holden'
                },
                {
                    id: '3',
                    name: 'BMW'
                },
                {
                    id: '4',
                    name: 'Tesla'
                },
                {
                    id: '5',
                    name: 'Honda'
                }
            ];

            const getAllOutput = MakeService.getAll();

            expect(getAllOutput).to.deep.equal(expectedOutput);
        });
    });
});