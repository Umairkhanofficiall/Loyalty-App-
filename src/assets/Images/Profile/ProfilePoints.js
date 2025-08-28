import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfilePoints = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#E82004"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.5 10.5c0-4.478 0-6.718 1.391-8.109S6.521 1 11 1c4.478 0 6.718 0 8.109 1.391S20.5 6.021 20.5 10.5c0 4.478 0 6.718-1.391 8.109C17.717 20 15.479 20 11 20c-4.478 0-6.718 0-8.109-1.391C1.5 17.217 1.5 14.979 1.5 10.5Z"
    />
    <Path
      stroke="#E82004"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.864 6.222.88 1.774c.12.247.44.484.71.53l1.595.267c1.02.171 1.26.917.524 1.653l-1.24 1.25c-.21.212-.324.62-.26.913l.355 1.547c.28 1.225-.364 1.699-1.44 1.059l-1.494-.892c-.27-.162-.715-.162-.99 0l-1.495.892c-1.07.64-1.72.161-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.73-.736-.495-1.482.525-1.653l1.595-.267a1.09 1.09 0 0 0 .705-.53l.88-1.774c.48-.963 1.26-.963 1.735 0Z"
    />
  </Svg>
)
export default ProfilePoints
