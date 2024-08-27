import { isAddress, type Address } from 'viem'

/**
 * This code is intentionally verbose to make it easier to read and understand.
 */

const API_URL = import.meta.env.VITE_API_URL
const API_VERSION = import.meta.env.VITE_API_VERSION

export type EfpResponse<T> = { data?: T; error?: string }

export interface EfpUserStats {
  followersCount: number
  followingCount: number
}

export interface EfpUserFollowing {
  target_address: Address
  action_timestamp: string
}

export interface EfpUserFollower {
  actor_address: Address
  action_timestamp: string
}

export interface EfpUser extends EfpUserStats {
  followers: (EfpUserFollower | undefined)[]
  following: (EfpUserFollowing | undefined)[]
}

/**
 * If you just need the number of followers and following for an address
 */
export async function fetchEfpUserStats(address: Address): Promise<EfpResponse<EfpUserStats>> {
  if (!isAddress(address)) throw new Error(`${address} is not a valid address`)
  const response = await fetch(`${API_URL}/${API_VERSION}/stats/${address}`, {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(`Invalid response for ${address}: ${response.statusText}`)
  }
  return (await response.json()) as EfpResponse<EfpUserStats>
}

export async function fetchEfpUserFollowers(
  address: Address
): Promise<EfpResponse<EfpUserFollower[]>> {
  if (!isAddress(address)) throw new Error(`${address} is not a valid address`)
  const response = await fetch(`${API_URL}/${API_VERSION}/followers/${address}`, {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(`Error for ${address}: ${response.statusText}`)
  }
  return (await response.json()) as EfpResponse<EfpUserFollower[]>
}

export async function fetchEfpUserFollowing(
  address: Address
): Promise<EfpResponse<EfpUserFollowing[]>> {
  if (!isAddress(address)) throw new Error(`${address} is not a valid address`)
  const response = await fetch(`${API_URL}/${API_VERSION}/following/${address}`, {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(`Error for ${address}: ${response.statusText}`)
  }
  return (await response.json()) as EfpResponse<EfpUserFollowing[]>
}

export async function fetchEfpUser(address: Address): Promise<EfpResponse<EfpUser>> {
  if (!isAddress(address)) throw new Error(`${address} is not a valid address`)
  const response = await fetch(`${API_URL}/${API_VERSION}/all/${address}`)
  if (!response.ok) {
    throw new Error(`Error for ${address}: ${response.statusText}`)
  }
  return (await response.json()) as EfpResponse<EfpUser>
}
