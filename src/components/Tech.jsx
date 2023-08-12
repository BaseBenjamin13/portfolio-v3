import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";


const Tech = () => {

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology) => (
				<div className="w-32 h-32" key={technology.name}>
					{/* <BallCanvas icon={technology.icon} /> */}
					<img src={technology.icon} />
					<div className="w-full flex justify-center">
						<h3 className={`${styles.techText}`}>{technology.name}</h3>
					</div>
				</div>
			))}

		</div>
	)
}

export default SectionWrapper(Tech, "");