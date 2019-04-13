import React from 'react';

const Footer = () => (
<React.Fragment>
  <footer className="site-footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Homeland</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
              </div>
          </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Buy</a></li>
                    <li><a href="#">Rent</a></li>
                    <li><a href="#">Properties</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Follow Us</h3>
                  <div>
                    <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                    <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                    <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                    <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
                  </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
              Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
</React.Fragment>
);

export default Footer;