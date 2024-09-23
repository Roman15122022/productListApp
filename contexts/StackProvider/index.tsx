import { SCREEN_OPTIONS } from "@/constants";
import { NativeChildrenProps } from "@/types";
import { Stack } from "@/contexts";

export const StackProvider = (props: NativeChildrenProps): JSX.Element => {
  return <Stack.Navigator screenOptions={SCREEN_OPTIONS} {...props} />
}
