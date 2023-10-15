import { motion } from "framer-motion";
import {
	HeroSection,
	HeroDiv,
	HeroTextDiv,
	HeroMoreDiv,
	HeroMoreInnerDiv,
} from "./Hero.styles";

const Hero = () => {
	return (
		<HeroSection>
			<HeroDiv>
				<HeroTextDiv>
					<h1>
						안녕하세요
						<br />
						프론트엔드 개발자 <span>김준식</span>입니다
					</h1>
					<p>
						&quot;No&quot;가 아닌 &quot;Why&quot;를 얘기할 수 있는 개발자가 되고
						싶습니다.
					</p>
				</HeroTextDiv>
			</HeroDiv>
			<HeroMoreDiv>
				<a href="#about">
					<HeroMoreInnerDiv>
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							style={{
								width: "0.75rem",
								height: "0.75rem",
								backgroundColor: "rgb(170, 165, 195)",
								borderRadius: "100%",
								marginBottom: "0.25rem",
							}}
						/>
					</HeroMoreInnerDiv>
				</a>
			</HeroMoreDiv>
		</HeroSection>
	);
};

export default Hero;
