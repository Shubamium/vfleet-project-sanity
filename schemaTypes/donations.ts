import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'donation',
  title: 'Donations List',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      placeholder: 'https://',
      type: 'url',
    }),
  ],
})
