import React, { useState } from "react";
import { SingleBar } from "./SingleBar";

export const TreeFolder = (props) => {
  const { name, children, id } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div data-folderId={id} className=" my-3">
      <div className="">
        <div className=" bg-white rounded"></div>
      </div>
      <p className="mx-3">{name}</p>
      {!isExpanded ? (
        <p className="p-1" onClick={() => setIsExpanded(true)}>
          {">"}
        </p>
      ) : (
        <p className="p-1" onClick={() => setIsExpanded(false)}>
          {"v"}
        </p>
      )}
      {/* children && isExpanded && children.map((c) => <SingleBar key={c.name} data={c.name} className='m-4'/>) */}
      {children && isExpanded && <div className={`m-4`}>{children}</div>}
    </div>
  );
};
