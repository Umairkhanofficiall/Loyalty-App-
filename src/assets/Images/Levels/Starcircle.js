import * as React from "react"
import Svg, { G, ForeignObject, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: div */
const Starcircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={13}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)" data-figma-skip-parse="true">
      <ForeignObject
        width={2500}
        height={2500}
        x={-1250}
        y={-1250}
        transform="matrix(0 .008 -.008 0 7.5 7)"
      ></ForeignObject>
    </G>
    <Path
      d="M6.616.676a1 1 0 0 1 1.768 0L9.716 3.2a1 1 0 0 0 .714.518l2.81.487a1 1 0 0 1 .547 1.682L11.8 7.933a1 1 0 0 0-.273.84l.406 2.823a1 1 0 0 1-1.43 1.04l-2.56-1.259a1 1 0 0 0-.883 0l-2.56 1.259a1 1 0 0 1-1.431-1.04l.406-2.824a1 1 0 0 0-.273-.84L1.213 5.888a1 1 0 0 1 .546-1.682l2.811-.487a1 1 0 0 0 .714-.518L6.616.676Z"
      data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.95294117927551270,"g":0.49019607901573181,"b":0.16078431904315948,"a":1.0},"position":0.0},{"color":{"r":1.0,"g":0.14901961386203766,"b":0.0,"a":1.0},"position":1.0}],"stopsVar":[{"color":{"r":0.95294117927551270,"g":0.49019607901573181,"b":0.16078431904315948,"a":1.0},"position":0.0},{"color":{"r":1.0,"g":0.14901961386203766,"b":0.0,"a":1.0},"position":1.0}],"transform":{"m00":9.7971748206813428e-16,"m01":-16.0,"m02":15.50,"m10":16.0,"m11":9.7971748206813428e-16,"m12":-1.0},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
    />
    <Defs>
      <ClipPath id="a">
        <Path d="M6.616.676a1 1 0 0 1 1.768 0L9.716 3.2a1 1 0 0 0 .714.518l2.81.487a1 1 0 0 1 .547 1.682L11.8 7.933a1 1 0 0 0-.273.84l.406 2.823a1 1 0 0 1-1.43 1.04l-2.56-1.259a1 1 0 0 0-.883 0l-2.56 1.259a1 1 0 0 1-1.431-1.04l.406-2.824a1 1 0 0 0-.273-.84L1.213 5.888a1 1 0 0 1 .546-1.682l2.811-.487a1 1 0 0 0 .714-.518L6.616.676Z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Starcircle
