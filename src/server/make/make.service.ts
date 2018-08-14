import {Make} from './make';

export class MakeService {
    // This is our mock database :)
    private static readonly makes: Make[] = [
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

    public static getAll() {
        return this.makes;
    }
}