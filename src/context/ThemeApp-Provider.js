import React from "react";
import ThemedButton from "./theme/theme-button";
import { ThemeContext, themes } from "./theme/theme-context";
import SigninButton from "./user/signin-button";
import SignoutButton from "./user/signout-button";
import { AuthContext, fakeAuth } from "./user/user-context";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
            user: fakeAuth.user,
        }
        this.toggleTheme = () => {
            console.log(this.state);
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        }
        console.log(fakeAuth.user);
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <AuthContext.Provider value={this.state.user}>
                    {
                        this.state.user === null ? <SigninButton name="Yongyuan" callback={() => {
                            this.setState({ user: fakeAuth.user });
                        }}>登录</SigninButton>
                            : <SignoutButton callback={() => {
                                this.setState({ user: fakeAuth.user });
                            }}>登出</SignoutButton>
                    }

                </AuthContext.Provider>
            </div>
        )
    }
}

function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}