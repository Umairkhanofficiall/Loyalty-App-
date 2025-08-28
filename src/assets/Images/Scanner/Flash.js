import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Flash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.226 10.33 6.998-8.983c.547-.703 1.573-.266 1.573.67V8.97c0 .56.402 1.015.899 1.015H14.1c.773 0 1.185 1.03.674 1.686l-6.998 8.983c-.547.702-1.573.265-1.573-.671V13.03c0-.56-.403-1.015-.899-1.015H1.9c-.773 0-1.185-1.03-.674-1.686Z"
    />
  </Svg>
)
export default Flash
