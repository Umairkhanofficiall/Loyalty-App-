import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Copy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#676879"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 10c0-1.886 0-2.828.586-3.414C7.172 6 8.114 6 10 6h.667c1.885 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v.667c0 1.885 0 2.828-.586 3.414-.586.586-1.529.586-3.414.586H10c-1.886 0-2.828 0-3.414-.586C6 13.495 6 12.552 6 10.667V10Z"
    />
    <Path
      stroke="#676879"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.333 6c-.001-1.971-.031-2.992-.605-3.692a2.662 2.662 0 0 0-.37-.37c-.737-.605-1.833-.605-4.025-.605-2.191 0-3.287 0-4.025.606-.135.11-.258.234-.37.37-.605.737-.605 1.833-.605 4.024 0 2.192 0 3.288.606 4.025.11.136.234.26.37.37.699.574 1.72.604 3.691.605"
    />
  </Svg>
)
export default Copy
