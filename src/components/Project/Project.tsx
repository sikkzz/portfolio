import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import {
	ProjectDiv,
	ProjectInnerDiv,
	ProjectH3,
	ProjectH2,
	ProjectContentDiv,
} from "./Proejct.styles";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "@/utils/motion";

import SectionWrapper from "@/hoc/SectionWrapper";

import { projectData } from "@/constants/data/ProjectData";
import ProjectCard from "./ProjectCard";

const Project = () => {
	return (
		<ProjectDiv>
			<ProjectInnerDiv>
				<motion.div variants={textVariant()}>
					<ProjectH3>What I have done project</ProjectH3>
					<ProjectH2>Project Experience</ProjectH2>
				</motion.div>
				<ProjectContentDiv>
					<VerticalTimeline>
						{projectData.map((project) => (
							<ProjectCard
								key={project.title}
								title={project.title}
								tech={project.tech}
								icon={project.icon}
								iconBg={project.iconBg}
								date={project.date}
								points={project.points}
								img={project.img}
							/>
						))}
					</VerticalTimeline>
				</ProjectContentDiv>
			</ProjectInnerDiv>
		</ProjectDiv>
	);
};

export default SectionWrapper(Project, "work");
