import React from "react";
import { Link, useLocation } from "react-router-dom";
import example from "../../../img/example-image.svg";
import stat from "../../../img/statistics.svg";
import calendar from "../../../img/calendar.svg";
import Updates from "../../../img/updates.svg";
import publisherIcon from "../../../img/publisher-icon.svg";
import MedialogyEcom from "../../../img/medialogy-ecom.svg";

function AgencyExperience() {
  return (
    <>
      <div className="agencyExperience">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="experience-title">Deneyim</div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info">
                <ul>
                  <li>
                    <a>
                      <Link to="/writerSettings">Performans</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to="/writerExperience">
                        <div className="active">İçeriğim</div>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="experience-numbers">
                <h6>Performans</h6>
                <ul className="d-flex justify-content-center">
                  <li>
                    <div className="score">55</div>İçeriklerim
                  </li>
                  <li>
                    <div className="score">15</div>Tamamlanan
                  </li>
                  <li>
                    <div className="score">4.5</div>Ort. Tamamlama(gün)
                  </li>
                </ul>
                <div className="labels col-md-9">
                  <ul>
                    <li>
                      <button>Label 1</button>
                    </li>
                    <li>
                      <button>Label 2</button>
                    </li>
                    <li>
                      <button>Label 3</button>
                    </li>
                    <li>
                      <button>Label 4</button>
                    </li>
                    <li>
                      <button>Label 5</button>
                    </li>
                    <li>
                      <button>Label 6</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <div className="experience-references">
                <hr></hr>
                <ul className="d-flex justify-content-between">
                  <li>İçeriğim</li>
                  <li>
                    <button>Filtrele</button>
                  </li>
                </ul>
                <div className="card reference-items">
                  <div className="row">
                    <div className="col-md-12 d-flex align-items-center">
                      <div className="card-body">
                        <ul className="d-flex align-items-start">
                          <li>
                            <img src={MedialogyEcom} />
                            Medialogy Ecom
                          </li>
                          <li>
                            <img src={publisherIcon} />
                            Reviewer Name
                          </li>
                          <li>
                            <img src={calendar} />
                            12.15.2021 - 15:15
                          </li>
                        </ul>
                        <h6>
                          Purus ut tempor semper et sed. Tortor aliquet eget id
                          sed non dignissim urna. Dui fringilla nibh interdum
                          ultrices neque volutpat sagittis.
                        </h6>
                        <hr></hr>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="reference-box-article">
                        Convallis sapien, euismod sit magna dolor mattis
                        condimentum.
                      </div>
                      <div className="reference-box-content">
                        Dis diam etiam facilisis maecenas iaculis. At odio sed
                        tortor ultrices aliquam eros, quam malesuada. Morbi
                        lorem lobortis eget tempus. Ipsum vel pretium mattis
                        curabitur eleifend etiam sed consectetur ut. Facilisi
                        sem ipsum, amet purus
                      </div>
                      <div className="reference-box-buttons">
                        <ul className="align-items-start">
                          <li>
                            <button>Label 1</button>
                          </li>
                          <li>
                            <button>Label 2</button>
                          </li>
                          <li>
                            <button>Label 3</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card reference-items">
                  <div className="row">
                    <div className="col-md-12 d-flex align-items-center">
                      <div className="card-body">
                        <ul className="d-flex align-items-start">
                          <li>
                            <img src={MedialogyEcom} />
                            Medialogy Ecom
                          </li>
                          <li>
                            <img src={publisherIcon} />
                            Reviewer Name
                          </li>
                          <li>
                            <img src={calendar} />
                            12.15.2021 - 15:15
                          </li>
                        </ul>
                        <h6>
                          Purus ut tempor semper et sed. Tortor aliquet eget id
                          sed non dignissim urna. Dui fringilla nibh interdum
                          ultrices neque volutpat sagittis.
                        </h6>
                        <hr></hr>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="reference-box-article">
                        Convallis sapien, euismod sit magna dolor mattis
                        condimentum.
                      </div>
                      <div className="reference-box-content">
                        Dis diam etiam facilisis maecenas iaculis. At odio sed
                        tortor ultrices aliquam eros, quam malesuada. Morbi
                        lorem lobortis eget tempus. Ipsum vel pretium mattis
                        curabitur eleifend etiam sed consectetur ut. Facilisi
                        sem ipsum, amet purus
                      </div>
                      <div className="reference-box-buttons">
                        <ul className="align-items-start">
                          <li>
                            <button>Label 1</button>
                          </li>
                          <li>
                            <button>Label 2</button>
                          </li>
                          <li>
                            <button>Label 3</button>
                          </li>
                        </ul>
                      </div>
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

export default AgencyExperience;
