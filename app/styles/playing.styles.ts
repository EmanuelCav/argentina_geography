import { Dimensions, StyleSheet } from "react-native";

export const playingStyles = StyleSheet.create({

    containerQuestion: {
        height: '48%',
        backgroundColor: 'yellow'
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
        flex: 1
    }

})