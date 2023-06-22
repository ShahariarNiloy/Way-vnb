"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      height="50"
      width="150"
      alt="Logo"
      loading="lazy"
      style={{ objectFit: "contain" }}
    />
  );
};

export default Logo;
