import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
	* {
		box-sizing: border-box;
	}
	body,
	button,
	dd,
	dl,
	dt,
	fieldset,
	form,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	input,
	legend,
	li,
	ol,
	p,
	select,
	table,
	td,
	textarea,
	th,
	ul,
	figure,
	figcaption {
		margin: 0;
		padding: 0;
	}

	body,
	button,
	input,
	select,
	table,
	textarea {
		font-family: "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
	}

	a,
	a:hover,
	a:focus {
		color: inherit;
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: normal;
	}

	ul {
		list-style: none;
	}

	button {
		all: unset;
	}
`}
`;

export default GlobalStyles;
