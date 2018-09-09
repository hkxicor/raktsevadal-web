import React, { Component } from 'react';

// Components
import TopSocialRibbon from '../../Components/Top-Social-Ribbon/topSocialRibbon.component';
import Header from '../../Components/Header/header.component';
import ImageSlider from '../../Components/Image-Slider/imageSlider.component';
import WhoWeAreSection from '../../Components/WhoWeAreSection/whoWeAreSection.component';
import BloodDonationProcess from '../../Components/BloodDonationProcess/bloodDonationProcess.component';
import NumbersOfDonations from '../../Components/NumbersOfDonations/numbersOfDonations.component';
// import Testimonial from '../../Components/Testimonial/testimonial.component';
import BecomeVolunteer from '../../Components/BecomeVolunteer/becomeVolunteer.component';
import Footer from '../../Components/Footer/footer.component';

//Utils
import { GetDb } from '../../Utils/firebase.utils';

//Constants
import { HOME_SCENE_CONTENT } from '../../Constants/api.constants';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Components: {},
        }
    }

    componentDidMount = () => {
        const db = GetDb();
        const ref = db.ref(HOME_SCENE_CONTENT);

        ref.on("value", this.getData, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    getData = (snapshot) => {
        this.setState({ Components: snapshot.val() });
    }

    render() {
        const { Components } = this.state;
        if (!(Object.keys(Components).length > 0)) {
            return null;
        }

        return (
            <div id="content" class="site-content">
                <div class="row">
                    <div id="primary" class="">
                        <main id="main" class="site-main">
                            <article id="post-2" class="post-2 page type-page status-publish hentry">
                                <div class="entry-content">
                                    <ImageSlider data={Components.ImageSlider} />
                                    <WhoWeAreSection data={Components.WhoWeAreSection} />
                                    <BloodDonationProcess data={Components.BloodDonationProcess} />
                                    <NumbersOfDonations data={Components.NumbersOfDonations} />
                                    {/* <Testimonial /> */}
                                    <BecomeVolunteer />
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}