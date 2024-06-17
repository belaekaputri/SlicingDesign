import icon from "../images/icon.png";
import telepon from '../images/telepon.png';
import { useState } from "react";
import PulsDropDown from "./PulsDropDown";
import PktDropDown from "./PktDropDown";

function Tagihan(){
  const[selected,setSelected]=useState("10.000");
  const[show,setShow]=useState(true);
  const[show2,setShow2]=useState(false);
  const onShowClick = (e) => {
    e.preventDefault();
    if(show==true){
      setShow(false);
    }else setShow(true);
  };
  const onShowClick2 = (e) => {
    e.preventDefault();
    if(show2==false){
      setShow2(true);
    }else setShow2(false);
  };
  const[std,setStd]=useState("Paket Seminggu - 20.000");
    return(
        <div className="inTagihan">
          <div className="h3Tag">
          <h3 style={{fontWeight:"500",fontSize:"22px",color:"#19191B", padding:"10px",display:"flex",justifyContent:"flex-start"}}>Top Up dan Tagihan</h3>
          </div>
           <div className="desTagihan">
             <ul>
                <li><a href="#" className="active navLink" onClick={onShowClick} 
                >Pulsa</a></li>
                <li><a href="#" className="navLink" onClick={onShowClick2} >Paket Data</a></li>
                <li><a href="#" className="navLink">Listrik PLN</a></li>
                <li><a href="#"className="navLink" >Uang Elektronik</a></li>
                <li><a href="#" className="navLink">Air PDAM</a></li>
                <li><a href="#" className="navLink"><img src={icon} alt="" style={{width:"24px",height:"24px"}} /></a></li>
            </ul>
           </div>
           <hr style={{width:"1016px", height: "1px",border: "0",borderTop:" 1px solid #AFB1B6"}}/>
           {show && 
           <div className="entrTopPul">
          
               <div className="entPul">
                <img src={telepon} alt="z" style={{width:"24px",height:"24px"}}/>
                <input type="text" />
               </div>
                <PulsDropDown selected={selected} setSelected={setSelected}/>
                <button>Beli</button>
           </div>
} 
{show2 && 
           <div className="entrTopPul">
           
           <div className="entPul">
                <img src={telepon} alt="z" style={{width:"24px",height:"24px"}}/>
                <input type="text" />
                </div>
                <PktDropDown std={std} setStd={setStd}/>
                <button>Beli</button>
        </div>
}
        </div>
    )
    
    }
    export default Tagihan