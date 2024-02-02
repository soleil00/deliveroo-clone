import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish name',
      type: 'string',
    }),
    defineField({
      name: 'short_description',
      title: 'Dish small description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price per dish in RWF',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Dish image',
      type: 'image',
    }),
  ],
 
})
