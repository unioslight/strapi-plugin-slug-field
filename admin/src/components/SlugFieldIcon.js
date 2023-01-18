import { Flex } from "@strapi/design-system/Flex";
import { Icon } from "@strapi/design-system/Icon";
import Link from "@strapi/icons/Link";
import React from "react";

const PluginIcon = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    width={7}
    height={6}
    hasRadius
    aria-hidden
    style={{ backgroundColor: "#eee", border: "1px solid #ccc" }}
  >
    <Icon as={Link} />
  </Flex>
);

export default PluginIcon;
