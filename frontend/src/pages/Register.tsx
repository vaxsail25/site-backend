import React from "react";
import RegisterForm from "../components/RegisterForm";
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
                <RegisterForm handleSubmit={handleSubmit} />
            </div>
        </main>
    );
};

export default Register;