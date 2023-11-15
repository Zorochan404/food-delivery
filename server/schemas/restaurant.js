import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitutde of Restaurant',
      type: 'number',
    },
    {
      name: 'lon',
      title: 'Longitude of Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating (1-5 starts)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a number between 1 to 5"),
    },
    {
      name: 'type',
      title: 'Catagory',
      type: 'reference',
      to:[{type: "category"}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of:[{type: "reference", to: [{type: "dish"}]}],
    },
  ]
})
