import React, { useContext } from "react";
import LinkWithIcon from "../LinkWithIcon";
import moment from "moment";
import { CheckSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";
import {
  Input,
  SubmitButton,
  ResetButton,
  DatePicker,
  Checkbox,
  Radio,
  Form,
} from "formik-antd";
import { Formik } from "formik";
import "./Sider.scss";
import { SiderContext } from "../../App";

interface IFormValues {
  title: string;
  date: object;
  description: string;
}

const Sider = () => {
  const { tegs } = useContext(SiderContext);

  const today = moment().format("DD MMM Y");

  const initialValues: IFormValues = {
    title: "",
    date: moment(today, "DD MMM Y"),
    description: "",
  };

  const disabledDate = (current: object) => {
    return current && current < moment().add(-1, "days");
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
              return { title: "title is required" };
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
                <Input name="description" placeholder="Descrive your event" />
              </Form.Item>

              <Form.Item
                name="сhecklists"
                label="Checklist"
                className="input-block"
              >
                <Checkbox name="сhecklist">
                  <Input name="listValue" placeholder="Add more" />
                </Checkbox>
                <Button>Add more</Button>
              </Form.Item>

              <Form.Item name="tegs">
                <Radio.Group name="tegs">
                  {tegs.map((teg: any, index: number) => (
                    <Radio.Button
                      value={teg}
                      key={index}
                      style={{ color: teg.color }}
                    >
                      {teg.name}
                    </Radio.Button>
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
