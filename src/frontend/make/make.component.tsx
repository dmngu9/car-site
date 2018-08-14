import * as React from 'react';
import {Make} from './make';

interface ComponentProps {
    make: Make;
}

export class MakeComponent extends React.Component<ComponentProps, {}> {
    public render() {
        return (
            <a href={'/cars/' + this.props.make.name.toLowerCase()}>
                {this.props.make.name}
            </a>
        );
    }
}