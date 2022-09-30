/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-sequences */
import "./App.css";
import { Avatar, Button, Card, ConfigProvider, List, Table } from "antd";
import React, { useState } from "react";
import { Header } from "antd/lib/layout/layout";
import { useTranslation } from "react-i18next"; // hook de i18n
import esEs from "../node_modules/antd/es/locale/es_ES";
import enUs from "../node_modules/antd/es/locale/en_US";
import ptBr from "../node_modules/antd/es/locale/pt_BR";

//Tabla

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

//Lista

const dataLista = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

function App() {
  const [t, i18n] = useTranslation(); // la t es el abreviado de translation, normalmente se usa asi
  const [locale, setLocale] = useState("esEs");

  //Modificacion de titulos de las columnas de la tabla, segun idioma
  columns[0].title = t("table.name");
  columns[1].title = t("table.age");
  columns[2].title = t("table.address");

  //Modificacion de titulos de las columnas de la lista, segun idioma
  dataLista[0].title = t("list.title1");
  dataLista[1].title = t("list.title2");
  dataLista[2].title = t("list.title3");
  dataLista[3].title = t("list.title4");

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
            <Button
              onClick={() => (i18n.changeLanguage("es"), setLocale(esEs))}
            >
              ES
            </Button>
            <Button
              onClick={() => (i18n.changeLanguage("en"), setLocale(enUs))}
            >
              EN
            </Button>
            <Button
              onClick={() => (i18n.changeLanguage("pr"), setLocale(ptBr))}
            >
              PR
            </Button>
          </div>
        </div>
      </Header>
      <ConfigProvider locale={locale}>
        <Table columns={columns} dataSource={data} onChange={onChange} />
          <br/>
        <List
          itemLayout="horizontal"
          dataSource={dataLista}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={t("list.item.description")}
              />
            </List.Item>
          )}
        />
        <br/>
        <Card
          title={t("title.card")}
          style={{ width: 300 }}
        >
          <p>{t("p.card")}</p>
          <p>{t("p.card")}</p>
          <p>{t("p.card")}</p>

        </Card>
        <Card
          size="small"
          title={t("title.card.small")}
          style={{ width: 300 }}
        >
          <p>{t("p.card")}</p>
          <p>{t("p.card")}</p>
          <p>{t("p.card")}</p>
        </Card>
      </ConfigProvider>
    </div>
  );
}

export default App;
