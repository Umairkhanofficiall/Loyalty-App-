import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowDown = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={7}
    fill="none"
    {...props}
  >
    <Path
      fill="#676879"
      fillRule="evenodd"
      d="M6 5.615a13.48 13.48 0 0 1-.147-.146l-4.411-4.41a.625.625 0 0 0-.884.883l4.41 4.41.021.021c.12.121.252.252.377.347.146.112.356.233.634.233s.488-.12.634-.233a4.044 4.044 0 0 0 .397-.367l4.41-4.41a.625.625 0 1 0-.883-.885L6.148 5.47A13.48 13.48 0 0 1 6 5.615Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ArrowDown
