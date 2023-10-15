import { motion } from "framer-motion";

import { textVariant, fadeIn } from "@/utils/motion";

import SectionWrapper from "@/hoc/SectionWrapper";

import {
	AboutSection,
	AboutDiv,
	AboutH3,
	AboutH2,
	AboutDescriptionDiv,
	AboutCardDiv,
} from "./About.styles";

import AboutCard from "./AboutCard";

import { aboutCardData } from "@/constants/data/AboutData";

const About = () => {
	const fadeInData = {
		direction: "",
		type: "",
		delay: 0.1,
		duration: 1,
	};

	return (
		<AboutSection>
			<AboutDiv>
				<motion.div variants={textVariant()}>
					<AboutH3>Introduction</AboutH3>
					<AboutH2>Overview.</AboutH2>
				</motion.div>
				<AboutDescriptionDiv>
					<motion.p variants={fadeIn(fadeInData)}>
						I&apos;m a skilled software developer with experience in TypeScript
						and JavaScript, and expertise in frameworks like React, Node.js, and
						Three.js. I&apos;m a quick learner and collaborate closely with
						clients to create efficient, scalable, and user-friendly solutions
						that solve real-world problems. Let&apos;s work together to bring
						your ideas to life!
					</motion.p>
					<AboutCardDiv>
						{aboutCardData.map((data, index) => (
							<AboutCard key={data.title} index={index} {...data} />
						))}
					</AboutCardDiv>
				</AboutDescriptionDiv>
			</AboutDiv>
		</AboutSection>
	);
};

export default SectionWrapper(About, "about");
