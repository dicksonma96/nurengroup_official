import React from "react";
import "./style.scss";
import Download from "../../../../assets/img/icon/download.svg";
import Arrow from "../../../../assets/img/icon/arrow_outward.svg";
import Image from "next/image";
import AssetPath from "@/app/utils/assetpath";

function CorperateGovernance() {
  const committee_charters = [
    {
      label: "Audit and Risk Committee Charter",
      link: AssetPath(
        "NG+Committee+Charter/Nuren+-+Audit+and+Risk+Committee+Charter.pdf"
      ),
      type: "download",
    },
    {
      label: "Board Charter",
      link: AssetPath("NG+Committee+Charter/Nuren+-+Board+Charter.pdf"),
      type: "download",
    },
    {
      label: "Nomination  and Remuneration Committee Charter",
      link: AssetPath(
        "NG+Committee+Charter/Nuren+-+Nomination+and+Remuneration+Committee+Charter.pdf"
      ),
      type: "download",
    },
  ];

  const governance_docs = [
    {
      label: "Anti Bribery and Corruption Policy",
      link: AssetPath(
        "NG+Corporate+Governance/Nuren+-+Anti-Bribery+and+Corruption+Policy.pdf"
      ),
      type: "download",
    },
    {
      label: "Diversity Policy",
      link: AssetPath("NG+Corporate+Governance/Nuren+-+Diversity+Policy.pdf"),
      type: "download",
    },
    {
      label: "Code of Conduct",
      link: AssetPath("NG+Corporate+Governance/Nuren+-+Code+of+Conduct.pdf"),
      type: "link",
    },
    {
      label: "OH & S Policy",
      link: AssetPath("NG+Corporate+Governance/Nuren+-+OH+%26+S+Policy.pdf"),
      type: "download",
    },
    {
      label: "Communication and Disclosure Policy",
      link: AssetPath(
        "NG+Corporate+Governance/Nuren+-+Communication+and+Disclosure+Policy.pdf"
      ),
      type: "download",
    },
    {
      label: "Risk Management Policy",
      link: AssetPath(
        "NG+Corporate+Governance/Nuren+-+Risk+Management+Policy.pdf"
      ),
      type: "download",
    },
    {
      label: "Corporate Governance Statement",
      link: AssetPath(
        "NG+Corporate+Governance/Nuren+-+Corporate+Governance+Statement.pdf"
      ),
      type: "link",
    },
    {
      label: "Securities Trading Policy",
      link: AssetPath(
        "NG+Corporate+Governance/NG+Corporate+Governance/Nuren+-+Securities+Trading+Policys.pdf"
      ),
      type: "download",
    },
    {
      label: "Delegation of Authority Policy",
      link: AssetPath(
        "NG+Corporate+Governance/Nuren+-+Delegation+of+Authority+Policys.pdf"
      ),
      type: "download",
    },
    {
      label: "Statement of Values",
      link: AssetPath(
        "NG+Corporate+Governance/Nuren+-+Statement+of+Values.pdf"
      ),
      type: "download",
    },
  ];

  return (
    <main className="governance col">
      <div className="governance_banner">
        <div className="content col">
          <h1>
            INVESTORS & <br /> GOVERNANCE
          </h1>
        </div>
        <div className="abstract"></div>
      </div>
      <div className="governance_content colc">
        <div className="linkbox col">
          <h2>COMMITTE CHARTERS</h2>
          <div className="links">
            {committee_charters.map((link, index) => (
              <GovernLink
                key={index}
                link={link.link}
                type={link.type}
                label={link.label}
              />
            ))}
          </div>
        </div>
        <div className="linkbox col">
          <h2>CORPORATE GOVERNANCE DOCUMENTS</h2>
          <div className="links">
            {governance_docs.map((link, index) => (
              <GovernLink
                key={index}
                link={link.link}
                type={link.type}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function GovernLink({ link, type = "download", label }) {
  return (
    <a className="rowc" href={link} target="_blank">
      <span className="urban_text">{label}</span>
      {type == "download" ? (
        <Image src={Download} alt="download" />
      ) : (
        <Image src={Arrow} alt="link" />
      )}
    </a>
  );
}

export default CorperateGovernance;
