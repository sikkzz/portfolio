import {
	HeroSection,
	HeroDiv,
	HeroTextDiv,
	// ContentDiv,
	// ContentTitleDiv,
	// ContentDescriptionDiv,
	// ContentButtonDiv,
} from "./Hero.styles";

const Hero = () => {
	return (
		<HeroSection>
			<HeroDiv>
				<HeroTextDiv>
					<h1>
						Hi, I&apos;m&nbsp;<span>Sik</span>
					</h1>
					<p>
						I&apos;m front-end developer sik
						<br />I hope to develop with communication and cooperation
					</p>
				</HeroTextDiv>
				{/* <ContentDiv>
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
				</ContentDiv> */}
			</HeroDiv>
		</HeroSection>
	);
};

export default Hero;
