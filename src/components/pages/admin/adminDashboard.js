import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../../img/example-image.svg";
import stats from "../../../img/stats.svg";
import settings from "../../../img/settings.svg";
import arrow from "../../../img/arrow.svg";

function AdminDashboard() {
  return (
    <>
      <div className="grey-layer"></div>
      <div className="adminDashboard">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <ul className="d-flex bd-highlight">
                <li className="p-2 w-100 bd-highlight">
                  <div className="dashboard-title">Dashboard - Admin</div>
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
              <div className="stats">
                <div className="d-flex align-items-center justify-content-center">
                  <div class="d-flex col-md-6 stats-menu">
                    <div class="col-md-4 stats-name">
                      <img src={example} />
                      Ajanslar
                      <div>
                        <img src={arrow} />
                      </div>
                    </div>
                    <div class="col-md-8 stats-numbers">
                      <div className="d-flex justify-content-end">
                        <img src={settings} />
                      </div>
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
                    <div class="col-md-4 stats-name">
                      <img src={example} />
                      Yayıncılar
                      <div>
                        <img src={arrow} />
                      </div>
                    </div>
                    <div class="col-md-8 stats-numbers">
                      <div className="d-flex justify-content-end">
                        <img src={settings} />
                      </div>
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className="stats">
                <div className="d-flex align-items-center justify-content-center">
                  <div class="d-flex col-md-6 stats-menu">
                    <div class="col-md-4 stats-name p-2">
                      <img src={example} />
                      Yazarlar
                      <div>
                        <img src={arrow} />
                      </div>
                    </div>
                    <div class="col-md-8 stats-numbers">
                      <div className="d-flex justify-content-end">
                        <img src={settings} />
                      </div>
                      <img src={stats} />
                      <table>
                        <tr>
                          <td>15</td>
                          <td>6</td>
                        </tr>
                        <tr>
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
                    <div class="col-md-4 stats-name">
                      <img src={example} />
                      Editörler
                      <div>
                        <img src={arrow} />
                      </div>
                    </div>
                    <div class="col-md-8 stats-numbers">
                      <div className="d-flex justify-content-end">
                        <img src={settings} />
                      </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
