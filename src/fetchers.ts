import { isAddress, type Address } from 'viem'

import { env } from '#/utilities.ts'

/**
 * This code is intentionally verbose to make it easier to read and understand.
 */

const API_URL = env('API_URL')
const API_VERSION = env('API_VERSION')

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
  followers: Array<EfpUserFollower | undefined>
  following: Array<EfpUserFollowing | undefined>
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
  return await response.json()
}

export async function fetchEfpUserFollowers(
  address: Address
): Promise<EfpResponse<Array<EfpUserFollower>>> {
  if (!isAddress(address)) throw new Error(`${address} is not a valid address`)
  const response = await fetch(`${API_URL}/${API_VERSION}/followers/${address}`, {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(`Error for ${address}: ${response.statusText}`)
  }
  return await response.json()
}

export async function fetchEfpUserFollowing(
  address: Address
): Promise<EfpResponse<Array<EfpUserFollowing>>> {
  if (!isAddress(address)) throw new Error(`${address} is not a valid address`)
  const response = await fetch(`${API_URL}/${API_VERSION}/following/${address}`, {
    method: 'GET'
  })
  if (!response.ok) {
    throw new Error(`Error for ${address}: ${response.statusText}`)
  }
  return await response.json()
}

export async function fetchEfpUser(address: Address): Promise<EfpResponse<EfpUser>> {
  if (!isAddress(address)) throw new Error(`${address} is not a valid address`)
  const response = await fetch(`${API_URL}/${API_VERSION}/all/${address}`)
  if (!response.ok) {
    throw new Error(`Error for ${address}: ${response.statusText}`)
  }
  return await response.json()
}
