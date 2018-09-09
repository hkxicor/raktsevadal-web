import React from 'react';

const FAQSection = (props) => {
    if (!props.data || props.data.active != 1) {
        return null;
    }
    const metaData = props.data.metaData;

    return (
        <div id="content" class="site-content">
            <div class="row">
                <div id="primary" class="col-md-12 col-lg-12">
                    <main id="main" class="site-main">
                        <article id="post-1976" class="post-1976 page type-page status-publish hentry">
                            <div class="entry-content">
                                <div class="vc_row wpb_row vc_row-fluid vc_custom_1497422567860 vc_row-has-fill section-content-block">
                                    <div class="container">
                                        <div class="row">
                                            <div class="wpb_column vc_column_container vc_col-sm-12">
                                                <div class="vc_column-inner ">
                                                    <div class="wpb_wrapper">
                                                        <div class="row">
                                                            <div class="col-md-12 col-sm-12 section-heading-container text-center   ">
                                                                <h2 class="section-heading">FAQS</h2><span class="heading-separator-img"><img
                                                                    src="../wp_reddrop_buddies/wp-content/themes/reddrop-buddies/images/separator.png"
                                                                    alt="" /></span>
                                                                <h3 class="section-subheading"> know more about blood donation and know how you can help people. </h3>
                                                            </div>
                                                        </div>
                                                        <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                                            {
                                                                metaData.faqs.map((item, index) => {
                                                                    return (
                                                                        <div class="panel panel-default faq-box">
                                                                            <div class="panel-heading">
                                                                                <h4 class="panel-title">
                                                                                    <a class="accordion-toggle collapsed"
                                                                                        data-toggle="collapse"
                                                                                        data-parent="#accordion_3019669790"
                                                                                        href={`#faq_child_1272048865${index}`}>{item.q}</a>
                                                                                </h4>
                                                                            </div>
                                                                            <div id={`#faq_child_1272048865${index}`}
                                                                                class="panel-details">
                                                                                <div class="panel-body">{item.a}</div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default FAQSection;