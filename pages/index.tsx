import React from "react";
import { NextPage } from "next";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import TopTable from "./TopTable";

const Home: NextPage = () => {
  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      song: "CEO",
      language: "中午",
      style: "Active",
      remark: "",
    },
    {
      key: "2",
      name: "Tony Reichert",
      song: "CEO",
      language: "中午",
      style: "Active",
      remark: "",
    },
    {
      key: "3",
      name: "Tony Reichert",
      song: "CEO",
      language: "中午",
      style: "Active",
      remark: "",
    },
    {
      key: "4",
      name: "Tony Reichert",
      song: "CEO",
      language: "中午",
      style: "Active",
      remark: "",
    },
  ];

  const columns = [
    {
      key: "name",
      label: "歌名",
    },
    {
      key: "song",
      label: "歌手",
    },
    {
      key: "language",
      label: "语言",
    },
    {
      key: "style",
      label: "风格",
    },
    {
      key: "sc",
      label: "SC",
    },
    {
      key: "remark",
      label: "备注",
    },
  ];
  return (
    <div>
      <div className="fixed w-full h-full top-0 left-0 -z-10 object-cover bg-[url(/11.jpg)] bg-cover bg-center bg-no-repeat" />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mt-10 py-8 w-3/4 bg-white text-center shadow-md rounded-xl transform bg-opacity-60">
          <h1 className="text-4xl text-gray-600 mb-6">欢迎来到胖哒的歌单</h1>
          <div className="text-center p-2 w-3/4 bg-white shadow-md rounded-lg transform bg-opacity-60">
            <a
              className="text-blue-500 no-underline mx-2"
              href="https://live.bilibili.com/32503794"
              target="_blank"
              rel="noopener noreferrer"
            >
              主直播间
            </a>
            <span className="text-gray-500">共收录501首歌</span>
          </div>
        </div>

        <div className="flex justify-center mt-10 py-8 w-3/4 bg-white shadow-md rounded-xl transform bg-opacity-60">
          <div className="flex flex-col items-center space-y-4 text-gray-800">
            <h2 className="text-2xl font-bold">点歌规则</h2>
            <ul className="list-disc pl-5 space-y-2 text-left">
              <li>带牌子发弹幕/情书点歌：点歌+歌名</li>
              <li>每次点歌冷却1分钟</li>
              <li>SC置顶歌曲</li>
              <li>舰长点歌无限制（7分钟以上的歌限舰长可点）</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 w-3/4">
          <Table
            selectionMode="single"
            color="primary"
            topContent={<TopTable />}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow
                  key={item.key}
                  onClick={() => console.info("-------------")}
                >
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Home;
