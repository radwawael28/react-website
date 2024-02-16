import React from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'


export default function Portfolio() {
  return <>
  <section className='portfolio bg-white pt-5 mt-5 mb-5'>
<div className="pt-3">
    <div className="text-center mt-4 ">
      <h1>PORTFOLIO COMPONENT</h1>
      <div className="star d-flex align-items-center justify-content-center mb-3">
        <div className=" line bg-dark me-2" ></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-2 bg-dark" ></div>
      </div>
    </div>
    
    <div className="container">
      <div className="row g-5 mb-5">
        <div className="col-lg-4 col-md-6e">
          <div className="position-relative" data-bs-toggle='modal' data-bs-target='#exampleModal'>
          <img src={img1} className='w-100 rounded-3 img-item' alt="" />
          <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i  className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
        <div className="position-relative " data-bs-toggle='modal' data-bs-target='#exampleModal2'>
          <img src={img2} className='w-100 rounded-3' alt="" />
          <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i  className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
        <div className="position-relative " data-bs-toggle='modal' data-bs-target='#exampleModal3'>
          <img src={img3} className='w-100 rounded-3' alt="" />
          <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i  className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
        <div className="position-relative" data-bs-toggle='modal' data-bs-target='#exampleModal4'>
          <img src={img1} className='w-100 rounded-3' alt="" />
          <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i  className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6">
        <div className="position-relative"data-bs-toggle='modal' data-bs-target='#exampleModal5'>
          <img src={img2} className='w-100 rounded-3' alt="" />
          <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i  className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6">
        <div className="position-relative "data-bs-toggle='modal' data-bs-target='#exampleModal6'>
          <img src={img3} className='w-100 rounded-3' alt="" />
          <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
            <i  className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>

<div className="modal py-5 mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog mt-5">
    <div className="modal-content mt-5">
  <img src={img1} alt="" />
  </div>
</div>
</div>
<div className="modal py-5 mt-5" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content  mt-5">
  <img src={img1} alt="" />
  </div>
</div>
</div>
<div className="modal py-5 mt-5" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content  mt-5">
  <img src={img1} alt="" />
  </div>
</div>
</div>
<div className="modal py-5 mt-5" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content  mt-5">
  <img src={img1} alt="" />
  </div>
</div>
</div>
<div className="modal py-5 mt-5" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content  mt-5">
  <img src={img1} alt="" />
  </div>
</div>
</div>
<div className="modal py-5 mt-5" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content  mt-5">
  <img src={img1} alt="" />
  </div>
</div>
</div>


  </section>
  </>
}
