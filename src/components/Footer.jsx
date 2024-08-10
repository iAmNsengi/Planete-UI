const Footer = () => {
  return (
    <div id="footer">
      <div className="container text-center">
        <div className="col-md-4">
          <h3>Address</h3>
          <div className="contact-item">
            <p>Rubavu / Rugerero/ Rugerero</p>
            <p>Kabarora</p>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Opening Hours</h3>
          <div className="contact-item">
            <p>Mon-Sun: 7:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <p>Phone: +(250) 78-8426737</p>
            <p>Email: planetehotel@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center copyrights">
        <div className="col-md-8 col-md-offset-2">
          <div className="social">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
          <p>
            &copy; 2024 Planete Hotel. All rights reserved. Designed by
            <a href="#" rel="nofollow">
              &Comma
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
