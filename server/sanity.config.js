import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'server',

  projectId: '7u1605m7',
  dataset: 'hoe',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
