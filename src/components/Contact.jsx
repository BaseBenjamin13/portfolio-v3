import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {

	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		emailjs.send(
			import.meta.env.VITE_REACT_APP_SERVICE,
			import.meta.env.VITE_REACT_APP_TEMPLATE,
			{
				from_name: form.name,
				to_name: 'Benjamin Morgiewicz',
				from_email: form.email,
				to_email: 'benmorgiewicz@gmail.com',
				message: form.message + "\n Reply to " + form.email
			},
            
			import.meta.env.VITE_REACT_APP_PUBLIC_KEY
		)
			.then(() => {
				setLoading(false);
				alert("Thank you, I will get back to you ASAP.")
				setForm({
					name: '',
					email: '',
					message: '',
				});
			}, (error) => {
				setLoading(false);
				console.log(error);
				alert('Sorry, something went wrong.')
			})
	}

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn('left', "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.heroSubText}>Get in touch</p>
				<h3 className={styles.heroHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-3xl 
							outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your Email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-3xl 
							outlined-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What would you like to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-3xl 
							outlined-none border-none font-medium"
						/>
					</label>

					{/* make text green if form filled else white */}
					<button
						type="submit"
						className={`bg-tertiary text-[#11998e] py-3 px-8 outline-none w-fit font-bold
							shadow-md shadow-primary rounded-3xl`}
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, "contact")