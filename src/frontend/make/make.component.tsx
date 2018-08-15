import * as React from 'react';
import { Link } from 'react-router-dom';

import { Make } from './make';

interface ComponentProps {
    make: Make;
}

export class MakeComponent extends React.Component<ComponentProps, {}> {
    public render() {
        return (
            <Link to={'/cars/' + this.props.make.name.toLowerCase()}>
                {this.props.make.name}
            </Link>
        );
    }
}