import { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'

import { GameContext } from '../server/context/game.context'

import { IGame } from '../interface/Game'

const Playing = () => {

    const { questions } = useContext<IGame>(GameContext)

    useEffect(() => {
        console.log(questions);
    }, [questions])

    return (
        <View>
            <Text>Playing</Text>
        </View>
    )
}

export default Playing