import React from "react";
import "./style.scss";
import { committee_charters, governance_docs } from "../../../../data/docsInfo";
import Link from "next/link";

export const metadata = {
  title:
    "Corporate Governance | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
  description:
    "Investor Relations & Corporate Governance. Nuren Group provides parenting education and maternity wellness services",
};

function CorperateGovernance() {
  return (
    <main className="section governance col">
      <div className="governance_content colc">
        <h1>INVESTMENT & GOVERNANCE</h1>

        <div className="linkbox col">
          <h2>COMMITTE CHARTERS</h2>
          <div className="links">
            {committee_charters.map((link, index) => (
              <Link key={index} href={"corporate-governance/" + link.slug}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="linkbox col">
          <h2>CORPORATE GOVERNANCE DOCUMENTS</h2>
          <div className="links">
            {governance_docs.map((link, index) => (
              <Link key={index} href={"corporate-governance/" + link.slug}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="cities rowc"></div>
    </main>
  );
}

export default CorperateGovernance;
