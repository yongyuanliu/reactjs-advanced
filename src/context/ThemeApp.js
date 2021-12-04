import React from "react";
import ThemedButton from "./theme/theme-button";
import { ThemeContext, themes } from "./theme/theme-context";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light
        }
        this.toggleTheme = () => {
            console.log(this.state);
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark
            }))
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
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