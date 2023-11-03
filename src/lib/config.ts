import { raise } from './utilities.ts'

export const environment = Object.freeze({
  NODE_ENV: getEnvVariable('NODE_ENV'),
  PORT: getEnvVariable('PORT'),
  API_VERSION: getEnvVariable('API_VERSION'),
  API_URL: getEnvVariable('API_URL')
}) satisfies Readonly<EnvironmentVariables>

function getEnvVariable<T extends keyof EnvironmentVariables>(
  name: T
): EnvironmentVariables[T] {
  return process.env[name] ?? raise(`environment variable ${name} not found`)
}
