import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Modal,
  TextInput,
  StyleSheet,
} from "react-native";
import rfSpacing from "../../../../../theme/rfSpacing";
import { getImage } from "../../../../../assets/Images/images";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../../../theme/colors";
import Search from "../../../../../assets/Images/SVGS/Search";
import Tick from "../../../../../assets/Images/SVGS/Tick";
import Close from "../../../../../assets/Images/Profile/Close";
import LP_ButtonOrange from "../../../../../Ui/LP_ButtonOrange";
import LP_ButtonForModel from "../../../../../Ui/LP_ButtonForModel";
const products = [
  { id: "1", title: "This is the title of product", price: 600, image: require("../../../../../assets/Images/Logo/picone.png") },
  { id: "2", title: "This is the title of product", price: 400, image: require("../../../../../assets/Images/Logo/pictwo.png") },
  { id: "3", title: "This is the title of product", price: 200, image: require("../../../../../assets/Images/Logo/picthree.png") },
  { id: "4", title: "This is the title of product", price: 800, image: require("../../../../../assets/Images/Logo/picfour.png") },
  { id: "5", title: "This is the title of product", price: 500, image: require("../../../../../assets/Images/Logo/picfive.png") },
  { id: "6", title: "This is the title of product", price: 300, image: require("../../../../../assets/Images/Logo/picsix.png") },
];

const options = ["All Items ", "Beauty", "Food", "Gift Card"];

const BuyItems = () => {
  const navigation = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [activeOption, setActiveOption] = useState("All");

  // 🔎 Filter + Search logic
  const filteredProducts = products
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (activeOption === "Low Price") return a.price - b.price;
      if (activeOption === "High Price") return b.price - a.price;
      return 0;
    });

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Pressable
        style={styles.useButton}
        onPress={() => setSelectedProduct(item)}
      >
        <Text style={styles.useText}>Use  </Text>
        <View style={styles.iconWrapper3}>
          <Image
            source={getImage("tick")}
            style={{
              height: rfSpacing["xl"],
              width: rfSpacing["xl"],
              resizeMode: "contain",
              flex: 0.90,
              justifyContent: "center",
              alignSelf: "center"
            }}
          />
        </View>
        <Text style={styles.useText}>  {item.price}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={getImage('rightface')} style={{ width: rfSpacing['5xl'], height: rfSpacing['5xl'] }} />
        </Pressable>
        <Text style={styles.headerTitle}>Buy Items</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchBar}
        />
        <Search style={styles.searchIcon} />
      </View>

      {/* Options */}
      <View style={styles.optionsRow}>
        {options.map((opt) => {
          const isActive = activeOption === opt;
          return (
            <Pressable
              key={opt}
              onPress={() => setActiveOption(opt)}
              style={[styles.optionBtn, isActive && styles.optionActive]}
            >
              <Text style={[styles.optionText, isActive && styles.optionActiveText]}>
                {opt}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Products grid */}
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around", gap: rfSpacing['xs'] }}
        contentContainerStyle={{ padding: rfSpacing.l }}
      />

      {/* Modal */}
      <Modal
        visible={!!selectedProduct}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedProduct(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedProduct && (
              <>
                <View style={{ flexDirection: "row", gap: rfSpacing['2.1'], marginVertical: rfSpacing['xl'] }}>
                  <Text style={styles.MainTextModel}>Product Details</Text>
                  <Pressable onPress={() => setSelectedProduct(null)} >
                    <Close />
                  </Pressable>
                </View>
                <Image
                  source={selectedProduct.image}
                  style={styles.modalImage}
                  resizeMode="cover"
                />
                <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                <Text style={styles.descLabel}>Description</Text>
                <Text style={styles.descText}>
                  Take your music anywhere! Compact, powerful portable speaker
                  with crisp, booming sound and long battery life-perfect for adventures,parties, or chilling at home.
                  Water-resistance and built to last!
                </Text>

                <View style={styles.priceRow}>
                  <Text style={styles.priceText}>Price</Text>
                  <Text style={styles.priceValue}></Text>
                  <View style={{marginLeft:rfSpacing['2.30H']}}>
                   <View style={styles.iconWrapper3}>
          <Image
            source={getImage("tick")}
            style={{
              height: rfSpacing["xl"],
              width: rfSpacing["xl"],
              resizeMode: "contain",
              flex: 0.90,
              justifyContent: "center",
              alignSelf: "center"
            }}
          />
        </View>
        </View>
                    <Text style={styles.priceValue}>
                     {selectedProduct.price}
                  </Text>
                </View>

                <LP_ButtonForModel
                  title="Buy With 400 Points" />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BuyItems;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f6f6" },

  // Header
  header: {
    padding: rfSpacing.m,
    flexDirection: "row",
    gap: rfSpacing['m'],
    marginTop: rfSpacing['xxl']


  },
  headerTitle: {
    fontSize: rfSpacing['4xl'],
    fontWeight: "700",
    color: "#222",
  },

  // Search
  searchBar: {
    paddingHorizontal: 16,
  },
  searchContainer: {
    width: "94%",
    height: rfSpacing['7xl'],
    margin: rfSpacing['xl'],
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',

  },
  searchIcon: {
    marginLeft: rfSpacing['2.5H'],
  },

  // Options
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: rfSpacing['4xl'],

  },
  optionBtn: {
    paddingVertical: rfSpacing.m,
    paddingHorizontal: rfSpacing.l,
    borderRadius: rfSpacing['4xl'],

  },
  optionActive: {
    backgroundColor: "#ffffffff",
  },
  optionText: {
    fontSize: rfSpacing.l,
    color: colors.LP_NaturalGray,
  },
  optionActiveText: {
    color: colors.LP_Mainorange,
    fontWeight: "600",
  },

  // Product cards
  card: {
    backgroundColor: "#fff",
    borderRadius: rfSpacing.m,
    padding: rfSpacing.m,
    marginBottom: rfSpacing.m,
    flex: 0.47,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: rfSpacing["1H"],
    borderRadius: rfSpacing.s,
  },
  title: {
    marginTop: rfSpacing.xl,
    fontSize: rfSpacing.xm,
    color: "#333",
  },
  useButton: {
    flexDirection: "row",
    marginTop: rfSpacing.xl,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: rfSpacing.s,
    paddingVertical: rfSpacing.s,
    alignItems: "center",
    paddingLeft: rfSpacing['4xml']
  },
  useText: {
    fontSize: rfSpacing.xl,
    color: "#333",
    marginTop: -rfSpacing['xxs']
  },

  // Modal
  MainTextModel: {
    color: colors.LP_HeadingColor,
    fontSize: rfSpacing['xxl'],
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: rfSpacing.l,
    borderTopRightRadius: rfSpacing.l,
    padding: rfSpacing.l,
  },
  modalImage: {
    width: "100%",
    height: rfSpacing["2.5H"],
    borderRadius: rfSpacing.s,
    marginBottom: rfSpacing.m,
  },
  modalTitle: {
    fontSize: rfSpacing.xxl,
    fontWeight: "600",
    color: "#222",
    marginBottom: rfSpacing.s,
  },
  descLabel: {
    fontSize: rfSpacing.xl,
    fontWeight: "bold",
    marginTop: rfSpacing.s,
    marginBottom: rfSpacing.xs,
    color: colors.LP_HeadingColor
  },
  descText: {
    fontSize: rfSpacing.xl,
    color: "#555",
    marginBottom: rfSpacing.l,
  },
  priceRow: {
    width: rfSpacing['3.5H'],
    height: rfSpacing['6xml'],
    borderWidth: rfSpacing['xxxs'],
    borderRadius: rfSpacing['xl'],
    flexDirection: "row",
    borderColor:colors.LP_BorderColor,
    paddingTop:rfSpacing['l']
   
  },
  priceText: {
    fontSize: rfSpacing.xl,
    fontWeight: "500",
    color: colors.LP_HeadingColor,
    paddingLeft:rfSpacing['xl']
  },
  priceValue: {
    fontSize: rfSpacing.xl,
    fontWeight: "600",
    color: colors.LP_HeadingColor,
    paddingLeft:rfSpacing['xs']
  },
  buyButton: {
    backgroundColor: "#ff6600",
    borderRadius: rfSpacing.s,
    paddingVertical: rfSpacing.m,
    alignItems: "center",
    marginTop: rfSpacing.s,
  },
  buyText: {
    color: "#fff",
    fontSize: rfSpacing.xml,
    fontWeight: "600",
  },
  iconWrapper3: {
    height: rfSpacing['4xxsl'],
    width: rfSpacing['4xxsl'],
    borderRadius: rfSpacing['4xl'],
    backgroundColor: colors.LP_Starwrap,
  },
});
