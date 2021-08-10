import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";
import back from "../../../img/goback.svg";

function PublisherDetails() {
  return (
    <>
      <div className="brief">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="brief-title">
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
                      <Link to="/publisherPriorKnowledge">Talep Tipi</Link>
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
                          <Link to="publisherPriorKnowledge">Ön Bilgi</Link>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="publisher">
                            <div className="active">Detay</div>
                          </Link>
                        </a>
                      </li>
                      <li>
                       Referanslar
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
                    <Link to="/publisherPriorKnowledge">
                      <img src={back} />
                    </Link>
                    <h5>Detay</h5>
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
                          placeholder="İçerik Hakkında"
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
                          placeholder="Konu Başlıkları"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                      <div className="form-group">
                        <select id="language">
                          <option selected>Dil</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </div>
                      <small id="help" className="form-text text-muted">
                        Helper Text
                      </small>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="webadress"
                          aria-describedby="help"
                          placeholder="Kısıtlar"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                      <div className="form-group">
                        <select id="oratory">
                          <option selected>Hitabet</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </div>
                      <small id="help" className="form-text text-muted">
                        Helper Text
                      </small>
                      <div className="form-group">
                        <select id="oratory">
                          <option selected>Duygu</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </div>
                      <small id="help" className="form-text text-muted">
                        Helper Text
                      </small>
                      <div className="form-group">
                        <select id="oratory">
                          <option selected>Anahtar Kelimeler</option>
                          <option>Option 1</option>
                          <option>Option 2</option>
                        </select>
                      </div>
                      <small id="help" className="form-text text-muted">
                        Helper Text
                      </small>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-12 align-items-start">
                <div className="next">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <h6>Ödeme Toplamı</h6>
                      <h5>136.45 TL</h5>
                    </li>
                    <li>
                      <button className="clear">Formu Temizle</button>
                      <Link to="/publisherReferences">
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

export default PublisherDetails;
