import gog from '../images/gog.png';
import paySecu from '../images/paySecu.png';
import gopay from '../images/gopay.png';
import kr from '../images/kr.png';
import social from '../images/social.png';

function Footer(){
return(
    <div className="topFtr">  
        <div className="jCon">
            <div className="ps">
                <div className="jelajah">
                    <h3 style={{paddingBottom:"10px",paddingLeft:"5px"}}>Layanan Pelanggan</h3>
                    <p>Pusat Bantuan</p>
                    <hr />
                    <p>Cara Pembelian</p>
                    <hr />
                    <p>Pengiriman</p>
                    <hr />
                    <p>Pengembalian Barang dan Dana</p>
                    <hr />
                    <p>Metode Pembayaran</p>
                    <hr />
                    <p>Hubungi Kami</p>
                    <hr />
                </div>
                 <div className="about">
                    <h3 style={{paddingBottom:"10px" ,paddingLeft:"5px"}}>Jelajahi idshop</h3>
    
                    <p>Tentang Kami</p>
                    <hr />
                    <p>Kebijakan Privasi</p>
                    <hr />
                    <p>Karir</p>
                    <hr />
                    <p>Blog</p>
                    <hr />
                    <p>Id Shop Security</p>
                    <hr />
                    <p>Id Mall</p>
                    <hr />
                </div>
      </div>
      <div className="unduh">
                <h3 style={{marginTop:"-5px",color:"#000",fontWeight:"500",fontSize:"16px"}}>Unduh Aplikasi</h3>
                   <img src={gog} alt="" style={{width:"111px",height:"150px", backgroundSize:"cover"}} />
              </div>
    </div>
      <div className="metodePem" style={{marginBottom:"10px"}}>
         <h3 style={{fontWeight:"500",fontSize:"16px"}}>Metode Pembayaran</h3>
         <img src={gopay} alt="" style={{width:"658px",height:"33px",marginTop:"9px"}}/>
      </div>
      <div className="jasaPeng"  style={{marginBottom:"10px"}}>
      <h3 style={{fontWeight:"500",fontSize:"16px"}}>Jasa Pengiriman</h3>
      <img src={kr} style={{width:"362px",height:"33px",marginTop:"9px"}} />
      </div>
      <div className="keamPri" style={{marginBottom:"10px"}}>
        <h3 style={{fontWeight:"500",fontSize:"16px"}}>Keamanan dan Privasi</h3>
        <img src={paySecu} alt="" style={{width:"140px",height:"33px",marginTop:"9px"}}/>
      </div>
      <hr style={{ width:"1048px"}}/>
      <div className="btF">
         <div className="de1">
          <p>&copy; idshop 2024, Hak Cipta Dilindungi </p>
         </div>
         <div className="de2">
              <p style={{paddingBottom:"8px"}}>Ikuti Kami</p>
              <img src={social} alt="" style={{width:"157px",height:"30px"}}/>
              
            </div>
      </div>
 </div>
)
}

export default Footer