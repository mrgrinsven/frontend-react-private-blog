import React, {useState} from 'react';

import './Login.css';
import users from '../../data/users.json'

const Login = ({auth, authToggle}) => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        warning: '',
    });

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.value;
        setUser({
            ...user,
            [changedFieldName]: newValue,
        });
    }

    function handlePassword(e) {
        const userData = users.find(user => user.user);
        if (user.username === userData.user && user.password === userData.password) {
            authToggle(true);
            setUser({
                ...user,
                warning: '',
                username: '',
                password: '',
            });
        } else {
            e.preventDefault();
            setUser({
                ...user,
                warning: 'Gebruikersnaam of wachtwoord onjuist',
                username: '',
                password: '',
            });
        }
    }
    function handleKeypress(e) {
        if (e.keyCode === 'Enter'){
            handlePassword();
        }
    }

    return (
        <>
            <h1>Login pagina</h1>
            {auth ?
                <p>Je bent ingelogd</p>
                :
                <div>
                    <p>Vul je gebruikersnaam en wachtwoord in</p>
                    <form onSubmit={handlePassword}>
                        <label htmlFor="username-input">
                            Gebruikersnaam
                            <input
                                type='text'
                                name='username'
                                id='username-input'
                                placeholder='Gebruikersnaam'
                                onChange={handleChange}
                                value={user.username}
                                onKeyUp={handleKeypress}
                            />
                        </label>

                        <label htmlFor='password-input'>
                            Wachtwoord
                            <input
                                type='password'
                                name='password'
                                id='password-input'
                                placeholder='Wachtwoord'
                                onChange={handleChange}
                                value={user.password}
                                onKeyUp={handleKeypress}
                            />
                        </label>

                        <p className='password-warning'>{user.warning}</p>

                        <button
                            type='submit'
                        >
                            inloggen
                        </button>

                    </form>
                </div>
            }
        </>
    );
};

export default Login;