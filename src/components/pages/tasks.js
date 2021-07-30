import React from "react";
import Updates from "../../img/updates.svg";
import openDemands from "../../img/open-demand.svg";
import MedialogyEcom from "../../img/medialogy-ecom.svg";
import publisherIcon from "../../img/publisher-icon.svg";
import Hourglass from "../../img/hourglass.svg";
import close from "../../img/close.svg";

function Tasks() {
  return (
    <>
      <div className="tasks-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tasks-title">Görevlerim</div>
            </div>
            <div className="tasks-menu">
              <ul className="d-flex align-items-center">
                <li className="col-3 active">
                  <a>Tümü <span>16</span></a>
                </li>
                <li className="col-3">
                  <a>Üretim Aşamasında <span>6</span></a>
                </li>
                <li className="col-3">
                  <a>Gelen Düzenleme İstekleri <span>6</span></a>
                </li>
                <li className="col-3">
                  <a>Onay Beklediklerim <span>6</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="tasks-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="standard-search search-bar">
                <form>
                  <div className="search-inside d-flex justify-content-between bd-highlight mb-3">
                    <button>Filtrele</button>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Arama"
                      aria-label="default input example"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="container">
                <div className="col-md-12">
                    <div className="filter-bar">
                        <ul className="d-flex align-items-center">                            
                            <li className="justify-content-start">Uygulanan Filteler</li>
                            <li><button>Filtre 1 <img src={close} /></button></li>
                            <li><button>Filtre 2 <img src={close} /></button></li>
                            <li><button>Filtre 3 <img src={close} /></button></li>
                            <li><a>Filtreleri temizle</a></li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
          <div className="task-box">
            <div className="row">
              <div className="col-md-9">
                <div className="task-box-article">
                  Convallis sapien, euismod sit magna dolor mattis condimentum.
                </div>
                <div className="task-box-content">
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros, quam malesuada. Morbi lorem lobortis
                  eget tempus. Ipsum vel pretium mattis curabitur eleifend etiam
                  sed consectetur ut. Facilisi sem ipsum, amet purus ...
                </div>
                <div className="task-box-buttons">
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
              <div className="col-md-3 align-items-center">
                <div className="task-box-items">
                  <ul className="d-flex align-items-start list-group">
                    <li>
                      <a>
                        <img src={Updates} />
                        Güncellemeler
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={openDemands} />
                        Açık Talep
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={publisherIcon} />
                        Publisher Name
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={MedialogyEcom} />
                        Medialogy Ecom
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={Hourglass} />
                        12.15.2021 15:15
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="task-box">
            <div className="row">
              <div className="col-md-9">
                <div className="task-box-article">
                  Convallis sapien, euismod sit magna dolor mattis condimentum.
                </div>
                <div className="task-box-content">
                  Dis diam etiam facilisis maecenas iaculis. At odio sed tortor
                  ultrices aliquam eros, quam malesuada. Morbi lorem lobortis
                  eget tempus. Ipsum vel pretium mattis curabitur eleifend etiam
                  sed consectetur ut. Facilisi sem ipsum, amet purus ...
                </div>
                <div className="task-box-buttons">
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
              <div className="col-md-3 align-items-center">
                <div className="task-box-items">
                  <ul className="d-flex align-items-start list-group">
                    <li>
                      <a>
                        <img src={Updates} />
                        Güncellemeler
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={openDemands} />
                        Açık Talep
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={publisherIcon} />
                        Publisher Name
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={MedialogyEcom} />
                        Medialogy Ecom
                      </a>
                    </li>
                    <li>
                      <a>
                        <img src={Hourglass} />
                        12.15.2021 15:15
                      </a>
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

export default Tasks;
