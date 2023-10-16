import { styled } from "styled-components";

const AboutDiv = styled.section`
	background-color: #050816;
	padding-top: 100px;
	padding-bottom: 100px;
`;

const AboutInnerDiv = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
`;

const AboutH3 = styled.h3`
	font-size: 18px;
	color: rgb(170, 166, 195);
	letter-spacing: 0.05em;
	text-transform: uppercase;
`;

const AboutH2 = styled.h2`
	font-size: 60px;
	color: #fff;
	font-weight: 900;
`;

const AboutDescriptionDiv = styled.div`
	color: rgb(170, 166, 195);
	line-height: 30px;
	font-size: 17px;
	margin-top: 1rem;
`;

const AboutCardDiv = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 5rem;
`;

export {
	AboutDiv,
	AboutInnerDiv,
	AboutH3,
	AboutH2,
	AboutDescriptionDiv,
	AboutCardDiv,
};
