import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Close = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#676879"
      fillRule="evenodd"
      d="M.47.47a.75.75 0 0 1 1.06 0L8 6.94 14.47.47a.75.75 0 1 1 1.06 1.06L9.062 8l6.47 6.47a.75.75 0 0 1-1.06 1.06L8 9.06l-6.47 6.47a.75.75 0 1 1-1.06-1.06L6.94 8 .47 1.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Close
