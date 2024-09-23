import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@/components/Navigation/useNavigation";
import { StackProvider } from "@/contexts/StackProvider";
import { Stack } from "@/contexts";
import { Screens } from "@/types";
import ProductList from "@/screens/ProductList";
import ProductDetails from "@/screens/ProductDetails";


const Navigation = () => {
  const { navigationRef, setCurrentRouteName } = useNavigation()

  return (
    <NavigationContainer
      ref={navigationRef}
      independent={true}
      onReady={setCurrentRouteName}>
    <StackProvider>
      <Stack.Screen name={Screens.PRODUCT_LIST} component={ProductList} />
      <Stack.Screen name={Screens.PRODUCT_DETAILS} component={ProductDetails} />
    </StackProvider>
  </NavigationContainer>
  )
};

export default Navigation;
