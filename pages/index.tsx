import React, { Component } from "react";
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
} from "@nextui-org/react";
import TopTable from "./TopTable";
import XLSX from "xlsx";
import toast from "react-hot-toast";

interface SongData {
  key: string;
  name: string;
  song: string;
  language: string;
  style: string;
  remark: string;
}

interface ParentComponentState {
  data: SongData[];
  search: SongData[];
  nameQuery: string;
  songQuery: string;
  styleQuery: string;
  languageQuery: string;
}
class Home extends Component<{}, ParentComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: [],
      nameQuery: "",
      songQuery: "",
      styleQuery: "",
      languageQuery: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
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
      this.setState({
        data: formattedData,
        search: formattedData,
      });
    } catch (error) {
      console.error("Error fetching and processing the file", error);
    }
  }

  handleSearch = () => {
    const { nameQuery, songQuery, languageQuery, styleQuery, data } =
      this.state;
    let filteredData = data;

    if (nameQuery) {
      filteredData = filteredData.filter((item) =>
        item.name.includes(nameQuery)
      );
    }

    if (songQuery) {
      filteredData = filteredData.filter((item) =>
        item.song.includes(songQuery)
      );
    }

    if (styleQuery) {
      filteredData = filteredData.filter((item) =>
        item.style.includes(styleQuery)
      );
    }

    if (languageQuery) {
      filteredData = filteredData.filter((item) =>
        item.language.includes(languageQuery)
      );
    }
    this.setState({ search: filteredData });
  };

  handleNameChange = (query) => {
    this.setState({ nameQuery: query }, this.handleSearch);
  };
  handleSongChange = (query) => {
    this.setState({ songQuery: query }, this.handleSearch);
  };

  handleStyleChange = (query) => {
    this.setState({ styleQuery: query }, this.handleSearch);
  };
  handleLanguageChange = (query) => {
    this.setState({ languageQuery: query }, this.handleSearch);
  };

  render() {
    return (
      <div>
        <div className="fixed w-full h-full top-0 left-0 -z-10 object-cover bg-[url(/11.jpg)] bg-cover bg-center bg-no-repeat" />
        <div className="flex flex-col items-center py-10">
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
                        欢迎来到苏米可-miko的歌单
                      </h3>
                      <a
                        className="text-blue-500 no-underline mt-3"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        米可の直播间入口
                      </a>
                      <ul className="list-disc pl-5 space-y-3 text-left mt-3">
                        <li>[点歌要求]</li>
                        <li>[点歌规则]</li>
                        <li>[其他]</li>
                      <a
                        className="text-blue-500 no-underline mt-3"
                        href="https://aixiaoyu.fun/%E9%9A%8F%E4%BE%BF%E6%9D%A5%E4%B8%80%E9%A6%96.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        不知道听什么？来试试这个吧！（点我点我）
                      </a>
                      <ul className="list-disc pl-5 space-y-3 text-left mt-3">
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 mt-10 sm:w-[70%] w-full"
            shadow="sm"
          >
            <CardBody>
              <TopTable
                onSearch={this.handleNameChange}
                onSelectSong={this.handleSongChange}
                onSelectStyle={this.handleStyleChange}
                onSelectLanguage={this.handleLanguageChange}
                data={this.state.data}
              />
              <Table
                // isStriped
                isHeaderSticky
                removeWrapper
                selectionMode="single"
                color="primary"
                className="max-h-[60vh] w-full overflow-auto border bg-white bg-opacity-60 rounded-xl"
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
                <TableBody items={this.state.search}>
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
  }
}
export default Home;
