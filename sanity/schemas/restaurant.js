import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation:(Rule) =>Rule.required()
    }),
    defineField({
      name: 'lang',
      title: 'Restaurant longtitude',
      type: 'number'
 
    }),
    defineField({
      name: 'lat',
      title: 'Restaurant latitude',
      type: 'number',

    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation:(Rule) =>Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Restaurant Image',
      type: 'image',
      validation:(Rule) =>Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Restaurant Short biography',
      type: 'string',
      validation:(Rule) =>Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Please enter value btn 1-5',
      type: 'number',
      validation:(Rule) =>Rule.required().min(1).max(5)
    }),
    defineField({
      name: "dishes",
      title: "Restaurant dishes",
      type: "array",
      of:[{type:"reference",to:{type:"dish"}}]
    }),
    defineField({
      name: "category",
      title: "Restaurant category",
      type: "reference",
      to:[{type:"category"}]
    })
  ]

})
