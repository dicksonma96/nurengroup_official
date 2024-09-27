import React from "react";
import Link from "next/link";
import "./style.scss";
import AssetPath from "@/app/utils/assetpath";
import Image from "next/image";
import DrWong from "@/assets/img/bod/prof-dr-wong.png";
import Leigh from "@/assets/img/bod/leigh-zhang.png";
import Kelvin from "@/assets/img/bod/kelvin-leow.png";
import Petrina from "@/assets/img/bod/petrina-goh.png";
import DatoEng from "@/assets/img/bod/datoeng.png";

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
          <h2>Prof Dr K.Y. Wong</h2>
          <h4>
            Chairman, <br /> Non Executive Director
          </h4>
        </div>
        <div className="grid purple col " style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#prof_drwong"
          >
            <Image src={DrWong} />
          </Link>
        </div>

        <div className="grid green col hide_desktop">
          <h2>Leigh Zhang</h2>
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            Independent, <br /> Non-Executive Director
          </h4>
        </div>
        <div className="grid yellow col hide_desktop" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#leigh_zhang"
          >
            <Image src={Leigh} />
          </Link>
        </div>

        <div className="grid yellow col hide_mobile">
          <h2>Petrina Goh</h2>
          <h4 style={{ alignSelf: "flex-end", textAlign: "right" }}>
            Group CEO, Founder, <br /> Executive Director
          </h4>
        </div>
        <div className="grid green col hide_mobile" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#petrina_goh"
          >
            <Image src={Petrina} />
          </Link>
        </div>

        <div className="grid col hide_mobile">
          <h2>Dato Y.K Eng</h2>
          <h4>
            Independent, <br /> Non Executive Director
          </h4>
        </div>
      </div>

      <div className="middlerow rowc">
        <h1>BOARD OF DIRECTORS</h1>
        <Link href="board-of-directors/details#prof_drwong">
          <Image src={DrWong} />
        </Link>
        <Link href="board-of-directors/details#leigh_zhang">
          <Image src={Leigh} />
        </Link>
        <Link href="board-of-directors/details#petrina_goh">
          <Image src={Petrina} style={{ marginRight: "-5em" }} />
        </Link>
        <Link href="board-of-directors/details#kelvin_leow">
          <Image src={Kelvin} />
        </Link>
        <Link href="board-of-directors/details#dato_eng">
          <Image src={DatoEng} />
        </Link>
      </div>
      <div className="gridrow bottomrow row">
        <div className="grid green col" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#petrina"
          >
            <Image src={Petrina} />
          </Link>
        </div>
        <div className="grid hide_desktop col">
          <h4>
            Group CEO, Founder, <br />
            Executive Director
          </h4>
          <h2>Petrina Goh</h2>
        </div>
        <div className="grid hide_mobile col">
          <h4>
            Independent, <br />
            Non-Executive Director
          </h4>
          <h2>Leigh Zhang</h2>
        </div>

        <div
          className="grid purple hide_mobile col"
          style={{ padding: 0 }}
        ></div>

        <div className="grid yellow col">
          <h4>
            Group CTO, <br /> Executive Director
          </h4>
          <h2>
            KELVIN <br /> LEOW WEE KEAT
          </h2>
        </div>
        <div className="grid green col" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#kelvin_leow"
          >
            <Image src={Kelvin} />
          </Link>
        </div>

        <div className="grid hide_desktop col" style={{ padding: 0 }}>
          <Link
            className="mobile_avatar rowc"
            href="board-of-directors/details#dato_eng"
          >
            <Image src={DatoEng} />
          </Link>
        </div>
        <div className="grid purple hide_desktop col">
          <h4>
            Independent, <br /> Non-Executive Director
          </h4>
          <h2>Dato Y.K Eng</h2>
        </div>
      </div>
    </section>
  );
}

export default BOD;
