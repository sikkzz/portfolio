interface fadeInData {
	direction: string;
	type: string;
	delay: number;
	duration: number;
}

export const textVariant = () => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 1.25,
			},
		},
	};
};

export const fadeIn = ({ direction, type, delay, duration }: fadeInData) => {
	return {
		hidden: {
			// eslint-disable-next-line no-nested-ternary
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			// eslint-disable-next-line no-nested-ternary
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut",
			},
		},
	};
};

export const slideIn = ({ direction, type, delay, duration }: fadeInData) => {
	return {
		hidden: {
			// eslint-disable-next-line no-nested-ternary
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			// eslint-disable-next-line no-nested-ternary
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type,
				delay,
				duration,
				ease: "easeOut",
			},
		},
	};
};

// export const staggerContainer = ({staggerChildren, delayChildren}: ) => {
// 	return {
// 		hidden: {},
// 		show: {
// 			trasition: {
// 				staggerChildren,
// 				delayChildren: delayChildren || 0,
// 			},
// 		},
// 	};
// };
