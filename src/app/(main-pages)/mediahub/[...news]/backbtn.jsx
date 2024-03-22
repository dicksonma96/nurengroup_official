"use client";
import Back from "../../../../assets/img/icon/back.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function BackBtn() {
  const router = useRouter();

  return (
    <div
      className="backbtn rowc"
      onClick={() => {
        if (window.history?.length > 1) {
          router.back();
        } else {
          router.push("/mediahub");
        }
      }}
    >
      <Image src={Back} alt="" />
      <span>Back</span>
    </div>
  );
}

export function BackOverlay() {
  const router = useRouter();

  return (
    <div
      className="backoverlay"
      onClick={() => {
        if (window.history?.length > 1) {
          router.back();
        } else {
          router.push("/mediahub");
        }
      }}
    ></div>
  );
}
