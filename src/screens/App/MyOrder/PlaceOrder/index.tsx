import React, { useState } from 'react';
import {View, Text, TouchableOpacity, FlatList, Image, Pressable, Modal} from 'react-native';
import { getImage } from '../../../../assets/Images/images';
import { useNavigation } from '@react-navigation/native';
import LP_OrderSwipeButton from '../../../../Ui/LP_OrderSwipeButton';
import styles from '../../../Auth/styles';
import LP_OrderForm from '../../../../Ui/LP_OrderForm';
import LP_BuyItemsGoBack from '../../../../Ui/LP_BuyItemsGoBack';
import LP_OrderGiftBag from '../../../../Ui/LP_OrderGiftBag';
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
  const isValid = selectedProduct && cartonCount > 0 && activeTab && paymentMethod;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

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
    <View style={styles.P_3XL_BG_ICONBG_F_1}>
       <View style={styles.MT_3XL_ML_l}>
        <LP_BuyItemsGoBack title="Buy Items" />
      </View>
      <LP_OrderGiftBag/>
      <LP_OrderForm
        products={products}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        cartonCount={cartonCount}
        setCartonCount={setCartonCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hoveredTab={hoveredTab}
        setHoveredTab={setHoveredTab}
        tabs={tabs}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        isValid={!!isValid}
        onSubmit={() => setIsModalVisible(true)}
        styles={styles}/>
        
       <LP_OrderSwipeButton
        status={status}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        isSecondModalVisible={isSecondModalVisible}
        setIsSecondModalVisible={setIsSecondModalVisible}
        handleSwipeSuccess={handleSwipeSuccess}
        navigation={navigation}
        styles={styles}/>
    </View>
  );
};
export default OrderScreen;


