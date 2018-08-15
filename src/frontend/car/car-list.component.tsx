import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';

import { CarDetail } from './car-detail.component';

interface CarListParameters {
    makeName: string;
}

type Props = RouteComponentProps<CarListParameters>;

interface Car {
    id: string;
    makeName: string;
    modelName: string;
    price: number;
}

interface State {
    cars: Car[]; 
    loading: boolean;
    error?: string;
}

export class CarListComponent extends React.Component<Props, State> {
    state: State = {
        cars: [],
        loading: false
    };
    
    componentDidMount() {
        this.fetchCars();
    } 

    private fetchCars() {
        this.setState({ loading: true });
        axios.get(`http://localhost:3010/cars/${this.props.match.params.makeName}`)
            .then(res => {
                this.setState({ cars: res.data, loading: false });
            })
            .catch(err => {
                this.setState({ error: err.message, loading: false  });
            });
    }

    public render() {
        const { cars, loading, error } = this.state;

        if (!!error) {
            return <div className="error">{ error }</div>
        }

        if (loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="car-list">
                <h2>{this.props.match.params.makeName.toUpperCase()}</h2>
                <div className="car-list__details">
                    {cars.map(car => (
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