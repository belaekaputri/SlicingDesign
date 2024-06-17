import d1 from '../images/d1.jpg';
import d2 from '../images/d2.jpg';
function BannerDiskon(){
return(
    <div className="indBan">
        <div className="deDis1">
            <img src={d2} alt="" />
            <div className="cardDis1">
                <h2 style={{fontSize:"48px",fontWeight:"400"}}>PAY DAY SALE!!</h2>
                <p  style={{fontSize:"22px", fontWeight:"500"}} >Nikmati promo spekatuler <span style={{color:"#0A91AB"}}>idshop</span> setiap tanggal 25!</p>
                <button className='btn-dis1' style={{fontSize:"16px",height:"56px",backgroundColor:"#0A91AB", color:"white",border:"none",borderRadius:"10px",fontWeight:"500"}} >Ikuti Event</button>
         </div>
    </div>
        <div className="deDis2">
            <img src={d1} alt="" />
            <div className="cardDis2">
            <h2  style={{fontSize:"48px",color:"#FFC045",fontWeight:"400"}}>GRATIS ONGKIR 50%</h2>
            <p style={{fontSize:"22px",color:"white", fontWeight:"500"}}>Klaim Voucher gratis ongkos kirim kamu.</p>
            <button className='btn-dis2' style={{fontSize:"16px",height:"56px",backgroundColor:"#FFC045", color:"white",border:"none",borderRadius:"10px",fontWeight:"500"}}>Klaim Voucher</button>
        </div>
    </div>
    </div>
)
}

export default BannerDiskon