import * as React from 'react';

interface Props {
    makeName: string;
    modelName: string;
    price: number;
}

const CarDetail: React.StatelessComponent<Props> = ({ makeName, modelName, price }) => (
    <div className="car-detail">
        <div className="car-detail__description">
            <h4>{ modelName }</h4>
            <h4 className="car-detail__description--make">{ makeName }</h4>
        </div>
        <p>&#x24;{ price } drive away</p>
    </div>
);

export { CarDetail };