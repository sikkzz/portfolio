import { Html, useProgress } from "@react-three/drei";

import { CanvasSpan, CanvasP } from "./CanvasLoader.styles";

const CanvasLoader = () => {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<CanvasSpan />
			<CanvasP>{progress.toFixed(2)}%</CanvasP>
		</Html>
	);
};

export default CanvasLoader;
