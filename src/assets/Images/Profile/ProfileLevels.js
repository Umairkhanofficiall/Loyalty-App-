import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileLevels = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E82004"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.5 17h3M16.5 17h3M9 17h3M1.5 13h3M16.5 13h3M9 13h3M1.5 9h3M16.5 9h3M9 9h3M1.5 5h3M16.5 5h3M1.5 1h3"
    />
  </Svg>
)
export default ProfileLevels
