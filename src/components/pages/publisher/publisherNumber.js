import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";
import back from "../../../img/goback.svg";
import plus from "../../../img/plus.svg";
import upload from "../../../img/upload.svg";

function PublisherNumber() {
  return (
    <>
      <div className="publisherNumber">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="number-title">
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
                      <Link to="/publisherDashboard">Talep Tipi</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherModel">Model</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherImgUse">Brief</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherNumber">
                        <div className="active">Adet</div>
                      </Link>
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
              <div className="number">
                <div className="card">
                  <div className="card-body">
                    <Link to="/publisherPriorKnowledge">
                      <img src={back} />
                    </Link>
                    <h5>Adet</h5>
                    <h6>
                      Aliquam ultrices pharetra orci enim. Aliquam blandit
                      tempus congue donec integer.
                    </h6>
                    <form>
                      <div className="form-group">
                        <select>
                          <option selected>Seçiniz</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
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
                      <Link to="/publisherPayment">
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

export default PublisherNumber;
