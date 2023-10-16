import { styled } from "styled-components";

const ProjectDiv = styled.div`
	background-color: #050816;
	padding-top: 100px;
`;

const ProjectInnerDiv = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
`;

const ProjectH3 = styled.h3`
	font-size: 18px;
	color: rgb(170, 166, 195);
	letter-spacing: 0.05em;
	text-transform: uppercase;
	text-align: center;
`;

const ProjectH2 = styled.h2`
	font-size: 60px;
	color: #fff;
	font-weight: 900;
	text-align: center;
`;

const ProjectContentDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5rem;
`;

export { ProjectDiv, ProjectInnerDiv, ProjectH3, ProjectH2, ProjectContentDiv };
