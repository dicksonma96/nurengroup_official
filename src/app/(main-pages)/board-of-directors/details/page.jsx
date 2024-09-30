import AssetPath from "@/app/utils/assetpath";
import "../style.scss";
import BackBtn from "@/components/backBtn";
import Image from "next/image";
import DrWong from "@/assets/img/bod/prof-dr-wong.png";
import Leigh from "@/assets/img/bod/leigh-zhang.png";
import Kelvin from "@/assets/img/bod/kelvin-leow.png";
import Petrina from "@/assets/img/bod/petrina-goh.png";
import DatoEng from "@/assets/img/bod/datoeng.png";

export async function generateMetadata({ params }) {
  return {
    title:
      "Nuren Group | Prof Dr K.Y. Wong, Petrina S.Y. Goh, Leigh L.H. Zhang, Kelvin W.K Leow, Dato Y.K Eng",
    description:
      "Nuren Group - Prof Dr K.Y. Wong (Chairman, Non Executive Director), Petrina Goh Goh (Group CEO, Founder, Executive Director), Leigh Zhang (Independent, Non Executive Director), Kelvin Leow (Group CTO, Executive Director), Dato Y.K Eng (Independent, Non-Executive Director)",
  };
}

function BOD_Detail() {
  return (
    <main className="bod_detail col">
      <BackBtn />

      <section
        id="prof_drwong"
        className="person_detail row"
        style={{ backgroundColor: "#f25075" }}
        data-name="Prof Dr K.Y. Wong"
      >
        <div className="left colc">
          <Image src={DrWong} alt="Prof Dr Wong" />
          <div className="title col">
            <strong>Prof Dr K.Y. Wong</strong>
            <span className="urban_text">Chairman, Non-Executive Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Economist Prof Dr Wong, is Director of EUDA Health Holdings Limited
            (NASDAQ:EUDA), Director of E-Plus Ltd (NSX:8EP) and CEO of D'Mace
            Group Ltd (Singapore). He holds PhD from Strathclyde Business School
            (UK), postdoctoral at Peking University (China), BBA from Western
            Michigan University (USA) and M.Econ from University Putra
            (Malaysia). With a distinguished career as both scholar and
            corporate leader, Prof Dr Wong has held various executive positions
            in public listed companies, VP/deanship with universities, and lead
            consultant roles in several initiatives with ASEAN and UNWTO. From
            2004 to 2016, he served as advisor to the government of Malaysia,
            SEA nations and China. In 2010, he led the National Key Economic
            Area EPP10, an essential component of Malaysia's Economic
            Transformation Program under the Prime Minister's Office. Prof Dr
            Wong's significant experience in the fields of business, economic
            policy and planning, showcase his ability to provide strategic
            guidance as Chairman of Nuren Group.
          </p>
        </div>
      </section>
      <section
        id="leigh_zhang"
        className="person_detail row "
        style={{ background: "#442F55" }}
        data-name="Leigh Zhang"
      >
        <div className="left colc">
          <Image src={Leigh} alt="Leigh Zhang" />
          <div className="title col">
            <strong>Leigh Zhang</strong>
            <span className="urban_text">
              Independent, Non-Executive Director
            </span>
          </div>
        </div>

        <div className="description">
          <p>
            Ms Zhang has over 23 years of professional experience in investment
            banking and financial services in Australia, specializing in cross
            border investment transactions and private equity investments. She
            is the co-founder and Chief Investment Officer of WealthSpring
            International Group, a boutique financial service provider
            headquartered in Sydney with offices in Shanghai and Hangzhou. Prior
            to establishing WealthSpring International Group, Ms Zhang served a
            number of senior management roles for Australian financial
            organizations, such as Director of Babcock & Brown China, CEO of
            CommFinance (subsidiary of Commonwealth Bank of Australia) and
            General Manager of Macquarie Securitisation China. Ms Zhang also
            serves as Board Member at Maxoniq Pty Ltd (Australia) and Tell Me
            Media Pty Ltd (Australia). Prior migrating to Australia, Ms Zhang
            was an economic lecturer in Ningbo University China.
          </p>
        </div>
      </section>

      <section
        id="petrina_goh"
        className="person_detail row "
        style={{ background: "#E9A762" }}
        data-name="Petrina Goh"
      >
        <div className="left colc">
          <Image src={Petrina} alt="Petrina Goh" />
          <div className="title col">
            <strong>Petrina Goh</strong>
            <span className="urban_text">Group CEO, Founder,</span>
            <span className="urban_text">Executive Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Ms Goh is the Founder and CEO of the group. She is an accomplished
            professional with a diverse background in the technology and finance
            sectors. She holds a Master Degree (Accounting & Finance) from
            University of Bath; and Bachelor Degree (Engineering) from
            University of Hull. Prior to this, she served as a tech consultant
            in Accenture, where she honed her expertise in the industry.
            Additionally, her tenure as an investment banker in CIMB Investment
            Bank (Malaysia) and Tael Partners (Malaysia) allowed her to manage a
            substantial investment portfolio, specializing in the evaluation of
            technology sector deals. Ms Goh is a recipient of MVCA Outstanding
            Women Entrepreneur of the year 2018 and the Inti Alumni Young
            Entrepreneur of the Year Award 2016. Besides being active keynote
            speakers, she is also a strong supporter of women in tech. Her
            remarkable journey and expertise make her a prominent figure in both
            the technology and business realms.
          </p>
        </div>
      </section>

      <section
        id="kelvin_leow"
        className="person_detail row "
        style={{ background: "#357f8b" }}
        data-name="KELVIN LEOW"
      >
        <div className="left colc">
          <Image src={Kelvin} alt="Kelvin Leow" />
          <div className="title col">
            <strong>Kelvin Leow</strong>
            <span className="urban_text">Group CTO,</span>
            <span className="urban_text">Executive Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Mr Leow is a seasoned professional with over 20 years of experience
            in the tech industry. He holds a PMP certification and an honours
            degree in Software Engineering from the University of New South
            Wales, Australia. Mr Leow began his career in Sydney and has gained
            experience working in Malaysia, Singapore, Cambodia, and the United
            States. Throughout his career, Mr Leow has worked in software
            development, project management, and technology consulting. He has
            held key positions at Intel Malaysia and Motorola Australia,
            focusing on manufacturing automation and mobile messaging software.
            As an entrepreneur, he co-founded Claritas, a cloud-based CRM
            solution company, which was acquired by Incite Innovations in 2022.
            Mr Leow is recognized as an industry thought leader, having been a
            keynote speaker at numerous innovation and technology conferences.
            His expertise includes solution architecture, CRM, AI, digital
            media, retail management, and fintech. Currently, Mr Leow leads
            technology innovation and product direction at Nuren Group.
          </p>
        </div>
      </section>

      <section
        id="dato_eng"
        className="person_detail row "
        style={{ background: "#463157" }}
        data-name="DATO Y.K. Eng"
      >
        <div className="left colc">
          <Image src={DatoEng} alt="DATO Y.K. Eng" />
          <div className="title col">
            <strong>Dato Y.K. Eng</strong>
            <span className="urban_text">Independent,</span>
            <span className="urban_text">Non-Executive Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Dato Eng is a prominent entrepreneur in Malaysia, particularly noted
            for his contributions to the confinement care industry and women's
            wellness. He began his entrepreneurial journey at 18, after
            graduating from high school in 2002. Mr Yee Koon Eng and his wife
            established Cozzi Confinement Centre (“Cozzi”) in 2017, providing
            affordable postnatal care including baby care, mother care,
            nutritious meals, and professional guidance. The success of the
            initial centre prompted further expansions of 5 centres to date.
            Cozzi has also focused on maternal education, organizing over 25
            talks since 2021 on topics related to women and baby wellness. In
            2021, Dato Eng acquired stakes in Itsherbs (“IH”), which addresses
            women's fertility concerns through Traditional Chinese Medicine and
            serves over 30,000 customers. In 2022, Dato Eng was also appointed
            as an advisor to Tradisi Bidan House (“TBH Wellness”), a company
            offering traditional postnatal massages. Under Dato Eng's
            leadership, Cozzi and his associated ventures continue to provide
            comprehensive wellness services for women in Malaysia.
          </p>
        </div>
      </section>
    </main>
  );
}

export default BOD_Detail;
