// src/pages/Contact.tsx

import React from 'react';
import { useForm } from "react-hook-form";
import { FaBiohazard, FaCode, FaEnvelope, FaMailBulk } from 'react-icons/fa';

const Contact: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        const { name, email, message } = data;
        const mailtoLink = `mailto:ryandonofrio@gmail.com?subject=Contact From ${name}&body=${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div id="contact" className="p-5 bg-blender text-white">
            <h2 className="text-2xl mb-5 font-bold"><FaEnvelope className="inline-block mr-2 mb-1" />Get in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block mb-2 text-2xl">Name</label>
                    <input
                        id="name"
                        type="text"
                        {...register("name", { required: true })}
                        className="w-full p-2 border text-black border-gray-300 rounded"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-2xl">Message</label>
                    <textarea
                        id="message"
                        {...register("message", { required: true })}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        rows={4}
                    />
                    {errors.message && <span className="text-red-500">This field is required</span>}
                </div>

                <button type="submit" className="py-2 px-4 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded text-white">
                    <FaMailBulk className="inline-block mr-2" /> Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
