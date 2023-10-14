import styled from "styled-components";

import BioImg from "@/assets/background.jpg";

const HeroSection = styled.section``;

const HeroDiv = styled.div`
	position: relative;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* background:
			linear-gradient(
				180deg,
				rgba(112, 93, 80, 0.8) 0,
				rgba(112, 93, 80, 0.8) 90%
			),
			url(${BioImg}) 50% no-repeat; */
		background-color: #050816;
		background-size: cover;
		z-index: -1;
	}
`;

const ContentDiv = styled.div`
	max-width: 1180px;
	margin: 0 auto;
	padding: 8.5rem 2rem 4rem;
	text-align: center;

	& > hr {
		width: 3.25rem;
		margin: 1.5rem auto;
		border: none;
		border-top: 0.2rem solid #f4623a;
	}
`;

const ContentTitleDiv = styled.div`
	font-family:
		Black Han Sans,
		sans-serif;
	font-weight: 400;
	font-size: 4rem;
	color: #fff;
	word-break: keep-all;
`;

const ContentDescriptionDiv = styled.div`
	margin: 0 auto 2rem;
	font-weight: 400;
	font-size: 1.25rem;
	color: hsla(0, 0%, 100%, 0.75);
	line-height: 1.5;
`;

const ContentButtonDiv = styled.div`
	display: inline-block;
	padding: 1rem 2rem;
	border: none;
	border-radius: 10rem;
	background-color: #f4623a;
	font-weight: 400;
	font-size: 1rem;
	text-decoration: none;
	color: #fff;
	line-height: 1.5;
	cursor: pointer;
`;

export {
	HeroSection,
	HeroDiv,
	ContentDiv,
	ContentTitleDiv,
	ContentDescriptionDiv,
	ContentButtonDiv,
};
