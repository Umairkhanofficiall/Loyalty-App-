import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CloseButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#676879"
      fillRule="evenodd"
      d="M.47.73a.75.75 0 0 1 1.06 0L8 7.2 14.47.73a.75.75 0 1 1 1.06 1.062l-6.469 6.47 6.47 6.469a.75.75 0 0 1-1.06 1.06L8 9.322l-6.47 6.47a.75.75 0 1 1-1.06-1.06L6.94 8.26.47 1.791a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default CloseButton
