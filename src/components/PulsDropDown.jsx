import { useState } from 'react'
import at from '../images/atas.jpg';
import bw from '../images/bwh.jpg';

// eslint-disable-next-line react/prop-types
function PulsDropDown({selected,setSelected}) {
  const[isActive,setIsActive] = useState(false)
  const options =["10.000","20.000","50.000","10.0000"];
  return (
   <div className="dropdownPaket">
      <div className='dropdown-btn' onClick={()=>
        setIsActive(!isActive)}> <div className='icnL'> {selected}</div>
      {!isActive ?(<span><img src={at} alt="tes"  /></span>):(<span><img src={bw} alt="tes"  /></span>)}
      </div>
      {isActive && (
      <div className="dropdown-content">
        {options.map((option ,index)=>(
       
          <div className="dropdown-item" onClick={() =>{
            setSelected(option)
            setIsActive(false)  
             }} key={index}>{option}
          </div>
        ))}
      </div>
      )}
   </div>
  )
}

export default PulsDropDown
