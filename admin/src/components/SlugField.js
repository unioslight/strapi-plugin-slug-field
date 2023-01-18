import { TextInput } from "@strapi/design-system/TextInput";
import { useCMEditViewDataManager } from "@strapi/helper-plugin";
import { nameToSlug } from "@strapi/utils";
import React, { useState } from "react";
import GenerateButton from "./GenerateButton";

const SlugField = ({
  attribute,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  value: initialValue,
  required,
}) => {
  const { modifiedData, initialData } = useCMEditViewDataManager();
  const [value, setValue] = useState(initialValue);

  const label = intlLabel.id ? intlLabel.defaultMessage : name;
  const hint = description?.id ? description.defaultMessage : "";

  function generate() {
    const { targetField } = attribute.options;
    const targetData = modifiedData[targetField] || initialData[targetField];
    targetData && setValue(nameToSlug(targetData));
  }

  function handleChange({ target }) {
    target.value && setValue(target.value);
  }

  function handleBlur() {
    setValue(nameToSlug(value));
  }

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
      onChange={handleChange}
      onBlur={handleBlur}
      endAction={<GenerateButton onClick={generate} />}
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
