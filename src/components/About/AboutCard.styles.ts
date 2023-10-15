import { styled } from "styled-components";

const AboutCardDiv = styled.div`
	padding: 1.25rem 3rem;
	background-color: rgb(21, 16, 48);
	border-radius: 20px;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	display: flex;
	min-height: 280px;
	& > img {
		width: 4rem;
		height: 4rem;
		object-fit: contain;
	}

	& > h3 {
		color: #fff;
		font-weight: 700;
		font-size: 20px;
		text-align: center;
	}
`;

export { AboutCardDiv };
