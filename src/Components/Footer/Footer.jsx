import React from 'react'

export default function Footer() {
  return <>

<div  className="footer bg-secondary p-5 ">
  <div className="container">
    <div className="row">
    <div className="col-md-4 text-center text-white">
<h3>LOCATION</h3>
<p>2215 John Daniel Drive</p>
<p >Clark, MO 65243</p>
</div>
  <div className="text-center col-md-4 text-white">
    <h3>AROUND THE WEB</h3>
    <div className="icons text-white">
      <i  className="fa-brands fa-facebook mx-1 icon"></i>
      <i  className="fa-brands fa-twitter mx-1 icon"></i>
      <i  className="fa-brands fa-linkedin-in mx-1 icon"></i>
      <i  className="fa-solid fa-globe mx-1 icon"></i>
      </div>
      </div>
        <div className="text-center text-white col-md-4">
          <h3 >ABOUT FREELANCER</h3>
<p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
</div>

    </div>
  </div>


</div>
<div className="bg-dark p-3 text-center">
  <p className='text-white'>Copyright © Your Website 2021</p></div>
  </>
}
