import React from "react";
import ThemeTogglerButton from "./theme-nested/theme-button";
import { ThemeContext, themes } from "./theme-nested/theme-context";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            console.log(this.state.theme);
            this.setState(state => ({
                theme: state.theme === themes.dark
                    ? themes.light
                    : themes.dark
            }));
        }

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Context />
            </ThemeContext.Provider>
        );
    }
}

function Context() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}