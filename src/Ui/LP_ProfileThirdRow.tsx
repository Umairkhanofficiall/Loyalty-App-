import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import ProfileFlag from '../assets/Images/Profile/ProfileFlag'
import ProfileLevels from '../assets/Images/Profile/ProfileLevels'
import ProfileOrder from '../assets/Images/Profile/ProfileOrder'
import ProfilePoints from '../assets/Images/Profile/ProfilePoints'
import { getImage } from '../assets/Images/images'
import Arrow from '../assets/Images/Profile/Arrow'

const LP_ProfileThirdRow = () => {
  return (
    <View>
   <Text style={styles.SubHeading}>Quick Links</Text>
        <View style={styles.FD_R_GAP_XXL}>
          <View>
            <View style={styles.Boxes}>
              <View style={styles.FD_R_M_M_GAP_L}>
                <View>
                  <ProfileFlag />
                  <Text style={styles.BoxText}>Go To Redeem</Text>
                </View>
                <View style={styles.ArrowiconBoxes}>
                 <Arrow/>
                </View>
              </View>
            </View>
            <View style={styles.Boxes}>
              <View style={styles.FD_R_M_M_GAP_6XL}>
                <View>
                  <ProfileOrder />
                  <Text style={styles.BoxText}>All Orders</Text>
                </View>
                 <View style={styles.ArrowiconBoxes}>
                 <Arrow/>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.Boxes}>
              <View style={styles.FD_R_M_L_GAP_7MXL}>
                <View>
                  <ProfileLevels />
                  <Text style={styles.BoxText}>Levels</Text>
                </View>
                 <View style={styles.ArrowiconBoxes}>
                 <Arrow/>
                </View>
              </View>
            </View>
            <View style={styles.Boxes}>
              <View style={styles.FD_R_M_M_GAP_XXL}>
                <View>
                  <ProfilePoints />
                  <Text style={styles.BoxText}>Loyalty Points</Text>
                </View>
                 <View style={styles.ArrowiconBoxes}>
                 <Arrow/>
                </View>
              </View>
            </View>
          </View>
        </View>
        </View>
  )
}

export default LP_ProfileThirdRow