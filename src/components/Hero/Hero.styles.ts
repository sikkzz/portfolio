import styled from "styled-components";

import HeroImg from "@/assets/background5.jpg";

const HeroSection = styled.section`
	width: 100%;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	background-color: #050816;
	background-image: url(${HeroImg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	font-family: "Poppins", sans-serif;
`;

const HeroDiv = styled.div`
	padding: 0 4rem;
	gap: 1.25rem;
	display: flex;
	align-items: flex-start;
	max-width: 80rem;
	margin: 0 auto;
	position: absolute;
	top: 120px;
	left: 0;
	right: 0;
	bottom: 0;
`;

const HeroTextDiv = styled.div`
	& > h1 {
		font-size: 80px;
		line-height: 98px;
		color: #fff;
		font-weight: 900;
		margin-top: 0.5rem;

		& > span {
			color: rgb(145, 94, 255);
		}
	}

	& > p {
		font-size: 40px;
		line-height: 50px;
		color: rgb(243, 243, 243);
		font-weight: 500;
		margin-top: 0.5rem;
	}
`;

const ContentDiv = styled.div`
	max-width: 1280px;
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
	HeroTextDiv,
	ContentDiv,
	ContentTitleDiv,
	ContentDescriptionDiv,
	ContentButtonDiv,
};
