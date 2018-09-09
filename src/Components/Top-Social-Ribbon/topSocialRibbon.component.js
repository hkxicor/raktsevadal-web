import React from 'react';

const TopSocialRibbon = (props) => {
    if (!props.data || props.data.active != 1) {
        return null;
    }
    const metaData = props.data.metaData;

    return (
        <div id="toolbar" class="hidden-xs hidden-sm">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6 col-toolbar-left">
                        <div class="toolbar-left">
                            <p>{metaData.tagLine}</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-toolbar-right">
                        <div class="toolbar-right">
                            <div class="top-bar-social">
                                {
                                    metaData.social.map((item) => (
                                        <a href={item.link}><i class={item.class}></i></a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSocialRibbon;