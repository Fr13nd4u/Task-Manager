import React from "react";
import LinkWithIcon from "../LinkWithIcon";
import moment from "moment";
import { CheckSquareOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import { Form, Input, Button, DatePicker } from "antd";
import "./Sider.scss";

const Sider = () => {
  const disabledDate = (current: any) => {
    return current && current < moment().endOf("day");
  };

  return (
    <div className="sider">
      <div className="sider-wrap">
        <LinkWithIcon title="MARK AS COMPLETE" icon={<CheckSquareOutlined />} />
      </div>
      <hr />
      <div className="sider-wrap">
        <Formik
          initialValues={{}}
          onSubmit={(values, { resetForm }) => {
            console.log("submit /n", JSON.stringify(values));
          }}
        >
          {({ values }) => (
            <Form name="control-hooks">
              <Form.Item
                name="title"
                rules={[{ required: true, message: "Please input title!" }]}
              >
                <Input placeholder="Task Title" />
              </Form.Item>

              <Form.Item name="Description" label="description">
                <Input placeholder="Descrive your event" />
              </Form.Item>

              <Form.Item label="Due to">
                <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} />
              </Form.Item>

              <Form.Item>
                <Button htmlType="button">Reset</Button>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Sider;

interface IFormValues {
  title: string;
}
