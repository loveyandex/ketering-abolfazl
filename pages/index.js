import React , { useState, useEffect } from 'react';
import Product from '../component/Product'
import Link from 'next/link'
const data = [{ name: "چلو جوجه کباب بدون استخوان (فیله)", price: "12000T", imgsrc: "/tjgfvviirl-32648-reduced--jpg.jpeg", descr: "یک سیخ جوجه بدون استخوان زعفرانی 270 گرمی. 330 گرم برنج ایرانی، دورچین: گوجه کبابی. نارنج. کره" },
{ name: "چلو خورشت قیمه سیب زمینی", price: "12000T", imgsrc: "/UNIKTVAL-LOGO.png", descr: "400 گرم ران مرغ، 330 گرم زرشک پلو با برنج ایرانی، برن" },
{ name: "زرشک پلو با مرغ مجلسی", price: "76566T", imgsrc: "/UNIKTVAL-LOGO.png", descr: "400 گرم ران مرغ، 330 گرم زرشک پلو با برنج ایرانی، برن" },
{ name: "چلو اکبر جوجه", price: "545T", imgsrc: "/UNIKTVAL-LOGO.png", descr: "400 گرم ران مرغ، 330 گرم زرشک پلو با برنج ایرانی، برن" }];


function showprods() {
  let cards0 = [];


  for (var i = 0; i < data.length; i++) {
    cards0.push(
      <Link href="/product/[name]" as={"/product/" + data[i].name.replace(/ /g, "-")}  >
        <a>

          <Product name={data[i].name} price={data[i].price} imgsrc={data[i].imgsrc} descr={data[i].descr} />
        </a>
      </Link>
    );
  }
  return cards0;
}




export default function Home() {

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));

  });



  return (
    <>



      <div style={{ textAlign: "center" }}>
        {showprods()}
      </div>




    </>
  )
}
