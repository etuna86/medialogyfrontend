import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";
import back from "../../../img/goback.svg";
import plus from "../../../img/plus.svg";
import upload from "../../../img/upload.svg";

function PublisherPayment() {
  return (
    <>
      <div className="publisherPayment">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="publisherPayment-title">
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
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherNumber">Adet</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPayment">
                        <div className="active">Ödeme</div>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="payment-type">
                <div className="card">
                  <div className="card-body">
                    <Link to="/publisherNumber">
                      <img src={back} />
                    </Link>
                    <h5>Ödeme</h5>
                    <h6>
                      Aliquam ultrices pharetra orci enim. Aliquam blandit
                      tempus congue donec integer.
                    </h6>
                    <form>
                      <div className="form-group">
                        <select>
                          <option selected>Kredi Kartı ile Öde</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="form-title"
                          aria-describedby="help"
                          placeholder="Adı Soyadı"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="form-title"
                          aria-describedby="help"
                          placeholder="Kart Numarası"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="form-title"
                          aria-describedby="help"
                          placeholder="Son Kullanma Tarihi"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="form-title"
                          aria-describedby="help"
                          placeholder="CVV"
                        />
                        <small id="help" className="form-text text-muted">
                          Helper Text
                        </small>
                      </div>
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
                      <Link to="/publisherDemandEnd">
                        <button>Gönder</button>
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

export default PublisherPayment;
