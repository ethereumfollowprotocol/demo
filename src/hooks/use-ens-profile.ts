import type { Address } from 'viem'
import { normalize } from 'viem/ens'
import { useQuery } from '@tanstack/react-query'
import { getEnsAvatar, getEnsName, getPublicClient } from '@wagmi/core'

import { config } from '#/config.ts'

export function useEnsProfile(address: Address) {
  return useQuery({
    queryKey: ['ens', address],
    queryFn: async () => {
      const name = await getEnsName(config, { address })
      if (!name) return { address }
      const avatar = await getEnsAvatar(config, { name: normalize(name) })
      return { address, avatar, name }
    },
    staleTime: Infinity,
    select: data => data
  })
}

/**
 * WIP
 */
export function useEnsProfiles(addresses: Array<Address>) {
  return useQuery({
    queryKey: ['ens', addresses.toString()],
    queryFn: async () => {
      const client = getPublicClient(config)
      const names = await Promise.all(addresses.map(address => client.getEnsName({ address })))
      const avatars = await Promise.all(
        names.map(name => (name ? client.getEnsAvatar({ name }) : undefined))
      )
    }
  })
}
