import AssetPath from "@/app/utils/assetpath";
import "../style.scss";
import BackBtn from "@/components/backBtn";

export async function generateMetadata() {
  return {
    title: "LEIGH ZHANG LI HUA",
    description: "NurenGroup | Non-Executive | Independent Director",
    openGraph: {
      images: [AssetPath("BOD/leigh-zhang.png")],
    },
  };
}

function LeighZhang() {
  return (
    <main
      className="person_detail row "
      style={{ background: "#442F55" }}
      data-name="LEIGH ZHANG LI HUA"
    >
      <BackBtn />
      <div className="left colc">
        <img src={AssetPath("BOD/leigh-zhang.png")} alt="Leigh Zhang" />
        <div className="title col">
          <strong>
            LEIGH ZHANG <br /> LI HUA
          </strong>
          <span className="urban_text">Non-Executive, </span>
          <span className="urban_text">Independent Director</span>
        </div>
      </div>

      <div className="description">
        <p>
          Ms Leigh Zhang has over 23 years of professional experience in
          investment banking and financial services in Australia specializing in
          cross border investment transactions and private equity investments.
          She is the Co-Founder and Chief Investment Officer of WealthSpring
          International Group, a boutique financial service provider
          headquartered in Sydney Australia with offices in Shanghai and
          Hangzhou China.  Prior to establishing WealthSpring International
          Group. Ms Leigh Zhang served a number of senior management roles for
          Australian financial organizations, such as Director of Babcock &
          Brown in China, CEO of CommFinance (a 100% owned subsidiary of
          CommonWealth Bank of Australia) and GM of Macquarie Securitisation
          (Shanghai). 
        </p>
        <br />
        <p>
          Ms Leigh Zhang also serves as Board Director for Maxoniq, Tell me Baby
          Media Group and WealthSpring international Group. Prior to migrating
          to Australia, Ms Leigh was an Economic lecturer in Ningbo University.
        </p>
      </div>
    </main>
  );
}

export default LeighZhang;
