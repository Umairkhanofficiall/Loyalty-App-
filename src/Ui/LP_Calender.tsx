import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

import { Calendar } from "react-native-calendars";
import colors from "../theme/colors";
import rfSpacing from "../theme/rfSpacing";

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onApply: (filter: string, customDate?: string) => void;
};

const FilterModal: React.FC<FilterModalProps> = ({ visible, onClose, onApply }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("this_month");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const applyFilters = () => {
    onApply(selectedFilter, selectedDate);
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
        
          <View style={styles.headerRow}>
            <Text style={styles.title}>Filters</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.closeBtn}>✕</Text>
            </Pressable>
          </View>

        
          <Pressable
            style={styles.optionRow}
            onPress={() => setSelectedFilter("this_month")}
          >
            <Text style={styles.optionText}>This month</Text>
            {selectedFilter === "this_month" && <View style={styles.radio} />}
          </Pressable>

          <Pressable
            style={styles.optionRow}
            onPress={() => setSelectedFilter("last_week")}
          >
            <Text style={styles.optionText}>Last week</Text>
            {selectedFilter === "last_week" && <View style={styles.radio} />}
          </Pressable>

          <Pressable
            style={styles.optionRow}
            onPress={() => setSelectedFilter("last_month")}
          >
            <Text style={styles.optionText}>Last month</Text>
            {selectedFilter === "last_month" && <View style={styles.radio} />}
          </Pressable>

          <Pressable
            style={styles.optionRow}
            onPress={() => setSelectedFilter("custom")}
          >
            <Text style={styles.optionText}>Custom</Text>
            {selectedFilter === "custom" && <View style={styles.radio} />}
          </Pressable>

         
          {selectedFilter === "custom" && (
            <Calendar
              onDayPress={(day) => setSelectedDate(day.dateString)}
              markedDates={{
                [selectedDate]: { selected: true, selectedColor: colors.LP_Mainorange },
              }}
              style={styles.calendar}
            />
          )}

         
          <TouchableOpacity style={styles.applyBtn} onPress={applyFilters}>
            <Text style={styles.applyBtnText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: rfSpacing['3xl'],
    borderTopRightRadius: rfSpacing['3xl'],
    padding: rfSpacing['3xl'],
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: rfSpacing['xxl'], fontWeight: "bold" , color:colors.LP_HeadingColor,marginBottom:rfSpacing['s']},
  closeBtn: { fontSize: rfSpacing['3xl'], color:colors.LP_HeadingColor,marginBottom:rfSpacing['s'] },
  optionRow: {
    borderWidth:rfSpacing['xxxs'],
    borderRadius:rfSpacing['l'],
    marginBottom:rfSpacing['s'],
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: rfSpacing['m'],
    borderColor:colors.LP_Gradientyoulevel
  },
  optionText: { fontSize: rfSpacing['l'], color:"black",paddingLeft:rfSpacing['s'] },
  radio: {
    width: rfSpacing['xl'],
    height: rfSpacing['xl'],
    borderRadius: rfSpacing['m'],
    backgroundColor: colors.LP_White,
    marginRight: rfSpacing['s'],
    marginTop:rfSpacing['xxs'],
    borderWidth:rfSpacing['xs'],
    borderColor:colors.LP_Mainorange,
    color:colors.LP_HeadingColor,
  },
  calendar: {
    marginTop: rfSpacing['xxxs'],
    borderRadius: rfSpacing['s'],
    elevation: rfSpacing['xxs'],
  },
  applyBtn: {
    marginTop: rfSpacing['3xl'],
    backgroundColor: colors.LP_Mainorange,
    padding: rfSpacing['xl'],
    borderRadius: rfSpacing['5xl'],
    alignItems: "center",
  },
  applyBtnText: { color: "#fff", fontWeight: "bold", fontSize: rfSpacing['l'] },
});
