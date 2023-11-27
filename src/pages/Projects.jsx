import CTA from '../components/CTA';
import { Link } from 'react-router-dom';
import { arrow } from "../assets/icons";

const Projects = () => {
    return (
        <section className="max-container flex flex-col min-h-screen">
            <div className="flex-1">
                <h1 className="head-text">
                    My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
                </h1>

                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>I've embarked on numerous projects throughout the years, but these are
                        the ones I hold closest to my heart. Many of them are open-source, so if
                        you come across something that piques your interest, feel free to
                        explore the codebase and contribute your ideas for further enhancements.
                        Your collaboration is highly valued!</p>
                </div>

                <div className='mt-5 flex flex-col'>
                    <h4 className='text-2xl font-poppins font-semibold'>
                        Coming Soon!!!
                    </h4>
                    <p className='mt-2 text-slate-500'>I'm still building this portfolio, till that time, please have a look at my resume. You will find plenty projects there.</p>
                    <div className='mt-5 flex items-center gap-2 font-poppins'>
                        <Link
                            to='https://drive.google.com/file/d/157rK--Cu5Ri1zEfuZXqO00A6XRwwSRNq/view?usp=sharing'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-semibold text-blue-600'
                        >
                            Live Link
                        </Link>
                        <img
                            src={arrow}
                            alt='arrow'
                            className='w-4 h-4 object-contain'
                        />
                    </div>
                </div>

            </div>
            <footer className="p-4">
                <hr className="border-slate-200" />
                <CTA />
            </footer>

        </section>
    );
};

export default Projects;