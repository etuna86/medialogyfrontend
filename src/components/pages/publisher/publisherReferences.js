import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";
import back from "../../../img/goback.svg";
import plus from "../../../img/plus.svg";
import upload from "../../../img/upload.svg";

function References() {
  return (
    <>
      <div className="references">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="references-title">
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
                      <Link to="/publisherModel">Model</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherBrief">Brief</Link>
                    </a>
                    <ul className="sub-heading">
                    <li>
                        <a>
                          <Link to="/publisherPriorKnowledge">Ön Bilgi</Link>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="/publisherDetails">Detay</Link>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="/publisherReferences">
                            <div className="active">Referanslar</div>
                          </Link>
                        </a>
                      </li>
                      <li>Görsel Kullanımı</li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherNumber">Adet</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherImgUse">Ödeme</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="reference-type">
                <div className="card">
                  <div className="card-body">
                    <Link to="/publisherDetails">
                      <img src={back} />
                    </Link>
                    <h5>Referanslar</h5>
                    <h6>
                      Aliquam ultrices pharetra orci enim. Aliquam blandit
                      tempus congue donec integer.
                    </h6>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="form-title"
                          aria-describedby="help"
                          placeholder="Örnek İçerik Metni"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="about"
                          aria-describedby="help"
                          placeholder="Dış Bağlantılar"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                    </form>
                    <div className="col-md-12 d-flex align-items-center plus">
                      <img src={plus} />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-9 mx-auto">
                          <div className="card upload d-flex justify-content-center col-md-12">
                            <div className="card-body">
                              <h5>İndirilebilir İçerikler</h5>
                              <h6>
                                Maecenas ipsum, nisi semper facilisis et ante
                                vitae. Vivamus scelerisque tincidunt sed cras eu
                                dolor.
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 align-items-start">
                <div className="next col-md-6">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <h6>Ödeme Toplamı</h6>
                      <h5>136.45 TL</h5>
                    </li>
                    <li>
                      <button className="clear">Formu Temizle</button>
                      <Link to="/publisherImgUse">
                        <button>Sonraki</button>
                      </Link>
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

export default References;
