import React from "react";
import { Link, useLocation } from "react-router-dom";
import agencyPublisherStats from "../../../img/agencyPublisherStats.svg";
import agencyContentStats from "../../../img/agencyContentStats.svg";
import agencyPublishers from "../../../img/agencyPublishers.svg";

function AgencyDashboard() {
  return (
    <>
      <div className="grey-layer"></div>
      <div className="agencyDashboard">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <ul className="d-flex bd-highlight">
                <li className="p-2 w-100 bd-highlight">
                  <div className="dashboard-title">Dashboard - Ajans</div>
                  <div className="dashboard-content">
                    Lobortis sed dolor tellus sem integer sit tempor. Metus,
                    nibh lacus arcu mauris nibh adipiscing bibendum iaculis.
                  </div>
                </li>
                <li className="p-2 flex-shrink-1 bd-highlight">
                  <div className="d-flex justify-content-end">
                    <button>Özelleştir</button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <img src={agencyPublisherStats} />
                  <img src={agencyContentStats} />
                </div>
              </div>
            </div>
            <div className="agency-publishers">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-6">
                    <h5>Yayıncılar</h5>
                    <div>
                      <h6>
                        Lobortis sed dolor tellus sem integer sit tempor. Metus,
                        nibh lacus arcu mauris nibh adipiscing bibendum iaculis.
                      </h6>
                    </div>
                  </div>
                  <div className="agency-filters">
                    <ul className="d-flex justify-content-between">
                      <li>
                        <div className="col-md-12">
                          <button>Yeni Yayıncı Ekle</button>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Arama"
                            aria-label="input example"
                          />
                        </div>
                      </li>
                      <li>
                        <button>Sıralama</button>
                        <button>Görüntüleme</button>
                      </li>
                    </ul>
                    <div className="agency-publisher-icons">
                      <ul className="flex-wrap">
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="agency-publisher-contents"></div>
                            <div>
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div>Yayıncı Adı</div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="agency-publisher-contents"></div>
                            <div>
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div>Yayıncı Adı</div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="agency-publisher-contents"></div>
                            <div>
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div>Yayıncı Adı</div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="agency-publisher-contents"></div>
                            <div>
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div>Yayıncı Adı</div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="agency-publisher-contents"></div>
                            <div>
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div>Yayıncı Adı</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-flex justify-content-center">
                    <div className="see-all">
                      <button>Tümünü Gör</button>
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

export default AgencyDashboard;
