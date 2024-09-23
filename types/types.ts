import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NativeChildrenProps = {
  children: React.ReactNode
}

export type RootStackParams = {
  ProductList: undefined
  ProductDetails: undefined
}

export type NavigationType = Awaited<NativeStackNavigationProp<RootStackParams>>
