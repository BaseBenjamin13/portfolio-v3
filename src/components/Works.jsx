import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My Projects</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					All projects required me to learn new technologies quickly and manage my time 
					carefully because of time constraints. Some projects were team built. I have 
					been blessed with amazing teammates throughout the years. Because of this, 
					I was able to enhance my communication skills, and I have learned that it's 
					always good and beneficial to the project to lend a helping hand.
				</motion.p>
			</div>

		</>
	)
}

export default SectionWrapper(Works, "")