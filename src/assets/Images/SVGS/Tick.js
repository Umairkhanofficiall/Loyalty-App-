import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Tick = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke="#5C6670"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M2.111 7.932c.097-1.965.389-3.19 1.26-4.06.871-.872 2.096-1.164 4.061-1.26m12.457 5.32c-.098-1.965-.389-3.19-1.26-4.06-.872-.872-2.096-1.164-4.061-1.26m0 17.777c1.965-.098 3.19-.389 4.06-1.26.872-.872 1.163-2.096 1.26-4.061m-12.456 5.32c-1.965-.097-3.19-.388-4.06-1.26-.872-.87-1.164-2.095-1.26-4.06"
    />
    <Path
      stroke="#5C6670"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 12.41s.75 0 1.75 1.59c0 0 2.78-4.167 5.25-5"
    />
  </Svg>
)
export default Tick
