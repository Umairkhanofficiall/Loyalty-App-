
import React, { useState } from 'react';

import {

  View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image, Pressable, Modal} from 'react-native';

import { getImage } from '../../../../assets/Images/images';

import { useNavigation } from '@react-navigation/native';

import rfSpacing from '../../../../theme/rfSpacing';

import colors from '../../../../theme/colors';

import SwipeButton from 'rn-swipe-button';

import ArrowModel from '../../../../assets/Images/Order/ArrowModel';



import Loader from '../../../../Ui/LP_LottieButtonS';

import ThirdModel from '../../../../assets/Images/Order/ThirdModel';









const products = ['Cap Cake 1', 'Cap Cake 2', 'Cap Cake 3'];



const OrderScreen = () => {

  const navigation = useNavigation();

  const [status, setStatus] = useState("initial");



  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const [showDropdown, setShowDropdown] = useState(false);

  const [cartonCount, setCartonCount] = useState(0);

  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState("Redeem");

  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const tabs = ["Small", "Medium", "Large"];

  const isValid =

    selectedProduct && cartonCount > 0 && activeTab && paymentMethod;



 

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);





  const orderAmount = 10700;



  const handleSwipeSuccess = () => {

  setStatus("loading");



  setTimeout(() => {

    setStatus("done");





    setTimeout(() => {

      setIsModalVisible(false);

      setIsSecondModalVisible(true);

    }, 1000);



  }, 2000);

};





  return (

    <View style={styles.container}>

      <View style={{ flexDirection: "row" }}>

        <Pressable onPress={() => navigation.goBack()}>

          <Image source={getImage('rightface')} style={{ width: rfSpacing['5xl'], height: rfSpacing['5xl'] }} />

        </Pressable>

        <Text style={styles.header}>Buy Item</Text>

      </View>

      <View style={{ flexDirection: "row" }}>

        <Image source={getImage('goldone')} style={{ width: rfSpacing['5xxl'], height: rfSpacing['5xxl'], marginLeft: rfSpacing['1.8H'], top: rfSpacing['4xxll'] }} />

        <Image source={getImage('redone')} style={{ width: rfSpacing['5xxl'], height: rfSpacing['5xxl'], marginLeft: rfSpacing['6xsl'], top: rfSpacing['6xsl'], transform: [{ rotate: '40deg' }] }} />

      </View>

      <View style={{ flexDirection: "row" }}>

        <Image source={getImage('goldone')} style={{ width: rfSpacing['5xxml'], height: rfSpacing['5xxml'], marginLeft: rfSpacing['s'], top: rfSpacing['1H'], left: rfSpacing['10xl'], transform: [{ rotate: '70deg' }] }} />

        <View style={{ flexDirection: "row" }}>

          <Image source={getImage('redone')} style={{ width: rfSpacing['5xxl'], height: rfSpacing['5xxl'], marginLeft: rfSpacing['s'], left: rfSpacing['10xl'], top: rfSpacing['6xl'], zIndex: 10, transform: [{ rotate: '160deg' }] }} />

          <Image source={getImage('bag')} style={{ width: rfSpacing['1.89H'], height: rfSpacing['1.8H'], marginLeft: rfSpacing['s'] }} />

          <Image source={getImage('percent')} style={{ width: rfSpacing['6xsl'], height: rfSpacing['6xsl'], left: -rfSpacing['9xml'], top: rfSpacing['6xsl'] }} />

        </View>

        <Image source={getImage('redone')} style={{ width: rfSpacing['3xl'], height: rfSpacing['3xl'], left: -rfSpacing['10xl'], top: rfSpacing['1.1H'], transform: [{ rotate: '110deg' }] }} />

      </View>

      <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing['xxl'], fontWeight: "600", marginTop: rfSpacing['s'] }}>New Order </Text>

      <Text style={styles.label}>Product/Suppliers</Text>

      <TouchableOpacity

        style={styles.dropdown}

        onPress={() => setShowDropdown(!showDropdown)}

      >

        <View style={{ flexDirection: "row" }}>

          <Text style={styles.dropdownText}>

            {selectedProduct ? selectedProduct : 'Select Product/Suppliers'}

          </Text>

        </View>

        <Image source={getImage('arrowdown')} style={{ width: rfSpacing['3xl'], height: rfSpacing['3xl'], marginLeft: rfSpacing['3H'], marginTop: -rfSpacing['xmml'] }} />

      </TouchableOpacity>

      <View style={{ position: 'relative' }}>

        {showDropdown && (

          <View style={styles.dropdownOverlay}>

            <FlatList

              data={products}

              keyExtractor={(item) => item}

              renderItem={({ item }) => (

                <TouchableOpacity

                  style={styles.dropdownItem}

                  onPress={() => {

                    setSelectedProduct(item);

                    setShowDropdown(false);

                  }}

                >

                  <Text style={{ color: colors.LP_HeadingColor }}>{item}</Text>

                </TouchableOpacity>

              )}

            />

          </View>

        )}

      </View>





      <Text style={styles.label}>Number of Cartons</Text>

      <View style={styles.cartonInputContainer}>



        <Text style={styles.cartonInputText}>{cartonCount}</Text>



        <TouchableOpacity onPress={() => setCartonCount((prev) => prev + 1)}>

          <Image source={getImage('updown')} style={{ width: rfSpacing['3xl'], height: rfSpacing['3xl'], resizeMode: "contain" }} />

        </TouchableOpacity>

      </View>







      <Text style={styles.label}>Order Unit</Text>

      <View style={styles.container4}>

        {tabs.map((tab) => {

          const isActive = activeTab === tab;

          const isHovered = hoveredTab === tab;



          return (

            <Pressable

              key={tab}

              onPress={() => setActiveTab(tab)}

              onPressIn={() => setHoveredTab(tab)}

              onPressOut={() => setHoveredTab(null)}

              style={[

                styles.button,

                isActive && styles.activeButtonone

              ]}

            >

              <Text

                style={[

                  styles.text,

                  isHovered && !isActive ? styles.hoverText : null,

                  isActive ? styles.activeText : null

                ]}

              >

                {tab}

              </Text>

            </Pressable>

          );

        })}

      </View>





      <Text style={styles.label}>Payment Method</Text>

      <View style={styles.radioGroupVertical}>

        {['COD', 'Cash'].map((method) => (

          <TouchableOpacity

            key={method}

            style={styles.radioRow}

            onPress={() => setPaymentMethod(method)}

          >

            <View style={[styles.radioCircle, paymentMethod === method && styles.radioSelected]} />

            <Text style={styles.radioRowText}>{method}</Text>

          </TouchableOpacity>

        ))}

      </View>





      <TouchableOpacity

        style={[styles.submitButton, isValid ? styles.activeButton : styles.disabledButton]}

        disabled={!isValid}

        onPress={() => {



          setIsModalVisible(true);

        }}

      >

        <Modal

          transparent={true}

          animationType="slide"

          visible={isModalVisible}

          onRequestClose={() => setIsModalVisible(false)}

        >

          <View style={styles.modalBackground}>

            <View style={styles.modalContainer}>



              <Text style={{ fontSize: rfSpacing['3xl'], fontWeight: 'bold', color: colors.LP_HeadingColor }}>Order Confirmation</Text>

              <View style={{ width: rfSpacing['3.10H'], height: rfSpacing['1.93H'], backgroundColor: "#F1F6F9", borderRadius: rfSpacing['xl'], top: rfSpacing['s'], alignSelf: "center" }}>

                <View style={{ flexDirection: "row", gap: rfSpacing['1.2H'], marginTop: rfSpacing['4xml'] }}>

                  <Text style={styles.leftsidetext}>Product/Suppliers</Text>

                  <Text style={styles.rightsidetext}>Product 1</Text>

                </View>

                <View style={{ flexDirection: "row", gap: rfSpacing['1.83H'], marginTop: rfSpacing['4xml'] }}>

                  <Text style={styles.leftsidetext}>Number of Carton</Text>

                  <Text style={styles.rightsidetext}>1</Text>

                </View>

                <View style={{ flexDirection: "row", gap: rfSpacing['1.82H'], marginTop: rfSpacing['4xml'] }}>

                  <Text style={styles.leftsidetext}>Order Unit</Text>

                  <Text style={styles.rightsidetext}>Medium</Text>

                </View>

                <View style={{ flexDirection: "row", gap: rfSpacing['1.6H'], marginTop: rfSpacing['4xml'] }}>

                  <Text style={styles.leftsidetext}>Payment Method</Text>

                  <Text style={styles.rightsidetext}>COD</Text>

                </View>

              </View>

              <View style={{ flexDirection: "row", gap: rfSpacing['1.42H'], marginTop: rfSpacing['4xml'], alignSelf: "center" }}>

                <Text style={{ color: "#5C6670", fontSize: rfSpacing['mll'], fontWeight: "400" }}>Order Amount(PKR)</Text>

                <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing['ml'], fontWeight: "600" }}>10,500</Text>

              </View>

              <View style={{ flexDirection: "row", gap: rfSpacing['1.93H'], marginTop: rfSpacing['4xl'], alignSelf: "center" }}>

                <Text style={{ color: "#5C6670", fontSize: rfSpacing['mll'], fontWeight: "400" }}>Tax/Fee(PKR)</Text>

                <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing['ml'], fontWeight: "600" }}>200</Text>

              </View>

              <View style={{ borderBottomWidth: 1, borderBottomColor: '#E4EBF0', marginVertical: rfSpacing['s'] }} />



              <View style={{ flexDirection: "row", gap: rfSpacing['1.35H'], marginTop: rfSpacing['xxs'] }}>

                <Text style={{ color: "#5C6670", fontSize: rfSpacing['xxl'], fontWeight: "400" }}>Total Amount</Text>

                <Text style={{ color: "#E85D43", fontSize: rfSpacing['3xl'], fontWeight: "600" }}>10,700</Text>

              </View>

              <View style={{ borderBottomWidth: rfSpacing['xxxs'], borderBottomColor: '#E4EBF0', marginVertical: rfSpacing['s'] }} />





              {status === "initial" && (

                <SwipeButton

                  height={55}

                  railBackgroundColor="#E85D43"

                  railBorderColor="#E85D43"

                  railFillBackgroundColor="#fffcfcff"

                  railFillBorderColor="#e43e3eff"

                  thumbIconBackgroundColor="#fff"

                  thumbIconBorderColor="#fff"

                  title="Slide to Confirm Order"

                  titleColor="#fff"

                  titleFontSize={15}

                  onSwipeSuccess={handleSwipeSuccess}

                  thumbIconComponent={() => (

                    <View

                      style={{

                        backgroundColor: "#fff",

                        alignItems: "center",

                        justifyContent: "center",

                      }}

                    >

                      <ArrowModel />

                    </View>

                  )}

                />



              )}



              {status === "loading" && (

                <View style={styles.loadingBtn}>

                  <Text style={styles.loadingText}>   Confirming...</Text>

                  <Loader />



                </View>

              )}



              {status === "done" && (

                <View style={styles.successBtn}>

                  <Text style={styles.successText}>Woohoo, it’s done! </Text>

                </View>

              )}



              <TouchableOpacity

                style={styles.submitButton}

                onPress={() => setIsModalVisible(false)}

              >

                <View style={{ flexDirection: "row", gap: rfSpacing['xs'] }}>

                  <Image source={getImage('rightface')} style={{ width: rfSpacing['3xl'], height: rfSpacing['3xl'], resizeMode: "contain", marginTop: 2 }} />

                  <Text style={styles.submitTextone}>Back</Text>

                </View>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>



        <Modal

          visible={isSecondModalVisible}

          transparent={true}

          animationType="fade"

          onRequestClose={() => setIsSecondModalVisible(false)}

        >

          <View style={styles.modalBackground}>

            <View style={styles.modalContainertwo}>

              <View style={{alignSelf:"center",top:-rfSpacing['5xl'] }}>

              <ThirdModel/>

           

              </View>

              <Text style={{ color: colors.LP_HeadingColor, fontSize: rfSpacing['4xxsl'], fontWeight: 'bold', textAlign: "center", top: -rfSpacing['3xl'] }}>

                Order Confirmed

              </Text>

              <View style={{ paddingTop: rfSpacing['xl'], top: -rfSpacing['3xl'] }}>

                <Text style={{ color: colors.LP_NaturalGray, fontSize: rfSpacing['ml'],textAlign:"center" }}>Thanks for your order. Its in queue and will  </Text>

                <Text style={{ color: colors.LP_NaturalGray, fontSize: rfSpacing['ml'], textAlign: "center" }}>be delivered shortly.</Text>

              </View>

              <View style={{ flexDirection: "row", width:  rfSpacing['2.25H'], height:  rfSpacing['4xxm'], backgroundColor: "#E4EBF0", alignSelf:"center", marginTop: rfSpacing['4xl'], top: -rfSpacing['3xl'] }}>

                <Text style={{ color: colors.LP_HeadingColor, paddingLeft:  rfSpacing['xxxs'],paddingTop:rfSpacing['xxs'] }}>Order Number : 1987091575757</Text>

               

                <Image source={getImage('copy')} style={{ width: rfSpacing['xl'], height: rfSpacing['xl'], resizeMode: "contain", marginTop:  rfSpacing['xss'], marginLeft:  rfSpacing['xxs'] }} />

                

              </View>

              <TouchableOpacity

                onPress={() => navigation.navigate('Order' as never)}

                style={[styles.submitButtontwo, { marginTop: rfSpacing['4xl'], backgroundColor: 'white', top: -rfSpacing['3xl'] }]}

              >

                <Text style={styles.submitTexttwo}>Done</Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>



        <Text style={styles.submitText}>Place Order</Text>

      </TouchableOpacity>

    </View>

  );

};



export default OrderScreen;



const styles = StyleSheet.create({

  container: {

    padding: rfSpacing['3xl'],

    backgroundColor: colors.LP_IconBG,

    flex: 1,

  },

  header: {

    fontSize: rfSpacing['3xl'],

    fontWeight: '600',

    marginBottom: rfSpacing['3xl'],

    marginLeft: rfSpacing['s'],

    color: colors.LP_HeadingColor

  },

  label: {

    marginTop: rfSpacing['s'],

    fontSize: rfSpacing['l'],

    color: colors.LP_NaturalGray,

  },

  dropdown: {

    height: rfSpacing['6xsl'],

    padding: rfSpacing['l'],

    borderColor: colors.LP_OrderBC,

    elevation:rfSpacing['xxxs'],

    borderRadius: rfSpacing['xss'],

    marginTop: rfSpacing['xss'],

    backgroundColor: "white"

  },

  dropdownText: {

    color: '#444',

    marginTop: rfSpacing['xxs']

  },

  dropdownList: {

    borderColor: '#ccc',

    elevation: rfSpacing['xxs'],

    borderRadius: rfSpacing['xss'],

    maxHeight: rfSpacing['1.42H'],

  },

  dropdownItem: {

    padding: rfSpacing['m'],

    borderBottomWidth: rfSpacing['xxxs'],

    borderBottomColor: '#eee',

  },

  cartonInputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    elevation: rfSpacing['xxxs'],

    borderColor: colors.LP_OrderBC,

    borderRadius: rfSpacing['xss'],

    paddingHorizontal: rfSpacing['m'],

    paddingVertical: rfSpacing['s'],

    marginTop: rfSpacing['xss'],

    justifyContent: 'space-between',

    backgroundColor: "white",

    height: rfSpacing['6xsl']

  },

  cartonInputText: {

    fontSize: rfSpacing['xl'],

    color: colors.LP_HeadingColor,

    marginRight: rfSpacing['s'],

  },

  iconStyle: {

    width: rfSpacing['3xl'],

    height: rfSpacing['3xl'],

  },

  radioGroup: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginVertical: rfSpacing['s'],

  },

  radioButton: {

    borderWidth: rfSpacing['xxxs'],

    borderColor: colors.LP_OrderBC,

    paddingVertical: rfSpacing['s'],

    paddingHorizontal: rfSpacing['xl'],

    borderRadius: rfSpacing['xss'],

  },

  radioButtonSelected: {

    backgroundColor: '#eee',

    borderColor:colors.LP_Mainorange,

  },

  radioText: {

    color: colors.LP_NaturalGray,

  },

  radioTextSelected: {

    fontWeight: 'bold',

    color: colors.LP_Mainorange,

  },

  radioGroupVertical: {

    marginTop: rfSpacing['xss'],

  },

  radioRow: {

    flexDirection: 'row',

    alignItems: 'center',

    marginVertical: rfSpacing['xss'],

    backgroundColor: 'white',

    height: rfSpacing['6xsl'],

    borderRadius: rfSpacing['xss'],

    paddingHorizontal: rfSpacing['xl'],

    elevation: rfSpacing['xxxs'],

  },

  radioCircle: {

    height: rfSpacing['xl'],

    width: rfSpacing['xl'],

    borderRadius: rfSpacing['s'],

    borderWidth: rfSpacing['xxs'],

    borderColor: '#999',

    marginRight: rfSpacing['s'],

  },

  radioSelected: {

    borderColor: colors.LP_Mainorange,

    backgroundColor: colors.LP_Mainorange,

  },

  radioRowText: {

    color: colors.LP_HeadingColor,

    fontSize: rfSpacing['l'],

  },

  submitButton: {

    paddingVertical: rfSpacing['l'],

    borderRadius: rfSpacing['6xl'],

    marginTop: rfSpacing['s'],

    alignItems: 'center',



  },

  submitButtontwo: {

    paddingVertical: rfSpacing['l'],

    borderRadius: rfSpacing['6xl'],

    marginTop: rfSpacing['s'],

    alignItems: 'center',

    borderWidth: rfSpacing['xxxs'],

    borderColor: colors.LP_OrderBC

  },

  activeButtonone: {

    backgroundColor:colors.LP_White

  },

  activeButton: {

    backgroundColor: colors.LP_Mainorange,

  },

  disabledButton: {

    backgroundColor: '#F1F6F9',

  },

  submitText: {

    color: colors.LP_White,

    fontWeight: '600',

  },

  submitTexttwo: {

    color: colors.LP_HeadingColor,

    fontWeight: '600',



  },



  dropdownOverlay: {

    position: 'absolute',

    left: 0,

    right: 0,

    backgroundColor: colors.LP_White,

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: rfSpacing['xss'],

    maxHeight: rfSpacing['1.45H'],

    zIndex: 999,

  },

  container4: {

    width: rfSpacing['3.35H'],

    flexDirection: 'row',

    backgroundColor: '#E5E7EB',

    borderRadius: rfSpacing['6xsl'],

    padding: rfSpacing['xms'],

    alignSelf: 'center',

    marginTop: rfSpacing['s'],

  },

  button: {

    paddingVertical: rfSpacing['s'],

    paddingHorizontal: rfSpacing['5xxl'],

    borderRadius: rfSpacing['6xsl'],

  },

  text: {

    color: '#6B7280',

    fontSize: rfSpacing['xl'],

  },

  hoverText: {

    color: colors.LP_HeadingColor,

  },

  activeText: {

    color: '#E85D43',

  },

  modalBackground: {

    flex: 1,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    justifyContent: 'center',

    alignItems: 'center',

  },

  modalContainer: {

    width: rfSpacing['3.4H'],

    height: rfSpacing['5.1H'],

    backgroundColor: 'white',

    padding: rfSpacing['3xl'],

    borderRadius: rfSpacing['s'],

    elevation: rfSpacing['s'],

  },

  modalContainertwo: {

    width: rfSpacing['3.35H'],

    height: rfSpacing['3.95H'],

    backgroundColor: 'white',

    padding: rfSpacing['3xl'],

    borderRadius: rfSpacing['s'],

    elevation: 5,

  },

  submitTextone: {

    color: colors.LP_HeadingColor

  },

  leftsidetext: {

    color: "#5C6670",

    fontSize: rfSpacing['m'],

    fontWeight: "400",

    marginLeft: rfSpacing['s'],

    top: -rfSpacing['3xl'],

  },

  rightsidetext: {

    color: colors.LP_HeadingColor,

    fontSize: rfSpacing['l'],

    fontWeight: "600",

    top: -rfSpacing['3xl']

  },

  loadingBtn: {

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: "#ffe6e1",

    padding: rfSpacing['xl'],

    borderRadius: rfSpacing['7xl'],

    marginTop:rfSpacing['m']

  },

  loadingText: {

    color: colors.LP_Mainorange,

    fontSize: rfSpacing['xl'],

  },

  successBtn: {

    backgroundColor: "#32CD32",

    padding: rfSpacing['xl'],

    borderRadius: rfSpacing['7xl'],

     marginTop:rfSpacing['m'],

    alignItems: "center",

  },

  successText: {

    color: "#fff",

    fontSize: rfSpacing['xl'],

    fontWeight: "bold",

  },



});

