
/**
 * Country Detail Screen Style
 */

import { StyleSheet} from 'react-native';
import scale,{verticalScale} from '../../utils/Scale';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    inputFormHeader: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(20),
    },

    submitButton: {
        marginTop: verticalScale(50),
        width: scale(250),
        height: scale(50),
        borderRadius: scale(5),
        backgroundColor: '#2B4F81',
        justifyContent: 'center',
        alignItems: 'center'
    },

    submitText: {
        fontSize: scale(15),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
    },

    formText: {
        fontSize: scale(25),
        fontWeight: 'bold',
    },

    fieldValue: {
        fontSize: scale(18),
        color: '#382626',
        fontWeight: 'bold',
        marginTop: verticalScale(25),
    },

    flag: {
        width: scale(200),
        height: scale(200),
    },

    countryList: {
        alignSelf: 'center', 
        marginTop: verticalScale(10) 
    },

    weatherData: {
        marginTop: verticalScale(30),
        flexDirection: 'row',
        justifyContent: 'center',
    },

    imageIcon: {
        marginTop: verticalScale(10),
        width: scale(50),
        height: scale(50),
        marginLeft: scale(10)
    }
});
