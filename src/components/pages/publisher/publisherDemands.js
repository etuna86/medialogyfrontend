import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";

function PublisherDemands() {
  return (
    <>
      <div className="publisherDemands">
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
      <div className="publisherDemands-content">
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
              <div className="demand-type">
                <div className="card">
                  <div className="card-body">
                    <h5>Talep Tipi</h5>
                    <h6>
                      Aliquam ultrices pharetra orci enim. Aliquam blandit
                      tempus congue donec integer.
                    </h6>
                    <hr></hr>
                    <ul className="d-flex flex-wrap">
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Blog</figcaption>
                      </li>
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Web Sitesi</figcaption>
                      </li>
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Liste</figcaption>
                      </li>
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Bülten</figcaption>
                      </li>
                    </ul>
                    <hr></hr>
                    <div>
                      <h5>Yapısal</h5>
                      <ul className="d-flex flex-wrap">
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Ürün</figcaption>
                      </li>
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Kategori</figcaption>
                      </li>
                      <li className="col-md-3">
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Meta</figcaption>
                      </li>
                    </ul>
                    </div>
                    <hr></hr>
                    <div>
                      <h5>Sosyal Medya</h5>
                      <ul className="d-flex flex-wrap">
                      <li>
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Facebook</figcaption>
                      </li>
                      <li>
                        <figure>
                          <img src={example} />
                        </figure>
                        <figcaption>Instagram</figcaption>
                      </li>
                    </ul>
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

export default PublisherDemands;
