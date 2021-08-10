import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../../img/close-helpcenter.svg";
import example from "../../../img/example-image.svg";
import back from "../../../img/goback.svg";
import plus from "../../../img/plus.svg";
import upload from "../../../img/upload.svg";

function PublisherImgUse() {
  return (
    <>
      <div className="publisherImgUse">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="publisherImgUse-title">
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
                      <Link to="/interests">Brief</Link>
                      <ul className="sub-heading">
                      <li>Ön Bilgi</li>
                      <li>Detay</li>
                      <li><Link to="/publisherReferences">Referanslar</Link></li>
                      <li><Link to="/publisherImgUse"><div className="active">Görsel Kullanımı</div></Link></li>
                    </ul>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherNumber">
                        Adet
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPayment">
                        Ödeme
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="imgUse-type">
                <div className="card">
                  <div className="card-body">
                    <Link to="/publisherReferences">
                      <img src={back} />
                    </Link>
                    <h5>Görsel Kullanımı</h5>
                    <h6>
                      Aliquam ultrices pharetra orci enim. Aliquam blandit
                      tempus congue donec integer.
                    </h6>
                    <form>
                      <div className="form-group">
                        <select>
                          <option selected>Görsel Yöntemi</option>
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
                          placeholder="Dış Kaynaklar"
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
                <div className="next">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <h6>Ödeme Toplamı</h6>
                      <h5>136.45 TL</h5>
                    </li>
                    <li>
                      <button className="clear">Formu Temizle</button>
                      <Link to="/publisherNumber">
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

export default PublisherImgUse;
