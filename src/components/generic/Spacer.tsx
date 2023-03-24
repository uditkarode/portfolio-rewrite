import { objectIf } from "@/utils/utils";

export default function Spacer(props: {
	vertical?: number;
	horizontal?: number;
	grow?: boolean;
}) {
	return (
		<div
			style={{
				...objectIf(props.vertical, { minHeight: props.vertical }),
				...objectIf(props.horizontal, { minWidth: props.horizontal }),
				...objectIf(props.grow, { flexGrow: 1 }),
			}}
		/>
	);
}
