import React from "react";
import { Link, useLocation } from "react-router-dom";
import download from "../../img/download.svg";

function Earnings() {
  return (
    <>
      <div className="earnings-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="earnings-title">Kazançlar</div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="earning-features-titles">
                  <ul className="d-flex justify-content-between">
                    <li>Son Ödeme</li>
                    <li>Toplam Ödeme</li>
                    <li>Bekleyen Ödeme</li>
                    <li>Toplam İçerik</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="earnings-features">
                  <ul className="d-flex justify-content-between">
                    <li>Mayıs 10, 2021</li>
                    <li>235.44 TL</li>
                    <li>254.33 TL</li>
                    <li>12</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="payments">
                  <ul className="d-flex justify-content-between">
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
              <table class="table">
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
                </tbody>
              </table>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <div class="pagination">
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
