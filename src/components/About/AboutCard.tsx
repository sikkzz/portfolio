import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { fadeIn } from "@/utils/motion";

import { AboutCardDiv } from "./AboutCard.styles";

interface AboutCardData {
	index: number;
	title: string;
	icon: string;
}

const AboutCard = ({ index, title, icon }: AboutCardData) => {
	const fadeInData = {
		direction: "right",
		type: "spring",
		delay: index * 0.5,
		duration: 0.75,
	};

	return (
		<Tilt style={{ width: "250px" }}>
			<motion.div
				variants={fadeIn(fadeInData)}
				style={{
					background:
						"-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)",
					boxShadow: "0 0 #0000, 0 0 #0000, 0px 35px 120px -15px #211e35",
					padding: "1px",
					borderRadius: "20px",
					width: "100%",
				}}
			>
				<AboutCardDiv>
					<img src={icon} alt="web-development" />
					<h3>{title}</h3>
				</AboutCardDiv>
			</motion.div>
		</Tilt>
	);
};

export default AboutCard;
