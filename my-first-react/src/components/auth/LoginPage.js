import React from 'react';
// import T from 'prop-types';
import './LoginPage.css';
import Button from '../shared/Button'

class LoginPage extends React.Component { 
    render() {
        return (
            <div className="LoginPage">
                <h1 className="loginPage-title">Log in to Twitter</h1>
                <form>
                    <input type="text"/>
                    <input type="password" />
                    <Button
                        type="submit"
                        className="loginPage-button"
                        variant="primary"
                        disabled
                    >
                    Log In
                    </Button>
                </form>
            </div>
        );
    }
}

export default LoginPage;