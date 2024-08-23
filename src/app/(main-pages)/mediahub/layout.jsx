import React, { Suspense } from "react";
import { promises as fs } from "fs";
import "./style.scss";
import Loading from "./loading";

function MediaHubLayout({ children, modal }) {
  return (
    <main className="mediahub col">
      <Suspense fallback={<Loading />}>
        <>
          {children}
          {modal}
        </>
      </Suspense>
    </main>
  );
}

export default MediaHubLayout;
