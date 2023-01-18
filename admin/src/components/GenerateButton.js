import { FieldAction } from "@strapi/design-system/Field";
import Refresh from "@strapi/icons/Refresh";
import React from "react";
import styled from "styled-components";

const StyledFieldAction = styled(FieldAction)`
  svg {
    width: 1rem;
    height: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral400};
    }

    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }
  }
`;

const GenerateButton = ({ onClick }) => {
  return (
    <StyledFieldAction onClick={onClick} label="Generate">
      <Refresh />
    </StyledFieldAction>
  );
};

export default GenerateButton;
