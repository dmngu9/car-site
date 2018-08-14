import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CarListParameters {
    makeName: string
}

export class CarListComponent extends React.Component<RouteComponentProps<CarListParameters>, {}> {
    public render() {
        return (
            <div className='car-list'>
                <h2>{this.props.match.params.makeName}</h2>
            </div>
        );
    }
}