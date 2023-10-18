import { styled } from "styled-components";

const ProjectIconDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	& > img {
		width: 60%;
		height: 60%;
		object-fit: contain;
	}
`;

const ProjectTimelineDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ProjectTimelineInnerDiv = styled.div`
	text-align: center;

	& > h3 {
		color: #fff;
		font-size: 24px;
		font-weight: 700;
	}

	& > p {
		font-size: 1rem;
		line-height: 1.6;
		font-weight: 500;
		color: rgb(170, 166, 195);
	}
`;

const ProjectTimelineImg = styled.img`
	width: 360px;
	height: 160px;
	object-fit: contain;
	margin-top: 1rem;
`;

const ProjectTimelineUl = styled.ul`
	list-style-type: disc;
	margin-top: 1.25rem;
	margin-left: 1.25rem;

	& > li {
		color: rgb(243, 243, 243);
		letter-spacing: 0.05em;
		font-size: 14px;
		padding-left: 0.25rem;
		margin-top: 0.5rem;
	}

	& > img {
		width: 200px;
		height: 100px;
		object-fit: cover;
	}
`;

const ProjectInfoDiv = styled.div``;

const ProjectInfoInnerDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin-top: 10px;

	& > img {
		width: 16px;
		height: 16px;
	}

	& > h3 {
		font-size: 14px;
		font-weight: 400;
		font-style: normal;
		width: 70px;
	}

	& > a {
		font-size: 14px;
		color: #258ddb;
		font-weight: 400;
	}

	& > h4 {
		font-size: 14px;
		font-weight: 400;
	}
`;

export {
	ProjectIconDiv,
	ProjectTimelineDiv,
	ProjectTimelineInnerDiv,
	ProjectTimelineImg,
	ProjectTimelineUl,
	ProjectInfoDiv,
	ProjectInfoInnerDiv,
};
