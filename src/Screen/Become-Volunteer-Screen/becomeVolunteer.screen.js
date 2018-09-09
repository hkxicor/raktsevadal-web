import React, { Component } from 'react';
import Form from "react-jsonschema-form";

//Utils
import { GetDb } from '../../Utils/firebase.utils';

//Constants
import { FAQ_SCENE_CONTENT } from '../../Constants/api.constants';

const schema = {
    title: 'Become Rakt Sevadal Volunteer',
    type: 'object',
    required: ['firstName', 'lastName', 'mobile', 'age', 'reason'],
    properties: {
        firstName: { type: 'string', title: 'Fist name', default: '' },
        lastName: { type: 'string', title: 'Last name', default: '' },
        mobile: { type: 'integer', title: 'Mobile number', default: '' },
        age: { type: 'integer', title: 'Age' },
        reason: { type: 'string', title: 'Reason to join rakt sevadal' },
    }
};

const uiSchema = {
    reason: {
        "ui:widget": "textarea"
    }
}

export default class BecomeVolunteerScreen extends Component {
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

    log = (type) => console.log.bind(console, type);

    render() {
        const { Components } = this.state;
        if (!(Object.keys(Components).length > 0)) {
            return null;
        }

        return (
            <div class="vc_row wpb_row vc_row-fluid vc_custom_1532234459040 vc_row-has-fill section-content-block">
                <div class="container">
                    <div class="row">
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div class="cta-layout-2">
                                        <div class="col-md-8 col-sm-12 text-left">
                                            <Form
                                                schema={schema}
                                                uiSchema={uiSchema}
                                                onChange={this.log("changed")}
                                                onSubmit={this.log("submitted")}
                                                onError={this.log("errors")}
                                            />
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
}