import di1 from '../images/di1.png';
import di2 from '../images/di2.png';
import di3 from '../images/di3.png';
import di4 from '../images/di4.png';
import di5 from '../images/di5.png';
import di6 from '../images/di6.png';
function Card(){
return(
    <div className="inRenCus">
        <div className="inRenCusDet">
        <div className="  crd d cr2 " style={{position:"relative"}}>
                  <span className='dis' style={{position:"absolute",top:"5px",right:"0px"}}>-50%</span>
                   <img src={di1} alt="" />
                   <p className='jdl'>Note Book</p>
                    <p className='hg'>Rp80.837</p>
                   
                 </div>
                
                 <div className="  crd d cr2 " style={{position:"relative"}}>
                  <span className='dis' style={{position:"absolute",top:"5px",right:"0px"}}>-20%</span>
                   <img src={di2} alt="" />
                   <p className='jdl'>Sepatu</p>
                    <p className='hg'>Rp80.837</p>
                    
                 </div>
                 <div className=" crd d cr3 " style={{position:"relative"}}>
                 <span className='dis' style={{position:"absolute",top:"5px",right:"0px"}}>-70%</span>
                   <img src={di3} alt="" />
                   <p className='jdl'>Jaket</p>
                   <p className='hg'>RP54.829</p>
                   
                 </div>
                 <div className=" crd d cr4" style={{position:"relative"}}>
                 <span className='dis' style={{position:"absolute",top:"5px",right:"0px"}} >-10%</span>
                   <img src={di4} alt="" />
                   <p className='jdl'>Sendal</p>
                   <p className='hg'>RP83.092</p>
                   
                 </div>
                 <div className=" crd d cr5" style={{position:"relative"}}>
                 <span className='dis' style={{position:"absolute",top:"5px",right:"0px"}}>-60%</span>
                   <img src={di5} alt="" />
                   <p className='jdl'>Peralatan Dapur</p>
                   <p className='hg'>Rp50.568</p>
                   
                 </div>
                 <div className=" crd d cr6" style={{position:"relative"}}>
                 <span className='dis'  style={{position:"absolute",top:"5px",right:"0px"}}>-70%</span>
                   <img src={di6}alt="" />
                   <p className='jdl'>Case</p>
                   <p className='hg'>Rp93.002</p>
                  
                 </div>
        </div>
    </div>
   

)
}

export default Card