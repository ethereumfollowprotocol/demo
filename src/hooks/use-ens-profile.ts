import type { Address } from 'viem'
import { normalize } from 'viem/ens'
import { useQuery } from '@tanstack/react-query'
import { getEnsAvatar, getEnsName } from '@wagmi/core'

import { config } from '#/config.ts'

export function useEnsProfile(address: Address) {
  return useQuery({
    queryKey: [address, 'ens'],
    queryFn: async () => {
      const name = await getEnsName(config, { address })
      if (!name) return { address }
      const avatar = await getEnsAvatar(config, { name: normalize(name) })
      return { address, avatar, name }
    },
    select: data => data
  })
}
