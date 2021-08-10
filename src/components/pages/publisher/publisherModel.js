import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";
import back from "../../../img/goback.svg";

function PublisherModel() {
  return (
    <>
      <div className="publisherModel">
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
                      <Link to="/publisherDemands">Talep Tipi</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherModel">
                        <div className="active">Model</div>
                      </Link>
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
              <div className="demand-type">
                <div className="card">
                  <div className="card-body">
                    <Link to="/publisherDemands">
                      <img src={back} />
                    </Link>
                    <h5>Model</h5>
                    <h6>
                      Aliquam ultrices pharetra orci enim. Aliquam blandit
                      tempus congue donec integer.
                    </h6>
                    <ul className="d-flex flex-wrap">
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>
                          Expo
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </figcaption>
                      </li>
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>
                          Ecom
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </figcaption>
                      </li>
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Express
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </figcaption>
                      </li>
                    </ul>
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

export default PublisherModel;
