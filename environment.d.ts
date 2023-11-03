interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'production' | 'test'
  readonly PORT: string
  readonly API_URL: string
  readonly API_VERSION: string
  readonly LLAMAFOLIO_ID: string
  readonly ALCHEMY_ID: string
  readonly INFURA_ID: string
}

// type support for `import.meta.env[...]
interface ImportMetaEnv extends EnvironmentVariables {
  readonly VITE_API_URL: string
  readonly VITE_API_VERSION: string
  readonly VITE_LLAMAFOLIO_ID: string
  readonly VITE_ALCHEMY_ID: string
  readonly VITE_INFURA_ID: string
}

declare namespace NodeJS {
  type ProcessEnv = EnvironmentVariables
}
