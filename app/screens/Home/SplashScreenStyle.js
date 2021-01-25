import { StyleSheet, Dimensions, Platform } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
import COLOR_CONST from '../../../app/theme/ColorConstants';
import * as CONST from '../../theme/StringConstants';

export default StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: COLOR_CONST.lightWhite
    },

    testStyle: {
        fontSize: scale(25),
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: scale(455)
    }
});
