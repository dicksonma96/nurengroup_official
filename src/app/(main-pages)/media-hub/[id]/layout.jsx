"use client";
import { useRouter } from "next/navigation";

function Overlay({ children }) {
  const router = useRouter();

  return (
    <div className="detail_overlay colc">
      {children}
      <div
        className="outside"
        onClick={() => {
          router.push("/media-hub");
        }}
      ></div>
    </div>
  );
}

export default Overlay;
