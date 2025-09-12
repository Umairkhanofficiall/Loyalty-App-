import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles';
import Search from '../assets/Images/SVGS/Search';
import { useState } from 'react';
import colors from '../theme/colors';
const LP_SearchComp = () => {
      const [search, setSearch] = useState("");
  return (
    <View style={styles.W_94P_H_7XL_M_XL_AS_C_FD_R_AI_C_BW_1_BC_CCC_BR_8_BG_W}>
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search"
              placeholderTextColor={colors.LP_SearchPlaceholdertext}
              style={styles.PH_16}
            />
            <Search style={styles.ML_25H} />
          </View>
  )
}
export default LP_SearchComp