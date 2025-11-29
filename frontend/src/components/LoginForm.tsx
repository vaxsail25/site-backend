import React from 'react';

interface LoginFormProps {
    handleSubmit: (e: React.FormEvent) => void;
}       
const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit }) => {
    return (
        <div className="wrapper">
            <form className="main-form" onSubmit={handleSubmit}>
                <h2>Sing in</h2>
                <div className="input-box">
                    <input id="input-username" name='user' type='text' placeholder="Username"></input>
                </div>
                <div className="input-box">
                    <input id="input-password" name='password' type='password' placeholder="Password"></input>
                </div>
                <div className="remember">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" className="btn">Sing in</button>
            </form>
        </div>
    );
}

export default LoginForm;