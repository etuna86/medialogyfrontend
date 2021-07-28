import React,{Component} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import LogoImg from '../../img/rawy_logo.png';
import diagonalArrow from '../../img/diagonal-arrow.svg';
import hand from '../../img/hand.svg';
import square from '../../img/square.svg';
import text from '../../img/text.svg';
import share from '../../img/share.svg';
import play from '../../img/play.svg';
import bell from '../../img/bell.svg';
import {Link,useLocation } from 'react-router-dom'


function Header (){

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo-section">
              <img src={LogoImg}   />
              </div> 
            </div>
            <div className="col-md-8">
                <div className="main-menu">
                  <ul>
                    <li><Link to="/">home</Link></li>
                    <li> <Link to="/secondpage">Secon Page</Link></li>
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );

}


export default Header;
