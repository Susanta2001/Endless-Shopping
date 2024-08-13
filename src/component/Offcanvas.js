import React from 'react'
import PropTypes from 'prop-types'

function Offcanvas(props) {
    return (
        <>
            

            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {props.cardData === 0 ? "No items added to Cart" :
                    props.cardData.map((item, index)=>(
                        <div key={index} className='container d-flex align-items-center justify-content-between' style={{borderBottom:'2px solid red'}}>
                            <div className="imageBox">
                            <img src={item.image} alt={item.name} style={{width: '40px', height:'40px', objectFit:'cover'}} />
                            </div>
                            <div className="detailsBox">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            </div>
                            <div className="manipulationBox">
                            <span class="material-symbols-outlined" style={{}} onClick={()=>props.handleProductDeleteClick(index)}>delete</span>
                            </div>
                        </div>
                    ))
                    }
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
Offcanvas.propsType = {cardData: PropTypes.array,
    handleProductDeleteClick: PropTypes.func
};
export default Offcanvas
