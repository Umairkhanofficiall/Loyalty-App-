import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeTab = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M14 16c-.8.622-1.85 1-3 1s-2.2-.378-3-1"
    />
    <Path
      stroke={props.stroke}
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M1.352 12.213C.999 9.916.822 8.768 1.256 7.75c.435-1.018 1.398-1.715 3.325-3.108L6.021 3.6C8.42 1.867 9.617 1 11.001 1c1.382 0 2.581.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108.434 1.019.258 2.167-.095 4.465l-.301 1.958c-.5 3.257-.75 4.885-1.919 5.857-1.168.971-2.875.971-6.29.971H9.861c-3.414 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.918-5.857l-.301-1.959Z"
    />
  </Svg>
)
export default HomeTab
