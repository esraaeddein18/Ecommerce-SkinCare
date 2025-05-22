import React from "react";

const Contact = () => {
  return (
      <div id="Contact" className="container-fluid py-5 bg-light">

    <form className="mx-auto w-50 py-2">
    <h1 className="text-center fs-3 fw-bold mt-4">CONTACT US FOR OUR NEWSLETTER </h1>
    <p className="text-center text-secondary fs-6 mt-1">Do you have any questions or suggestions?</p>
      <div class="text-center mb-1 py-4">
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class=" btn bg-white fs-6 text-dark rounded-5 shadow mx-3 cursor-pointer">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn bg-white fs-6 text-dark rounded-5 shadow mx-3 cursor-pointer">
          <i class="fab fa-google"></i>
        </button>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn bg-white fs-6 text-dark rounded-5 shadow mx-3 cursor-pointer">
          <i class="fab fa-twitter"></i>
        </button>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn bg-white fs-6 text-dark rounded-5 shadow mx-3 cursor-pointer">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <div data-mdb-input-init class="form-outline mb-4">
        <input type="name" placeholder="Your Name" id="contactname" class="form-control py-2" />

      </div>
      <div data-mdb-input-init class="form-outline mb-4">
        <input type="email" placeholder="Your Email Address" id="contactemail" class="form-control py-2" />

      </div>
      <div data-mdb-input-init class="form-outline mb-4">
<textarea type="password" placeholder="Message.." id="contactmsg" class="form-control" style={{height:'100px'}}>

</textarea>
      </div>
      <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-block mb-4 w-25 py-2">SEND MESSAGE</button>


    </form>
  </div>
  
  );
};

export default Contact;
