import React from "react";
import { AuthContext, fakeAuth } from "./user-context";

class SigninButton extends React.Component {
    render() {
        let props = this.props;
        return (
            <button {...props} onClick={() => {
                fakeAuth.sigin(props.name, props.callback);
            }} />
        )
    }
}

SigninButton.contextType = AuthContext;

export default SigninButton;