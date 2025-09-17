import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import rfSpacing from '../theme/rfSpacing';
import colors from '../theme/colors';
import Tick from '../assets/Images/SVGS/Tick';
import { getImage } from '../assets/Images/images';

const data = [
  { id: '1', date: "12-04-2025", time: "1:04PM", points: 125 },
  { id: '2', date: "13-04-2025", time: "3:45PM", points: 135 },
  { id: '3', date: "14-04-2025", time: "1:15AM", points: 145 },
];

const LP_GetPoints = ({ searchText = '' }) => {
  const filteredData = searchText
    ? data.filter(item =>
        item.points.toString().includes(searchText.trim())
      )
    : data;

  const renderItem = ({ item }) => (
    <View style={styles.SUBCONTAINER3}>
      <View style={styles.FD_R_MT_XML}>
        <View style={styles.ICON_BG}>
          <View style={styles.ICON_INNER}>
            <Tick />
          </View>
        </View>

        <View>
          <Text style={styles.CL_BORDER_TEXT_ML_L}>
            {item.date} | {item.time}
          </Text>
          <Text style={styles.CL_HC_ML_XL_FS_XL_FW_600}>
            Got Points
          </Text>
        </View>

        <View style={styles.FD_R_ML_8XML_GAP_XS}>
          <View style={styles.ICON_WRAPPER3}>
            <Image
              source={getImage("tick")}
              style={styles.IMG_TICK}
            />
          </View>
          <Text style={styles.CL_HC_FS_XXL_MT_MS}>
            {item.points}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

export default LP_GetPoints;

const styles = StyleSheet.create({
  SUBCONTAINER3: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['8xml'],
    backgroundColor: colors.LP_White,
    borderWidth: rfSpacing['xxxs'],
    borderColor: colors.LP_inputborder,
    marginLeft: rfSpacing['4xxsl'],
    marginTop: rfSpacing['xl'],
    borderRadius: rfSpacing['xl'],
    justifyContent:"center"
  },
  FD_R_MT_XML: {
    flexDirection: "row",
  },
  ICON_BG: {
    height: rfSpacing["5xxml"],
    width: rfSpacing["5xxml"],
    backgroundColor: colors.LP_IcontickBG,
    borderRadius: rfSpacing["4xl"],
    marginLeft: rfSpacing["m"],
    justifyContent: "center",
  },
  ICON_INNER: {
    marginLeft: rfSpacing["xm"],
    marginTop: rfSpacing["xxxs"],
  },
  CL_BORDER_TEXT_ML_L: {
    color: colors.LP_borderText,
    marginLeft: rfSpacing["l"],
  },
  CL_HC_ML_XL_FS_XL_FW_600: {
    color: colors.LP_HeadingColor,
    marginLeft: rfSpacing["xl"],
    fontSize: rfSpacing["xl"],
    fontWeight: "600",
  },
  FD_R_ML_8XML_GAP_XS: {
    flexDirection: "row",
    marginLeft: rfSpacing["8xml"],
    gap: rfSpacing["xs"],
    alignItems: "center",
  },
  ICON_WRAPPER3: {
    height: rfSpacing['4xxsl'],
    width: rfSpacing['4xxsl'],
    borderRadius: rfSpacing['4xl'],
    backgroundColor: colors.LP_Starwrap,
    justifyContent: "center",
    alignItems: "center",
    marginTop: rfSpacing['m'],
  },
  IMG_TICK: {
    height: rfSpacing["xl"],
    width: rfSpacing["xl"],
    resizeMode: "contain",
    top: -rfSpacing["xxxs"],
  },
  CL_HC_FS_XXL_MT_MS: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing["xxl"],
    marginTop: rfSpacing["ms"],
  },
});
