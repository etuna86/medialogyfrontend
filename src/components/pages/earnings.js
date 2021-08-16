import React from "react";
import { Link, useLocation } from "react-router-dom";
import download from "../../img/download.svg";

function Earnings() {
  return (
    <>
      <div className="earnings-grey-layer"></div>
      <div className="earnings-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="earnings-title">Kazançlar</div>
            </div>
            <div className="earnings-features">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-center payments-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <td scope="col">Son Ödeme</td>
                          <td scope="col">Toplam Ödeme</td>
                          <td scope="col">Bekleyen Ödeme</td>
                          <td scope="col">Toplam İçerik</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mayıs 10, 2021</td>
                          <td>235.44 TL</td>
                          <td>235.44 TL</td>
                          <td>12</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-md-12">
                <div className="payments">
                  <ul className="d-flex justify-content-between align-items-center">
                    <li>Ödemeler</li>
                    <li>
                      <button className="first-button">İndir</button>
                      <button className="second-button">Aksiyon 2</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="justify-content-center align-items-center earnings-table">
              <table className="table">
                <thead>
                  <tr className="table-article">
                    <th scope="col">Title</th>
                    <th scope="col">Title</th>
                    <th scope="col">Title</th>
                    <th scope="col">Title</th>
                    <th scope="col">Title</th>
                    <th scope="col">Title</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>
                      <Link>
                        <img src={download} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>
                      <Link>
                        <img src={download} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>
                      <Link>
                        <img src={download} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>
                      <Link>
                        <img src={download} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>
                      <Link>
                        <img src={download} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>
                      <Link>
                        <img src={download} />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>Large</td>
                    <td>
                      <Link>
                        <img src={download} />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <div className="pagination">
                <a href="#" className="active">
                  &laquo;
                </a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">&raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Earnings;
