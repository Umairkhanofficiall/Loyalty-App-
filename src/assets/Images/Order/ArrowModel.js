import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowModel = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m13.15 8.801 7.7 7.699-7.7 7.699"
    />
  </Svg>
)
export default ArrowModel
