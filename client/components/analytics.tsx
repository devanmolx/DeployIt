"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
    // Analytics tracking would go here in a real application
    console.log(`Page view: ${url}`);
  }, [pathname, searchParams]);

  return null;
}