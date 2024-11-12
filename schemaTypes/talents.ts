import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talents',
  title: 'Talents',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Talent Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      description: 'Unique URL for this talent',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'title',
      title: 'Talent Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'socials',
      type: 'object',
      fields: [
        defineField({
          name: 'twitter',
          placeholder: 'https://...',
          type: 'url',
        }),
        defineField({
          name: 'twitch',
          placeholder: 'https://...',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          placeholder: 'https://...',
          type: 'url',
        }),
      ],
    }),

    defineField({
      name: 'info',
      title: 'Info List',
      description: 'Recommended amount: 6 items',
      type: 'array',
      of: [
        defineField({
          name: 'talent_info',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'value',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'art',
      title: 'Art',
      type: 'object',
      fields: [
        defineField({
          name: 'list',
          title: 'List',
          description: 'For the sliding talent list, 3:5 image',
          type: 'image',
        }),
        defineField({
          name: 'list_background',
          title: 'List Background',
          description: 'For the sliding talent list background, 3:5 image',
          type: 'image',
        }),
        defineField({
          name: 'detail_main',
          title: 'Detail Main',
          description: 'For the main image on talent detail, 4:6 image',
          type: 'image',
        }),
        defineField({
          name: 'detail_full',
          title: 'Detail Full',
          description: 'For the full preview of talent, 16:9 image',
          type: 'image',
        }),
        defineField({
          name: 'detail_small',
          title: 'Detail small',
          description: 'For the small image besides the info , 1:1 image',
          type: 'image',
        }),
        defineField({
          name: 'background',
          title: 'Background Art',
          description: 'For the slightly visible background art, 1:1 image',
          type: 'image',
        }),

        defineField({
          name: 'logo',
          title: 'Talent Logo',
          description: '2:1 image',
          type: 'image',
        }),
        defineField({
          name: 'icon',
          title: 'Talent Icon',
          description: '1:1 image',
          type: 'image',
        }),
      ],
      options: {
        collapsible: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      description: 'title',
      media: 'art.icon',
    },
  },
})
