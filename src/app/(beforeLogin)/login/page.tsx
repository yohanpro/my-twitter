"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 라우팅을 처리합니다.
    router.replace('/i/flow/login');
  }, [router]);

  return <Main />;
}