import { useState } from 'react'
import gbr from '../images/gbr.jpg';
import at from '../images/atas.jpg';
import bw from '../images/bwh.jpg';

// eslint-disable-next-line react/prop-types
function Dropdown({selected,setSelected}) {
  const[isActive,setIsActive] = useState(false)
  const options =['Bahasa Indonesia','English'];
  return (
   <div className="dropdown">
      <div className='dropdown-btn' onClick={()=>
        setIsActive(!isActive)}> <div className='icnL'> <img src={gbr} alt="" style={{marginRight:'6px'}}/> {selected}</div>
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

export default Dropdown
