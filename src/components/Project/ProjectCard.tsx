import { VerticalTimelineElement } from "react-vertical-timeline-component";

import {
	ProjectIconDiv,
	ProjectTimelineDiv,
	ProjectTimelineInnerDiv,
	ProjectTimelineImg,
	ProjectTimelineUl,
	ProjectInfoDiv,
} from "./ProjectCard.styles";

import CheckIcon from "@/assets/check.png";

interface projectType {
	title: string;
	tech: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
	img: string;
}

const ProjectCard = ({
	title,
	tech,
	icon,
	iconBg,
	date,
	points,
	img,
}: projectType) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			date={date}
			iconStyle={{ background: iconBg }}
			icon={
				<ProjectIconDiv>
					<img src={icon} alt={tech} />
				</ProjectIconDiv>
			}
		>
			<ProjectTimelineDiv>
				<ProjectTimelineInnerDiv>
					<h3>{title}</h3>
					<p style={{ margin: 0 }}>{tech}</p>
				</ProjectTimelineInnerDiv>
				<ProjectTimelineImg src={img} alt="img" />
				<ProjectTimelineUl>
					{points.map((point: string) => (
						<li>{point}</li>
					))}
				</ProjectTimelineUl>
			</ProjectTimelineDiv>
			<ProjectInfoDiv>
				<img src={CheckIcon} alt="checkIcon" />
				<h3>GitHub</h3>
				<a href="https://github.com/sikkzz/publicculture">
					https://github.com/sikkzz/publicculture
				</a>
			</ProjectInfoDiv>
			<ProjectInfoDiv>
				<img src={CheckIcon} alt="checkIcon" />
				<h3>URL</h3>
				<a href="https://www.youtube.com/watch?v=_FH2VWK8hCE">
					https://www.youtube.com/v=_FH2VWK8hCE
				</a>
			</ProjectInfoDiv>
			<ProjectInfoDiv>
				<img src={CheckIcon} alt="checkIcon" />
				<h3>Frontend</h3>
				<h4>React, JavaScript, Redux</h4>
			</ProjectInfoDiv>
			<ProjectInfoDiv>
				<img src={CheckIcon} alt="checkIcon" />
				<h3>Backend</h3>
				<h4>Node.js, mongoDB</h4>
			</ProjectInfoDiv>
		</VerticalTimelineElement>
	);
};

export default ProjectCard;
