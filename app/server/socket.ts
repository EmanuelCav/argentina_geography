import io from 'socket.io-client'

import { EXPO_HOST, EXPO_HOST_PROD, NODE_ENV } from '@env'

const url = NODE_ENV.trim() === 'production' ? `${EXPO_HOST_PROD}` : `${EXPO_HOST}`

export const socket = io(url)