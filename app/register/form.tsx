'use client';

import { FormEvent } from "react";

export default function form(){
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {    
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch ('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        });
        console.log({response});
    };
    return (
        <form onSubmit={handleSubmit} 
        className="flex flex-col gap-2 mx-auto max-w-md mt-10">
            <input name="email" placeholder="email" type="email" />
            <input name="password" placeholder="password"  type="password" />
            <button type="submit">register</button>
        </form>
    );
}