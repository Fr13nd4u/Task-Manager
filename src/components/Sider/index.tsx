import React, { useContext, useState } from "react";
import moment from "moment";
import { Formik } from "formik";
import {
  Input,
  SubmitButton,
  ResetButton,
  DatePicker,
  Checkbox,
  Radio,
  Form,
} from "formik-antd";
import { CheckSquareOutlined } from "@ant-design/icons";

import { SiderContext } from "../../App";
import { Teg } from "../Teg";
import LinkWithIcon from "../LinkWithIcon";

import "./Sider.scss";

interface IFormValues {
  title: string;
  date: object;
  description?: string;
  сhecked: [];
}

const Sider = () => {
  const { tegs } = useContext(SiderContext);
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  const checklist = ["Alfa", "Beta"];

  const today = moment().format("DD MMM Y");

  const initialValues: IFormValues = {
    title: "",
    date: moment(today, "DD MMM Y"),
    description: "",
    сhecked: [],
  };

  const disabledDate = (current: object) => {
    return current && current < moment().add(-1, "days");
  };

  const handleAddCheck = (event: any) => {
    event.preventDefault();

    if (value.trim()) {
      checklist.push(value);
    }
  };

  return (
    <div className="sider">
      <div className="sider-wrap">
        <LinkWithIcon title="MARK AS COMPLETE" icon={<CheckSquareOutlined />} />
      </div>
      <hr />
      <div className="sider-wrap">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            console.log("submit: ", values);
          }}
          validate={(values) => {
            if (!values.title) {
              return { title: "Title is required" };
            }
            if (values.title.length < 3) {
              return { title: "Title must be more than 3 characters" };
            }
            return undefined;
          }}
        >
          {({ values }) => (
            <Form>
              <Form.Item
                name="title"
                className="input-block"
                hasFeedback={true}
                showValidateSuccess={true}
              >
                <Input
                  name="title"
                  placeholder="Task Title"
                  className="input-title"
                />
              </Form.Item>

              <Form.Item name="date" label="Due to" className="input-block due">
                <DatePicker
                  name="date"
                  format="DD MMM Y"
                  disabledDate={disabledDate}
                  placeholder={today}
                />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                className="input-block"
              >
                <Input.TextArea
                  name="description"
                  placeholder="Descrive your event"
                />
              </Form.Item>

              <Form.Item
                name="chekclist"
                label="Checklist"
                className="input-block"
              >
                <Checkbox.Group name="сhecked">
                  {checklist.map((item: string, index: number) => (
                    <Checkbox name="сhecked" value={item} key={index}>
                      <Input
                        name={item}
                        defaultValue={item}
                        onChange={(event) => setInput(event.target.value)}
                      />
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </Form.Item>

              <Checkbox name="addMore" disabled checked={false}>
                <Input
                  name="addMore"
                  value={value}
                  placeholder="Add more"
                  onChange={(event) => setValue(event.target.value)}
                  onBlur={handleAddCheck}
                />
              </Checkbox>

              <Form.Item name="tegs">
                <Radio.Group name="tegs" className="tegs">
                  {tegs.map((teg: any, index: number) => (
                    <Teg key={index} teg={teg} />
                  ))}
                </Radio.Group>
              </Form.Item>

              <ResetButton>Reset</ResetButton>
              <SubmitButton>Save</SubmitButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Sider;
