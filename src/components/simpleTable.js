import React from "react";
import { Table, Button, Popconfirm } from "antd";
import "../../src/assets/css/style.css";

const SimpleTable = ({ dataSource, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button onClick={() => onEdit(record.id, record)} type="link">
            Edit
          </Button>
          <Popconfirm
            title="Are you sure delete this user?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" style={{ color: "red" }}>
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className="table-container">
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default SimpleTable;
