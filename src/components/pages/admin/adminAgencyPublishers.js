import React from "react";
import { Link, useLocation } from "react-router-dom";
import adminUsers from "../../../img/adminUsers.svg";
import example from "../../../img/example-image.svg";
import stats from "../../../img/stats.svg";
import settings from "../../../img/adminSettings.svg";
import points from "../../../img/three-points.svg";

function AdminAgencyPublishers() {
  return (
    <>
      <div className="grey-layer"></div>
      <div className="adminAgencyPublishers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="d-flex bd-highlight">
                <li className="p-2 w-100 bd-highlight">
                  <div className="dashboard-title">Ajans Adı</div>
                  <div className="dashboard-content">
                    Lobortis sed dolor tellus sem integer sit tempor. Metus,
                    nibh lacus arcu mauris nibh adipiscing bibendum iaculis.
                  </div>
                </li>
                <li className="p-2 flex-shrink-1 bd-highlight">
                  <div className="d-flex justify-content-end">
                    <button>Yayıncı Ayarları</button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="stats">
                <div className="d-flex align-items-center justify-content-center">
                  <div class="d-flex col-md-6 stats-menu">
                    <div class="col-md-4 stats-name">
                      <img src={example} />
                      Ajanslar
                    </div>
                    <div class="col-md-8 stats-numbers">
                      <img src={stats} />
                      <table>
                        <tr>
                          <td>15</td>
                          <td>12</td>
                          <td>6</td>
                        </tr>
                        <tr>
                          <td>
                            <span>Label</span>
                          </td>
                          <td>
                            <span>Label</span>
                          </td>
                          <td>
                            <span>Label</span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="d-flex col-md-6 stats-menu">
                    <div class="-2 col-md-4 stats-name">
                      <img src={example} />
                      Talepler
                    </div>
                    <div class="col-md-8 stats-numbers">
                      <img src={stats} />
                      <div className="d-flex- justify-content-center">
                        <table>
                          <tr>
                            <td>15</td>
                            <td>12</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Label</span>
                            </td>
                            <td>
                              <span>Label</span>
                            </td>
                            <td>
                              <span>Label</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-agencies">
              <div className="row">
                <div className="col-md-12">
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
                            <div className="menu-numbers">
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div className="admin-agency-names">
                              <img src={adminUsers} />
                              2001: A Space Odyssey
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="menu-numbers">
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div className="admin-agency-names">
                              <img src={adminUsers} />
                              The Breakfast Club
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="menu-numbers">
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div className="admin-agency-names">
                              <img src={adminUsers} />
                              Almost Famous
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="menu-numbers">
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div className="admin-agency-names">
                              <img src={adminUsers} />
                              The Thin Red Line
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="menu-numbers">
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div className="admin-agency-names">
                              <img src={adminUsers} />
                              Harry Potter and the Prisoner of Azkaban
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="agency-publishers-menu">
                            <div className="menu-numbers">
                              <span>Açık</span>
                              <span>Gelen</span>
                            </div>
                            <div className="admin-agency-names">
                              <img src={adminUsers} />
                              The Nightmare Before Christmas
                            </div>
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

export default AdminAgencyPublishers;
