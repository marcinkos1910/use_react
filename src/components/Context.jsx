import { createContext, useContext, useState } from "react";

const UserContext = createContext([{
    firstName: 'Lech',
    lastName: 'K',
    suffix: 1,
    email: 'LechK@krakow.pl'
}, () => {}])

function LevelFive () {
    const [user, setUser] = useContext(UserContext);

    return (
        <div>
            <h5>{user.firstName} {user.lastName}, {user.suffix}</h5>
            <button onClick={() => {
                // setUser({...user, suffix: user.suffix + 1})
                setUser(Object.assign({}, user, {suffix: user.suffix + 1}))
            }}>Increment</button>
        </div>
    )
}

function LevelFour() {
    return (
        <div>
            <h4>Fourth level</h4>
            <LevelFive/>
        </div>
    )
}

function LevelThree() {
    return (
        <div>
            <h4>Fourth level</h4>
            <LevelFour/>
        </div>
    )
}

function LevelTwo() {
    return (
        <div>
            <h4>Second level</h4>
            <LevelThree/>
        </div>
    )
}

function ContextComponent(){
    const userState = useState({
        firstName: 'Lech',
        lastName: 'K',
        suffix: 1,
        email: 'LechK@krakow.pl'
    });
    return (
        <UserContext.Provider value={userState}>
            <LevelTwo/>
        </UserContext.Provider>
    )
}

export default ContextComponent;