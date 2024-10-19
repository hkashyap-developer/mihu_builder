import {defineField, defineType} from 'sanity'

export const canvasTemplates = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
        name: 'image',
        type: 'image',
      }),
  ],
})