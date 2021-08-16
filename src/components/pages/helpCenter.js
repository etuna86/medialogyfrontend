import React from "react";
import { Link, useLocation } from "react-router-dom";
import Updates from "../../img/updates.svg";
import openDemands from "../../img/open-demand.svg";
import MedialogyEcom from "../../img/medialogy-ecom.svg";
import publisherIcon from "../../img/publisher-icon.svg";
import Hourglass from "../../img/hourglass.svg";

function HelpCenter() {
  return (
    <>
      <div className="helpCenter-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="helpCenter-title">Yardım Merkezi</div>
            </div>
            <div className="col-md-12">
              <div className="standard-search">
                <form>
                  <div className="search-inside d-flex justify-content-start bd-highlight mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Yardım Konusu Arayın"
                      aria-label="default input example"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="helpCenter-section">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center">
              <div className="col-md-6">
                <h4>Yazarlar</h4>
                <h5>Turpis sit non cras vitae eget sagittis eu.</h5>
                <h5>Velit luctus pretium morbi sapien, sed non donec sed. </h5>
                <h5>
                  Nec vel maecenas massa feugiat ut elit ac tincidunt lacus.{" "}
                </h5>
                <h6>
                  <Link to="/helpCenterPages">Diğer başlıklar</Link>
                </h6>
              </div>
              <div className="col-md-6">
                <h4>Lacus magna ullamcorper</h4>
                <h5>Turpis sit non cras vitae eget sagittis eu.</h5>
                <h5>Velit luctus pretium morbi sapien, sed non donec sed. </h5>
                <h5>
                  Nec vel maecenas massa feugiat ut elit ac tincidunt lacus.{" "}
                </h5>
                <h6>
                  <Link to="/helpCenterPages">Diğer başlıklar</Link>
                </h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="col-md-6">
                <h4>Yayıncılar</h4>
                <h5>Turpis sit non cras vitae eget sagittis eu.</h5>
                <h5>Velit luctus pretium morbi sapien, sed non donec sed. </h5>
                <h5>
                  Nec vel maecenas massa feugiat ut elit ac tincidunt lacus.{" "}
                </h5>
                <h6>
                  <Link to="/helpCenterPages">Diğer başlıklar</Link>
                </h6>
              </div>
              <div className="col-md-6">
                <h4>Lacus, pretium eget</h4>
                <h5>Turpis sit non cras vitae eget sagittis eu.</h5>
                <h5>Velit luctus pretium morbi sapien, sed non donec sed. </h5>
                <h5>
                  Nec vel maecenas massa feugiat ut elit ac tincidunt lacus.{" "}
                </h5>
                <h6>
                  <Link to="/helpCenterPages">Diğer başlıklar</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpCenter;
