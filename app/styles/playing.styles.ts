import { Dimensions, StyleSheet } from "react-native";

export const playingStyles = StyleSheet.create({

    containerQuestion: {
        height: '50%',
        backgroundColor: '#5dc1b9',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#ffffff',
        paddingHorizontal: Dimensions.get("window").width / 60,
        paddingVertical: Dimensions.get("window").height / 123,
        width: '100%'
    },

    containerMainQuestion: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textQuestion: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    containerImageQuestion: {
        width: '100%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageQuestion: {
        height: '100%',
        width: '100%'
    },

    containerGameStatistics: {
        height: '8%',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },

    textGameStatistics: {
        fontSize: Dimensions.get("window").height / 41
    },

    containerOptions: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1
    },

    containerSectionOptions: {
        width: '50%',
        height: '100%',
        padding: Dimensions.get("window").height / 106
    },

    containerOption: {
        padding: Dimensions.get("window").height / 106,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: Dimensions.get("window").height / 61.66
    },

    textOption: {
        color: '#ffffff',
        fontWeight: '500'
    }

})