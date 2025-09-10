import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, Image, Modal, Pressable } from 'react-native'
import styles from '../screens/Auth/styles';
import { getImage } from '../assets/Images/images';
import Close from '../assets/Images/Profile/Close';
import LP_ButtonForModel from './LP_ButtonForModel';
import { useState } from 'react';

const products = [
  { id: "1", title: "This is the title of product", price: 600, image: require("../assets/Images/Logo/picone.png") },
  { id: "2", title: "This is the title of product", price: 400, image: require("../assets/Images/Logo/pictwo.png") },
  { id: "3", title: "This is the title of product", price: 200, image: require("../assets/Images/Logo/picthree.png") },
  { id: "4", title: "This is the title of product", price: 800, image: require("../assets/Images/Logo/picfour.png") },
  { id: "5", title: "This is the title of product", price: 500, image: require("../assets/Images/Logo/picfive.png") },
  { id: "6", title: "This is the title of product", price: 300, image: require("../assets/Images/Logo/picsix.png") },
];

const LP_ListForBuyItems = () => {

    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const renderItem = ({ item }: any) => (
        <View style={styles.CARD_BG_W_BR_M_P_M_MB_M_F_047_E_2}>
          <Image source={item.image} style={styles.W_100P_H_1H_BR_S} resizeMode="cover" />
          <Text style={styles.MT_XL_FS_XM_CL_333}>{item.title}</Text>
          <Pressable
            style={styles.FD_R_MT_XL_BG_W_BW_1_BC_DDD_BR_S_PV_S_AI_C_PL_4XML}
            onPress={() => setSelectedProduct(item)}
          >
            <Text style={styles.FS_XL_CL_333_MT_NXXS}>Use  </Text>
            <View style={styles.H_4XXSL_W_4XXSL_BR_4XL_BG_STARWRAP}>
              <Image
                source={getImage("tick")}
                style={styles.H_XL_W_XL_RM_C_F_09_JC_C_AS_C}
              />
            </View>
            <Text style={styles.FS_XL_CL_333_MT_NXXS}>  {item.price}</Text>
          </Pressable>
        </View>
        
      );
  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.JC_SA_GAP_XS}
        contentContainerStyle={styles.P_L}
      />

      <Modal
        visible={!!selectedProduct}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.F_1_BG_MODAL_JC_FE}>
          <View style={styles.BG_W_BTLR_L_BTRR_L_P_L}>
            {selectedProduct && (
              <>
                <View style={styles.FD_R_GAP_21_MV_XL}>
                  <Text style={styles.CL_HC_FS_XXL_FW_600}>Product Details</Text>
                  <Pressable onPress={() => setSelectedProduct(null)} >
                    <Close />
                  </Pressable>
                </View>
                <Image
                  source={selectedProduct.image}
                  style={styles.W_100P_H_25H_BR_S_MB_M}
                  resizeMode="cover"
                />
                <Text style={styles.FS_XXL_FW_600_CL_222_MB_S}>{selectedProduct.title}</Text>
                <Text style={styles.FS_XL_FW_BOLD_MT_S_MB_XS_CL_HC}>Description</Text>
                <Text style={styles.FS_XL_CL_555_MB_L}>
                  Take your music anywhere! Compact, powerful portable speaker
                  with crisp, booming sound and long battery life-perfect for adventures,parties, or chilling at home.
                  Water-resistance and built to last!
                </Text>

                <View style={styles.W_35H_H_6XML_BW_XXXS_BR_XL_FD_R_BC_BORDER_PT_L}>
                  <Text style={styles.FS_XL_FW_500_CL_HC_PL_XL}>Price</Text>
                  <Text style={styles.FS_XL_FW_600_CL_HC_PL_XS}></Text>
                  <View style={styles.ML_230H}>
                    <View style={styles.H_4XXSL_W_4XXSL_BR_4XL_BG_STARWRAP}>
                      <Image
                        source={getImage("tick")}
                        style={styles.H_XL_W_XL_RM_C_F_09_JC_C_AS_C}
                      />
                    </View>
                  </View>
                  <Text style={styles.FS_XL_FW_600_CL_HC_PL_XS}>
                    {selectedProduct.price}
                  </Text>
                </View>

                <LP_ButtonForModel title="Buy With 400 Points" />
              </>
            )}
          </View>
        </View>
      </Modal>
      </View>
  )
}

export default LP_ListForBuyItems