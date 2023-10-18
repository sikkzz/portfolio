import { VerticalTimelineElement } from "react-vertical-timeline-component";

import {
	ProjectIconDiv,
	ProjectTimelineDiv,
	ProjectTimelineInnerDiv,
	ProjectTimelineImg,
	ProjectTimelineUl,
	ProjectInfoDiv,
	ProjectInfoInnerDiv,
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
	gitLink: string;
	url: string;
	frontStack: string;
	backStack: string;
	urlLink: string;
}

const ProjectCard = ({
	title,
	tech,
	icon,
	iconBg,
	date,
	points,
	img,
	gitLink,
	url,
	frontStack,
	backStack,
	urlLink,
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
				<ProjectInfoInnerDiv>
					<img src={CheckIcon} alt="checkIcon" />
					<h3>GitHub</h3>
					<a href={gitLink}>{gitLink}</a>
				</ProjectInfoInnerDiv>
				<ProjectInfoInnerDiv>
					<img src={CheckIcon} alt="checkIcon" />
					<h3>URL</h3>
					<a href={urlLink}>{url}</a>
				</ProjectInfoInnerDiv>
				<ProjectInfoInnerDiv>
					<img src={CheckIcon} alt="checkIcon" />
					<h3>Frontend</h3>
					<h4>{frontStack}</h4>
				</ProjectInfoInnerDiv>
				<ProjectInfoInnerDiv>
					<img src={CheckIcon} alt="checkIcon" />
					<h3>Backend</h3>
					<h4>{backStack}</h4>
				</ProjectInfoInnerDiv>
			</ProjectInfoDiv>
		</VerticalTimelineElement>
	);
};

export default ProjectCard;
