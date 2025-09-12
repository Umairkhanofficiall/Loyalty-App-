import { ScrollView,StatusBar} from 'react-native';
import styles from '../../Auth/styles';
import LP_LinearGradient from '../../../Ui/LP_LinearGradient';
import colors from '../../../theme/colors';
import LP_HomeFirstRow from '../../../Ui/LP_HomeFirstRow';
import LP_HomeSecondRow from '../../../Ui/LP_HomeSecondRow';
import LP_HomeThirdRow from '../../../Ui/LP_HomeThirdRow';
import LP_HomeFourthRow from '../../../Ui/LP_HomeFourthRow';
import FocusAwareStatusBar from './LP_FocusAwareStatusBar';
export default function App() {
  return (
    <>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    <LP_LinearGradient
      colors={[colors.LP_White, colors.LP_Mainlightorange, colors.LP_Mainorange]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.PB_9XML}>
        <LP_HomeFirstRow/>
        <LP_HomeSecondRow/>
       <LP_HomeThirdRow/>
       <LP_HomeFourthRow/>
      </ScrollView>
    </LP_LinearGradient>
    </>
  );
}


