import React, { useState } from "react";
import { Input, Autocomplete, AutocompleteItem } from "@nextui-org/react";

import SearchIcon from "./SearchIcon";

const TopTable = ({
  data,
  onSearch,
  onSelectSong,
  onSelectLanguage,
  onSelectStyle,
}) => {
  const [query, setQuery] = useState<string>();

  let songList = [];
  let styleList = [];
  let languageList = [];

  if (data && Array.isArray(data)) {
    songList = Array.from(new Set(data.map((value) => value.song))).map(
      (song) =>
        ({
          label: song,
          value: song,
        } as any)
    );
    styleList = Array.from(new Set(data.map((value) => value.style))).map(
      (style) =>
        ({
          label: style,
          value: style,
        } as any)
    );
    languageList = Array.from(new Set(data.map((value) => value.language))).map(
      (language) =>
        ({
          label: language,
          value: language,
        } as any)
    );
  }
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 my-6 px-0 items-center">
      <div className="w-full md:w-1/2">
        <Input
          isClearable
          className="w-full"
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
      <div className="flex w-full md:w-1/2 gap-1">
        <Autocomplete
          className="h-10"
          placeholder="全部歌手"
          isClearable={false}
          onSelectionChange={onSelectSong}
        >
          {songList.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          placeholder="全部风格"
          isClearable={false}
          className="h-10"
          onSelectionChange={onSelectStyle}
        >
          {styleList.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Autocomplete
          placeholder="全部语言"
          isClearable={false}
          className="h-10"
          onSelectionChange={onSelectLanguage}
        >
          {languageList.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </div>
    </div>
  );
};
export default TopTable;
