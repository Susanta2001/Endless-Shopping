import React from 'react'
import PropTypes from 'prop-types'
import Offcanvas from './Offcanvas'
function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Endless Shopping</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center ms-auto">
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </button>
                    </div>
                </div>
            </nav>
            <Offcanvas cardData={props.cardData} handleProductDeleteClick={props.handleProductDeleteClick} />
        </>
    )
}
Navbar.propTypes = {
    cardData: PropTypes.array,
    handleProductDeleteClick: PropTypes.func
}
export default Navbar
