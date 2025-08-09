import { View, Text } from 'react-native'
import i18n from '../../../i18n';

import { playingStyles } from '../../styles/playing.styles'

import { FinishPropsType } from '../../types/props.types'

import StatisticsFinish from './components/finish/StatisticsFinish'
import ActionsFinish from './components/finish/ActionsFinish'
import HelpAdd from './components/finish/HelpAdd'

const Finish = ({ seconds, minutes, corrects, questions, showErrors, continueHome, isGameError, isAdd, changeHelp, isConnection, isRecompensadoLoaded, isConnectionPlaying }: FinishPropsType) => {
    return (
        <View style={playingStyles.containerPreFinish}>
            <View style={playingStyles.containFinish}>
                {
                    isGameError ?
                        <View style={playingStyles.containerStatisticsFinish}>
                            <Text style={playingStyles.textPreFinish}>{i18n.t("successfulReview")}</Text>
                        </View>
                        :
                        <StatisticsFinish seconds={seconds} minutes={minutes} questions={questions} corrects={corrects} />
                }
                {
                    isConnectionPlaying && isRecompensadoLoaded && <>
                        {
                            !isAdd ? <HelpAdd changeHelp={changeHelp} />
                                : <Text style={playingStyles.textPreFinish}>{i18n.t("aidDelivered")}</Text>
                        }
                    </>
                }
                <ActionsFinish areErrors={corrects < questions} showErrors={showErrors} continueHome={continueHome} isConnectionPlaying={isConnectionPlaying} isConnection={isConnection} />
            </View>
        </View>
    )
}

export default Finish