export function raise(error: unknown): never {
  throw typeof error === 'string' ? new Error(error) : error
}

export function asUnknownAs<T>(value: any): T {
  return value as unknown as T
}
