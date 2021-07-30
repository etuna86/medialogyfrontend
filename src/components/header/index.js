import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoImg from "../../img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../../img/squared.svg";
import notification from "../../img/notification.svg";
import settings from "../../img/settings.svg";
import mainPage from "../../img/main-page.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="logo-section">
              <a><Link to="/"><img src={LogoImg} /></Link></a>
            </div>
          </div>
          <div className="col-6">
            <div className="main-menu">
              <ul>
                <li className="active"><Link to="/"><img src={LogoIcon} />Talepler</Link></li>
                <li><Link to="/tasks"><img src={LogoIcon} />Görevlerim</Link></li>
                <li><Link to="/helpCenter"><img src={LogoIcon} />Yardım Merkezi</Link></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="settings">
              <ul className="d-flex align-items-center">
              <li><a><Link to="/"><img className="notification" src={notification} /></Link></a></li>                
                <li><a><Link to="/"><img className="setting" src={settings} /></Link></a></li>
                <li><a><Link to="/"><img className="icon" src={mainPage} /></Link></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
