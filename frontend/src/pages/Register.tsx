import React from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const username = (document.getElementById("input-username") as HTMLInputElement).value;
        const password = (document.getElementById("input-password") as HTMLInputElement).value;

        const res = await fetch("/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (data.success) {
            navigate("/");
            console.log(data);
        } else {
            console.log(data);
        }
    };
    return (
        <main>
            <div className='container'>
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
            </div>
        </main>
    );
};

export default Register;