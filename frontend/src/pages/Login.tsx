import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const username = (document.getElementById("input-username") as HTMLInputElement).value;
        const password = (document.getElementById("input-password") as HTMLInputElement).value;

        const res = await fetch("/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
            console.log(data);
    };
    return (
        <main>
            <div className='container'>    
                <LoginForm handleSubmit={handleSubmit} />
            </div>
        </main>
    );
};

export default Login;