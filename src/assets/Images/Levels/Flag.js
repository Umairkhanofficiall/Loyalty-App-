import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Flag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E85D43"
      strokeWidth={3}
      d="M22 34c-2.665 1.245-6.166 2-10 2-2.132 0-4.16-.233-6-.655-1.182-.27-1.774-.406-2.482-.967-.404-.32-.908-.952-1.13-1.417C2 32.145 2 31.354 2 29.772V8.228c0-1.97 2.08-3.323 4-2.883C7.84 5.766 9.868 6 12 6c3.834 0 7.335-.755 10-2s6.166-2 10-2c2.132 0 4.16.233 6 .655 1.182.27 1.774.406 2.482.967.404.32.908.952 1.13 1.417C42 5.855 42 6.646 42 8.228v21.544c0 1.97-2.08 3.322-4 2.883A27.012 27.012 0 0 0 32 32c-3.834 0-7.335.755-10 2Z"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeWidth={3}
      d="M2 40c2.665 1.245 6.166 2 10 2 3.834 0 7.335-.755 10-2s6.166-2 10-2c3.834 0 7.335.755 10 2"
    />
    <Path
      stroke="#E85D43"
      strokeWidth={3}
      d="M27 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M9 21v.018M35 16.984v.018"
    />
  </Svg>
)
export default Flag
