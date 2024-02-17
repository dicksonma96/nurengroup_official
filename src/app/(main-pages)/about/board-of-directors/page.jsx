import React from "react";
import Image from "next/image";
import Link from "next/link";
import bod1 from "../../../../assets/img/bod/m1.png";
import bod3 from "../../../../assets/img/bod/m2.png";
import bod2 from "../../../../assets/img/bod/w1.png";
import bod4 from "../../../../assets/img/bod/w2.png";
import "./style.scss";

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
          <h2>
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
          </h4>
        </div>
        <div className="grid col"></div>
      </div>
      <div className="middlerow rowc">
        <h1>BOARD OF DIRECTORS</h1>
        <Link href="board-of-directors/">
          <Image src={bod1} />
        </Link>
        <Link href="board-of-directors/">
          <Image src={bod2} />
        </Link>
        <Link href="board-of-directors/">
          <Image src={bod3} />
        </Link>
        <Link href="board-of-directors/">
          <Image src={bod4} />
        </Link>
      </div>
      <div className="gridrow bottomrow row">
        <div className="grid col"></div>
        <div className="grid col">
          <h2>
            LEIGHT
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
