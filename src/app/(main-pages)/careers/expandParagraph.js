"use client";

import React, { useEffect, useState } from "react";

function ExpandParagraph({
  text,
  text_limit = 165,
  className = "trim_paragraph",
}) {
  const [limit, setLimit] = useState(false);

  useEffect(() => {
    if (text.length > text_limit) {
      setLimit(true);
    }
  }, []);
  return (
    <div className={className}>
      {limit ? (
        <>
          {text.slice(0, text_limit)}
          <span className="see_more" onClick={() => setLimit(false)}>
            ... See More
          </span>
        </>
      ) : (
        <>
          {text}
          {text.length > text_limit && (
            <>
              <span className="see_more" onClick={() => setLimit(true)}>
                Show Less
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ExpandParagraph;
