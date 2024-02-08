import { Dimensions, StyleSheet } from "react-native";

export const generalStyles = StyleSheet.create({

    containerGeneral: {
        flex: 1
    },

    containerBanner: {
        height: '10%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    containerButtonAccept: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonAccept: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5dc1b9',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '100%',
        borderRadius: 12
    },

    textButtonAccept: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    }

})