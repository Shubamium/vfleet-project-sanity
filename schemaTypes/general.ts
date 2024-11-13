import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset',
      description: "Set as 'main' to use this preset",
      type: 'string',
    }),
    defineField({
      name: 'a1_art',
      title: 'A1 Image',
      type: 'image',
    }),
    defineField({
      name: 'a2_art',
      title: 'A2 Image',
      type: 'image',
    }),
    defineField({
      name: 'hero_section',
      title: 'Hero Section Art List',
      description: 'Arts for the hero section on the home page',
      type: 'array',
      of: [
        defineField({
          name: 'art',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'talent_section',
      title: 'Hero Section Art List',
      description: 'Arts for the talent section on the home page',
      type: 'array',
      of: [
        defineField({
          name: 'art',
          type: 'image',
        }),
      ],
    }),

    defineField({
      name: 'footer_text',
      title: 'Footer Text',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'left',
          title: 'Disclaimer (Left)',
          type: 'text',
        }),
        defineField({
          name: 'right',
          title: 'Mini About (Right)',
          type: 'string',
        }),
        defineField({
          name: 'small_art',
          title: 'Small Art',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'home_text',
      title: 'Home Text',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'h1',
          type: 'text',
        }),
        defineField({
          name: 'h2',
          type: 'text',
        }),
        defineField({
          name: 'h3',
          type: 'text',
        }),
        defineField({
          name: 'h4',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'about_text',
      title: 'About Text',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'mission_background',
          title: 'Mission Background',
          type: 'image',
        }),
        defineField({
          name: 'mission_text',
          title: 'Mission Text',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'a1',
          type: 'text',
        }),

        defineField({
          name: 'a2',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            defineField({
              name: 'subheading',
              type: 'string',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'paragraph',
              type: 'text',
            }),
          ],
        }),
        defineField({
          name: 'a3',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            defineField({
              name: 'subheading',
              type: 'string',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'paragraph',
              type: 'text',
            }),
          ],
        }),
        defineField({
          name: 'a4',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            defineField({
              name: 'subheading',
              type: 'string',
            }),
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
            }),
            defineField({
              name: 'paragraph',
              type: 'text',
            }),
          ],
        }),
        // defineField({
        //   name: 'a2',
        //   type: 'text',
        // }),
        // defineField({
        //   name: 'a2_h',
        //   title: 'A2 Heading',
        //   type: 'string',
        // }),
        // defineField({
        //   name: 'a3',
        //   type: 'text',
        // }),
        // defineField({
        //   name: 'a3_h',
        //   title: 'A3 Heading',
        //   type: 'string',
        // }),
        // defineField({
        //   name: 'a4',
        //   type: 'text',
        // }),
      ],
    }),
    defineField({
      name: 'donation_text',
      title: 'Donation Text',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'd1',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'news_text',
      title: 'News Text',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'n1',
          type: 'text',
        }),
        defineField({
          name: 'n2',
          title: 'News Footer',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'contact_text',
      title: 'Contact Text',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'c1',
          type: 'text',
        }),
      ],
    }),
  ],
})
