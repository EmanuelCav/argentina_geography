import { View } from 'react-native'

import { playingStyles } from '../../../../styles/playing.styles'

import Option from './Option'

const SectionOptions = ({ options }: { options: string[] }) => {
    return (
        <View style={playingStyles.containerSectionOptions}>
            {
                options.map((option: string, index: number) => {
                    return <Option option={option} key={index} />
                })
            }
        </View>
    )
}

export default SectionOptions