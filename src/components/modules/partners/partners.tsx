import React from "react";
import { useTranslation } from "react-i18next";
import { Spin, List } from "antd";
import { useSelector } from "react-redux";
import * as selectors from "store/partners/selectors";

interface Props {
  data: any;
}

const Partners = ({ data }: Props) => {
  const { t } = useTranslation();
  const isLoading = useSelector(selectors.isLoading);

  return (
    <Spin spinning={isLoading}>
      Env: {process.env.NODE_ENV}
      <List
        itemLayout={"horizontal"}
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address} />
          </List.Item>
        )}
      ></List>
    </Spin>
  );
};

export default Partners;
