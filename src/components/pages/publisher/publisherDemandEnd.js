import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";

function PublisherDemandEnd() {
  return (
    <>
      <div className="publisherDemandEnd">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="publisher-title">
                <ul className="align-items-center d-flex bd-highlight col-md-12">
                  <li className="p-2 flex-grow-1 bd-highlight">
                    {" "}
                    <img src={close} />
                    Yeni Talep Oluştur{" "}
                  </li>
                  <li className="p-2 bd-highlight">
                    <button>Excel ile Oluştur</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="publisher-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="article">
                <ul>
                  <li>
                    <a>
                      <Link to="/publisherDemands">
                        <div className="active">Talep Tipi</div>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherModel">Model</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPriorKnowledge">Brief</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherNumber">Adet</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPayment">Ödeme</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="ends">
                <div className="card">
                  <div className="card-body">
                    <h5>Başarıyla Tamamlandı</h5>
                    <h6>
                      Aliquam ultrices pharetra orci enim. Aliquam blandit
                      tempus congue donec integer.Aliquam ultrices pharetra orci
                      enim. Aliquam blandit tempus congue donec integer.Aliquam
                      ultrices pharetra orci enim. Aliquam blandit tempus congue
                      donec integer.
                    </h6>
                    <div className="end-buttons">
                        <Link to="/publisherServices">
                      <button type="button">Talep Sayfasına Git</button>
                      </Link>
                    </div>
                    <div className="end-buttons">
                        <Link to="/publisherDemands">
                      <button type="button">Yeni Talep Oluştur</button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublisherDemandEnd;
