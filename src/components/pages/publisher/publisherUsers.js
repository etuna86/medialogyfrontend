import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../../img/example-image.svg";
import publisherUsers from "../../../img/publisherUsers.svg";
import upDown from "../../../img/upDown.svg";

function PublisherUsers() {
  return (
    <>
      <div className="publisherUsers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="users-title">Yayıncı Ayarları</div>
            </div>
          </div>
        </div>
      </div>
      <div className="users-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info">
                <ul>
                  <li>
                    <a>
                      <Link to="/publisherSettings">Yayıncı Bilgileri</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherUsers">
                        <div className="active">Kullanıcılar</div>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPlans">Planınızı Yükseltin</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/publisherPayment">Ödeme Yöntemi</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 users-table">
              <div className="d-flex justify-content-between">
                  <table>
                    <tr>
                      <td colspan="2">
                        <img src={publisherUsers} /> Brooklyn Simmons
                      </td>
                      <td>
                        <button>
                          Owner <img src={upDown} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <img src={publisherUsers} /> Guy Hawkins
                      </td>
                      <td>
                        <button>
                          Yönetici <img src={upDown} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <img src={publisherUsers} /> Albert Flores
                      </td>
                      <td>
                        <button>
                          Yönetici <img src={upDown} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <img src={publisherUsers} /> Savannah Nguyen
                      </td>
                      <td>
                        <button>
                          Yorumcu <img src={upDown} />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <img src={publisherUsers} /> Theresa Webb
                      </td>
                      <td>
                        <button>
                          Yorumcu <img src={upDown} />
                        </button>
                      </td>
                    </tr>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublisherUsers;
