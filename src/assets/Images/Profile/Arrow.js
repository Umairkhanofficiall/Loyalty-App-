import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Arrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={5}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fill="#676879"
      fillRule="evenodd"
      d="M.146.646a.5.5 0 0 1 .708 0l3.528 3.529.016.016c.097.097.202.201.278.302.09.117.186.285.186.507 0 .222-.096.39-.186.507-.076.1-.18.205-.278.302l-.016.016L.854 9.354a.5.5 0 1 1-.708-.708l3.529-3.528L3.792 5l-.117-.118L.146 1.354a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Arrow
