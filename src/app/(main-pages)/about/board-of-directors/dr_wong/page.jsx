import AssetPath from "@/app/utils/assetpath";
import "../style.scss";
import BackBtn from "@/components/backBtn";

function DrWong() {
  return (
    <main
      className="person_detail row"
      style={{ backgroundColor: "#f25075" }}
      data-name="PROF DR WONG"
    >
      <BackBtn />
      <div className="left colc">
        <img src={AssetPath("BOD/prof-dr-wong.png")} alt="Prof Dr Wong" />
        <div className="title col">
          <strong>
            PROF DR WONG <br />
            KONG YEW
          </strong>
          <span className="urban_text">Chairman, Non-Executive</span>
          <span className="urban_text">Independent Director</span>
        </div>
      </div>

      <div className="description">
        <p>
          Economist Dr. Wong, is Group CEO at D’Mace Ltd (Australia), Class 1
          Director of EUDA Health Holdings Limited, NASDAQ (USA), Director of
          E-Plus Ltd., NSX (AUS) and is Managing Director of D’Mace Holdings Ltd
          (Singapore). With a distinguished career as both a scholar and a
          corporate leader, Dr. Wong has made significant contributions to the
          fields of economics and business. Dr. Wong's expertise and knowledge
          have been sought after in various high-profile projects. He has served
          as the lead consultant in several initiatives with ASEAN and UNWTO,
          showcasing his ability to provide strategic guidance and valuable
          insights. Prior to his current roles, Dr. Wong has had held the
          esteemed executives’ position of CEO of public listed companies, and
          Vice President and Deanship of Universities. These experiences allowed
          him to gain valuable insights into the intricacies of the corporate
          world and hone his leadership skills.
        </p>
        <br />
        <p>
          He obtained his Ph.D. from the esteemed Strathclyde Business School at
          the University of Strathclyde in the UK in 2004. Following that, he
          pursued postdoctoral studies at the prestigious Peking University in
          China. Dr. Wong's educational journey also includes studies in
          Economics at Western Michigan University, where he earned a BBA in
          1996, and at University Putra Malaysia, where he obtained a M.Econ in
          1999. His commitment to education extends to his time as an academic,
          with his last posting being at PUTRA Business School, UPM in 2016.
          There, he specialized in areas such as foreign direct investment,
          industrial development, and multinational corporation strategy,
          shaping the minds of future business leaders. Dr. Wong has made
          significant contributions to economic policy and planning. From 2004
          to 2016, he served as an advisor to the government in Malaysia, SEA
          nations, and China. In 2010, his expertise was recognized as he was
          entrusted to lead the National Key Economic Area - Entry Point Project
          10 (EPP10), an essential component of Malaysia's Economic
          Transformation Program under the Prime Minister's Office. This project
          achieved remarkable success, earning it a Certificate of Commendation
          from The Prime Minister of Malaysia and solidifying Dr. Wong's
          reputation as a capable and visionary leader.
        </p>
        <br />
        <p>
          Dr. Wong's accomplishments extend beyond his professional endeavors.
          He holds Permanent Residence status in Australia and was granted a
          Distinguished Global Talent Visa in 2021, acknowledging his
          exceptional contributions to the field of economics.
        </p>
      </div>
    </main>
  );
}

export default DrWong;
