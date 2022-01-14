import React from "react";
import LinkWithIcon from "../LinkWithIcon";

import { CheckSquareOutlined } from "@ant-design/icons";
import {
  Form as FormikForm,
  Formik,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import { Form, Upload, Button, AutoComplete } from "antd";

import "./Sider.scss";

const Sider = () => {
  return (
    <div className="sider">
      <div className="sider-wrap">
        <LinkWithIcon title="MARK AS COMPLETE" icon={<CheckSquareOutlined />} />
      </div>
      <hr />
      <div className="sider-wrap">
        <Formik initialValues={{}} onSubmit={(e, { resetForm }) => {}}>
          <Field name="asd">
            {() => (
              <>
                <Form.Item label="Font">form</Form.Item>
                <Button>Save</Button>
              </>
            )}
          </Field>
        </Formik>
      </div>
    </div>
  );
};

export default Sider;
