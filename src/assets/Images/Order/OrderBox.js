import * as React from "react"
import Svg, { Path } from "react-native-svg"
const OrderBox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#676879"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 18.334c-.682 0-1.333-.276-2.636-.826-3.243-1.37-4.864-2.055-4.864-3.207V5.833m7.5 12.5c.682 0 1.333-.275 2.636-.825 3.243-1.37 4.864-2.055 4.864-3.207V5.833M9 18.334v-8.87M5.938 8.076 3.504 6.9C2.168 6.252 1.5 5.929 1.5 5.417s.668-.835 2.004-1.482l2.434-1.177C7.441 2.03 8.192 1.667 9 1.667c.808 0 1.56.363 3.062 1.09l2.434 1.178c1.336.647 2.004.97 2.004 1.482s-.668.835-2.004 1.482l-2.434 1.177C10.559 8.803 9.808 9.167 9 9.167c-.808 0-1.56-.364-3.062-1.09ZM4 10l1.667.833M13.167 3.333 4.833 7.5"
    />
  </Svg>
)
export default OrderBox
