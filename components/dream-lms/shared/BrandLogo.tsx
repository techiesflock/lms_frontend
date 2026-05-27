import Link from "next/link";
import { BRAND_LOGO, BRAND_NAME } from "@/lib/brand";

type BrandLogoProps = {
  className?: string;
  height?: number;
  href?: string;
  wrapperClassName?: string;
};

export function BrandLogo({
  className = "logo",
  height = 40,
  href = "/",
  wrapperClassName,
}: BrandLogoProps) {
  const img = (
    <img
      src={BRAND_LOGO}
      className={className}
      alt={BRAND_NAME}
      height={height}
      style={{ height, width: "auto", objectFit: "contain" }}
    />
  );

  if (href) {
    return (
      <Link href={href} className={wrapperClassName ?? "d-inline-flex align-items-center"}>
        {img}
      </Link>
    );
  }

  return img;
}
