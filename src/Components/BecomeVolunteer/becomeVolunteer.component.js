import React from 'react';
import { Link } from 'react-router-dom';

const BecomeVolunteer = (props) => (
    <div class="vc_row wpb_row vc_row-fluid vc_custom_1503723673912 vc_row-has-fill section-content-block">
        <div class="container">
            <div class="row">
                <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                            <div class="text-center cta-layout-1">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h2>JOIN WITH US AND SAVE LIFE</h2>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <Link
                                        to="/become-volunteer"
                                        title="BECOME VOLUNTEER"
                                        target=" _blank"
                                        class="btn btn-cta-1"
                                    >
                                        BECOME VOLUNTEER
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default BecomeVolunteer;