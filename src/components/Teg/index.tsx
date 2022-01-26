import React from "react";
import { Radio } from "formik-antd";

import "./Teg.scss";

export const Teg = ({ teg, disabled }: Props) => {
  return (
    <Radio.Button
      style={{ color: teg.color, background: `${teg.color}14` }}
      disabled={disabled}
      value={teg}
    >
      {teg.name}
    </Radio.Button>
  );
};

interface Props {
  teg: {
    name: string;
    color: string;
  };
  disabled?: boolean;
}
