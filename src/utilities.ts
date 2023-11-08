export function truncateAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function raise(error: unknown): never {
  throw typeof error === 'string' ? new Error(error) : error
}
