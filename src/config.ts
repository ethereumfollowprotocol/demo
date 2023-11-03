import { http, fallback } from 'viem'
import { mainnet } from 'wagmi/chains'
import { createConfig, createStorage } from 'wagmi'

import { env, runtime } from '#/utilities.ts'

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: fallback([
      http(`https://eth-mainnet.alchemyapi.io/v2/${env('ALCHEMY_ID')}`),
      http(`https://mainnet.infura.io/v3/${env('INFURA_ID')}`),
      http(`https://eth.llamarpc.com/rpc/${env('LLAMAFOLIO_ID')}`)
    ])
  },
  storage: ['node', 'bun'].includes(runtime)
    ? undefined
    : createStorage({ storage: window.localStorage })
})
