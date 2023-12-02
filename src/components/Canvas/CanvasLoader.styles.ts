import { styled } from "styled-components";

const CanvasSpan = styled.span`
	font-size: 10px;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	position: relative;
	text-indent: -9999em;
	animation: mulShdSpin 1.1s infinite ease;
	transform: translateZ(0);
`;

const CanvasP = styled.p`
	font-size: 14px;
	color: #f1f1f1;
	font-weight: 800;
	margin-top: 40px;
`;

export { CanvasSpan, CanvasP };
