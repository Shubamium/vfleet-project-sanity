import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'news_category'}],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      name: 'banner',
      type: 'image',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),

    defineField({
      name: 'post',
      title: 'Post',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {type: 'image'},
      ],
    }),
  ],
})
