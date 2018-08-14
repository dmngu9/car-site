import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {CarListComponent} from './car/car-list.component';
import {MakeListComponent} from './make/make-list.component';

export class AppComponent extends React.Component<{}, {}> {
    public render() {
        return (
            <div className='wrapper'>
                <h1><span>Cars World</span></h1>

                <div className='content'>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/cars/:makeName' component={CarListComponent}/>
                            <Redirect to='/cars/ford' />
                        </Switch>
                    </BrowserRouter>

                    <MakeListComponent/>
                </div>
            </div>
        );
    }
}