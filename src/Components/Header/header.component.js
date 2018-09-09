import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    if (!props.data || props.data.active != 1) {
        return null;
    }
    const metaData = props.data.metaData;

    return (
        < header id="masthead" class="site-header header-sticky" >
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12 col-site-logo">
                        <div class="site-logo">
                            <a
                                href="/"
                                title={metaData.appName}
                            >
                                <img
                                    class=""
                                    src={metaData.logo}
                                    alt={metaData.appName}
                                />
                            </a>
                        </div>
                    </div>
                    <div class="col-md-9 col-sm-12 col-primary-menu">
                        <div class="menu-reddrop_buddies">
                            <nav id="site-navigation" class="main-navigation">
                                <button class="menu-toggle" aria-expanded="false">
                                    <span class="fa fa-align-justify"></span>
                                </button>
                                <div class="site_primary_menu">
                                    <ul id="menu-main-menu" class="menu theme_primary_menu">
                                        {
                                            metaData.pages.map((item) => {
                                                return item.active == 1 ?
                                                    <li
                                                        id="menu-item-988"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-988">
                                                        <Link to={item.route}>{item.name}</Link>
                                                    </li>
                                                    : null
                                            })
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;