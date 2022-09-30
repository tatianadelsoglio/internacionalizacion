/* eslint-disable no-sequences */
import "./App.css";
import { Button, ConfigProvider, Table } from "antd";
import React, { useState } from "react";
import { Header } from "antd/lib/layout/layout";
import { useTranslation } from "react-i18next"; // hook de i18n
import esEs from "../node_modules/antd/es/locale/es_ES";
import enUs from "../node_modules/antd/es/locale/en_US";
import ptBr from "../node_modules/antd/es/locale/pt_BR";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function App() {
  const [t, i18n] = useTranslation(); // la t es el abreviado de translation, normalmente se usa asi
  const [locale, setLocale] = useState("esEs");

  columns[0].title = t("table.name");
  columns[1].title = t("table.age");
  columns[2].title = t("table.address");

  return (
    <div>
      <Header style={{ backgroundColor: "white" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            {t("home.idioma")}{" "}
            {/* esto representa la key para la transition, basicamente se pone esto para que segun el idioma cambie*/}
          </div>
          <div>
            <Button onClick={() => (i18n.changeLanguage("es"), setLocale(esEs))}>ES</Button>
            <Button onClick={() => (i18n.changeLanguage("en"), setLocale(enUs))}>EN</Button>
            <Button onClick={() => (i18n.changeLanguage("pr"), setLocale(ptBr))}>PR</Button>
          </div>
        </div>
      </Header>
      <ConfigProvider locale={locale}>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </ConfigProvider>
    </div>
  );
}

export default App;
