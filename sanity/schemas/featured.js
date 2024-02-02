
import { defineField, defineType } from 'sanity';

export default defineType({
    name:"featured",
    title:"featured Menu category",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Featured category name",
            type: "string",
            validation:Rule=>Rule.required()
        }),

        defineField({
            name: "short_description",
            title: "featured category description",
            type: "string",
        }),
        defineField({
            name: "restaurants",
            title: "Featured restaurants",
            type: "array",
            of:[{type:'reference',to:[{type:"restaurant"}]}]
        })
    ]
})