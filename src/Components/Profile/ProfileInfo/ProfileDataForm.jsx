import obj from "./ProfileInfo.module.css";
import {Element} from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import React from "react";
import style from "../../common/FormsControls/FormsControls.module.css";

const Input = Element("input");
const Textarea = Element("textarea");

const ProfileDataForm = ({userProfile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <div>
                { error && <div className={style.summaryError}>⚠ {error}</div> }
            </div>
            <div className={obj.userName}>
                <b>Full name: </b>
                <Field placeholder="Full name"
                       component={Input}
                       validate={[]}
                       name="fullName"/>
            </div>
            <div>
                <div>
                    <b>Looking for a job: </b>
                    <Field placeholder=""
                           type="checkbox"
                           component={Input}
                           validate={[]}
                           name="lookingForAJob"/>
                </div>
                <div>
                    <b>My professional skills: </b>
                    <Field placeholder="My professional skills"
                           component={Textarea}
                           validate={[]}
                           name="lookingForAJobDescription"/>
                </div>
                <div>
                    <b>About me:</b>
                    <Field placeholder="About me"
                           component={Textarea}
                           validate={[]}
                           name="aboutMe"/>
                </div>
                <div>
                    <b>Contacts:</b> {Object.keys(userProfile.contacts).map((key) => {
                        return (
                            <div key={key}>
                                <b>{key}</b>
                                <Field placeholder={key}
                                       component={Input}
                                       validate={[]}
                                       name={"contacts." + key}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);

export default ProfileDataReduxForm;