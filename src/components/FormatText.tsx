import React from "react";

type TextProps = {
  msg: string[];
};

const FormattedList: React.FC<TextProps> = ({ msg }) => {
  if (!msg || !msg.length) {
    return null;
  }

  const formattedText = msg.join(", ");

  return <p>{formattedText}</p>;
};

export default FormattedList;
