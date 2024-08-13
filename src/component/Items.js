import React from 'react';
import PropTypes from 'prop-types'

function Items(props) {
    return (
        <div className="card" style={{ width: '75%' }}>
            <img src={props.dimages} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h3 className="card-text productPrice">{props.name}</h3>
                <p className="card-text productPrice">{props.price}</p>
                <button className='btn btn-success btn-sm'onClick={()=>props.handleAddToCartClick(props.dimages, props.name, props.price)}>Add to cart</button>
            </div>
        </div>
    );
}
Items.propTypes = {
    price: PropTypes.string,
    name: PropTypes.string,
    dimages: PropTypes.string,
    handleAddToCartClick: PropTypes.func};
export default Items;
