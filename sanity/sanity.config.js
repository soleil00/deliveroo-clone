import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'deliveroo',

  projectId: 'fvgzndwi',
  dataset: 'new-data-set',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
