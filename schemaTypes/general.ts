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
  ],
})
