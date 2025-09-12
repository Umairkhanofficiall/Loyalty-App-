import React, { useState } from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import styles from "../../../../Auth/styles";
import LP_ListForBuyItems from "../../../../../Ui/LP_ListForBuyItems";
import LP_BuyItemsGoBack from "../../../../../Ui/LP_BuyItemsGoBack";
import LP_SearchComp from "../../../../../Ui/LP_SearchComp";
const options = ["All Items ", "Beauty", "Food", "Gift Card"];
const BuyItems = () => {

  const [search, setSearch] = useState("");
  const [activeOption, setActiveOption] = useState("All");
  return (
    <View style={styles.F_1_BG_F6F6F6}>
      <LP_BuyItemsGoBack title="Buy Items"/>
      <LP_SearchComp/>
      <View style={styles.FD_R_JC_SA_MB_4XL}>
        {options.map((opt) => {
          const isActive = activeOption === opt;
          return (
            <Pressable
              key={opt}
              onPress={() => setActiveOption(opt)}
              style={[styles.PY_M_PX_L_BR_4XL, isActive && styles.BG_FF]}
            >
              <Text style={[styles.FS_L_CL_NG, isActive && styles.CL_MO_FW_600]}>
                {opt}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <LP_ListForBuyItems/>
    </View>
  );
};
export default BuyItems;


