import { normalize } from 'viem/ens'
import { useQuery } from '@tanstack/react-query'
import type { Address, GetEnsNameReturnType } from 'viem'
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

export function useEnsNames({
  queryKey,
  enabled = true,
  addresses
}: {
  queryKey: string
  enabled?: boolean
  addresses: Array<Address>
}) {
  return useQuery<Array<[Address, GetEnsNameReturnType | undefined]>>({
    enabled,
    queryKey: ['ens-names', queryKey, addresses.toString()],
    queryFn: async () => {
      const client = getPublicClient(config)
      const names = await Promise.all(addresses.map(address => client.getEnsName({ address })))
      return addresses.map((address, index) => [address, names[index]])
    }
  })
}
