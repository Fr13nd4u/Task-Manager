import React, { FC } from "react";
import moment from "moment";
import { DatePicker } from "formik-antd";

import "./DateForm.scss";

export const DateForm: FC<Props> = ({ date, format, disabled }: Props) => {
  const disabledDate = (current: object) => {
    return current && current < moment().add(-1, "days");
  };

  return (
    <DatePicker
      name="date"
      format={format}
      disabledDate={disabledDate}
      placeholder={date}
      disabled={disabled}
    />
  );
};

interface Props {
  date: string;
  format?: string;
  disabled?: boolean;
}
