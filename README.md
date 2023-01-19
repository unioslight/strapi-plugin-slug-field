# Strapi-plugin-slug-field

A custom field for generating slug from a target field.

A __`UID`__ alternative _without_ the unique constraint - suitable for slugs shared between locales.

![Strapi-plugin-slug-field](/image.jpg)

## Installation

To install this plugin, you need to add an NPM dependency to your Strapi application:

```sh
# Using Yarn
yarn add strapi-plugin-slug-field

# Or using NPM
npm install strapi-plugin-slug-field
```

Then, you'll need to build your admin panel:

```sh
# Using Yarn
yarn build

# Or using NPM
npm run build
```

## Usage

After installation, you will find a `Slug` field in the custom fields section of the content-type builder.

## Reference

* [Official UID field's source code](https://github.com/strapi/strapi/blob/main/packages/core/admin/admin/src/content-manager/components/InputUID/index.js)
