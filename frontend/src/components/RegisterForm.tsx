import React from 'react';

interface RegisterFormProps {
    handleSubmit: (e: React.FormEvent) => void;
}       
const RegisterForm: React.FC<RegisterFormProps> = ({ handleSubmit }) => {
    return (
        <div className="wrapper">
            <form className="main-form" onSubmit={handleSubmit}>
                <h2>Sign up</h2>
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
                <button type="submit" className="btn">Sing up</button>
            </form>
        </div>
    )}

export default RegisterForm;