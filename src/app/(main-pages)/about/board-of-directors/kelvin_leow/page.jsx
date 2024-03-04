import AssetPath from "@/app/utils/assetpath";
import "../style.scss";
import BackBtn from "@/components/backBtn";

export async function generateMetadata() {
  return {
    title: "KELVIN LEOW WEE KEAT",
    description: "NurenGroup | Chief Technology Officer | Executive Director",
    openGraph: {
      images: [AssetPath("BOD/kelvin-leow.png")],
    },
  };
}

function KelvinLeow() {
  return (
    <main
      className="person_detail row "
      style={{ background: "#E9A762" }}
      data-name="KELVIN LEOW WEE KEAT"
    >
      <BackBtn />
      <div className="left colc">
        <img src={AssetPath("BOD/kelvin-leow.png")} alt="Kelvin Leow" />
        <div className="title col">
          <strong>
            KELVIN LEOW <br /> WEE KEAT
          </strong>
          <span className="urban_text">Chief Technology Officer,</span>
          <span className="urban_text">Executive Director</span>
        </div>
      </div>

      <div className="description">
        <p>
          Kelvin Leow has over 20 years of experience in the tech industry. He
          is a certified Project Management Professional (PMP), and honor degree
          holder in Bachelor of Software Engineering from University of New
          South Wales (Australia). He started career in Sydney (Australia), and
          gained work experiences in Malaysia, Singapore, Cambodia & United
          States. Throughout his career, he has held various roles in software
          development, project management & technology consulting. Prior to his
          current endeavors, Leow held pivotal roles at Intel Malaysia and
          Motorola Australia, focusing on manufacturing automation software and
          mobile messaging software development. Leow is a successful
          entrepreneur who also co-founded Claritas – a cloud-based enterprise
          customer relationship management solution company, which was later
          acquired by Incite Innovations in 2022.
        </p>
        <br />
        <p>
          As a testament to his industry influence, Leow has been invited as
          keynote speaker at numerous innovation and technology conferences,
          reinforcing his stature as a thought leader. Leow’s core competencies
          encompass solution architecture, customer relationship management,
          artificial intelligence, digital media, retail management and
          fin-tech. In current role, Leow spearheads the technology innovation
          and product direction of Nuren Group.
        </p>
      </div>
    </main>
  );
}

export default KelvinLeow;
