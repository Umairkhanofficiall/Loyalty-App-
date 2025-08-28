import * as React from "react"
import Svg, { Path } from "react-native-svg"
const OrderTab = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M10.75 21c-.818 0-1.6-.33-3.163-.99-3.891-1.644-5.837-2.466-5.837-3.849V6m9 15V10.355m0 10.645c.725 0 1.293-.26 2.5-.777M19.75 6v4"
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M14.75 16.5h7m-3.5 3.5v-7"
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M7.076 8.692 4.155 7.278C2.552 6.502 1.75 6.114 1.75 5.5c0-.614.802-1.002 2.405-1.778L7.076 2.31C8.88 1.436 9.781 1 10.75 1c.97 0 1.871.436 3.674 1.309l2.922 1.413c1.603.776 2.404 1.164 2.404 1.778 0 .614-.801 1.002-2.404 1.778l-2.922 1.414C12.621 9.564 11.72 10 10.75 10c-.97 0-1.87-.436-3.674-1.308ZM4.75 11l2 1M15.75 3l-10 5"
    />
  </Svg>
)
export default OrderTab
