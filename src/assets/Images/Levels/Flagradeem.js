import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Flagradeem = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E85D43"
      strokeWidth={2}
      d="M15 23c-1.777.83-4.11 1.333-6.667 1.333-1.42 0-2.773-.155-4-.436-.788-.18-1.182-.271-1.654-.645a3.157 3.157 0 0 1-.753-.945c-.26-.544-.26-1.071-.26-2.126V5.818c0-1.313 1.387-2.215 2.667-1.921 1.227.28 2.58.436 4 .436C10.89 4.333 13.223 3.83 15 3c1.777-.83 4.11-1.333 6.667-1.333 1.421 0 2.773.155 4 .436.788.18 1.182.27 1.654.645.27.213.606.635.754.945.258.544.258 1.07.258 2.125v14.363c0 1.313-1.386 2.215-2.666 1.922a18.01 18.01 0 0 0-4-.437c-2.556 0-4.89.504-6.667 1.334Z"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1.667 27c1.776.83 4.11 1.334 6.666 1.334S13.223 27.83 15 27c1.777-.83 4.11-1.333 6.667-1.333 2.556 0 4.89.503 6.666 1.333"
    />
    <Path
      stroke="#E85D43"
      strokeWidth={2}
      d="M18.333 13a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.667}
      d="M6.333 14.334v.011M23.667 11.656v.012"
    />
  </Svg>
)
export default Flagradeem
