import { CSSProperties } from "react";

function objectIf(condition: any, object: CSSProperties) {
  return condition ? object : {};
}

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
