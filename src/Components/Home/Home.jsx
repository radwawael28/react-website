import React from 'react'
import img from '../../assets/avataaars.svg';

export default function Home() {
  return <>
  <section className='bg-success vh-100  d-flex justify-content-center align-items-center' >
    <div className="container">
    
    <div className="text-center text-white ">
    <img src={img} alt="" width={250} />
      <h1 className='mt-2 mb-2'>START FRAMEWORK</h1>
      <div className="star d-flex align-items-center justify-content-center mb-3">
        <div className=" line bg-white me-2" ></div>
        <i className="fa-solid fa-star"></i>
        <div className="line bg-white ms-2" ></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>
    
  </section>
  </>
}
