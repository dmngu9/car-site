import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { CarDetail } from './car-detail.component';

interface CarListParameters {
    makeName: string
}

type Props = RouteComponentProps<CarListParameters>;

interface Car {
    id: string;
    makeName: string;
    modelName: string;
    price: number;
}

interface State {
    cars?: Car[]; 
}

export class CarListComponent extends React.Component<Props, State> {
    state: State = {};
    
    componentDidMount() {
        this.fetchCars();
    } 
    
    componentDidUpdate(prevProps: Props) {
        if (prevProps.match.params.makeName !== this.props.match.params.makeName) {
            this.fetchCars();
        }
    }

    private fetchCars() {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.setState({ cars: JSON.parse(xhttp.responseText) });
            }
        };

        xhttp.open("GET", `//localhost:3010/cars/${this.props.match.params.makeName.toLowerCase()}`, true);
        xhttp.send();
    }

    public render() {
        const { cars } = this.state;

        return (
            <div className='car-list'>
                <h2>{this.props.match.params.makeName.toUpperCase()}</h2>
                <div>
                    {!!cars && cars.map(car => (
                        <CarDetail
                            key={car.id}
                            makeName={car.makeName}
                            modelName={car.modelName}
                            price={car.price}
                        />
                    ))}
                </div>
            </div>
        );
    }
}