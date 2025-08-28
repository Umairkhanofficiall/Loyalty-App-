import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LoyaltyTab = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.stroke}
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M1.25 10.5c0-4.478 0-6.717 1.391-8.109 1.392-1.39 3.63-1.39 8.11-1.39 4.478 0 6.717 0 8.108 1.39 1.391 1.392 1.391 3.63 1.391 8.11 0 4.478 0 6.717-1.391 8.108C17.468 20 15.229 20 10.75 20c-4.478 0-6.717 0-8.109-1.391-1.39-1.391-1.39-3.63-1.39-8.109Z"
    />
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="m11.614 6.222.88 1.775c.12.247.44.484.71.529l1.595.267c1.02.172 1.26.918.525 1.654l-1.24 1.25c-.21.211-.325.62-.26.912l.355 1.547c.28 1.225-.365 1.7-1.44 1.06l-1.495-.893c-.27-.162-.715-.162-.99 0l-1.495.892c-1.07.64-1.72.161-1.44-1.059l.356-1.547c.064-.292-.05-.7-.26-.912l-1.24-1.25c-.73-.736-.495-1.482.525-1.654l1.594-.267A1.09 1.09 0 0 0 9 7.996l.88-1.774c.48-.962 1.26-.962 1.735 0Z"
    />
  </Svg>
)
export default LoyaltyTab
