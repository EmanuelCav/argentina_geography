import { useEffect } from 'react'
import { Text } from 'react-native'

import { TimePropsType } from '../../../../types/props.types'
import { playingStyles } from '../../../../styles/playing.styles'

const Time = ({ seconds, minutes, setSeconds, setMinutes }: TimePropsType) => {

    useEffect(() => {

        if (seconds === 60) {
            setSeconds(0)
            setMinutes(minutes + 1)
        }

        setTimeout(() => {
            setSeconds(seconds + 1)
        }, 1000);

    }, [seconds])

    return (
        <Text style={playingStyles.textGameStatistics}>
            {minutes < 10 ? `0${minutes}` : minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
        </Text>
    )
}

export default Time