import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import LP_GetPoints from '../../../../Ui/LP_GetPoints';
import LP_FilterButton from '../../../../Ui/LP_FilterButton';
import styles from '../../../Auth/styles';
import LP_LoyaltyMainThree from '../../../../Ui/LP_LoyaltyMainThree';

const Points = () => {
  return (
    <View style={styles.containerPoints}>
      <ScrollView contentContainerStyle={styles.PB_9xml}>
        <LP_LoyaltyMainThree/>
        <View style={styles.FD_R_MT_3XL}>
          <Text style={styles.C_B_FS_XXL_FW_600_MT_4XXSL_L_4XL}>
            Scan History
          </Text>
          <LP_FilterButton />
        </View>
        <LP_GetPoints />
      </ScrollView>
    </View>
  )
}
export default Points

