import React from "react";
import { AuthContext, fakeAuth } from "./user-context";

class SignoutButton extends React.Component {
    render() {
        let props = this.props;
        return (
            <button {...props} onClick={() => {
                fakeAuth.siginout(props.callback);
            }} />
        )
    }
}

SignoutButton.contextType = AuthContext;

export default SignoutButton;