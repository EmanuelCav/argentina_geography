import { Dimensions, StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({

    containerTitle: {
        height: '25%',
        backgroundColor: 'violet'
    },

    containerMenu: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },

    buttonMenu: {
        padding: Dimensions.get("window").height / 74,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '66.66%'
    },

    buttonMenuText: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    }

})