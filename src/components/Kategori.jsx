import j1 from '../images/j1.jpg';
import j2 from '../images/j2.jpg';
import j3 from '../images/j3.jpg';
import j4 from '../images/j4.jpg';
import j5 from '../images/j5.jpg';
import j6 from '../images/j6.jpg';
import j7 from '../images/j7.jpg';
import j8 from '../images/j8.jpg';
import j9 from '../images/j9.jpg';
import j10 from '../images/j10.jpg';
import j11 from '../images/j11.jpg';
import j12 from '../images/j12.jpg';
function Kategori(){
return(
    <div className="indKate">
        <h4 style={{padding:"20px",fontWeight:"500",fontSize:"22px"}}>Kategori</h4>
        <div className="jnsKate">
           <div className="ktk ktk1">
            <img src={j1} alt="" />
            <h5>Tas</h5>
           </div>
           <div className="ktk ktk2">
            <img src={j2}  alt="" />
           <h5>Pakaian Wanita</h5>
           </div>
           <div className="ktk ktk3">
           <img src={j3} alt="" />
           <h5>Pakaian Pria</h5>
           </div>
           <div className="ktk ktk4">
           <img src={j4} alt="" />
           <h5>Sepatu Wanita</h5>
           </div>
           <div className="ktk ktk5">
           <img src={j5} alt="" />
           <h5>Sepatu Pria</h5>
           </div>
           <div className="ktk ktk6">
           <img src={j6} alt="" />
           <h5>Hobi</h5>
           </div>
           <div className="ktk ktk7">
           <img src={j7} alt="" />
           <h5>Makanan dan<br></br> Minuman</h5>
           </div>
           <div className="ktk ktk8">
           <img src={j8} alt="" />
           <h5>Perlengkapan<br></br> Rumah</h5>
           </div>
           <div className="ktk ktk9">
           <img src={j9} alt="" />
           <h5>Komputer dan<br></br> Aksesoris</h5>
           </div>
           <div className="ktk ktk10">
           <img src={j10} alt="" />
           <h5>Ibu dan Anak</h5>
           </div>
           <div className="ktk ktk11">
           <img src={j11} alt="" />
           <h5>Perawatan dan<br></br> Kecantikan</h5>
            </div>
            <div className="ktk ktk12">
            <img src={j12} alt="" />
            <h5>Kesehatan</h5>
            </div>
            
        </div>
    </div>
)
}
export default Kategori;