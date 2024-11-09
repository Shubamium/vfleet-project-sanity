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
  ],
})
