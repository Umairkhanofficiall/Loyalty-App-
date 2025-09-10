import { StyleSheet, Text, View, Pressable, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { getImage } from '../../../../assets/Images/images'
import rfSpacing from '../../../../theme/rfSpacing'
import colors from '../../../../theme/colors'
import styles from '../../../Auth/styles'
import LP_BuyItemsGoBack from '../../../../Ui/LP_BuyItemsGoBack'
const OrderReceive = () => {
  const orders = [
    {
      id: "1",
      date: "12-04-2025 | 1:04PM",
      title: "20 Cartons Of Cake",
      price: "RS:825",
    },
    {
      id: "2",
      date: "13-04-2025 | 3:15PM",
      title: "10 Boxes Of Biscuits",
      price: "RS:450",
    },
    {
      id: "3",
      date: "14-04-2025 | 11:30AM",
      title: "5 Packs Of Juice",
      price: "RS:300",
    },
    {
      id: "4",
      date: "13-04-2025 | 3:15PM",
      title: "10 Boxes Of Biscuits",
      price: "RS:450",
    },
    {
      id: "5",
      date: "14-04-2025 | 11:30AM",
      title: "5 Packs Of Juice",
      price: "RS:300",
    },
    {
      id: "6",
      date: "12-04-2025 | 1:04PM",
      title: "20 Cartons Of Cake",
      price: "RS:825",
    },
    {
      id: "7",
      date: "13-04-2025 | 3:15PM",
      title: "10 Boxes Of Biscuits",
      price: "RS:450",
    },
  ];
  const navigation = useNavigation();
  return (
    <View style={styles.F_1_BG_ICONBG}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <LP_BuyItemsGoBack title="Order Assigned to you"/>
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate("Signaturetext" as never)}>
            <View style={styles.W_3_H_9_BG_W_BW_XXXS_BC_LO_MT_XXL_BR_XXL_AS_C}>
              <View style={styles.FD_R_MT_4xxll}>
                <Image
                  source={getImage("tickk")}
                  style={styles.H_5XXML_W_5XXML_ML_S}
                />
                <View>
                  <Text style={styles.CL_NG_ML_3XL_TOP_NXS}>
                    {item.date}
                  </Text>
                  <Text style={styles.CL_HC_ML_3XL_FS_XML_FW_600_MT_XXXS}>
                    {item.title}
                  </Text>
                </View>
                <View style={styles.ML_7XMML_GAP_XXS}>
                  <Text style={styles.CL_HC_FS_XML_MT_XS_ML_NXL}>
                    {item.price}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: rfSpacing['xxxs'], backgroundColor: colors.LP_IconBG }}
      />
    </View>
  )
}
export default OrderReceive


