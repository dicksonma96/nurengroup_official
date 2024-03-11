import React from "react";
import Link from "next/link";
import "./style.scss";
import AssetPath from "@/app/utils/assetpath";

export const metadata = {
  title: "Nuren Group | Board of Directors",
  description: "Our Board of Directors",
};

function BOD() {
  return (
    <section className="section bod col">
      <div className="gridrow row">
        <div className="grid col">
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            Chairman, <br /> Non Executive, <br /> Independent Director
          </h4>
          <h2>PROF DR WONG KONG YEW</h2>
        </div>
        <div className="grid col"></div>
        <div className="grid col">
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
        <div className="grid col"></div>
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
        <div className="grid col"></div>
        <div className="grid col">
          <h2>
            LEIGH
            <br />
            ZHANG LI HUA
          </h2>
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            Non-Executive, <br />
            Independent Director
          </h4>
        </div>

        <div className="grid col"></div>
        <div className="grid col">
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            CEO, <br />
            Executive Director
          </h4>
          <h2>PETRINA GOH SHZEE YINN</h2>
        </div>
      </div>
    </section>
  );
}

export default BOD;
