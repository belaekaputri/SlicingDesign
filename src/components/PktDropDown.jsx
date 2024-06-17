import { useState } from 'react'
import at from '../images/atas.jpg';
import bw from '../images/bwh.jpg';

// eslint-disable-next-line react/prop-types
function PktDropDown({std,setStd}) {
  const[isActive,setIsActive] = useState(false)
  const options =[
   "Paket Seminggu - 20.000",
   "Paket Bulanan - 50.000",
   "Paket Bulanan OMG - 78.000",
   "Paket Berkah - 54.000"
];
  return (
   <div className="dropdownPaket">
      <div className='dropdown-btn' onClick={()=>
        setIsActive(!isActive)}> <div className='icnL'> {std}</div>
      {!isActive ?(<span><img src={at} alt="tes"  /></span>):(<span><img src={bw} alt="tes"  /></span>)}
      </div>
      {isActive && (
      <div className="dropdown-content">
        {options.map((option ,index)=>(
       
          <div className="dropdown-item" onClick={() =>{
            setStd(option)
            setIsActive(false)  
             }} key={index}>{option}
          </div>
        ))}
      </div>
      )}
   </div>
  )
}

export default PktDropDown
