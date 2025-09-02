// שימוש ב useContext

import { useState, createContext, useContext } from 'react'

export default function Task1Fixed() {
    return (
        <div>
            <AppTop />

        </div>
    )
}

// type User = {
//     name: string | null
// }

const UserContext = createContext("");
// const UserContext: User = createContext();

function AppTop() {
    const [user, setUser] = useState('alice');
    // const [user, setUser]:User = useState({});

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <UserProfile />
        </UserContext.Provider>
    );
}

function UserProfile() {
    return (
        <>
            <h1>Component 2</h1>
            <UserName />
        </>
    );
}

// בתחילת הקובץ - לעשות:
// import { UserContext } from "./"; // ??
// import { useState, createContext, useContext } from "react";

function UserName() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again only one`}</h2>
        </>
    );
}

function UserGreeting() {
    const name = useContext(UserContext);
    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${name} again more two`}</h2>
        </>
    )
}

// function appFixed() {
//     // const [name, setName] = useState("alice");

// }
