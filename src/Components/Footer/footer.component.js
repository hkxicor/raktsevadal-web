import React from 'react';

const Footer = (props) => {
    if (!props.data || props.data.active != 1) {
        return null;
    }
    const metaData = props.data.metaData;

    return (
        <div class="bottom-footer-container">
            <div class="bottom-footer-container-overlay">
                <div id="bottom">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-4 col-sm-12">
                                <aside id="text-17" class="widget widget_text">
                                    <h3 class="widget-title">CONTACT US</h3>
                                    <div class="textwidget">
                                        <div class="contact-text-widget">
                                            <div class="info-block"><i class="fa fa-envelope-o fa-contact"></i><a href="#">support@examples.com</a><br />
                                                <a href="#">{metaData.email}</a></div>
                                            <div class="info-block">
                                                <i class="fa fa-envelope-o fa-contact"></i>
                                                {metaData.address}
                                            </div>
                                            <div class="info-block"><i class="fa fa-envelope-o fa-contact"></i>Office:
                                                {metaData.office1}<br />
                                                Cell: {metaData.office2}</div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            {/* <div class="col-md-4 col-sm-12">
                            <aside id="text-18" class="widget widget_text">
                                <h3 class="widget-title">SUPPORT LINKS</h3>
                                <div class="textwidget">
                                    <ul class="footer-useful-links">
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Thalassemia</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Cell Elofrosis</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Myelodysasia</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Blood Count</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Hemolytimia</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Ychromas Eosis</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Hyrcoagulable</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Thrombo Xtosis</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Sicklenemiaxs</a></li>
                                        <li><a href="#"><i class="fa fa-caret-right fa-footer"></i>Aplastic Anemia</a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div> */}
                        </div>

                    </div>
                </div>
                <footer id="colophon" class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="copyright">
                                    Copyright 2018 - {metaData.venture}. All Rights Reserved.
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <nav>
                                    <ul id="menu-footer-menu" class="footer-menu">
                                        {
                                            metaData.extra.map((item) => (
                                                <li
                                                    id="menu-item-89"
                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-89"
                                                >
                                                    <a href="/" >{item}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;