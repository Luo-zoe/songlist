import React, { useState } from "react";
import { Input } from "@nextui-org/react";

import SearchIcon from "./SearchIcon";

const TopTable = ({ onSearch }) => {
  const [query, setQuery] = useState<string>();

  return (
    <div className="w-full flex flex-col gap-4 my-6 px-4">
      <div className="flex gap-3 items-end">
        <Input
          isClearable
          className="w-full border-none"
          placeholder="搜索歌名"
          startContent={<SearchIcon />}
          value={query}
          onClear={() => setQuery("")}
          onValueChange={(e: string) => {
            setQuery(e);
            onSearch(e);
          }}
        />
      </div>
    </div>
  );
};
export default TopTable;
