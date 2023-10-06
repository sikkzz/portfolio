import {
	AboutSection,
	AboutDiv,
	ContentDiv,
	ContentTitleDiv,
	ContentDescriptionDiv,
	ContentButtonDiv,
} from "./About.styles";

const About = () => {
	return (
		<AboutSection>
			<AboutDiv>
				<ContentDiv>
					<ContentTitleDiv>
						- 김준식 -<br />웹 개발자 포트폴리오
					</ContentTitleDiv>
					<hr />
					<ContentDescriptionDiv>
						안녕하세요.
						<br />
						소통하고 협력하는 웹 개발자입니다.
						<br />
					</ContentDescriptionDiv>
					<ContentButtonDiv>더 알아보기 ↓</ContentButtonDiv>
				</ContentDiv>
			</AboutDiv>
		</AboutSection>
	);
};

export default About;
