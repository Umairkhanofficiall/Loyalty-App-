import { View, TextInput } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import LP_LinearGradient from './LP_LinearGradient'
import colors from '../theme/colors'

const LP_HomeSearchButton = ({ value, onChangeText }) => {
  return (
    <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
      <LP_LinearGradient
        colors={[colors.LP_White, colors.LP_Gradientfour]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.SearchInputFeild}
      >
        <TextInput
          placeholder="Search points..."
          placeholderTextColor={colors.LP_PlacehOlderText}
          style={styles.SearchInputInner}
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
        />
      </LP_LinearGradient>
    </View>
  )
}

export default LP_HomeSearchButton