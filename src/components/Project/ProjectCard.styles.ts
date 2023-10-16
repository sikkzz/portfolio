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
	}

	& > img {
		width: 200px;
		height: 100px;
		object-fit: cover;
	}
`;

export {
	ProjectIconDiv,
	ProjectTimelineDiv,
	ProjectTimelineInnerDiv,
	ProjectTimelineImg,
	ProjectTimelineUl,
};
