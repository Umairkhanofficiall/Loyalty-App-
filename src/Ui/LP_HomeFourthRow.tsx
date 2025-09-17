import { View, Text ,Image , TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'
import LP_ContentDisc from './LP_ContentDisc'
import { getImage } from '../assets/Images/images'
import LP_GetPoints from './LP_GetPoints'
import { useNavigation } from '@react-navigation/native'
import Arrow from '../assets/Images/Profile/Arrow'

const LP_HomeFourthRow = ({ searchText }) => {
  const navigation =  useNavigation();
  return (
    <View style={styles.container3}>
      <View style={styles.FD_R}>
        <LP_ContentDisc Title={'Recent scans'}/>
        <View style={styles.FD_R_MT_MR}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Points' as never)}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
          <View style={styles.H_W_ML_S_MT_XXS}>
            <Arrow/>
          </View>
        </View>
      </View>
      <LP_GetPoints searchText={searchText} />
    </View>
  )
}

export default LP_HomeFourthRow