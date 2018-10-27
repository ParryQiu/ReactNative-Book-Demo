import { NativeModules } from 'react-native'

export const getSystemVolume = (callback) => {
  NativeModules.Volume.getSystemVolume(callback)
}