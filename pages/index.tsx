import React, { use, useEffect, useState } from "react";
import { NextPage } from "next";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Card,
  CardBody,
  Image,
  Button,
  Slider,
} from "@nextui-org/react";
import TopTable from "./TopTable";
import XLSX from "xlsx";

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/song.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const formattedData = jsonData.slice(1).map((row, index) => ({
        key: (index + 1).toString(),
        name: row[0] || "",
        song: row[1] || "",
        language: row[2] || "",
        style: row[3] || "",
        remark: row[4] || "",
      }));
      setData(formattedData);
      console.info("----", formattedData);
    } catch (error) {
      console.error("Error fetching and processing the file", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="flex flex-col items-center pt-10">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 "
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src="/avatar.png"
                  width="100%"
                />
              </div>
              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      欢迎来到阿胖哒Apanda的歌单
                    </h3>
                    <a
                      className="text-blue-500 no-underline mt-3"
                      href="https://live.bilibili.com/32503794"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      阿胖哒Apanda直播间入口
                    </a>
                    <ul className="list-disc pl-5 space-y-3 text-left mt-3">
                      <li>带牌子发弹幕/情书点歌：点歌+歌名</li>
                      <li>每次点歌冷却1分钟</li>
                      <li>SC置顶歌曲</li>
                      <li>舰长点歌无限制（7分钟以上的歌限舰长可点）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 mt-10"
          shadow="sm"
        >
          <CardBody>
            <TopTable />
            <Table
              // isStriped
              isHeaderSticky
              removeWrapper
              selectionMode="single"
              color="primary"
              className="max-h-[50vh] overflow-auto border bg-white bg-opacity-60 rounded-xl"
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
              </TableHeader>
              <TableBody items={data}>
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
          </CardBody>
        </Card>

        {/* <div className="flex flex-col items-center mt-10 p-4 w-3/4 rounded-xl bg-background/60 dark:bg-default-100/50">
          <TopTable />
          <Table
            // isStriped
            isHeaderSticky
            removeWrapper
            selectionMode="single"
            color="primary"
            className="max-h-[50vh] overflow-auto border bg-white bg-opacity-60 rounded-xl"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={data}>
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
        </div> */}
      </div>
    </div>
  );
};
export default Home;
