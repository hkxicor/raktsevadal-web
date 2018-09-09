import React from 'react';

const NumbersOfDonations = (props) => {
    if (!props.data || props.data.active != 1) {
        return null;
    }
    const metaData = props.data.metaData;

    return (
        <div data-vc-parallax="1.5" class="vc_row wpb_row vc_row-fluid vc_custom_1503724961056 vc_row-has-fill vc_general vc_parallax vc_parallax-content-moving section-content-block">
            <div class="container">
                <div class="row">
                    <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">
                                <div class="row">
                                    {
                                        metaData.cards.map((item) => (
                                            <div class="col-md-3 col-sm-6 col-xs-12   text-center">
                                                <div class="counter-block-1">
                                                    <span class={item.class}></span>
                                                    <div class="count-info">
                                                        <span class="counter reddrop_buddies_counter_num"
                                                            data-disable_countup="0" data-time="5000"
                                                            data-delay="10">{item.number}</span>
                                                        <h4 class="clearfix">{item.name}</h4>
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
            </div>
        </div>
    )
}

export default NumbersOfDonations;