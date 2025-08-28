import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileOrder = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E82004"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 21c-.818 0-1.6-.335-3.163-1.006C2.946 18.324 1 17.489 1 16.085V6.747M10 21c.818 0 1.6-.335 3.163-1.006C17.054 18.324 19 17.489 19 16.085V6.747M10 21v-9.83m9-4.423c0 .604-.802.986-2.405 1.748l-2.92 1.39C11.87 10.741 10.97 11.17 10 11.17m9-4.423c0-.604-.802-.986-2.405-1.748M1 6.747c0 .604.802.986 2.405 1.748l2.92 1.39C8.13 10.741 9.03 11.17 10 11.17M1 6.748c0-.604.802-.986 2.405-1.748m.927 7.311 1.994.948"
    />
    <Path
      stroke="#E82004"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 1v2m4-1-1.5 2M6 2l1.5 2"
    />
  </Svg>
)
export default ProfileOrder
