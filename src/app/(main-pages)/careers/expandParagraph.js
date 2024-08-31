"use client";

import React, { useEffect, useState, useRef } from "react";

function ExpandParagraph({ content }) {
  const [expand, setExpand] = useState(false);
  const [expandable, setExpandable] = useState(true);
  const contentRef = useRef();
  useEffect(() => {
    let contentHeight = contentRef.current.scrollHeight;
    if (contentHeight > 70) {
      setExpandable(true);
    }
  }, []);

  return (
    <div className="description col">
      <div
        className="desc_content"
        style={{ height: expandable ? (expand ? "auto" : "70px") : "auto" }}
        dangerouslySetInnerHTML={{ __html: content }}
        ref={contentRef}
      />

      {expandable && (
        <span
          onClick={() => {
            setExpand((prev) => !prev);
          }}
          className="see_more"
        >
          {expand ? "Show Less" : "Show More"}
        </span>
      )}
    </div>
  );
}

export default ExpandParagraph;
