import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../img/interests-img.svg";
import selected from "../../img/selected-img.svg";

function Interests() {
  return (
    <>
      <div className="writer-settings">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="settings-title">Yazar Ayarları</div>
            </div>
          </div>
        </div>
      </div>
      <div className="interests-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info">
                <ul>
                  <li>
                    <a>
                      <Link to="/writerSettings">Yazar Bilgileri</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/interests">
                        <div className="active">İlgi Alanları</div>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="interests-icons">
                <ul className="d-flex flex-wrap">
                  <li>
                    <figure>
                      <img src={example} />
                      <figcaption>Movies</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src={example} />
                      <figcaption>Mom</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src={example} />
                      <figcaption>Lifestyle</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src={example} />
                      <figcaption>Pet</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src={selected} />
                      <figcaption>Music</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src={selected} />
                      <figcaption>Games</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src={example} />
                      <figcaption>Books</figcaption>
                    </figure>
                  </li>
                  <li>
                    <figure>
                      <img src={example} />
                      <figcaption>Current Events</figcaption>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interests;
