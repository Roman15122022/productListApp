import { useNavigate } from "@/hooks/useNavigation";

export const useProductList = () => {
  const { goTo, goBack } = useNavigate()

  return { goTo, goBack }
}
