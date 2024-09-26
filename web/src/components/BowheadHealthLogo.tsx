import { env } from "@/src/env.mjs";

export const BowheadHealthLogo = ({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`${env.NEXT_PUBLIC_BASE_PATH ?? ""}/bowheadIcon.svg`}
    width={size}
    height={size}
    alt="Bowhead Icon"
    className={className}
  />
);
