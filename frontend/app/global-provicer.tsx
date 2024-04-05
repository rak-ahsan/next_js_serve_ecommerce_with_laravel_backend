import { CartProvider } from "@/context/cart-context";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function GlobalProvider({ children }: Props): JSX.Element {
  return <CartProvider>{children}</CartProvider>;
}
