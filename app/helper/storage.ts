import AsyncStorage from '@react-native-async-storage/async-storage';

import { EXPO_STORAGE } from '@env';

import { IUser } from '../interface/User';

export const setStorage = (data: IUser) => {
    AsyncStorage.setItem(`${EXPO_STORAGE}`, JSON.stringify(data))
}

export const getStorage = async () => {

    const storage = await AsyncStorage.getItem(`${EXPO_STORAGE}`)    

    return storage

}