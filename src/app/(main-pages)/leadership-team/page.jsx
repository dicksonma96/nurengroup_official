import AssetPath from "@/app/utils/assetpath";
import React from "react";
import "./style.scss";
import Image from "next/image";
import petrina from "@/assets/img/leadership/petrina.jpg";
import kelvin from "@/assets/img/leadership/kelvin.jpg";
import cheong from "@/assets/img/leadership/cheong.jpg";
import alison from "@/assets/img/leadership/alison.jpg";
import zac from "@/assets/img/leadership/zac.jpg";
import zac2 from "@/assets/img/leadership/zac2.jpg";
import jolene from "@/assets/img/leadership/jolene.jpg";
import sherryn from "@/assets/img/leadership/sherryn.jpg";
import jinny from "@/assets/img/leadership/jinny.jpg";
import mable from "@/assets/img/leadership/mable.jpg";
import pankhi from "@/assets/img/leadership/pankhi.jpg";
import racheal from "@/assets/img/leadership/racheal.jpg";

export const metadata = {
  title:
    "Leadership Team | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
  description:
    "Leadership Team. Nuren Group provides parenting education and maternity wellness services",
};

function Leadership() {
  return (
    <main className="leadership">
      <div className="banner col">
        <div className="banner_content col">
          <img src={AssetPath("Leadership/banner.jpg")} alt="" />
          <div className="text row">
            <h1>
              LEADERSHIP <br /> TEAM
            </h1>
            <p>
              At Nuren Group, our leadership team of managers play a crucial
              role in driving performance. Through their visionary leadership
              and ability to inspire teams, they pave the way for the entire
              organization to attain ambitious objectives.
            </p>
          </div>
        </div>
      </div>

      <div className="leadership_grid">
        <div className="grid_row row">
          <Image src={petrina} alt="Petrina Goh" />
          <div className="square" style={{ background: "#F4AF67" }}></div>
          <Image src={kelvin} alt="Kelvin Leow" />
        </div>

        <div className="grid_row row">
          <Image src={cheong} alt="S.W. Cheong" />
          <div className="square" style={{ background: "#F25075" }}></div>
          <Image src={alison} alt="Alison Tham" />
        </div>
        <div className="grid_row row">
          <Image className="mobile_hide" src={zac2} alt="Zac Lam" />
          <Image src={zac} alt="Zac Lam" />
          <div className="square" style={{ background: "#5B327C" }}></div>
        </div>
        <div className="grid_row row">
          <Image src={jolene} alt="Jolene Chan" />
          <div className="square" style={{ background: "#ECE9DE" }}></div>
          <Image src={sherryn} alt="Sherryn Tan" />
        </div>

        <div className="grid_row row">
          <Image src={jinny} alt="Jinny Tiow" />
          <div className="square" style={{ background: "#D3DBF9" }}></div>
          <Image src={mable} alt="Mable Low" />
        </div>
        <div className="grid_row row">
          <Image src={pankhi} alt="Pankhi B.Gohain" />
          <div className="square" style={{ background: "#F9DAD3" }}></div>
          <Image src={racheal} alt="Racheal D.Joseph" />
        </div>
      </div>
    </main>
  );
}

export default Leadership;
