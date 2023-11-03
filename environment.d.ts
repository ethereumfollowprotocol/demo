interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'production' | 'test'
  readonly PORT: string
  readonly API_URL: string
  readonly API_VERSION: string
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
