import React from 'react'

export default function About() {
  return <>
<section className='about vh-100 bg-success d-flex justify-content-center align-items-center'>
  <div className="container">
  <div className="text-center text-white">
      <h1 className='mt-2 mb-2'>ABOUT COMPONENT</h1>
      <div className="star d-flex align-items-center justify-content-center mb-3">
        <div className=" line bg-white me-2" ></div>
        <i className="fa-solid fa-star"></i>
        <div className="line bg-white ms-2" ></div>
      </div>
      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className="col-md-6">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
</div>

</div>
  </div>
</section>
  </>
}
