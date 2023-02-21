import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

export function Button({ className, children }: Props) {
  return <button className={className}>{children}</button>;
}
