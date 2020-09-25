import React from 'react';
const Contact = (props) =>{
  return(<>
        <div className="my-5">
          <div className="text-center">
            <h1>Contact Us</h1>
          </div>
          <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                <form>
                <form>
  
  <div class="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile number"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-12"><button type="submit" class="btn btn-primary">submit</button></div>
</form>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>)
};
export default Contact;