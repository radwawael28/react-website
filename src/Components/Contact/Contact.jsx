import React from 'react'

export default function Contact() {
  return <>
  <section className='contact vh-100 bg-white pt-4 mt-5 mb-5'id='#contact'>
  <div className="text-center mt-5 pt-3 ">
      <h1>CONATCT SECTION</h1>
      <div className="star d-flex align-items-center justify-content-center mb-3">
        <div className=" line me-2 bg-dark" ></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-2 bg-dark" ></div>
      </div>
    </div>

  <form className='w-50 p-3 mx-auto mt-4 ng-untouched ng-pristine ng-valid'>
  <label  htmlFor="userName" id='name' className="position-relative top-0 top">userName : </label>
  <input  id="userName" type="text"  placeholder="userName" name="userName" className="form-control border-0 border-bottom py-4 position-relative ng-untouched ng-pristine ng-valid outline-none"></input>
  <label  htmlFor="userAge" className="position-relative mt-3 top-0 top">userAge : </label>
  <input  id="userAge" type="text" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-4 position-relative ng-untouched ng-pristine ng-valid"></input>
  
  <label htmlFor="userEmail" className="position-relative top-0 top">userEmail : </label>
  <input  id="userEmail" type="text" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-4 position-relative  ng-valid"></input>
  <label htmlFor="userPassword" className="position-relative top-0 top">userPassword : </label>
  <input  id="userPassword" type="text" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-4 position-relative ng-untouched ng-pristine ng-valid"></input>
  
  
  <button className="btn mt-4 text-white bg-success" > send Message </button>
  </form>

    </section></>
}
