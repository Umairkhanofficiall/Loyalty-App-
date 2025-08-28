import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E82004"
      strokeWidth={1.5}
      d="M11 17c-1.333.622-3.083 1-5 1-1.066 0-2.08-.117-3-.327-.591-.136-.887-.203-1.241-.484a2.367 2.367 0 0 1-.565-.709C1 16.073 1 15.677 1 14.886V4.114c0-.985 1.04-1.661 2-1.441.92.21 1.934.327 3 .327 1.917 0 3.667-.378 5-1 1.332-.622 3.083-1 5-1 1.066 0 2.08.117 3 .327.591.136.887.204 1.241.484.202.16.454.476.565.709.194.408.194.803.194 1.594v10.772c0 .985-1.04 1.661-2 1.441-.92-.21-1.934-.327-3-.327-1.917 0-3.668.378-5 1Z"
    />
    <Path
      stroke="#E82004"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M1 20c1.333.622 3.083 1 5 1 1.917 0 3.667-.378 5-1 1.332-.622 3.083-1 5-1 1.917 0 3.668.378 5 1"
    />
    <Path
      stroke="#E82004"
      strokeWidth={1.5}
      d="M13.5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
    <Path
      stroke="#E82004"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 10.5v.009M17.5 8.492v.01"
    />
  </Svg>
)
export default ProfileFlag
