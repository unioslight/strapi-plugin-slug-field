import { prefixPluginTranslations } from "@strapi/helper-plugin";
import * as yup from "yup";
import pluginPkg from "../../package.json";
import SlugFieldIcon from "./components/SlugFieldIcon";
import pluginId from "./pluginId";
import getTrad from "./utils/getTrad";

const { name, displayName, description } = pluginPkg.strapi;

export default {
  register(app) {
    app.customFields.register({
      name,
      pluginId,
      type: "string",
      icon: SlugFieldIcon,
      intlLabel: {
        id: getTrad("label"),
        defaultMessage: displayName,
      },
      intlDescription: {
        id: getTrad("description"),
        defaultMessage: description,
      },
      components: {
        Input: async () => await import("./components/SlugField"),
      },
      options: {
        base: [
          {
            // preferably, this should be a dropdown/select with available attributes
            // for selecting rather than having to type in the name of the attribute
            name: "options.targetField",
            type: "string",
            intlLabel: {
              id: getTrad("options.base.targetField"),
              defaultMessage: "Target field",
            },
            description: {
              id: getTrad("options.base.targetField.description"),
              defaultMessage: "Name of the attribute to generate slug against",
            },
          },
        ],
        advanced: [
          {
            name: "required",
            type: "checkbox",
            intlLabel: {
              id: getTrad("options.advanced.required"),
              defaultMessage: "Required field",
            },
            description: {
              id: getTrad("options.advanced.required.description"),
              defaultMessage:
                "You won't be able to create an entry if this field is empty",
            },
          },
        ],
        validator: () => ({
          targetField: yup.string().required({
            id: getTrad("error.targetField.required"),
            defaultMessage: "This value is required.",
          }),
        }),
      },
    });
  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
