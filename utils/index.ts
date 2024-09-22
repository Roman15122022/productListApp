import AsyncStorage from '@react-native-async-storage/async-storage'
export const getFromStorage = async <T>(
  key: string,
  defaultValue: T | null = null,
): Promise<T | null> => {
  const json = await AsyncStorage.getItem(key)

  if (!json) {
    return defaultValue
  }

  return JSON.parse(json)
}

export const removeFromStorage = (key: string): Promise<void> => {
  return AsyncStorage.removeItem(key)
}

export const saveToStorage = async (
  key: string,
  data: unknown,
): Promise<void> => {
  const json = JSON.stringify(data)

  await AsyncStorage.setItem(key, json)
}

export const clearEntireStorage = async (): Promise<void> => {
  await AsyncStorage.clear()
}
