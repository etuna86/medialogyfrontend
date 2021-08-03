import React from "react";
import LogoImg from "../../img/logo.svg";
import Circle from "../../img/circle.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="d-flex bd-highlight col-md-12">
              <div className="col-md-3">
                <div className="logo-section">
                  <img src={LogoImg} />
                </div>
              </div>
              <div className="justify-content-center col-md-6">
                <div className="middle-section">
                  Lorem leo tristique duis pellentesque nunc, sed tincidunt.
                  Nunc dignissim adipiscing donec in scelerisque nunc velit
                  egestas.
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-circle">
                  <ul>
                    <li>
                      <img src={Circle} />
                    </li>
                    <li>
                      <img src={Circle} />
                    </li>
                    <li>
                      <img src={Circle} />
                    </li>
                    <li>
                      <img src={Circle} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
