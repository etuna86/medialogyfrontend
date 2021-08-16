import React from "react";
import { Link, useLocation } from "react-router-dom";
import close from "../../img/close-helpcenter.svg";

function HelpCenterPages() {
  return (
    <>
      <div className="helpCenterPages">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="helpCenter-title">
                <h6>Yardım Merkezi - Yazarlar</h6>
                <img src={close} />
                Turpis sit non cras vitae eget sagittis eu.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="helpCenterPages-contents">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <p>
                Convallis facilisi amet purus mi parturient morbi dignissim
                aliquam. Eu, aliquam sed commodo rhoncus. Iaculis sed arcu
                molestie commodo scelerisque ut nam blandit vitae. Quam est nibh
                augue enim commodo diam. Ac id habitasse et, nunc elit rhoncus,
                blandit est. Pellentesque tellus vitae, mauris etiam integer
                praesent.
              </p>
              <p>
                Duis condimentum elit, nunc lectus leo amet ultricies enim,
                consequat. Id sit elit a eget bibendum. Tellus senectus massa,
                ut lobortis id eget. Risus mattis augue a morbi facilisi amet.
                Quis at cum neque arcu. Volutpat risus vestibulum, semper neque
                nunc commodo maecenas. Adipiscing posuere semper tellus justo
                luctus et facilisi amet. Sagittis velit suscipit mattis dui
                dignissim volutpat pulvinar eget vitae. Ipsum faucibus leo sem
                ipsum, feugiat enim eu. Sit aliquet donec quis facilisis risus
                in.
              </p>
              <hr></hr>
              <div className="helpCenter-buttons">
                <ul className="d-flex bd-highlight">
                  <li className="p-2 flex-fill bd-highlight">
                    <h6>
                    Turpis sit non cras vitae eget sagittis eu.
                    </h6>
                  </li>
                  <li className="p-2 flex-fill bd-highlight">
                    <button className="btn">
                      <i class="fa fa-thumbs-up"></i>
                    </button>
                    <button className="btn">
                      <i class="fa fa-thumbs-down"></i>
                    </button>
                  </li>
                  <li className="p-2 flex-fill bd-highlight">
                    <button>Yardım İçin Buradayız</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              {" "}
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
              <hr></hr>
              <div>
                <h5>Benzer Yardım Konuları</h5>
                <h6>Turpis sit non cras vitae eget sagittis eu.</h6>
                <h6>Velit luctus pretium morbi sapien, sed non donec sed.</h6>
                <h6>
                  Pulvinar molestie pharetra est mauris magna duis congue.
                </h6>
                <a>
                  <Link to="/helpCenter">Diğer İçerikler</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpCenterPages;
