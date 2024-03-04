import AssetPath from "@/app/utils/assetpath";
import "../style.scss";
import BackBtn from "@/components/backBtn";

export async function generateMetadata() {
  return {
    title: "PETRINA GOH SHZE YINN",
    description:
      "NurenGroup | Founder, Chief Executive Officer | Executive, Independent Director",
    openGraph: {
      images: [AssetPath("BOD/petrina-goh.png")],
    },
  };
}

function PetrinaGoh() {
  return (
    <main
      className="person_detail row "
      style={{ background: "#E9A762" }}
      data-name="PETRINA GOH SHZE YINN"
    >
      <BackBtn />
      <div className="left colc">
        <img src={AssetPath("BOD/petrina-goh.png")} alt="Petrina Goh" />
        <div className="title col">
          <strong>
            PETRINA GOH <br /> SHZE YINN
          </strong>
          <span className="urban_text">Founder, Chief Executive Officer,</span>
          <span className="urban_text">Executive, Independent Director</span>
        </div>
      </div>

      <div className="description">
        <p>
          Petrina Goh is an accomplished professional with a diverse background
          in the technology and finance sectors. As the Co-founder & CEO of her
          own venture, she has demonstrated exceptional leadership and
          entrepreneurial prowess. Prior to this, she served as a tech
          consultant in Accenture, where she honed her expertise in the
          industry. Additionally, her tenure as an investment banker in CIMB
          Investment & Tael Partners allowed her to manage a substantial $600
          million investment portfolio, specializing in the evaluation of
          technology sector deals. Petrina's outstanding achievements have been
          recognized through prestigious accolades, including the MVCA
          Outstanding Women Entrepreneur of the year in 2018 and the Inti Alumni
          Young Entrepreneur of the Year Award in 2016. Her remarkable journey
          and expertise make her a prominent figure in both the technology and
          business realms.
        </p>
        <br />
      </div>
    </main>
  );
}

export default PetrinaGoh;
