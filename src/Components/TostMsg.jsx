import React, { memo, useEffect } from "react";

const TostMsg = memo(({ message }) => {
  return (
    <div id="toast" className="toast toast-bottom toast-end">
      <div className="alert alert-success  bg-[#4A90E2] text-[#E0E0E0]">
        <span>{message}</span>
      </div>
    </div>
  );
});

export default TostMsg;
