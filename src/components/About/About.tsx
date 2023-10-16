import { motion } from "framer-motion";

import { textVariant, fadeIn } from "@/utils/motion";

import SectionWrapper from "@/hoc/SectionWrapper";

import {
	AboutDiv,
	AboutInnerDiv,
	AboutH3,
	AboutH2,
	AboutDescriptionDiv,
	AboutCardDiv,
} from "./About.styles";

import AboutCard from "./AboutCard";

import { aboutCardData } from "@/constants/data/AboutData";

const About = () => {
	const fadeInData = {
		direction: "",
		type: "",
		delay: 0.1,
		duration: 1,
	};

	return (
		<AboutDiv>
			<AboutInnerDiv>
				<motion.div variants={textVariant()}>
					<AboutH3>Introduction</AboutH3>
					<AboutH2>About me</AboutH2>
				</motion.div>
				<AboutDescriptionDiv>
					<motion.p variants={fadeIn(fadeInData)}>
						안녕하세요 프론트엔드 개발자 김준식입니다. 순수 컴퓨터가 좋아서
						코딩을 처음 접했고 이후 흥미를 느껴서 개발자를 꿈꾸게 되었습니다.
						<br />
						사람들과 소통하고 협력할 수 있는 개발자의 모습을 목표로 두고
						최종적으로 많은 사람들이 편하게 사용할 수 있는 서비스를 구축하고
						싶습니다.
					</motion.p>
					<AboutCardDiv>
						{aboutCardData.map((data, index) => (
							<AboutCard key={data.title} index={index} {...data} />
						))}
					</AboutCardDiv>
				</AboutDescriptionDiv>
			</AboutInnerDiv>
		</AboutDiv>
	);
};

export default SectionWrapper(About, "about");
