import React from 'react';

const ImageSlider = (props) => {
    const metaData = props.data.metaData;

    return (
        <div class="vc_row wpb_row vc_row-fluid vc_custom_1503723924172">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner vc_custom_1503724385808">
                    <div class="wpb_wrapper">
                        <div
                            class="slider-wrap  reddrop_buddies_custom kc_193020743"
                            data-custom_style="div.kc_193020743 .reddrop_buddies_slider .owl-nav div[class*='owl-']{background: #FE3C47 !important; color: #FFFFFF !important;}"
                        >
                            <div class="reddrop_buddies_slider slider_1 owl-carousel owl-theme"
                                data-nav="true" data-nav_icon_left="fa fa-long-arrow-left"
                                data-nav_icon_right="fa fa-long-arrow-right" data-autoplay="true"
                                data-autoplaytimeout="30000"
                            >
                                {
                                    metaData.slides.map((item) => (
                                        <div
                                            class="slider_item_container  reddrop_buddies_custom kc_228771788"
                                            data-custom_style=" div.kc_228771788 h2{ color:  !important;} div.kc_228771788 h3{ color:  !important;}.kc_228771788 .slider-contents-info:before{border-color:  !important;}.kc_228771788 .slider-contents-info:after{border-color:  !important;}"
                                            data-bg_type="image"
                                            data-bg_img={item.image}
                                            data-bg_color="#000000"
                                            data-bg_opacity="0.1"
                                            data-solid_bg="#000000"
                                        >
                                            <div class="item">
                                                <div class="slider-content">
                                                    <div class="container text-center">
                                                        <div class="row">
                                                            <div class="col-sm-12" data-animation-in="zoomIn"
                                                                data-animation-out="animate-out zoomOut">
                                                                <div
                                                                    class="slider-contents-info"
                                                                    style={{ background: 'rgba(255,255,255,0.93)' }}
                                                                >
                                                                    <div
                                                                        class="slider_title_content"
                                                                    >
                                                                        {item.description}
                                                                    </div>
                                                                    <div class="slider-button">
                                                                        <a
                                                                            href={item.buttonRoute}
                                                                            class="btn btn-slider "
                                                                        >
                                                                            {item.buttonTitle}
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ImageSlider;