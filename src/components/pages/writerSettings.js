import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../img/example-image.svg";

function WriterSettings() {
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
      <div className="settings-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info">
                <ul>
                  <li>
                    <a>
                      <Link to="/writerSettings">
                        <div className="active">Yazar Bilgileri</div>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/interests">İlgi Alanları</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="col-md-12">
                <div className="about">
                  <ul className="d-flex justify-content-between">
                    <li>Deneyim</li>
                    <li>
                      <button>Düzenle</button>
                    </li>
                  </ul>
                </div>
              </div>
              <table>
                <tr>
                  <td scope="col">Özgeçmiş</td>
                  <td scope="col">
                    <p>
                      Dis diam etiam facilisis maecenas iaculis. At odio sed
                      tortor ultrices aliquam eros, quam malesuada. Morbi lorem
                      lobortis eget tempus. Ipsum vel pretium mattis curabitur
                      eleifend etiam sed consectetur ut. Facilisi sem ipsum,
                      amet purus. Sit nunc et sed gravida. Tortor congue neque
                      faucibus urna, feugiat ut sagittis. Amet, pellentesque
                      viverra quis elit venenatis scelerisque sapien morbi.
                      Amet, sagittis, sit imperdiet pharetra, ac sed consequat.
                      Leo sed non ipsum id enim rhoncus, a magna.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td scope="col">Deneyim</td>
                  <td scope="col">Deneyimli yazar (5+ yıl)</td>
                </tr>
              </table>
              <hr></hr>
              <div className="col-md-12">
                <div className="about">
                  <ul className="d-flex justify-content-between">
                    <li>Sosyal Medya</li>
                    <li>
                      <button>Düzenle</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <table>
                  <tr>
                    <td>Medium</td>
                    <td>www.medium.com/asdvbx</td>
                  </tr>
                  <tr>
                    <td>Twitter</td>
                    <td>Deneyimli yazar (5+ yıl)</td>
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

export default WriterSettings;
