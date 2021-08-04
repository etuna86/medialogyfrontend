import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../img/example-image.svg";

function PersonalInfo() {
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
                      <Link to="/personalInfo">
                        <div className="active">Kişisel Bilgiler</div>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/signinMethod">Giriş Yöntemi</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/notifications">Bildirimler</Link>
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
              <div className="about">
                <ul className="d-flex justify-content-between">
                  <li>Kişisel Bilgiler</li>
                  <li>
                    <button>Düzenle</button>
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <div className="info-titles">
                  <ul className="d-flex bd-highligh">
                    <li className="p-2 flex-shrink-1 bd-highlight">Tam İsim</li>
                    <li className="p-2 w-100 bd-highlight"><h6>Jonathan Davis</h6></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="info-titles">
                  <ul className="d-flex bd-highligh">
                    <li className="p-2 flex-shrink-1 bd-highlight">Telefon</li>
                    <li className="p-2 w-100 bd-highlight"><h6>90 554 123 12 12</h6></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="info-titles">
                  <ul className="d-flex bd-highligh">
                    <li className="p-2 flex-shrink-1 bd-highlight">Adres</li>
                    <li className="p-2 w-100 bd-highlight"><h6>
                      Cumhuriyet Mh. Aşık Veysel Cd. 112 / 27 İstanbul,
                      Kucukcekmece, TR
                      </h6>
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

export default PersonalInfo;
