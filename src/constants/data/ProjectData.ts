import ProjectImg from "@/assets/project1.png";
import ProjectImg2 from "@/assets/project2.png";
// import ProjectImg3 from "@/assets/project3.png";

import { ReactIcon } from "@/assets";

export const projectData = [
	{
		img: ProjectImg,
		title: "서울시 공공 공연정보",
		tech: "팀 프로젝트 (Front-end)",
		icon: ReactIcon,
		iconBg: "#383E56",
		date: "2022. 05 - 2022. 08",
		points: [
			"서울시 공연 문화 정보 안내 웹사이트로 서울시 공공 데이터 api를 받아와서 제작했습니다.",
			"현존하는 공연 문화 사이트들은 공공기관에서 운영하는 곳이 대부분인데 해당 사이트들은 정보력이 높지만 부가 기능들이 흩어져 있어서 탐색 효율이 떨어진다 생각했기에 개발하게 되었습니다.",
			"처음 진행한 팀 프로젝트이고 Back-end 개발자와도 처음 협업을 경험한 프로젝트이기에 수정, 보완해야 하는 코드가 제일 많은 프로젝트이지만 개발에 대한 흥미를 크게 느낀 프로젝트여서 잊을 수 없는 경험입니다.",
		],
		gitLink: "https://github.com/sikkzz/publicculture",
		urlLink: "https://www.youtube.com/watch?v=_FH2VWK8hCE",
		url: "https://www.youtube.com/v=_FH2VWK8hCE",
		frontStack: "React, JavaScript, Redux",
		backStack: "Node.js, mongoDB",
	},
	{
		img: ProjectImg2,
		title: "상명대학교 총학생회",
		tech: "React, TypeScript",
		icon: ReactIcon,
		iconBg: "#383E56",
		date: "2022. 05 - 2022. 08",
		points: [
			"상명대학교 총학생회 간부 입장에서 학생들에게 더 많은 정보를 제공하고 소통하기 위해 만든 프로젝트입니다.",
			"학생들이 직접 사용해야하는 서비스이기에 사용자의 입장에서 어떻게 구현하면 한눈에 원하는 정보를 찾을 수 있을지 깊게 고민할 수 있는 계기가 되었고 동시에 겹치는 로직에 대한 컴포넌트 재사용성을 많이 고려해볼 수 있는 기회가 생긴 프로젝트였습니다.",
		],
		gitLink: "https://github.com/Sangmyung-council/Sangmyung-front",
		urlLink: "https://www.student-smu.com/",
		url: "https://www.student-smu.com/",
		frontStack: "React, TypeScript, Redux",
		backStack: "Spring Boot",
	},
	// {
	// 	img: ProjectImg2,
	// 	title: "서울시 공공 공연정보 ",
	// 	tech: "개인 프로젝트 front 담당",
	// 	icon: ReactIcon,
	// 	iconBg: "#383E56",
	// 	date: "2023. 03 - 2023. 06",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
];
