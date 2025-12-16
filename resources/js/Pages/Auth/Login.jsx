import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

import Button from '@/Components/button';
import FormField from '@/Components/formField';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Head title="Log In" />
            
            <div className="min-h-screen bg-[#087592] py-48 px-4 flex justify-center">
                <div className="w-full max-w-2xl">
                    <h1 className="text-[42px] font-bold mb-6 font-fredoka text-white text-center">Log In</h1>
                    
                    <form onSubmit={handleSubmit} className="w-[80%] mx-auto space-y-4">
                        <FormField name='email' value={formData.email} onChange={handleChange} required />

                        <FormField name='password' value={formData.password} onChange={handleChange} required />

                        <Button>Continue</Button>

                        <div className='text-center'>
                            <Link href='/register' className='font-poppins text-xs text-white hover:text-gray-300 underline'>
                                Or sign up for an account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}