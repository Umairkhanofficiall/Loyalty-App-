import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Search = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#18191B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 16.5 21 21"
    />
    <Path
      stroke="#18191B"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 10a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
    />
  </Svg>
)
export default Search
