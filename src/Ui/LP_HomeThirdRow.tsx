import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import LP_LinearGradient from './LP_LinearGradient'
import LP_YourLevel from './LP_YourLevel'
import LP_ScanProgress from './LP_ScanProgress'
import { getImage } from '../assets/Images/images'
import colors from '../theme/colors'
import Arrow from '../assets/Images/Profile/Arrow'
const LP_HomeThirdRow = () => {
  return (
     <LP_LinearGradient
          colors={[colors.LP_White, colors.LP_Gradientfour]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.container2}>
          <View style={styles.FD_R}>
            <View>
              <LP_YourLevel/>
              <Text style={styles.C_FS_FW_PL_PT}>Silver</Text>
            </View>
            <View>
              <Image source={getImage('rank')} style={styles.silver} />
            </View>
          </View>
          <View style={styles.FD_R}>
            <Text style={styles.C_ML_MT_FS_FW}>scans progress:</Text>
            <Text style={styles.C_MT_ML_FS_FW}>360/1000</Text>
          </View>
      <View style={styles.AS_C}>
          <LP_ScanProgress/>
          </View>
          <Text style={styles.TA_C_FS_FW_MT}>640 scans required to reach Gold</Text>
          <View style={styles.subcontainer}>
            <View style={styles.FD_R} >
              <View>
                <Text style={styles.C_PT_PL_FS}>Total Orders</Text>
                <Text style={styles.C_PT_PL_FS_FW}>225</Text>
              </View>
              <View  style={styles.H_W_ML_MT}>
              <Arrow/>
              </View>
            </View>
          </View>
        </LP_LinearGradient>
  )
}

export default LP_HomeThirdRow