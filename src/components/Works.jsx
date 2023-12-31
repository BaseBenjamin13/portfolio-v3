
import React, { useState, useEffect } from 'react';
import { Tilt } from "react-tilt";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectImg = ({ name, image, link }) => {
	return (
		<img
			onClick={() => window.open(link, "_blank")}
			src={image}
			alt={name}
			className="w-full h-full object-cover rounded-2xl cursor-pointer"
		/>
	)
}

const ProjectCard = ({ name, description, tags, image, source_code_link, link, }) => {

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		}
		mediaQuery.addEventListener('change', handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		}
	}, [])

	return (
		<div
			className="bg-tertiary p-5 rounded-2xl w-[360px]"
		>
			{
				isMobile ?
					<div
						className="bg-tertiary rounded-2xl h-[230px] w-full"
					>
						<ProjectImg name={name} image={image} link={link} />
					</div>
					:
					<ParallaxTilt
						tiltMaxAngleX={45}
						tiltMaxAngleY={45}
						scale={1}
						transitionSpeed={450}
						className="bg-tertiary rounded-2xl h-[230px] w-full"
					>
						<ProjectImg name={name} image={image} link={link} />
					</ParallaxTilt>
			}

			<div className="relative">
				<div className="absolute inset-0 flex justify-end mt-3 card-img_hover">
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className="black-gradient border-2 border-[#38a169] w-12 h-12 rounded-full 
							flex justify-center items-center cursor-pointer"
					>
						<img src={github} alt="github" className="w-5/6 h-5/6 object-contain" />
					</div>
				</div>
			</div>

			<div className="mt-5">
				<div
					onClick={() => window.open(link, "_blank")}
					className="flex items-center cursor-pointer"
				>
					<h3 className="text-white font-bold text-[22px] mr-2">{name} </h3>
					<p className="text-white font-bold text-[16px]"> {` < Visit`}</p>
				</div>
				<p className="mt-2 text-secondary text-[16px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p
						key={tag.name}
						className={`text-[16px] ${tag.color}`}
					>
						{`*${tag.name}*`}
					</p>
				))}
			</div>
		</div>
	)
}



const Works = () => {
	return (
		<div>
			<div>
				<p className={styles.sectionSubText}>My Projects</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</div>

			<div className="w-full flex">
				<p
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					All projects required me to learn new technologies quickly and manage my time
					carefully because of time constraints. Some projects were team built. I have
					been blessed with amazing teammates throughout the years. Because of this,
					I was able to enhance my communication skills, and I have learned that it's
					always good and beneficial to the project to lend a helping hand.
				</p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</div>
	)
}

export default SectionWrapper(Works, "");