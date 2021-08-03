import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../img/example-image.svg";

function AccountSettings() {
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
                  <li className="active">Profil Bilgileri</li>
                  <li>Kişisel Bilgiler</li>
                  <li>Giriş Yöntemi</li>
                  <li>Bildirimler</li>
                  <li>Hesap Bilgileri</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="about">
                <ul className="d-flex justify-content-between">
                  <li>Hakkında</li>
                  <li>
                    <button>Düzenle</button>
                  </li>
                </ul>
              </div>
              <div className="profile-picture">
                <ul className="d-flex justify-content-start">
                  <li>Profil Resmi</li>
                  <li>
                    <img src={example} />
                  </li>
                </ul>
              </div>
              <div className="username">
                <ul className="d-flex justify-content-start">
                  <li>Kullanıcı Adı</li>
                  <li>
                    <h6>bhdr</h6>
                  </li>
                </ul>
              </div>
              <div className="brief-info">
                <ul className="d-flex justify-content-start">
                  <li>Kısa Bilgi</li>
                  <li>
                    <h6>
                      Dis diam etiam facilisis maecenas iaculis. At odio sed
                      tortor ultrices aliquam eros, quam malesuada. Morbi lorem
                      lobortis eget tempus. Ipsum vel pretium mattis curabitur
                      eleifend etiam sed consectetur ut. Facilisi sem ipsum,
                      amet purus. Sit nunc et sed gravida. Tortor congue neque
                      faucibus urna, feugiat ut sagittis. Amet, pellentesque
                      viverra quis elit venenatis scelerisque sapien morbi.
                      Amet, sagittis, sit imperdiet pharetra, ac sed consequat.
                      Leo sed non ipsum id enim rhoncus, a magna.
                    </h6>
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

export default AccountSettings;
