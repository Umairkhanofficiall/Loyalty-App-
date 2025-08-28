import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Qrlogo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M15.988 2c-5.594.128-8.861.662-11.093 2.895C2.662 7.127 2.128 10.395 2 15.988M28.012 2c5.594.128 8.861.662 11.093 2.895 2.233 2.232 2.767 5.5 2.895 11.093M28.012 42c5.594-.128 8.861-.662 11.093-2.895 2.233-2.232 2.767-5.5 2.895-11.093M15.988 42c-5.594-.128-8.861-.662-11.093-2.895-2.233-2.232-2.767-5.5-2.895-11.093"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M32 12h.018"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeWidth={3}
      d="M24 10v6c0 3.771 0 5.657-1.172 6.828C21.657 24 19.771 24 16 24h-6"
    />
    <Path
      stroke="#E85D43"
      strokeWidth={3}
      d="M10.586 10.586C10 11.172 10 12.114 10 14c0 1.886 0 2.828.586 3.414m0-6.828C11.172 10 12.114 10 14 10c1.886 0 2.828 0 3.414.586m-6.828 0Zm0 6.828C11.172 18 12.114 18 14 18c1.886 0 2.828 0 3.414-.586m-6.828 0Zm6.828 0C18 16.828 18 15.886 18 14c0-1.886 0-2.828-.586-3.414m0 6.828Zm0-6.828ZM32 28c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707C33.414 34 32.943 34 32 34h-4c-.943 0-1.414 0-1.707-.293C26 33.414 26 32.943 26 32v-2c0-.943 0-1.414.293-1.707C26.586 28 27.057 28 28 28h4Z"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeWidth={3}
      d="M10 34h10M32 18v4"
    />
  </Svg>
)
export default Qrlogo
