import { useRef, useState } from "react";

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