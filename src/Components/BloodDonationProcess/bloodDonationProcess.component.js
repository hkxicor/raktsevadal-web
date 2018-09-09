import React from 'react';

const BloodDonationProcess = (props) => {
    if (!props.data || props.data.active != 1) {
        return null;
    }
    const metaData = props.data.metaData;

    return (
        <div class="vc_row wpb_row vc_row-fluid vc_custom_1505154042825 section-content-block">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner ">
                    <div class="wpb_wrapper">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 section-heading-container text-center   ">
                                <h2 class="section-heading">{metaData.title}</h2><span class="heading-separator-img"><img
                                    src="wp_reddrop_buddies/wp-content/themes/reddrop-buddies/images/separator.png"
                                    alt="" /></span>
                                <h3 class="section-subheading">{metaData.description}</h3>
                            </div>
                        </div>
                        <div class="row process-block ">
                            {
                                metaData.steps.map((step, index) => (
                                    <div class="col-md-3 col-sm-6 col-xs-12  ">
                                        <div class="process-layout text-left">
                                            <figure class="process-img">
                                                <img width="400" height="306"
                                                    src={step.image}
                                                    class="attachment-full size-full" alt=""
                                                    srcset="wp_reddrop_buddies/wp-content/uploads/2017/08/process_1.jpg 400w, wp_reddrop_buddies/wp-content/uploads/2017/08/process_1-300x230.jpg 300w"
                                                    sizes="(max-width: 400px) 100vw, 400px" />
                                                <div class="step"></div>
                                            </figure>
                                            <article class="process-info">
                                                <h2>{step.title}</h2>
                                                <p>{step.description}</p>
                                            </article>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BloodDonationProcess;