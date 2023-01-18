import { TextInput } from "@strapi/design-system/TextInput";
import Refresh from "@strapi/icons/Refresh";
import React from "react";

const SlugField = ({
  attribute,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
}) => {
  const label = intlLabel.id ? intlLabel.defaultMessage : name;
  const hint = description?.id ? description.defaultMessage : "";
  const { targetField } = attribute.options;

  return (
    <TextInput
      disabled={disabled}
      required={required}
      error={error}
      value={value}
      name={name}
      hint={hint}
      label={label}
      labelAction={labelAction}
      endAction={<Refresh />}
    />
  );
};

SlugField.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: "",
};

export default SlugField;
