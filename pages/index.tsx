import React, { use, useCallback, useEffect, useMemo, useState } from "react";
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
import toast from "react-hot-toast";

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

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
      setSearch(formattedData);
      // console.info("----", formattedData);
    } catch (error) {
      console.error("Error fetching and processing the file", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = useCallback((query) => {
    if (query === "") {
      setSearch(data);
    } else {
      setSearch(data.filter((item) => item.name.includes(query)));
    }
  }, []);

  return (
    <div>
      <div className="fixed w-full h-full top-0 left-0 -z-10 object-cover bg-[url(/11.jpg)] bg-cover bg-center bg-no-repeat" />
      <div className="flex flex-col items-center pt-10">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 sm:w-[70%] w-full"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center w-full">
              <div className="relative col-span-6 md:col-span-4 justify-self-center">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  height={200}
                  shadow="sm"
                  src="/avatar.png"
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
          className="border-none bg-background/60 dark:bg-default-100/50 mt-10 md:w-[70%] sm:w-full"
          shadow="sm"
        >
          <CardBody>
            <TopTable onSearch={handleSearch} />
            <Table
              // isStriped
              isHeaderSticky
              removeWrapper
              selectionMode="single"
              color="primary"
              className="max-h-[50vh] w-full overflow-auto border bg-white bg-opacity-60 rounded-xl"
            >
              <TableHeader>
                <TableColumn key="name">歌名</TableColumn>
                <TableColumn key="song">歌手</TableColumn>
                <TableColumn key="language" className="sm:w-1/4 md:w-1/12">
                  语言
                </TableColumn>
                <TableColumn
                  key="style"
                  className="hidden sm:table-cell md:w-1/12"
                >
                  样式
                </TableColumn>
                <TableColumn
                  key="remark"
                  className="hidden sm:table-cell md:w-auto"
                >
                  备注
                </TableColumn>
              </TableHeader>
              <TableBody items={search}>
                {(item) => (
                  <TableRow
                    key={item.key}
                    onClick={() => {
                      navigator.clipboard.writeText(`点歌 ${item.name}`);
                      toast.success(`复制成功! 点歌：${item.name}`, {
                        duration: 2000,
                      });
                    }}
                  >
                    {(columnKey) => (
                      <TableCell
                        className={`${
                          columnKey === "style" || columnKey === "remark"
                            ? "hidden sm:table-cell"
                            : ""
                        }`}
                      >
                        {getKeyValue(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Home;
