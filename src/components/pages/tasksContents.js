import React from "react";
import { Link, useLocation } from "react-router-dom";
import info from "../../img/info.svg";
import alert from "../../img/alert.svg";
import history from "../../img/history.svg";
import close from "../../img/close-helpcenter.svg";
import example from "../../img/example-image.svg";
import settings from "../../img/settings-bold.svg";

function TasksContents() {
  return (
    <>
      <div className="helpCenterContents">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="helpCenterContents-title">
                <div className="writing-stage">
                  <img src={settings} />
                  Üretim aşamasında
                </div>
                <div className="alert-section">
                  <ul className="align-items-center d-flex bd-highlight col-md-12">
                    <li className="p-2 flex-grow-1 bd-highlight close">
                      {" "}
                      <img src={close} />
                      İçerik Başlığı{" "}
                    </li>
                    <li className="p-2 bd-highlight">
                      <img src={alert} />
                    </li>
                    <li className="p-2 bd-highlight">
                      <img src={history} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="helpCenterContents-menu col-md-12">
                <ul className="d-flex justify-content-between">
                  <li className="col-4">
                    <Link to="/tasksDemands">Talep</Link>
                  </li>
                  <li className="col-4 active">
                      <Link to="/tasksContents">İçerik </Link>
                  </li>
                  <li className="col-4">
                    <Link to="/tasksMessages">
                      Mesajlar <span>6</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="helpCenter-contents">
        <div className="container justify-content-start">
          <div className="row">
            <div className="col-md-12">
              <div className="content-text">
                <h6>
                  Convallis facilisi amet purus mi parturient morbi dignissim
                  aliquam. Eu, aliquam sed commodo rhoncus. Iaculis sed arcu
                  molestie commodo scelerisque ut nam blandit vitae. Quam est
                  nibh augue enim commodo diam. Ac id habitasse et, nunc elit
                  rhoncus, blandit est. Pellentesque tellus vitae, mauris etiam
                  integer praesent.
                </h6>
                <h6>
                  Duis condimentum elit, nunc lectus leo amet ultricies enim,
                  consequat. Id sit elit a eget bibendum. Tellus senectus massa,
                  ut lobortis id eget. Risus mattis augue a morbi facilisi amet.
                  Quis at cum neque arcu.
                </h6>
                <h6>
                  Volutpat risus vestibulum, semper neque nunc commodo maecenas.
                  Adipiscing posuere semper tellus justo luctus et facilisi
                  amet. Sagittis velit suscipit mattis dui dignissim volutpat
                  pulvinar eget vitae. Ipsum faucibus leo sem ipsum, feugiat
                  enim eu. Sit aliquet donec quis facilisis risus in. At et,
                  adipiscing facilisis elementum hac. Etiam a interdum sit ante
                  montes, id egestas. Nunc, diam, eu, netus rutrum lacus tempor
                  gravida a, egestas. Bibendum hac tristique eleifend in. Risus
                  pellentesque ac imperdiet porttitor lectus proin suspendisse
                  integer a. Ut sed elementum tristique nisi. In ac duis ornare
                  non.
                </h6>
                <h3>İçerik Başlığı</h3>
                <h6>
                  Convallis facilisi amet purus mi parturient morbi dignissim
                  aliquam. Eu, aliquam sed commodo rhoncus. Iaculis sed arcu
                  molestie commodo scelerisque ut nam blandit vitae. Quam est
                  nibh augue enim commodo diam. Ac id habitasse et, nunc elit
                  rhoncus, blandit est. Pellentesque tellus vitae, mauris etiam
                  integer praesent.
                </h6>
                <h6>
                  Duis condimentum elit, nunc lectus leo amet ultricies enim,
                  consequat. Id sit elit a eget bibendum. Tellus senectus massa,
                  ut lobortis id eget. Risus mattis augue a morbi facilisi amet.
                  Quis at cum neque arcu.
                </h6>
                <h6>
                  Volutpat risus vestibulum, semper neque nunc commodo maecenas.
                  Adipiscing posuere semper tellus justo luctus et facilisi
                  amet. Sagittis velit suscipit mattis dui dignissim volutpat
                  pulvinar eget vitae. Ipsum faucibus leo sem ipsum, feugiat
                  enim eu. Sit aliquet donec quis facilisis risus in. At et,
                  adipiscing facilisis elementum hac. Etiam a interdum sit ante
                  montes, id egestas. Nunc, diam, eu, netus rutrum lacus tempor
                  gravida a, egestas. Bibendum hac tristique eleifend in. Risus
                  pellentesque ac imperdiet porttitor lectus proin suspendisse
                  integer a. Ut sed elementum tristique nisi. In ac duis ornare
                  non.
                </h6>
                <div className="example col-md-12">
                  <img src={example} />
                </div>
                <div className="subtitle">
                  Convallis facilisi amet purus mi parturient morbi dignissim
                  aliquam. Eu, aliquam sed commodo rhoncus. Iaculis sed arcu
                  molestie commodo scelerisque ut nam blandit vitae.
                </div>
                <hr></hr>
                <h3>İçerik Başlığı</h3>
                <h6>
                  Convallis facilisi amet purus mi parturient morbi dignissim
                  aliquam. Eu, aliquam sed commodo rhoncus. Iaculis sed arcu
                  molestie commodo scelerisque ut nam blandit vitae. Quam est
                  nibh augue enim commodo diam. Ac id habitasse et, nunc elit
                  rhoncus, blandit est. Pellentesque tellus vitae, mauris etiam
                  integer praesent.
                </h6>
                <h6>
                  Duis condimentum elit, nunc lectus leo amet ultricies enim,
                  consequat. Id sit elit a eget bibendum. Tellus senectus massa,
                  ut lobortis id eget. Risus mattis augue a morbi facilisi amet.
                  Quis at cum neque arcu.
                </h6>
                <h6>
                  Volutpat risus vestibulum, semper neque nunc commodo maecenas.
                  Adipiscing posuere semper tellus justo luctus et facilisi
                  amet. Sagittis velit suscipit mattis dui dignissim volutpat
                  pulvinar eget vitae. Ipsum faucibus leo sem ipsum, feugiat
                  enim eu. Sit aliquet donec quis facilisis risus in. At et,
                  adipiscing facilisis elementum hac. Etiam a interdum sit ante
                  montes, id egestas. Nunc, diam, eu, netus rutrum lacus tempor
                  gravida a, egestas. Bibendum hac tristique eleifend in. Risus
                  pellentesque ac imperdiet porttitor lectus proin suspendisse
                  integer a. Ut sed elementum tristique nisi. In ac duis ornare
                  non.
                </h6>
                <div className="accept d-flex justify-content-center">
                  <button>Dosya Yükle</button>
                  <button>Taslak Kaydet</button>
                  <button>Onaya Gönder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksContents;
