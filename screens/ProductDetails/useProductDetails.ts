import { useNavigate } from "@/hooks/useNavigation";

export const useProductDetails = () => {
  const { goTo, goBack } = useNavigate()

  return { goTo, goBack }
}
