
import { StyleSheet, Text, View, Pressable, Image, ScrollView ,FlatList} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { getImage } from '../../../../assets/Images/images'
import rfSpacing from '../../../../theme/rfSpacing'
import colors from '../../../../theme/colors'


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
   
    
      <View style={styles.container}>
       <FlatList
  data={orders}
  keyExtractor={(item) => item.id}
  ListHeaderComponent={
    <View>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={{ flexDirection: "row", marginTop: rfSpacing['3xl'] }}>
          <Image source={getImage('rightface')} style={{ width: rfSpacing['5xl'], height: rfSpacing['5xl'], marginLeft: rfSpacing['3xl'] }} />
          <Text style={styles.header}>Order Assigned to you</Text>
        </View>
      </Pressable>
     
    </View>
  }
  renderItem={({ item }) => (
    <Pressable onPress={() => navigation.navigate("Signaturetext" as never)}>
      <View style={styles.subcontainer3}>
        <View style={{ flexDirection: "row", marginTop: rfSpacing["4xxll"] }}>
          <Image
            source={getImage("tickk")}
            style={{
              height: rfSpacing["5xxml"],
              width: rfSpacing["5xxml"],
              marginLeft: rfSpacing["s"],
            }}
          />
          <View>
            <Text style={{ color: colors.LP_NaturalGray, marginLeft: rfSpacing["3xl"], top: -rfSpacing["xs"] }}>
              {item.date}
            </Text>
            <Text style={{ color: colors.LP_HeadingColor, marginLeft: rfSpacing["3xl"], fontSize: rfSpacing["xml"], fontWeight: "600", marginTop: rfSpacing["xxxs"] }}>
              {item.title}
            </Text>
          </View>
          <View style={{ marginLeft: rfSpacing["7xmml"], gap: rfSpacing["xxs"] }}>
            <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing["xml"], marginTop: rfSpacing["xs"], marginLeft: -rfSpacing['xl'] }}>
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

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.LP_IconBG,

  },
  heading: {
    color: colors.LP_Mainorange,
    fontSize: rfSpacing['4xxm'],
    fontWeight: "600",
    textAlign: "center",
    marginTop: rfSpacing['xl'],
  },
  
  subcontainer3: {
    width: rfSpacing['3.35H'],
    height: rfSpacing['95l'],
    backgroundColor: colors.LP_White,
    borderWidth: rfSpacing['xxxs'],
    borderColor: "#dbd9d9ff",
    marginTop: rfSpacing['xxl'],
    borderRadius: rfSpacing['xxl'],
    alignSelf:"center"
  },
  
  header: {
    fontSize: rfSpacing['3xl'],
    fontWeight: '600',
    marginBottom: rfSpacing['3xl'],
    marginLeft: rfSpacing['s'],
    color: colors.LP_HeadingColor
  }
})
