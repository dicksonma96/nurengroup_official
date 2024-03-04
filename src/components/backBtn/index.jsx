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
      onClick={() => {
        console.log(router);
        if (window.history?.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }}
    >
      <img src={AssetPath("icon/back.svg")} alt="back icon" />
    </div>
  );
}

export default BackBtn;
