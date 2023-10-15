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
	max-width: 80rem;
	margin: 0 auto;
	position: absolute;
	top: 120px;
	left: 0;
	right: 0;
	bottom: 0;
`;

const HeroTextDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 100px;

	& > h1 {
		font-size: 60px;
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

const HeroMoreDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	position: absolute;
	bottom: 2.5rem;
`;

const HeroMoreInnerDiv = styled.div`
	padding: 0.5rem;
	border: 4px solid rgb(170, 166, 195);
	border-radius: 1.5rem;
	width: 35px;
	height: 64px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export { HeroSection, HeroDiv, HeroTextDiv, HeroMoreDiv, HeroMoreInnerDiv };
