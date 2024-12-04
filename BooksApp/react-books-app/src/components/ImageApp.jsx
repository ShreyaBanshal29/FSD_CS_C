import React ,{useState}from 'react'
import pic from '../images/in2.jpg';
import './ImageApp.css';

const ImageApp = () => {
    const [width,setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [rotation, setRotation] = useState(0);
  return (
    <div className='disp'>
    <div className='img'>
        <img src={pic} alt="image" style={{
            width : width,
            height : height,
            transform : `rotate(${rotation}deg)`,}
        }></img>
    </div>
    <div className='panel'>
    <button onClick={()=>{
        setHeight(height+10);
    }}>Increase height</button>

    <button onClick={()=>{
        setHeight(height-10);
    }}>Decrease height</button>

    <button onClick={()=>{
        setWidth(width+10);
    }}>Increase width</button>

    <button onClick={()=>{
        setWidth(width-10);
    }}>Decrease width</button>

    <button onClick={()=>{
        setRotation(rotation+10);
    }}>Rotate Clockwise</button>

    <button onClick={()=>{
        setRotation(rotation-10);
    }}>Rotate AntiClockwise</button>
    </div></div>
  )
}

export default ImageApp