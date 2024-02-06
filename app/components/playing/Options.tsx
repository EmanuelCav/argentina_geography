import { View } from 'react-native'

import { playingStyles } from '../../styles/playing.styles'

import SectionOptions from './components/options/SectionOptions'

const Options = ({ options }: { options: string[] }) => {
    return (
        <View style={playingStyles.containerOptions}>
            <SectionOptions options={options.slice(0, options.length / 2)} />
            <SectionOptions options={options.slice(options.length / 2, options.length)} />
        </View>
    )
}

export default Options