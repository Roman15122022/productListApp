import { useCallback } from "react";
import { NavigationType, Screens } from "@/types";
import { useNavigation } from '@react-navigation/native';

export const useNavigate = () => {
  const navigation = useNavigation<NavigationType>()

  const goBack = useCallback((): void => {
    navigation.goBack()
  }, [navigation])

  const goTo = useCallback((screen: Screens): void => {
    navigation.navigate(screen)
  }, [navigation],)

  return { goTo, goBack }
}
