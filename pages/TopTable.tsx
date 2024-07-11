import React, { useState } from "react";
import { NextPage } from "next";
import {
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import SearchIcon from "./SearchIcon";
import ChevronDownIcon from "./ChevronDownIcon";
import { capitalize } from "@/utils/utils";

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const TopTable = () => {
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="w-full flex flex-col gap-4 my-6 px-4">
      <div className="flex gap-3 items-end">
        <Input
          isClearable
          className="w-full sm:max-w-[44%] border-none"
          placeholder="搜索歌名"
          startContent={<SearchIcon />}
          // value={filterValue}
          // onClear={() => onClear()}
          // onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="text-small" />}
                variant="flat"
                className="bg-white"
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              // onSelectionChange={setStatusFilter}
            >
              {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {capitalize(status.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default TopTable;
