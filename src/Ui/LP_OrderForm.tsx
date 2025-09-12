import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Pressable} from 'react-native';
import { getImage } from '../assets/Images/images';
import styles from '../screens/Auth/styles';



type Props = {
  products: string[];
  selectedProduct: string | null;
  setSelectedProduct: (val: string) => void;
  showDropdown: boolean;
  setShowDropdown: (val: boolean) => void;
  cartonCount: number;
  setCartonCount: (val: number) => void;
  activeTab: string;
  setActiveTab: (val: string) => void;
  hoveredTab: string | null;
  setHoveredTab: (val: string | null) => void;
  tabs: string[];
  paymentMethod: string | null;
  setPaymentMethod: (val: string) => void;
  isValid: boolean;
  onSubmit: () => void;
};


const LP_OrderForm = ({
  products,
  selectedProduct,
  setSelectedProduct,
  showDropdown,
  setShowDropdown,
  cartonCount,
  setCartonCount,
  activeTab,
  setActiveTab,
  hoveredTab,
  setHoveredTab,
  tabs,
  paymentMethod,
  setPaymentMethod,
  isValid,
  onSubmit,


}: Props) => (
  <View>
    <Text style={styles.NewOrderText}>New Order </Text>
    <Text style={styles.label}>Product/Suppliers</Text>
    <TouchableOpacity
      style={styles.dropdown}
      onPress={() => setShowDropdown(!showDropdown)}
    >
      <View style={styles.FD_R}>
        <Text style={styles.dropdownText}>
          {selectedProduct ? selectedProduct : 'Select Product/Suppliers'}
        </Text>
      </View>
      <Image source={getImage('arrowdown')} style={styles.Arrowdownicon} />
    </TouchableOpacity>
    <View>
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
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
    <Text style={styles.label}>Number of Cartons</Text>
    <View style={styles.cartonInputContainer}>
      <Text style={styles.cartonInputText}>{cartonCount}</Text>
      <TouchableOpacity onPress={() => setCartonCount(cartonCount + 1)}>
        <Image source={getImage('updown')} style={styles.updownicon} />
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
              styles.buttonOrderUnit,
              isActive && styles.activeButtonone
            ]}
          >
            <Text
              style={[
                styles.textOrderUnit,
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
      onPress={onSubmit}
    >
      <Text style={styles.submitText}>Place Order</Text>
    </TouchableOpacity>
  </View>
);

export default LP_OrderForm;

  