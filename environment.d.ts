interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'production' | 'test'
  readonly PORT: string
  readonly API_URL: string
  readonly API_VERSION: string
  readonly LLAMAFOLIO_ID: string
  readonly VITE_LLAMAFOLIO_ID: string
  readonly ALCHEMY_ID: string
  readonly VITE_ALCHEMY_ID: string
  readonly INFURA_ID: string
  readonly VITE_INFURA_ID: string
}

// type support for `import.meta.env[...]
type ImportMetaEnv = EnvironmentVariables

declare namespace NodeJS {
  type ProcessEnv = EnvironmentVariables
}

declare global {
  interface BigInt {
    toJSON: () => string
  }
}
