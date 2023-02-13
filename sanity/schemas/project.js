export default {
  name: `project`,
  title: `project`,
  type: `document`,
  fields: [
    {
      name: `image`,
      title: `Image`,
      type: `array`,
      of: [{type: `image`}],
      options: {
        hotspot: true,
      },
    },
    {name: `name`, title: `Name`, type: `string`},
    {
      name: `slug`,
      title: `Slug`,
      type: `slug`,
      options: {
        source: `name`,
        maxLength: 60,
      },
    },
    {
        name: `technology_stack`,
        title: `Technology stack`,
        type: `array`,
        of: [{type: `string`}],
        options: {
          hotspot: true,
        },
      },
    {
      name: `description`,
      title: `Description`,
      type: `string`,
    },
    {
      name: `details`,
      title: `Details`,
      type: `string`,
    },
  ],
}
