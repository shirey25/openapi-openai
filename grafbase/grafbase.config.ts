import { g, connector, config } from '@grafbase/sdk'

const openai = connector.OpenAPI({
  schema:
    'https://raw.githubusercontent.com/openai/openai-openapi/master/openapi.yaml',
  headers: (headers) => {
    headers.static('Authorization', `Bearer ${g.env('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')}`)
  },
  transforms: { queryNaming: 'OPERATION_ID' }
})

g.datasource(openai, { namespace: 'OpenAI' })

export default config({
  schema: g
})
