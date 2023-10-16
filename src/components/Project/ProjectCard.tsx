import { VerticalTimelineElement } from "react-vertical-timeline-component";

import {
	ProjectIconDiv,
	ProjectTimelineDiv,
	ProjectTimelineInnerDiv,
	ProjectTimelineImg,
	ProjectTimelineUl,
} from "./ProjectCard.styles";

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
		</VerticalTimelineElement>
	);
};

export default ProjectCard;
