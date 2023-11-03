export const PLACEHOLDER_AVATAR =
  'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMTc5LCA3MyUsIDk0JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjM5NTgiIHN0b3AtY29sb3I9ImhzbCgxODIsIDc1JSwgNzYlKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuNzI5MiIgc3RvcC1jb2xvcj0iaHNsKDIwMCwgNzglLCA1NyUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMjA2LCA4NyUsIDUwJSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJoc2woMjA5LCA5MSUsIDUwJSkiIC8+CiAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cGF0aAogICAgICBkPSJNMTEwIDU1QzExMCAyNC42MjQ0IDg1LjM3NTYgMCA1NSAwQzI0LjYyNDQgMCAwIDI0LjYyNDQgMCA1NUMwIDg1LjM3NTYgMjQuNjI0NCAxMTAgNTUgMTEwQzg1LjM3NTYgMTEwIDExMCA4NS4zNzU2IDExMCA1NVoiCiAgICAgIGZpbGw9InVybCgjZ3pyKSIgLz4KICA8L3N2Zz4KICAgIA=='

export const runtime =
  globalThis.navigator?.userAgent === 'Cloudflare-Workers'
    ? 'workerd'
    : globalThis.process?.release?.name === 'node'
    ? 'node'
    : !!(globalThis as any)?.Bun || !!(globalThis as any).process?.versions?.bun
    ? 'bun'
    : (globalThis as any)?.EdgeRuntime
    ? 'vercel-edge'
    : 'unknown'

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

export function env(name: keyof NodeJS.ProcessEnv) {
  return ['node', 'bun'].includes(runtime)
    ? process.env[name]
    : import.meta.env[`VITE_${name}`] ?? raise(`Missing env variable: ${name}`)
}
