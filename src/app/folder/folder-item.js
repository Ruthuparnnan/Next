"use client";

import { useState } from "react";

function FolderItem({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenFolder = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div style={{ borderLeft: isOpen && data?.isFolder && "1px dashed #999" }}>
      <div style={{ padding: "5px" }} onClick={handleOpenFolder}>
        {data?.name}
      </div>
      {data?.isFolder &&
        isOpen &&
        data?.items?.map((item) => (
          <div key={item?.name} style={{ marginLeft: "15px" }}>
            {item?.isFolder ? (
              <FolderItem data={item} key={item?.name} />
            ) : (
              <div style={{ padding: "5px" }} key={item?.name}>
                {item?.name}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default FolderItem;
