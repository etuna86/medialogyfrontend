import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";

function PublisherServices() {
  return (
    <>
      <div className="publisherServices">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="publisherServices-title">
                <ul className="align-items-start d-flex flex-row bd-highlight mb-3 col-md-12">
                  <li className="p-2 bd-highlight">
                    {" "}
                    <img src={close} />
                  </li>
                  <li className="p-2 bd-highlight">Yeni Talep Oluştur </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mx-auto publisherServices-content">
        <div className="row card-body">
          <div className="col-md-12">
            <div className="align-items-center">
              <h5>Hizmetlerimiz</h5>
              <h6>
                Aliquam ultrices pharetra orci enim. Aliquam blandit tempus
                congue donec integer.
              </h6>
              <hr></hr>
              <div>
                <ul>
                  <li>
                    <figure className="col-md-6">
                      <img src={example} />
                    </figure>
                    <figcaption>İçerik Üretimi</figcaption>
                  </li>
                  <li>
                    <figure className="col-md-6">
                      <img src={example} />
                    </figure>
                    <figcaption>Çeviri</figcaption>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                  <button>Toplu Teklif İste</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublisherServices;
