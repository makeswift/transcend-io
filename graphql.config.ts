import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: {
    'https://graphql.datocms.com': {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS_API_TOKEN}`,
      },
    },
  },
  documents: '**/*.graphql',
  generates: {
    'generated/dato.ts': {
      plugins: [
        'typescript',
        'typed-document-node',
        {
          'typescript-operations': {
            strictScalars: true,
            scalars: {
              BooleanType: 'boolean',
              CustomData: 'Record<string, unknown>',
              Date: 'string',
              DateTime: 'string',
              FloatType: 'number',
              IntType: 'number',
              ItemId: 'string',
              JsonField: 'unknown',
              MetaTagAttributes: 'Record<string, string>',
              UploadId: 'string',
            },
          },
        },
      ],
      config: {
        namingConvention: {
          enumValues: './pascalCaseWithUnderscores',
        },
      },
    },
  },
}
export default config
