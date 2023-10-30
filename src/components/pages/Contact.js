import React, { useState, setState } from 'react'
import '../style.css';

const Contact = () => {


  const submit = () => {
    alert("Submit success");
  } 

  return (
    <>
    <section className='page-heading'>
      <h3 className='container'>Contact Us</h3>
    </section>
    <form className="contact-form" id="formData">
      <div className="row">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" id="fname" placeholder="Enter Name" />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Mobile</label>
          <input type="number" className="form-control" id="mobile" placeholder="Mobile Number" />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" id="email" placeholder="Email" required />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label>Comment</label>
          <textarea type="text" className="form-control" id="comment">
          </textarea>
        </div>
      </div>
      <button type="submit" className="contact btn btn-success" onClick={submit}>Submit</button>
    </form>
    </>
  )
}

export default Contact