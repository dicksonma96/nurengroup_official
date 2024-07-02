import AssetPath from "@/app/utils/assetpath";
import React from "react";
import "./style.scss";

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
          <img src={AssetPath("Leadership+Team/Maton+Shukor.jpg")} alt="" />
          <div className="square" style={{ background: "#F4AF67" }}></div>
          <img src={AssetPath("Leadership+Team/Alison+Tham.jpg")} alt="" />
        </div>

        <div className="grid_row row">
          <div className="square" style={{ background: "#ECE9DE" }}></div>

          <img src={AssetPath("Leadership+Team/Jolene.jpg ")} alt="" />
          <div className="square" style={{ background: "#ECE9DE" }}></div>
          <div className="square" style={{ background: "#357f8c" }}></div>
        </div>
        <div className="grid_row row">
          <img src={AssetPath("Leadership+Team/Pankhi.jpg ")} alt="" />
          <div className="square" style={{ background: "#F25075" }}></div>
          <img src={AssetPath("Leadership+Team/Racheal.jpg ")} alt="" />
        </div>
        <div className="grid_row row">
          <img
            className="mobile_hide"
            src={AssetPath("Leadership/zac2.jpg")}
            alt=""
          />
          <img src={AssetPath("Leadership+Team/Zac+Lam.jpg ")} alt="" />
          <div className="square" style={{ background: "#5B327C" }}></div>
        </div>
        <div className="grid_row row">
          <img src={AssetPath("Leadership+Team/Jinny.jpg ")} alt="" />
          <div className="square" style={{ background: "#D3DBF9" }}></div>
          <div className="square" style={{ background: "#24315e" }}></div>
          <div className="square" style={{ background: "#D3DBF9" }}></div>
        </div>
      </div>
    </main>
  );
}

export default Leadership;
