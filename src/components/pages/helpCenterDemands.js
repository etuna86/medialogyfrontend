import React from "react";
import settings from "../../img/settings-bold.svg";
import alert from "../../img/alert.svg";
import history from "../../img/history.svg";
import close from "../../img/close-helpcenter.svg";
import price from "../../img/price.svg";
import hourglass from "../../img/hourglass.svg";
import medialogyEcom from "../../img/medialogy-ecom.svg";
import example from "../../img/example-image.svg";
import { Link, useLocation } from "react-router-dom";

function HelpCenterDemands() {
  return (
    <>
      <div className="helpCenterDemands">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="helpcenter-title">
                <div className="writing-stage">
                  <img src={settings} />
                  Yazım aşamasında
                </div>
                <div className="alert-section">
                  <ul className="align-items-center d-flex bd-highlight col-md-12">
                    <li className="p-2 flex-grow-1 bd-highlight">
                      {" "}
                      Talep Başlığı{" "}
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
              <div className="helpCenter-menu col-md-12">
                <ul className="d-flex justify-content-between">
                  <li className="col-md-4 active">
                    <Link to="/helpCenterDemands">Talep</Link>
                  </li>
                  <li className="col-md-4">
                    <Link to="/helpCenterContents">İçerik</Link>
                  </li>
                  <li className="col-md-4">
                    <Link to="/helpCenterMessages">
                      Mesajlar <span>6</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="helpCenter-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="article">
                <ul>
                  <li>
                    <div className="brief">
                      <a>Ön Bilgi </a>
                    </div>
                  </li>
                  <li>Brief</li>
                  <li>Referanslar</li>
                  <li>Görsel Kullanımı</li>
                  <li>Dökümanlar</li>
                  <li>Diğer</li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="features">
                <div className="items">
                  <ul className="align-items-center">
                    <li>
                      <img src={hourglass} />
                      8g 6sa 15dk 10sn
                    </li>
                    <li>
                      <img src={medialogyEcom} /> Meadialogy Expo
                    </li>
                    <li>
                      <img src={price} />
                      132.50 TL
                    </li>
                  </ul>
                </div>
                <div className="brief-text">
                  <h1> Ön Bilgi </h1>
                  <h3>Konu Başlığı</h3>
                  <h6>
                    Lobortis sed dolor tellus sem integer sit tempor. Metus,
                    nibh lacus arcu mauris nibh adipiscing bibendum iaculis.
                  </h6>
                  <h3>Yayıncı ve hedef kitlesi hakkında</h3>
                  <h6>
                    Leo sed magna turpis at morbi in tincidunt amet. Ultrices
                    non lectus bibendum ultricies morbi rhoncus posuere. Libero
                    in vitae in risus mattis accumsan pharetra. Nec adipiscing
                    scelerisque velit suspendisse nisi. Euismod ac vel amet ac
                    bibendum. Purus urna sapien donec mi, pharetra nulla tortor
                    consectetur sollicitudin. Velit quam facilisis proin viverra
                    dignissim. Hac viverra blandit imperdiet viverra viverra mi,
                    porttitor. Laoreet elit diam, libero augue nisl odio. Augue
                    viverra nec pharetra, in sed curabitur dignissim facilisis.
                    Molestie quis enim leo netus tempus libero pellentesque.
                  </h6>
                  <h3>Kategori</h3>
                  <h6>Ipsum gravida pharetra accumsan consequat.</h6>
                  <h3>Web sitesi</h3>
                  <h6>www.internet.com</h6>
                  <hr></hr>
                  <h1>İçerik Detayları (Brief)</h1>
                  <h3>İçerik tipi</h3>
                  <h6>Laoreet ipsum amet eu, pellentesque.</h6>
                  <h3>İçerik hakkında</h3>
                  <h6>
                    Leo sed magna turpis at morbi in tincidunt amet. Ultrices
                    non lectus bibendum ultricies morbi rhoncus posuere. Libero
                    in vitae in risus mattis accumsan pharetra. Nec adipiscing
                    scelerisque velit suspendisse nisi. Euismod ac vel amet ac
                    bibendum. Purus urna sapien donec mi, pharetra nulla tortor
                    consectetur sollicitudin. Velit quam facilisis proin viverra
                    dignissim. Hac viverra blandit imperdiet viverra viverra mi,
                    porttitor. Laoreet elit diam, libero augue nisl odio. Augue
                    viverra nec pharetra, in sed curabitur dignissim facilisis.
                    Molestie quis enim leo netus tempus libero pellentesque.
                  </h6>
                  <h3>Konu başlıkları</h3>
                  <h6>
                    Laoreet ipsum amet eu, pellentesque. Laoreet ipsum amet eu,
                    pellentesque. Laoreet ipsum amet eu, pellentesque. Laoreet
                    ipsum amet eu, pellentesque. Laoreet ipsum amet eu,
                    pellentesque.
                  </h6>
                  <h3>Dili</h3>
                  <h6>Laoreet ipsum amet eu, pellentesque.</h6>
                  <h3>Kısıtlar</h3>
                  <h6>Ipsum gravida pharetra accumsan consequat.</h6>
                  <h3>Duygu</h3>
                  <h6>Laoreet ipsum amet eu, pellentesque.</h6>
                  <h3>Anahtar kelimeler</h3>
                  <h6>
                    <div className="tags">
                      <ul className="d-flex  justify-content-start">
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
                  </h6>
                  <hr></hr>
                  <h1>Referanslar</h1>
                  <h3>Örnek İçerik Başlığı 2</h3>
                  <h6>
                    Adipiscing lectus et ultrices donec nec urna donec integer
                    velit. Tellus fames aliquet aliquet arcu enim venenatis,
                    cursus at. Ut nullam vel venenatis eget id. Orci ut massa,
                    tempor phasellus ullamcorper. Cursus et ut porttitor commodo
                    porttitor vitae egestas. Nec pharetra volutpat, pulvinar dui
                    quis ipsum sodales vulputate vivamus. Neque elementum
                    scelerisque purus nisi fames facilisis.
                  </h6>
                  <h3>Örnek İçerik Başlığı 1</h3>
                  <h6>
                    Feugiat sed eget parturient vestibulum. Posuere morbi tempus
                    eu sed dictum. Id nisi, vitae elementum morbi sed. Tellus
                    tincidunt sem ultrices volutpat platea sagittis est. Cursus
                    et ipsum in ultricies auctor quam placerat. Eget euismod
                    habitasse semper dictum porttitor. Habitant euismod morbi
                    risus facilisi nisi pellentesque faucibus dolor. Amet,
                    euismod et placerat sem. Risus consequat quis suscipit
                    auctor vehicula.
                  </h6>
                  <h3>İndirilebilir Referanslar</h3>
                  <div className="images">
                    <ul className="d-flex align-items-start">
                      <li>
                        <img src={example} />
                      </li>
                      <li>
                        <img src={example} />
                      </li>
                      <li>
                        <img src={example} />
                      </li>
                      <li>
                        <img src={example} />
                      </li>
                    </ul>
                  </div>
                  <h3>Dış Kaynaklar</h3>
                  <h6>
                    https://geekyapar.com/geek-dosya/ya-bizi-sararsa-makine-hasreti-steampunk-estetigi-ve-insanlik/
                    https://sherpa.digital/en/thoughts/affordances-in-user-experience-design/?utm_source=signature&utm_medium=email&utm_campaign=promo04
                  </h6>
                  <hr></hr>
                  <h1>Görsel Kullanımı</h1>
                  <h3>Ön Bilgi</h3>
                  <h6>
                    Adipiscing lectus et ultrices donec nec urna donec integer
                    velit. Tellus fames aliquet aliquet arcu enim venenatis,
                    cursus at. Ut nullam vel venenatis eget id. Orci ut massa,
                    tempor phasellus ullamcorper. Cursus et ut porttitor commodo
                    porttitor vitae egestas. Nec pharetra volutpat, pulvinar dui
                    quis ipsum sodales vulputate vivamus. Neque elementum
                    scelerisque purus nisi fames facilisis.
                  </h6>
                  <div className="images col-md-12">
                    <ul className="d-flex align-items-start">
                      <li>
                        <img src={example} />
                      </li>
                      <li>
                        <img src={example} />
                      </li>
                      <li>
                        <img src={example} />
                      </li>
                      <li>
                        <img src={example} />
                      </li>
                      <li>
                        <img src={example} />
                      </li>
                    </ul>
                  </div>
                  <h3>Dış Kaynaklar</h3>
                  <h6>
                    <a href="/">
                      https://geekyapar.com/geek-dosya/ya-bizi-sararsa-makine-hasreti-steampunk-estetigi-ve-insanlik/{" "}
                    </a>
                    <a href="/">
                      https://sherpa.digital/en/thoughts/affordances-in-user-experience-design/?utm_source=signature&utm_medium=email&utm_campaign=promo04
                    </a>
                  </h6>
                  <div className="accept d-flex justify-content-center">
                    <button>Talebi Reddet</button>
                    <button>Talebi Görevlerime Ekle</button>
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

export default HelpCenterDemands;
