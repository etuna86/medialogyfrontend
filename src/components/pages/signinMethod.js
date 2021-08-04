import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../img/example-image.svg";

function SignInMethod() {
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
                      <Link to="/signinMethod">
                        <div className="active">Giriş Yöntemi</div>
                      </Link>
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
                  <li>Giriş Bilgileri</li>
                  <li>
                    <button>Düzenle</button>
                  </li>
                </ul>
                <ul className="d-flex justify-content-between">
                  <li>
                    <h5>E-posta</h5>
                  </li>
                  <li>
                    <h6>bahadir@mail.com</h6>
                  </li>
                </ul>
                <hr></hr>
              </div>
              <div className="verification">
                <h4>2 aşamalı kimlik doğrulama</h4>
                <h6>
                  İki Aşamalı Kimlik Doğrulama, hesabınıza giriş yaparken sizden
                  bir güvenlik kodu girmenizi ister ve böylece hesabınıza
                  başkalarının izniniz olmadan erişmesini engeller.Buradan
                  rehber videomuza veya buradan yardım makalemize göz at.
                </h6>
                <h5>Üçüncü taraf kimlik doğrulama</h5>
                <h6>
                  İki Aşamalı Kimlik Doğrulama (2FA) yöntemin olarak bir Kimlik
                  Doğrulama Uygulaması kullan. Giriş yaparken Kimlik Doğrulama
                  Uygulaman tarafından üretilen güvenlik kodunu kullanman
                  gerekecek.
                </h6>
                <hr></hr>
                <h5>E-posta doğrulama</h5>
                <h6>
                  İki Aşamalı Kimlik Doğrulama (2FA) yöntemin olarak e-posta
                  adresine gönderilen güvenlik kodunu kullan. Güvenlik kodu,
                  hesabına bağlı adrese gönderilecek. Giriş yaparken o kodu
                  kullanman gerekecek.
                </h6>
                <hr></hr>
                <h5>SMS doğrulama</h5>
                <h6>
                  Giriş yaparken telefonunu İki Aşamalı Kimlik Doğrulama (2FA)
                  için kullan; sana SMS mesajı ile gönderdiğimiz güvenlik kodunu
                  kullanman gerekecek.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInMethod;
