import { View, Text } from 'react-native'
import i18n from '../../../../../i18n';

import { playingStyles } from '../../../../styles/playing.styles'

import { StatisticsFinishPropsType } from '../../../../types/props.types'

const StatisticsFinish = ({ seconds, minutes, questions, corrects }: StatisticsFinishPropsType) => {
    return (
        <View style={playingStyles.containerStatisticsFinish}>
            <Text style={playingStyles.textPreFinish}>{i18n.t("amountQuestionsStatistic")}: {questions}</Text>
            <Text style={playingStyles.textPreFinish}>{i18n.t("correctsAnswer")}: {corrects}</Text>
            <Text style={playingStyles.textPreFinish}>{i18n.t("time")}: {minutes < 10 ? `0${minutes}` : `${minutes}`}:{seconds < 10 ? `0${seconds}` : `${seconds}`}</Text>
        </View>
    )
}

export default StatisticsFinish