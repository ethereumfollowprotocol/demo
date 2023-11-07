import { http, fallback } from 'viem'
import { mainnet } from '@wagmi/core/chains'
import { createConfig, createStorage } from '@wagmi/core'

import { runtime } from '#/utilities.ts'

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: fallback([
      http(`https://eth-mainnet.alchemyapi.io/v2/${import.meta.env.VITE_ALCHEMY_ID}`),
      http(`https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_ID}`),
      http(`https://eth.llamarpc.com/rpc/${import.meta.env.VITE_LLAMAFOLIO_ID}`)
    ])
  },
  storage: ['node', 'bun'].includes(runtime())
    ? undefined
    : createStorage({ storage: window.localStorage })
})
