import { BaseKey, BaseRecord, HttpError, useMany } from "@refinedev/core";

import {
    DateField,
    DeleteButton,
    EditButton,
    List,
    MarkdownField,
    ShowButton,
    TagField,
    useTable,
} from "@refinedev/antd";
import {
    Table,
    Form,
    Input,
    Space,
} from "antd";
import Button from "antd/lib/button/button";
import { SearchOutlined } from '@ant-design/icons';

interface IPost {
  id: number;
  title: string;
  content: string;
  category: BaseRecord;
  status: "published" | "draft" | "rejected";
}

interface ISearch {
  title: string;
  content: string;
}

export const BlogPostList: React.FC = () => {
  const { result, tableProps, searchFormProps } = useTable<IPost, HttpError, ISearch>({
    syncWithLocation: true,
    onSearch: (values) => {
      return [
        {
          field: "title",
          operator: "contains",
          value: values.title,
        },
        {
          field: "content",
          operator: "contains",
          value: values.content,
        },
      ];
    },
  });

  const catIds = result?.data?.map((item) => item?.category?.id).filter(Boolean) ?? [];

  const {
    result: { data: categories },
    query: { isLoading: categoryIsLoading },
  } = useMany({
    resource: "categories",
    ids: catIds as BaseKey[],
    queryOptions: {
      enabled: !!result?.data,
    },
  });

  return (
    <List>
      <Form {...searchFormProps} layout="inline">
        <Form.Item name="title">
          <Input addonBefore="Title:" placeholder="Search by title" />
        </Form.Item>
        <Form.Item name="content">
          <Input addonBefore="Content:" placeholder="Search by content" />
        </Form.Item>
        <Button icon={<SearchOutlined />} onClick={searchFormProps.form?.submit} >Search</Button>
      </Form>

      <Table {...tableProps} rowKey="id" size="small" style={{ marginTop: "20px" }}>
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="title" title={"Title"} />
        <Table.Column
          dataIndex="content"
          title={"Content"}
          render={(value: any) => {
            if (!value) {
                return "-";
            }
            if (value.length < 200) {
                return <MarkdownField value={value} />;
            }else{
                return <MarkdownField value={value.slice(0, 200) + " `...`"} />;
            }
          }}
        />
        <Table.Column
          dataIndex={"category"}
          title={"Category"}
          render={(value) =>
            categoryIsLoading ? (
              <>Loading...</>
            ) : (
              categories?.find((item) => item.id === value?.id)?.title
            )
          }
        />
        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value: string) => <TagField value={value} />}
        />
        <Table.Column
          dataIndex={["createdAt"]}
          title={"Created at"}
          minWidth={90}
          render={(value: any) => <DateField value={value} format="YYYY/MM/DD" />}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>

    </List>
  );
};