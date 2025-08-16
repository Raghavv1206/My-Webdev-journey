"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  return (
   <>
    hey this is our page and blog is {searchParams.get('blog')} and utm source is {searchParams.get('utm_source')}
   </>
  );
}
