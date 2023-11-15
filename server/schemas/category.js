import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Catagory',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Catagory name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
})
