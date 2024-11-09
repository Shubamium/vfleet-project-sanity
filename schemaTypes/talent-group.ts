import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talent_group',
  title: 'Talent Group',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Group Name',
      type: 'string',
    }),

    defineField({
      name: 'talents',
      title: 'Talents',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'talents'},
        },
      ],
    }),

    defineField({
      name: 'disabled',
      title: 'Disabled',
      description: 'For future groups, the button will not be interactable',
      type: 'boolean',
    }),
  ],
})
