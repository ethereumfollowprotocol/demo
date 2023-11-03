import { http, fallback } from 'viem'
import { mainnet } from 'wagmi/chains'
import { createConfig, createStorage } from 'wagmi'

import { runtime } from '#/utilities.ts'

const LLAMAFOLIO_ID = ['node', 'bun'].includes(runtime)
  ? process.env.LLAMAFOLIO_ID
  : import.meta.env.VITE_LLAMAFOLIO_ID

const ALCHEMY_ID = ['node', 'bun'].includes(runtime)
  ? process.env.ALCHEMY_ID
  : import.meta.env.VITE_ALCHEMY_ID

const INFURA_ID = ['node', 'bun'].includes(runtime)
  ? process.env.INFURA_ID
  : import.meta.env.VITE_INFURA_ID

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: fallback([
      http(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`),
      http(`https://mainnet.infura.io/v3/${INFURA_ID}`),
      http(`https://eth.llamarpc.com/rpc/${LLAMAFOLIO_ID}`)
    ])
  },
  storage: ['node', 'bun'].includes(runtime)
    ? undefined
    : createStorage({ storage: window.localStorage })
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
