import Link from "next/link";
function Overlay({ children }) {
  return (
    <div className="detail_overlay colc">
      {children}
      <Link href={"/media-hub"} className="outside"></Link>
    </div>
  );
}

export default Overlay;
