import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon, }) => {
	return (
		<Tilt className="xs:w-[250px] w-full ">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
						flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}


const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("right", "", 0.5, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I am Benjamin Morgiewicz, a software engineer who loves to write and fix code to find
				a solution to any problem. I use my problem-solving brain and hard work
				experience to make life easier and more fun with intelligent code.

				<p className="mt-4">

					I love coding because there is an unscalable potential. There will never be
					a time in my life when I can say "I have learned it all". Coding is the only
					thing that I genuinely enjoy continuously learning, and the fact that I can
					continue to truly learn in the world of software engineering for the rest of
					my life brings me joy.
				</p>
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{
					services.map((service, index) => (
						<ServiceCard key={service.title} index={index} {...service} />
					))
				}
			</div>

		</>
	)
}

export default SectionWrapper(About, "about");