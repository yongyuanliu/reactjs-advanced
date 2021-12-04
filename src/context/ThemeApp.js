import React from "react";

const ThemeContext = React.createContext("light");
const UserContext = React.createContext({ name: "Guest" });

export default class App extends React.Component {
    render() {
        let { signedInUser, theme } = {
            signedInUser: {
                name: "matt"
            },
            theme: "dark"
        }
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    );
}

function Sidebar() {
    return (
        <div style={{ display: "inline-block" }}>Sidebar</div>
    );
}

class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                user: {this.props.user.name}
                <br />
                theme:{this.props.theme}
            </div>
        );
    }
}

function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => (
                        <ProfilePage user={user} theme={theme} />
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}