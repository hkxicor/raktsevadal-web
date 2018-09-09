import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Common Components
import TopSocialRibbon from '../Components/Top-Social-Ribbon/topSocialRibbon.component';
import Header from '../Components/Header/header.component';
import Footer from '../Components/Footer/footer.component';

//Screens
import HomeScreen from '../Screen/Home-Screen/home.screen';
import FAQScreen from '../Screen/FAQ-Screen/faq.screen';
import LoginScreen from '../Screen/Login-Screen/login.screen';
import BecomeVolunteerScreen from '../Screen/Become-Volunteer-Screen/becomeVolunteer.screen';

//Utils
import { GetDb } from '../Utils/firebase.utils';

//Constants
import { COMMON_CONTENT } from '../Constants/api.constants';

class RootNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Components: {},
        }
    }

    componentDidMount = () => {
        const db = GetDb();
        const ref = db.ref(COMMON_CONTENT);

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
            <Router>
                <div>
                    <div id="page" class="hfeed site"></div>
                    <div class="header-style-default">
                        <TopSocialRibbon data={Components.TopSocialRibbon} />
                        <Header data={Components.Header} />
                    </div>
                    <div>
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/faq" component={FAQScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/register-as-doner" component={LoginScreen} />
                        <Route exact path="/become-volunteer" component={BecomeVolunteerScreen} />
                    </div>
                    <Footer data={Components.Footer} />
                </div>
            </Router>
        )
    }
}

export default RootNavigator;