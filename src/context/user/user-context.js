import React from "react";

export const fakeAuth = {
    user: null,
    sigin(user, callback) {
        console.log("sign: %s", user);
        fakeAuth.user = user;
        callback();
    },
    siginout(callback) {
        console.log("signout")
        fakeAuth.user = null;
        callback();
    }
}

export const AuthContext = React.createContext(fakeAuth.user);