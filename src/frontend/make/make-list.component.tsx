import * as React from 'react';
import axios from 'axios';

import { Make } from './make';
import { MakeComponent } from './make.component';

interface ComponentState {
    makes: Make[];
    loading: boolean;
    error?: string;
}

export class MakeListComponent extends React.Component<{}, ComponentState> {
    state: ComponentState = {
        makes: [],
        loading: false
    }

    componentDidMount() {
        this.getMakes();
    }

    public render() {
        const { makes, loading, error } = this.state;

        if (!!error) {
            return <div className="make-list error">{ error }</div>
        }

        if (loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className='make-list'>
                {makes.map((make) => <MakeComponent make={make}/>)}
            </div>
        );
    }

    private getMakes() {
        this.setState({ loading: true });
        axios.get('http://localhost:3010/makes')
            .then(res => {
                this.setState({
                    makes: res.data,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ loading: false, error: err.message })
            });
    }
}