import { useRef } from "react";
import { useNavigationContainerRef } from "@react-navigation/core";

export const useNavigation = () => {
  const navigationRef = useNavigationContainerRef()
  const routeNameRef = useRef<string>()

  const setCurrentRouteName = (): void => {
    routeNameRef.current = navigationRef.getCurrentRoute()?.name
  }

  return {navigationRef, setCurrentRouteName}
}
