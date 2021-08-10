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
              <div className="about">
                <ul className="d-flex justify-content-between">
                  <li>Deneyim</li>
                  <li>
                    <button>Düzenle</button>
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <div className="writer-info-titles">
                  <ul className="d-flex bd-highligh">
                    <li className="col-md-3 flex-shrink-1 bd-highlight">Özgeçmiş</li>
                    <li className="col-md-9 w-100 bd-highlight">
                      <h6>Dis diam etiam facilisis maecenas iaculis. At odio sed tortor ultrices aliquam eros, quam malesuada. Morbi lorem lobortis eget tempus. Ipsum vel pretium mattis curabitur eleifend etiam sed consectetur ut. Facilisi sem ipsum, amet purus. Sit nunc et sed gravida. Tortor congue neque faucibus urna, feugiat ut sagittis. Amet, pellentesque viverra quis elit venenatis scelerisque sapien morbi. Amet, sagittis, sit imperdiet pharetra, ac sed consequat. Leo sed non ipsum id enim rhoncus, a magna.</h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="writer-info-titles">
                  <ul className="d-flex bd-highligh">
                    <li className="col-md-3 flex-shrink-1 bd-highlight">Deneyim</li>
                    <li className="col-md-9 w-100 bd-highlight">
                      <h6>Deneyimli yazar (5+ yıl)</h6>
                    </li>
                  </ul>
                </div>
              </div>
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
                <div className="writer-info-titles">
                  <ul className="d-flex bd-highligh">
                    <li className="col-md-3 flex-shrink-1 bd-highlight">Medium</li>
                    <li className="col-md-9 w-100 bd-highlight">
                      <h6>www.medium.com/asdvbx</h6>
                    </li>
                  </ul>
                </div>                
              </div>
              <div className="col-md-12">
                <div className="writer-info-titles">
                  <ul className="d-flex bd-highligh">
                    <li className="col-md-3 flex-shrink-1 bd-highlight">Twitter</li>
                    <li className="col-md-9 w-100 bd-highlight">
                      <h6>Deneyimli yazar (5+ yıl)</h6>
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

export default WriterSettings;
