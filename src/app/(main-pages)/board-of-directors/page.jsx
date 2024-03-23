import React from "react";
import Link from "next/link";
import "./style.scss";
import AssetPath from "@/app/utils/assetpath";

export const metadata = {
  title:
    "Board of Directors | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
  description:
    "Board of Directors. Nuren Group provides parenting education and maternity wellness services",
};

function BOD() {
  return (
    <section className="bod col">
      <div className="gridrow row">
        <div className="grid col">
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            Chairman, <br /> Non Executive Director
          </h4>
          <h2>Prof Dr K.Y. Wong</h2>
        </div>
        <div className="grid col" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#prof_drwong"
          >
            <img src={AssetPath("BOD/prof-dr-wong.png")} />
          </Link>
        </div>
        <div className="grid col hide_mobile">
          {/* <h2>
            KELVIN <br /> LEOW WEE KEAT
          </h2>
          <h4
            style={{
              alignSelf: "flex-end",
              textAlign: "right",
              marginBottom: "auto",
            }}
          >
            CTO, <br /> Executive Director
          </h4> */}
        </div>
        <div className="grid col hide_mobile"></div>
      </div>
      <div className="middlerow rowc">
        <h1>BOARD OF DIRECTORS</h1>
        <Link href="board-of-directors/details#prof_drwong">
          <img src={AssetPath("BOD/prof-dr-wong.png")} />
        </Link>
        <Link href="board-of-directors/details#leigh_zhang">
          <img src={AssetPath("BOD/leigh-zhang.png")} />
        </Link>
        {/* <Link href="board-of-directors/kelvin_leow">
          <img src={AssetPath("BOD/kelvin-leow.png")} />
        </Link> */}
        <Link href="board-of-directors/details#petrina_goh">
          <img src={AssetPath("BOD/petrina-goh.png")} />
        </Link>
      </div>
      <div className="gridrow bottomrow row">
        <div className="grid col" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#leigh_zhang"
          >
            <img src={AssetPath("BOD/leigh-zhang.png")} />
          </Link>
        </div>
        <div className="grid col">
          <h2>Li Hua Zhang</h2>
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            Independent, <br />
            Non-Executive Director
          </h4>
        </div>

        <div className="grid col" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#petrina_goh"
          >
            <img src={AssetPath("BOD/petrina-goh.png")} />
          </Link>
        </div>
        <div className="grid col">
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            Group CEO, Founder, <br /> Executive Director
          </h4>
          <h2>Shze Yinn Goh</h2>
        </div>
      </div>
    </section>
  );
}

export default BOD;
