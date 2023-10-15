import { motion } from "framer-motion";

const SectionWrapper = (Component: React.FC, idName: string) =>
	function HOC() {
		return (
			<motion.section
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				style={{
					zIndex: "0",
					position: "relative",
				}}
			>
				<span
					style={{
						display: "block",
					}}
					id={idName}
				/>

				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
