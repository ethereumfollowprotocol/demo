export function truncateAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function humanReadableTimestamp(timestamp: string) {
  const date = new Date(timestamp)
  return date
    .toLocaleDateString('en-SE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    })
    .replaceAll(',', '')
}

export function raise(error: unknown): never {
  throw typeof error === 'string' ? new Error(error) : error
}

export function runtime() {
  return globalThis.navigator?.userAgent === 'Cloudflare-Workers'
    ? 'workerd'
    : globalThis.process?.release?.name === 'node'
    ? 'node'
    : !!(globalThis as any)?.Bun || !!(globalThis as any).process?.versions?.bun
    ? 'bun'
    : (globalThis as any)?.EdgeRuntime
    ? 'vercel-edge'
    : 'unknown'
}
