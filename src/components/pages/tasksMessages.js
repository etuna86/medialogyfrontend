import React from "react";
import { Link, useLocation } from "react-router-dom";
import settings from "../../img/settings-bold.svg";
import alert from "../../img/alert.svg";
import history from "../../img/history.svg";
import circle from "../../img/messages-circle.svg";
import threePoints from "../../img/three-points.svg";
import smile from "../../img/smile.svg";
import close from "../../img/close-helpcenter.svg";

function TasksMessages() {
  return (
    <>
      <div className="helpcenterMessages-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="helpcenterMessages-title">
                <div className="writing-stage">
                  <img src={settings} />
                  Yazım aşamasında
                </div>
                <div className="alert-section">
                  <ul className="align-items-center d-flex bd-highlight col-md-12">
                    <li className="p-2 flex-grow-1 bd-highlight">
                      {" "}
                      <img src={close} />
                      Talep Başlığı{" "}
                    </li>
                    <li className="p-2 bd-highlight">
                      <a>
                        <img src={alert} />
                      </a>
                    </li>
                    <li className="p-2 bd-highlight">
                      <a>
                        <img src={history} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="helpcenterMessages-menu col-md-12">
                <ul className="d-flex justify-content-between">
                  <li className="col-4">
                    <Link to="/tasksDemands">Talep</Link>
                  </li>
                  <li className="col-4">
                    <Link to="/tasksContents">İçerik</Link>
                  </li>
                  <li className="col-4 active">
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
      <div className="helpCenterMessages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="messages-submit">
                <ul className="d-flex justify-content-between">
                  <li>
                    <img src={circle} />
                  </li>
                  <li>
                    <button>Gönder</button>
                    <img src={threePoints} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="helpCenterMessages-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 messages-contents-article">
                <ul className="d-flex justify-content-between">
                  <li>
                    <img src={circle} />
                    Username <span>Time</span>
                  </li>
                  <li>
                    <img src={smile} className="smile" />
                    <img src={threePoints} />
                  </li>
                </ul>
                <div className="col-md-12 content">
                  Convallis accumsan sed nisl condimentum aliquam sed fusce sed
                  elit. Diam egestas commodo proin potenti orci, etiam ligula
                  amet. Facilisi posuere nullam praesent amet vestibulum arcu
                  sit. Felis consectetur lorem enim, amet, orci dictum.
                  Convallis sagittis lacus iaculis phasellus tellus amet. Odio
                  potenti eu consequat egestas morbi et pharetra aliquet. Eu dis
                  accumsan ut venenatis rhoncus diam magna tortor. Sit dignissim
                  sed amet nibh volutpat gravida amet risus eget.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="helpCenterMessages-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 messages-contents-article">
                <ul className="d-flex justify-content-between">
                  <li>
                    <img src={circle} />
                    Username <span>Time</span>
                  </li>
                  <li>
                    <img src={smile} className="smile" />
                    <img src={threePoints} />
                  </li>
                </ul>
                <div className="col-md-12 content">
                  Libero eget sed pretium bibendum orci leo, ipsum pellentesque
                  risus. Mollis praesent pharetra condimentum vel nisl. Enim
                  faucibus posuere urna, rutrum gravida eu, faucibus et.
                  Porttitor iaculis lectus quam elit, quis. Sed maecenas morbi
                  sollicitudin volutpat blandit. Massa purus ut mauris nunc,
                  tempus blandit mi viverra. Quam massa arcu turpis ut urna sed.
                  Nibh nunc bibendum sit posuere fermentum. Vel pharetra
                  convallis in mauris non. Sit enim, massa velit eget vitae
                  amet, nisl tincidunt urna. Lorem eget malesuada turpis vitae
                  pretium vulputate ac egestas in. Phasellus viverra scelerisque
                  ultricies dictum risus. Molestie a euismod metus nunc, mauris
                  donec. Amet mauris convallis mattis massa. Cras eros ut at
                  posuere aliquet ut.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TasksMessages;
