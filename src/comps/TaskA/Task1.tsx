
import { useState } from 'react';

export default function Task1() {
    return (
        <div>
            <AppTop />
        </div>
    )
}

 function AppTop() {
    const [user, setUser] = useState("Alice");

    return (
        <>
            <h1>{`Hello ${user}!`}</h1>
            <UserProfile user={user} />
        </>
    );
}

function UserProfile({ user }) {
    return (
        <>
            <h1>Component 2</h1>
            <UserName user={user} />
        </>
    );
}

function UserName({ user }) {
    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}