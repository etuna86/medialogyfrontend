import React from "react";
import { Link, useLocation } from "react-router-dom";
import circle from "../../../img/circle.svg";

function PublisherPlans() {
  return (
    <>
      <div className="publisherPlans">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="plans-title">Yayıncı Ayarları</div>
            </div>
          </div>
        </div>
      </div>
      <div className="plans-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info">
                <ul>
                  <li>
                    <a>
                      <Link to="/publisherSettings">Yayıncı Bilgileri</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherUsers">Kullanıcılar</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPlans">
                        <div className="active">Planınızı Yükseltin</div>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPayment">Ödeme Yöntemi</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 plan-options">
              <div className="mx-auto">
                <img src={circle} />
                <div className="plan-title">ABC Planı</div>
              </div>
              <div className="mx-auto">
                  <div className="plan-features">Lorem Ipsum</div>
                  <div className="plan-features">Lorem Ipsum</div>
                  <div className="plan-features">Lorem Ipsum</div>
                <button className="active">Mevcut Plan</button>
              </div>
            </div>
            <div className="col-md-3 plan-options">
              <div className="mx-auto">
                <img src={circle} />
                <div className="plan-title">XYZ Planı</div>
              </div>
              <div className="mx-auto">
                  <div className="plan-features">Lorem Ipsum</div>
                  <div className="plan-features">Lorem Ipsum</div>
                  <div className="plan-features">Lorem Ipsum</div>
                <button>Yükselt</button>
              </div>
            </div>
            <div className="col-md-3 plan-options">
              <div className="mx-auto">
                <img src={circle} />
                <div className="plan-title">123 Planı</div>
              </div>
              <div className="mx-auto">
                <div>
                  <div className="plan-features">Lorem Ipsum</div>
                  <div className="plan-features">Lorem Ipsum</div>
                  <div className="plan-features">Lorem Ipsum</div>
                </div>
                <button>Yükselt</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublisherPlans;
