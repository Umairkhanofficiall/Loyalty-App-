import * as React from "react"
import Svg, { G, ForeignObject, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: div */
const Star = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)" data-figma-skip-parse="true">
      <ForeignObject
        width={2500}
        height={2500}
        x={-1250}
        y={-1250}
        transform="matrix(0 .008 -.008 0 7 7.5)"
      ></ForeignObject>
    </G>
    <Path
      d="M6.116 1.176a1 1 0 0 1 1.768 0L9.216 3.7a1 1 0 0 0 .714.518l2.81.487a1 1 0 0 1 .547 1.682L11.3 8.433a1 1 0 0 0-.273.84l.406 2.823a1 1 0 0 1-1.43 1.04l-2.56-1.259a1 1 0 0 0-.883 0l-2.56 1.259a1 1 0 0 1-1.431-1.04l.406-2.824a1 1 0 0 0-.273-.84L.713 6.388a1 1 0 0 1 .546-1.682l2.811-.487a1 1 0 0 0 .714-.518l1.332-2.524Z"
      data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.95294117927551270,"g":0.49019607901573181,"b":0.16078431904315948,"a":1.0},"position":0.0},{"color":{"r":1.0,"g":0.14901961386203766,"b":0.0,"a":1.0},"position":1.0}],"stopsVar":[{"color":{"r":0.95294117927551270,"g":0.49019607901573181,"b":0.16078431904315948,"a":1.0},"position":0.0},{"color":{"r":1.0,"g":0.14901961386203766,"b":0.0,"a":1.0},"position":1.0}],"transform":{"m00":9.7971748206813428e-16,"m01":-16.0,"m02":15.0,"m10":16.0,"m11":9.7971748206813428e-16,"m12":-0.50},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
    />
    <Defs>
      <ClipPath id="a">
        <Path d="M6.116 1.176a1 1 0 0 1 1.768 0L9.216 3.7a1 1 0 0 0 .714.518l2.81.487a1 1 0 0 1 .547 1.682L11.3 8.433a1 1 0 0 0-.273.84l.406 2.823a1 1 0 0 1-1.43 1.04l-2.56-1.259a1 1 0 0 0-.883 0l-2.56 1.259a1 1 0 0 1-1.431-1.04l.406-2.824a1 1 0 0 0-.273-.84L.713 6.388a1 1 0 0 1 .546-1.682l2.811-.487a1 1 0 0 0 .714-.518l1.332-2.524Z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Star
