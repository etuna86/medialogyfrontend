import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../img/example-image.svg";

function AccountInfo() {
  return (
    <>
      <div className="account-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="info-title">Hesap Ayarları</div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-section">
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
                      <Link to="/notifications">Bildirimler</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/accountInfo">
                        <div className="active">Hesap Bilgileri</div>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="about">
                <ul className="d-flex justify-content-between">
                  <li>Ödeme Yöntemi</li>
                  <li>
                    <button>Düzenle</button>
                  </li>
                </ul>
              </div>
                <div className="info-titles">
                  <ul className="d-flex justify-content-between">
                    <li>Ödeme Yöntemi</li>
                    <li>
                      <h6>Banka Hesabına Havale</h6>
                    </li>
                  </ul>
                </div>
                <div className="info-titles">
                  <ul className="d-flex justify-content-between">
                    <li>Hesap No</li>
                    <li>
                      <h6>1254 **** ***** **** **** 54</h6>
                    </li>
                  </ul> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountInfo;
