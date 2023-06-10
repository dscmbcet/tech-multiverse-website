import { useState } from 'react';
import './Verticals.css'

function Verticals() {
  const [imageSrc1, setImageSrc1] = useState('/door1.png');
  const [imageSrc2, setImageSrc2] = useState('/door2.png');
  const [imageSrc3, setImageSrc3] = useState('/door3.png');

  const handleClick1 = () => {
    // Update the image source to the new image
    setImageSrc1('/door4.png');
  };

  const handleClick2 = () => {
    // Update the image source to the new image
    setImageSrc2('/door5.png');
  };

  const handleClick3 = () => {
    // Update the image source to the new image
    setImageSrc3('/door6.png');
  };
  return (
    <div className='verticals-pg'> 
       
        <h1 className='verticals-title'>bootcamp <br/>verticals</h1>
        
        <div className='verticals-content'>click the doors to find out !</div>
        <div className='verticals-doors'>
            <img src={imageSrc1} className='door1' onClick={handleClick1}/>
            <img src={imageSrc2} className='door2' onClick={handleClick2}/>
            <img src={imageSrc3} className='door3' onClick={handleClick3}/>
        </div>
    </div>
  )
}

export default Verticals
