import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import { getImage } from '../assets/Images/images'
import ProfileFlag from '../assets/Images/Profile/ProfileFlag'
import ProfileLevels from '../assets/Images/Profile/ProfileLevels'
import Arrow from '../assets/Images/Profile/Arrow'

const LP_ProfileFourthRow = () => {
  return (
    <View style={styles.FD_R_GAP_XXL}>
          <View style={styles.Boxes2}>
            <View style={styles.FD_R_M_M_GAP_4XXLL}>
              <View>
                <ProfileFlag />
                <Text style={styles.BoxText}>Help Center</Text>
              </View>
               <View style={styles.ArrowiconBoxes}>
                 <Arrow/>
                </View>
            </View>
          </View>
          <View style={styles.Boxes2}>
            <View style={styles.FD_R_M_L}>
              <View>
                <ProfileLevels />
                <Text style={styles.BoxText}>Terms & Policies</Text>
              </View>
               <View style={styles.ArrowiconBoxes}>
                 <Arrow/>
                </View>
            </View>
          </View>
        </View>
  )
}

export default LP_ProfileFourthRow