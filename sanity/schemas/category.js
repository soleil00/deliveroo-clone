import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation:(Rule)=>Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Enter category image',
      type: 'image',
      validation:(Rule)=>Rule.required()
    }),
    
  ],
})
