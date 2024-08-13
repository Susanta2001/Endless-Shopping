import './App.css';
import React, {useState} from 'react'
import Navbar from './component/Navbar';
import Products from './component/Products';

function App() {

  const [cardData, setCardData] = useState ([]);

  const handleAddToCartClick = (image,name,price)=>{
    let newItem = {
        image,
        name,
        price
    };
    setCardData (prevData => [...prevData,newItem]);
}

const handleProductDeleteClick = (index) => {
  setCardData(prevData => prevData.filter((_, i) => i !== index));
};

  return (
    <>
      <Navbar cardData={cardData} handleProductDeleteClick={handleProductDeleteClick}/>
      <Products handleAddToCartClick={handleAddToCartClick} />
    </>
  );
}

export default App;
