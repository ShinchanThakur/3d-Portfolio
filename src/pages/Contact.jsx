import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        setForm((prevForm) => {
            return { ...prevForm, [e.target.name]: e.target.value }
        })
    };
    const handleFocus = () => { };
    const handleBlur = () => { };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Rohan",
                from_email: form.email,
                to_email: 'rohanthakurarmy@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            // TODO: Show success message
            // TODO: Hide an alert
            setForm({ name: '', email: '', message: '' });
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
            // TODO: Show error message
        });
    };
    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>

                <form
                    className="w-full flex flex-col gap-7 mt-14"
                    onSubmit={handleSubmit}>
                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            className="input"
                            name="name"
                            placeholder="Anshu"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            type="text"
                            className="input"
                            name="email"
                            placeholder="anshu@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Your Message
                        <textarea
                            className="textarea"
                            rows={4}
                            name="message"
                            placeholder="Let me know how I can help you!"
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        className="btn"
                        type="submit"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;