import { Pressable, Text } from "react-native"

import i18n from '../../../../../i18n';

import { playingStyles } from "../../../../styles/playing.styles"

const Back = ({ exit }: { exit: (isExit: boolean) => void }) => {
    return (
        <Pressable style={({ pressed }) => [
            {
                backgroundColor: pressed ? '#32b2c2' : '#00ACC1',
            },
            playingStyles.buttonHelp
        ]} onPress={() => exit(true)}>
            <Text style={playingStyles.helpText}>{i18n.t("exit")}</Text>
        </Pressable>
    )
}

export default Back