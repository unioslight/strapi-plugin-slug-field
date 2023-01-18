import { Flex } from "@strapi/design-system/Flex";
import { Icon } from "@strapi/design-system/Icon";
import Link from "@strapi/icons/Link";
import React from "react";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.neutral100};
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
`;

const PluginIcon = () => (
  <StyledFlex
    justifyContent="center"
    alignItems="center"
    width={7}
    height={6}
    hasRadius
    aria-hidden
  >
    <Icon as={Link} />
  </StyledFlex>
);

export default PluginIcon;
