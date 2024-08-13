import React from 'react';
import PropTypes from 'prop-types'
import Items from './Items';
import ProductImages from './ProductImages';


function Products(props) {
    const prices = ['$2000', '$150', '$80'];
    const names = ['Laptop', 'Watch','Shoe'];
    const images = ProductImages();

    return (
        <div className="container my-3">
            <div className="row">
                {prices.map((price, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-3">
                        <Items 
                        price={price} 
                        name={names[index]} 
                        dimages = {images[index]} 
                        handleAddToCartClick={props.handleAddToCartClick} />
                    </div>
                ))}
            </div>
        </div>
    );
}
Products.propTypes = {handleAddToCartClick: PropTypes.func}
export default Products;
