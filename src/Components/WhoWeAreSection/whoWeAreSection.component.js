import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeAreSection = (props) => {
    if (!props.data || props.data.active != 1) {
        return null;
    }
    const metaData = props.data.metaData;

    return (
        <div class="vc_row wpb_row vc_row-fluid vc_custom_1532234459040 vc_row-has-fill section-content-block">
            <div class="container">
                <div class="row">
                    <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">
                                <div class="cta-layout-2">
                                    <div class="col-md-8 col-sm-12 text-left">
                                        <h2>{metaData.title}</h2>
                                        <p>{metaData.description}</p>
                                        {
                                            metaData.buttons.map((button) => (
                                                <div style={{ margin: 10, padding: 10 }} class="col-md-5 col-sm-12">
                                                    <Link
                                                        to={button.route}
                                                        title="REQUEST APPOINTMENT"
                                                        target=" _blank"
                                                        class="btn btn-cta-2 "
                                                    >
                                                        {button.title}
                                                    </Link>
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
        </div>
    )
}

export default WhoWeAreSection;