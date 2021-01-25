/**
 * Home Screen Style
 */

import { StyleSheet, Dimensions } from 'react-native';
import scale , {verticalScale} from '../../utils/Scale';
const { width } = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    },

    inputFormHeader: {
        marginTop: verticalScale(20),
        alignSelf: 'center',
        marginHorizontal: scale(90),
    },

    inputStyle: {
        borderBottomWidth: scale(0.5),
        borderRadius: scale(80),
        width: width - 30,
        height: scale(50),
        alignSelf: 'center',
        marginTop: verticalScale(100),
        textAlign: 'center',
        fontSize: scale(20),
    },

    submitButton: {
        marginTop: verticalScale(50),
        alignSelf: 'center',
        width: scale(150),
        height: scale(50),
        borderRadius: scale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
        marginVertical: scale(20),
        marginLeft: scale(5),
        color: '#241f1f'
    },

    search: {
        fontSize: scale(20),
        marginLeft: scale(20),
        marginVertical: scale(10),
        textAlign: 'left',
        fontWeight: 'bold',
    }
    
});
