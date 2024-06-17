// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import logo from '../images/logo.jpg';
import keranjang from '../images/keranjang.png';
function Header(){
    const[selected,setSelected]=useState("Bahasa Indonesia");
return(
    <div className="topHdr">
<div className='hdr'>
         <LanguageDropdown  selected={selected} setSelected={setSelected}/>
         <button className='btn-masuk'>Masuk</button>
         <button className='btn-daftar'>Daftar</button>
</div>
<div className="hdrBtm">
    <img src={logo} alt="" className='lg' />
    <div className="iSearch">
        <input type="text"  placeholder='Cari di idshop' className='inputSeearch'/>
        <button className='btn-cari'>Cari</button>
        <div className="icKeranjang">
        <img src={keranjang} alt="" />
        </div>
    </div>
</div>
   </div>

);
}

export default Header