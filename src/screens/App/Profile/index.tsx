import React from "react";
import { View, Text} from "react-native";
import LP_WhiteButton from "../../../Ui/LP_WhiteButton";
import styles from "../../Auth/styles";
import LP_ProfileDimScreen from "../../../Ui/LP_ProfileDimScreen";
import LP_ProfileFirstRow from "../../../Ui/LP_ProfileFirstRow";
import LP_ProfileSecondRow from "../../../Ui/LP_ProfileSecondRow";
import LP_ProfileThirdRow from "../../../Ui/LP_ProfileThirdRow";
import LP_ProfileFourthRow from "../../../Ui/LP_ProfileFourthRow";
type Props = {
  navigation: any;
};
const ExampleScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.F_1_BG_W}>
      <LP_ProfileDimScreen/>
      <View style={styles.containerProfile}>
        <LP_ProfileFirstRow/>
        <LP_ProfileSecondRow/>
        <LP_ProfileThirdRow/>
        <View style={styles.DIVIDER} />
        <LP_ProfileFourthRow/>
        <LP_WhiteButton
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />
        <Text style={styles.LastTextProfile1}>Version 2.15(1048757)</Text>
        <Text style={styles.LastTextProfile2}>By GULF PACKAGING</Text>
        <View />
      </View>
    </View>
  );
};

export default ExampleScreen;

