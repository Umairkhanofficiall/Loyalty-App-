import React, { ReactNode } from 'react'
import { StyleSheet, StyleProp, ViewStyle } from 'react-native'
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient'

interface LPLinearGradientProps {
  colors?: string[]
  start?: { x: number; y: number }
  end?: { x: number; y: number }
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

const LP_LinearGradient: React.FC<LPLinearGradientProps> = ({
  colors = ['#FFFFFF', '#FFE9E5', '#E85D43'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style = { flex: 1 },
  children,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={style}
    >
      {children}
    </LinearGradient>
  )
}

export default LP_LinearGradient

const styles = StyleSheet.create({})
