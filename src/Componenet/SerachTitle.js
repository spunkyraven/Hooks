import React, { useState } from "react";

function SerachTitle({ search }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Movie"
        onChange={(e) => search(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default SerachTitle;
