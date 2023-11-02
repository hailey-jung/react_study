import React from 'react';
import ReactDOM from 'react-dom/client';

const product = 'MacBook';
const model = 'Air';
const item = product + model;
const imageUrl =
'https://reviewed-com-res.cloudinary.com/image/fetch/s--pM3BRbA_--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_668,q_auto,w_1187/https://reviewed-production.s3.amazonaws.com/1607081088000/DSC_0877.jpg'

  function handleClick() {
    alert('곧 도착합니다!');
  }

  function Hello () {
    return <h1>안녕 리액트</h1>;
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>나만의 {item} 주문하기</h1>
  <img src={imageUrl} alt ="제품 사진"/>
  <button onClcik ={handleClick}>확인</button>
  </>
  
);