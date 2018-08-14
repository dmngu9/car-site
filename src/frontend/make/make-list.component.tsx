import * as React from 'react';
import {Make} from './make';
import {MakeComponent} from './make.component';

interface ComponentState {
    makes: Make[];
    loading: boolean;
}

export class MakeListComponent extends React.Component<{}, ComponentState> {
    constructor() {
        super({});

        this.state = {
            makes: [],
            loading: true
        };

        this.getMakes();
    }

    public render() {
        if (this.state.loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className='make-list'>
                {this.state.makes.map((make) => <MakeComponent make={make}/>)}
            </div>
        );
    }

    private getMakes() {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.setState({
                    makes: JSON.parse(xhttp.responseText),
                    loading: false
                })
            }
        };

        xhttp.open("GET", "//localhost:3010/makes", true);
        xhttp.send();
    }
}