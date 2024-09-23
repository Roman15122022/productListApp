import React from 'react';
import { Button, Text, View } from "react-native";
import { useProductList } from "@/screens/ProductList/useProductList";
import { Screens } from "@/types";

const ProductList = () => {
  const { goTo, goBack } = useProductList()

  return (<View>
      <Text>List</Text>
      <Button title={'Go'} onPress={() => goTo(Screens.PRODUCT_DETAILS)}></Button>
    </View>)
};

export default ProductList;
