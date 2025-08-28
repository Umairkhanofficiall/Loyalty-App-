import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Boxes = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.333 28.333c-1.09 0-2.133-.455-4.217-1.365-2.433-1.061-4.295-1.875-5.587-2.635H1.667m14.666 4c1.091 0 2.134-.455 4.218-1.365 5.188-2.264 7.782-3.397 7.782-5.302v-14m-12 20.667V13.667m-12-6v4"
    />
    <Path
      stroke="#E85D43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.434 11.922 7.54 10.037c-2.138-1.034-3.207-1.552-3.207-2.37 0-.82 1.069-1.337 3.207-2.371l3.894-1.885c2.404-1.163 3.606-1.744 4.9-1.744 1.292 0 2.494.581 4.898 1.744l3.895 1.885c2.138 1.034 3.206 1.552 3.206 2.37 0 .82-1.068 1.337-3.206 2.371l-3.895 1.885c-2.404 1.163-3.606 1.744-4.899 1.744-1.293 0-2.495-.581-4.898-1.744ZM23.182 4.354 9.49 10.98M1.667 16.334h4M1.667 20.334h4"
    />
  </Svg>
)
export default Boxes
