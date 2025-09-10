import { View, Text ,Image} from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import Profileimage from '../assets/Images/Profile/Profileimage'
import Verifyicon from '../assets/Images/Profile/Verifyicon'
import { getImage } from '../assets/Images/images'

const LP_ProfileSecondRow = () => {
  return (
    <View>
    <View style={styles.FD_R_MT_5XL}>
              <View>
                <Profileimage />
              </View>
              <View style={styles.ML_S}>
                <View style={styles.FD_R}>
                  <Text style={styles.NameText}>Jakob Rizza</Text>
                  <Verifyicon style={styles.VerifyIcon} />
                </View>
                <View>
                  <Text style={styles.Emailtext}>jakobrizza@email.com</Text>
                  <View style={styles.UL_Firm}>
                    <Text style={styles.Firm}>Distributor</Text>
                  </View>
                </View>
              </View>
              <View style={styles.ML_95L_MT_XXL}>
                <Image source={getImage('arrow')} style={styles.Arrowicon} />
              </View>
            </View>
    
            <View style={styles.DIVIDER} />
            </View>
  )
}

export default LP_ProfileSecondRow