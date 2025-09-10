import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/Auth/styles'

const LP_OrderFModelDetail = () => {
  return (
    <View>
             <Text style={styles.OrderConfirmationText}>Order Confirmation</Text>
            <View style={styles.OrderDetailsContainer}>
                            <View style={styles.FD_R_Gap_1_2H_MarginTop_4XML}>
                              <Text style={styles.leftsidetext}>Product/Suppliers</Text>
                              <Text style={styles.rightsidetext}>Product 1</Text>
                            </View>
                            <View style={styles.FD_R_Gap_1_83H_MarginTop_4XML}>
                              <Text style={styles.leftsidetext}>Number of Carton</Text>
                              <Text style={styles.rightsidetext}>1</Text>
                            </View>
                            <View style={styles.FD_R_Gap_1_82H_MarginTop_4XML}>
                              <Text style={styles.leftsidetext}>Order Unit</Text>
                              <Text style={styles.rightsidetext}>Medium</Text>
                            </View>
                            <View style={styles.FD_R_Gap_1_6H_MarginTop_4XML}>
                              <Text style={styles.leftsidetext}>Payment Method</Text>
                              <Text style={styles.rightsidetext}>COD</Text>
                            </View>
                          </View>
                          <View style={styles.FD_R_Gap_1_42H_MarginTop_4XML}>
                            <Text style={styles.OrderAmountText}>Order Amount(PKR)</Text>
                            <Text style={styles.OrderAmountValueText}>10,500</Text>
                          </View>
                          <View style={styles.FD_R_Gap_1_93H_MarginTop_4XL}>
                            <Text style={styles.TaxFeeText}>Tax/Fee(PKR)</Text>
                            <Text style={styles.TaxFeeValueText}>200</Text>
                          </View>
                          <View style={styles.BorderBottom} />
                          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                            <Text style={styles.TotalAmountText}>Total Amount</Text>
                            <Text style={styles.TotalAmountValueText}>10,700</Text>
                          </View>
                          <View style={styles.BorderBottomXS} />
                          </View>
  )
}

export default LP_OrderFModelDetail