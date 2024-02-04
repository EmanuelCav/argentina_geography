import { Dimensions, StyleSheet } from "react-native";

export const statiscsStyles = StyleSheet.create({

    containerHeaderStatistics: {
        height: '10%',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        padding: Dimensions.get("window").height / 106,
        backgroundColor: '#5dc1b9'
    },

    containerBodyStatistics: {
        flex: 1
    },

    containerStatistic: {
        padding: Dimensions.get("window").height / 106,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        backgroundColor: '#5dc1b9',
        borderWidth: 2,
        marginVertical: Dimensions.get("window").height / 148
    },

    categoryText: {
        fontSize: Dimensions.get("window").height / 41,
        color: '#ffffff',
        fontWeight: '500'
    },

    statisticText: {
        fontSize: Dimensions.get("window").height / 46,
        color: '#ffffff'
    }

})