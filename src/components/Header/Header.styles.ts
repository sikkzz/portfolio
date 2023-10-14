import styled from "styled-components";

const HeaderDiv = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 3000;
	/* background-color: rgba(116, 99, 99, 0.1);
	backdrop-filter: blur(15px); */
`;

const InnerDiv = styled.div`
	max-width: 1180px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.25rem;
	margin: 0 auto;
	color: #fff;
`;

const LogoDiv = styled.div`
	font-size: 0.9rem;
	text-align: center;
	line-height: 1;
`;

const Nav = styled.nav<{ $show: boolean }>`
	li {
		display: inline;

		a {
			font-size: 20px;
			padding: 20px;
			position: relative;

			&::before {
				content: "";
				width: calc(100% - 28px);
				height: 1px;
				background-color: #000;
				position: absolute;
				left: 14px;
				bottom: 10px;
				transform: scaleX(0);
				transition: all 0.3s;
			}
			&:hover::before {
				transform: scaleX(1);
			}
		}
	}

	/* @media screen and (max-width: 800px) {
		display: ${({ $show }) => ($show ? "block" : "none")};

		& > ul {
			display: block;
			position: absolute;
			right: 0;
			top: 68px;
			background-color: rgba(116, 99, 99, 0.1);
			backdrop-filter: blur(15px);
			z-index: 3000;
			padding: 20px 0;

			& > li {
				display: block;
				text-align: right;

				& > a {
					display: inline-block;
					padding: 10px;
				}
			}
		}
	}
	span {
		&::before {
			width: 20px;
		}
		&::after {
			width: 20px;
		}
	} */
`;

const MNavDiv = styled.div`
	display: none;
	width: 40px;
	height: 40px;
	cursor: pointer;

	@media (max-width: 800px) {
		display: block;
	}

	span {
		display: block;
		width: 40px;
		height: 2px;
		background-color: #000;
		margin-top: 19px;
		position: relative;

		&::before {
			content: "";
			width: 40px;
			height: 2px;
			background-color: #000;
			position: absolute;
			right: 0;
			top: 6px;
			transition: width 0.3s;
		}
		&::after {
			content: "";
			width: 40px;
			height: 2px;
			background-color: #000;
			position: absolute;
			left: 0;
			bottom: 6px;
			transition: width 0.3s;
		}
	}
`;

export { HeaderDiv, InnerDiv, LogoDiv, Nav, MNavDiv };
