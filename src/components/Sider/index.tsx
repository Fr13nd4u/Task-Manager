import React, { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
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
  teg: {
    name: string;
    color: string;
  };
}

const Sider = () => {
  const { tegs } = useContext(SiderContext);
  const [value, setValue] = useState("");
  const [checklist, setChecklist] = useState<any>([]);

  // const [checklist, setChecklist] = useState<any>([
  //   { id: 1, name: "Alabama" },
  //   { id: 2, name: "Georgia" },
  //   { id: 3, name: "Tennessee" },
  // ]);

  const today = moment().format("DD MMM Y");

  const initialValues: IFormValues = {
    title: "",
    date: moment(today, "DD MMM Y"),
    description: "",
    сhecked: [],
    teg: {
      name: "",
      color: "",
    },
  };

  const disabledDate = (current: object) => {
    return current && current < moment().add(-1, "days");
  };

  const handleAddCheck = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (value.trim()) {
      checklist.push({
        id: Date.now(),
        name: value,
      });
      setValue("");
    }
  };

  const handleKeyDown = (event: any) => {
    event.target.style.height = "32px";

    event.target.style.height = `${event.target.scrollHeight}px`;
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
                  rows={1}
                  onKeyDown={handleKeyDown}
                />
              </Form.Item>

              <Form.Item
                name="chekclist"
                label="Checklist"
                className="chekbox-block"
              >
                <Checkbox.Group name="сhecked">
                  {checklist.map((item: any) => (
                    <Checkbox name="сhecked" value={item.name} key={item.id}>
                      <Input
                        name={item.name}
                        defaultValue={item.name}
                        // onChange={(event) => setChecklist(event.target.value)}
                      />
                    </Checkbox>
                  ))}
                </Checkbox.Group>
              </Form.Item>

              <Checkbox
                name="addMore"
                disabled
                checked={false}
                className="addMore"
              >
                <Input
                  name="addMore"
                  value={value}
                  placeholder="Add more"
                  onChange={(event) => setValue(event.target.value)}
                  onBlur={handleAddCheck}
                />
              </Checkbox>

              <Form.Item name="teg">
                <Radio.Group name="teg" className="tegs">
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
