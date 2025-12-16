import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';

import Button from '@/Components/button';
import FormField from '@/Components/formField';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert(`Username: ${formData.username}\nEmail: ${formData.email}\nPassword: ${formData.password}\nConfirm Password: ${formData.confirmPassword}`);
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
                <div className="w-full max-w-[90%] flex gap-8">
                    {/* Left - Image container */}
                    <div className="hidden lg:flex lg:w-1/2 bg-[#065a70] rounded-2xl h-[600px] items-center justify-center">
                        <div className="text-white text-center">
                            <p className="font-fredoka text-2xl">Welcome</p>
                        </div>
                    </div>  

                    {/* Right - Form */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-[42px] font-bold mb-6 font-fredoka text-white text-center">Sign Up</h1>
                        
                        <form onSubmit={handleSubmit} className="w-[80%] mx-auto space-y-4">
                            <FormField name='username' value={formData.username} onChange={handleChange} required />

                            <FormField name='email' value={formData.email} onChange={handleChange} required />

                            <FormField name='password' value={formData.password} onChange={handleChange} required />

                            <FormField name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required />

                            <Button>Continue</Button>

                            <div className='text-center'>
                                <Link href='/login' className='font-poppins text-xs text-white hover:text-gray-300 underline'>
                                    Or log in to your account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}