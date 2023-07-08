import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaEnvelope, FaMailBulk } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const onSubmit = (data: any) => {
        setIsSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError(false);
        emailjs.send('service_1hjjx84', "template_6c5qg1i", data, "oPv-ImeCaFvW6BC9O")
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsSubmitting(false);
                setSubmitSuccess(true);
            }, (err) => {
                console.log('FAILED...', err);
                setIsSubmitting(false);
                setSubmitError(true);
            });
    };
    return (
        <div id="contact" className="p-5 mt-20 ml-6 text-white flex flex-row text-left">
            <div className="w-1/4 space-y-5 mr-20">
                <h2 className="text-4xl md:text-9xl mb-5 font-bold">Get in Touch</h2>
            </div>

            <div className="w-3/4 mr-20 space-y-5 flex justify-end">
                <div className="p-4 bg-blendl rounded text-black w-2/3">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 pt-2">
                        <div>
                            <input
                                id="name"
                                type="text"
                                {...register("name", { required: true })}
                                className="form-input w-full p-2 text-white rounded bg-blendll  placeholder-white bg-blend-lighten"
                                placeholder="Your name"
                            />

                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div>
                            <input
                                id="company"
                                type="text"
                                {...register("company", { required: true })}
                                className="form-input w-full p-2 text-white rounded bg-blendll  placeholder-white bg-blend-lighten"
                                placeholder="Your company"
                            />
                            {errors.company && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div>
                            <input
                                id="email"
                                type="email"
                                {...register("email", { required: true })}
                                className="form-input w-full p-2 text-white rounded bg-blendll  placeholder-white bg-blend-lighten"
                                placeholder="Your email"
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div>
                            <textarea
                                id="message"
                                {...register("message", { required: true })}
                                className="w-full form-input p-2 rounded text-white resize-none bg-blendll placeholder-white placeholder-text-opacity-60  bg-blend-lighten"
                                placeholder="Your message"
                                rows={4}

                            />
                            {errors.message && <span className="text-red-500">This field is required</span>}
                        </div>

                        <button
                            type="submit"
                            className="py-2 px-4 border border-gray-100 text-gray-300 hover:bg-white hover:text-black transition duration-200 rounded opacity-70"
                            disabled={isSubmitting}
                        >
                            {!isSubmitting && !submitSuccess && !submitError && (
                                <>
                                    <FaMailBulk className="inline-block mr-2" />
                                    Submit
                                </>
                            )}
                            {isSubmitting && <span className="mr-2">Please wait.</span>}
                            {submitSuccess && <span className="mr-2">Success!</span>}
                            {submitError && <span className="mr-2">Failure</span>}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
