import React, { Component } from 'react';

//Components
import PageTitle from '../../Components/Page-Title/pageTitle.component';
import FAQSection from '../../Components/FAQSection/faqSection.component';

//Utils
import { GetDb } from '../../Utils/firebase.utils';

//Constants
import { FAQ_SCENE_CONTENT } from '../../Constants/api.constants';

export default class FAQScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Components: {},
        }
    }

    componentDidMount = () => {
        const db = GetDb();
        const ref = db.ref(FAQ_SCENE_CONTENT);

        ref.on("value", this.getData, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    getData = (snapshot) => {
        this.setState({ Components: snapshot.val() });
    }

    render() {
        const { Components } = this.state;
        console.log('Components', Components)
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
                                    <PageTitle page={Components.PageTitle.metaData.title} />
                                    <FAQSection data={Components.FAQSection} />
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}