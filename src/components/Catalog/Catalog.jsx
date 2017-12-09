import React from 'react';
import './Catalog.css'

const Catalog = (props) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>SKU</th>
                <th>Description</th>
            </tr>
                {props.products.map((product, idx) => <tr key={idx}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.sku}</td>
                <td>{product.description}<button onClick={props.addItem}>+</button></td>

                </tr>)}
            </tbody>
        </table>
    )
}

export default Catalog