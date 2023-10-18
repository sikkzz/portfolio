import { styled } from "styled-components";

const ContactDiv = styled.div`
	background-color: #050816;
	padding-top: 100px;
`;

const ContactWrapper = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
`;

const ContactInnerDiv = styled.div`
	display: flex;
	gap: 2.5rem;
	margin-top: 3rem;
	overflow: hidden;

	& > div > p {
		font-size: 18px;
		color: rgb(170, 166, 195);
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	& > div > h3 {
		font-size: 60px;
		color: #fff;
		font-weight: 900;
	}
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 3rem;

	& > label {
		display: flex;
		flex-direction: column;

		& > span {
			margin-bottom: 1rem;
			font-weight: 500;
			color: #fff;
		}

		& > input {
			outline: 2px solid transparent;
			outline-offset: 2px;
			color: #fff;
			font-weight: 500;
			padding: 1rem 1.5rem;
			background-color: rgb(21, 16, 48);
			border: none;
			border-radius: 0.5rem;
		}

		& > textarea {
			outline: 2px solid transparent;
			outline-offset: 2px;
			color: #fff;
			font-weight: 500;
			padding: 1rem 1.5rem;
			background-color: rgb(21, 16, 48);
			border: none;
			border-radius: 0.5rem;
			resize: vertical;
		}
	}
	& > button {
		all: unset;
		width: fit-content;
		border-radius: 0.75rem;
		background-color: rgb(21 16 48);
		padding: 0.75rem 2rem;
		font-weight: 700;
		color: #fff;
		box-shadow:
			0 0 #0000,
			0 0 #0000,
			0 4px 6px -1px #050816,
			0 2px 4px -2px #050816;
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
`;

export { ContactDiv, ContactWrapper, ContactInnerDiv, ContactForm };
