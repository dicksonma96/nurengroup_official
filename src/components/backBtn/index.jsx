"use client";
import AssetPath from "@/app/utils/assetpath";
import { useRouter } from "next/navigation";

function BackBtn(props) {
  const router = useRouter();
  return (
    <div
      className="backBtn"
      style={{ cursor: "pointer" }}
      {...props}
      onClick={() => router.back()}
    >
      <img src={AssetPath("icon/back.svg")} alt="" />
    </div>
  );
}

export default BackBtn;
