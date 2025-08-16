// "use client";
import Image from "next/image";
import { use } from "react";

export default function Home() {
  // console.log("the id is :" ,process.env.NEXT_PUBLIC_ID);
  // console.log("the id is :" ,process.env.SECRET);
  return (
    <>
      hey this is home. the id is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.SECRET} and name is {process.env.NAME}
    </>
  );
}
