import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../img/example-image.svg";

function Notifications() {
  return (
    <>
      <div className="account-settings">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="settings-title">Hesap Ayarları</div>
            </div>
          </div>
        </div>
      </div>
      <div className="settings-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info">
                <ul>
                  <li>
                    <a>
                      <Link to="/accountSettings">Profil Bilgileri</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/personalInfo">Kişisel Bilgiler</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/signinMethod">Giriş Yöntemi</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/notifications">
                        <div className="active">Bildirimler</div>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/accountInfo">Hesap Bilgileri</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="notification-items">
                <h5>Yeni İçerik Talepleri</h5>
                <h6>
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros
                </h6>
                <hr></hr>
                <h5>Yorumlar</h5>
                <h6>
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros
                </h6>
                <hr></hr>
                <h5>Onaylanan İçerikler</h5>
                <h6>
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros
                </h6>
                <hr></hr>
                <h5>Kazançlar</h5>
                <h6>
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros
                </h6>
                <hr></hr>
                <h5>KVKK İzni</h5>
                <h6>
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros
                </h6>
                <hr></hr>
                <h5>ETK SMS</h5>
                <h6>
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
