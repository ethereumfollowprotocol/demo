import { useQuery } from '@tanstack/react-query'
import { Box, Flex, Text, Tabs, Avatar, Separator, Card, Link, Container } from '@radix-ui/themes'

import { Header } from '#/components/header.tsx'
import { truncateAddress } from '#/utilities.ts'
import { Placeholder } from '#/components/placeholder.tsx'
import { useEnsNames, useEnsProfile } from '#/hooks/use-ens.ts'
import { fetchEfpUserFollowers, fetchEfpUserFollowing } from '#/fetchers.ts'

// dr3a.eth wallet address
const WALLET_ADDRESS = '0xeb6b293E9bB1d71240953c8306aD2c8aC523516a'

export default function App() {
  const { data: ensData, error: ensError, status: ensStatus } = useEnsProfile(WALLET_ADDRESS)

  const {
    data: followersData,
    error: followersError,
    status: followersStatus
  } = useQuery({
    queryKey: ['efp-followers', WALLET_ADDRESS],
    queryFn: () => fetchEfpUserFollowers(WALLET_ADDRESS),
    select: ({ data, error }) => ({
      data: data ? data.filter(Boolean).map(({ actor_address: address }) => address) : [],
      error
    })
  })

  const followersAddresses = followersData?.data || []

  /* Returns tuple of address & ENS name pairs */
  const { data: followersProfiles } = useEnsNames({
    queryKey: 'efp-followers',
    addresses: followersAddresses,
    enabled: followersStatus === 'success' && followersAddresses.length > 0
  })

  const {
    data: followingData,
    error: followingError,
    status: followingStatus
  } = useQuery({
    queryKey: ['efp-following', WALLET_ADDRESS],
    queryFn: () => fetchEfpUserFollowing(WALLET_ADDRESS),
    select: ({ data, error }) => ({
      data: data ? data.filter(Boolean).map(({ target_address: address }) => address) : [],
      error
    })
  })

  const followingAddresses = followingData?.data || []

  /* Returns tuple of address & ENS name pairs */
  const { data: followingProfiles } = useEnsNames({
    queryKey: 'efp-following',
    addresses: followingAddresses,
    enabled: followingStatus === 'success' && followingAddresses.length > 0
  })

  return (
    <Flex pb='5'>
      <Header />
      <Container
        pt='2'
        mx='auto'
        className='w-full sm:max-w-md font-serif sm:bg-zinc-50 rounded-xl sm:shadow-xl'
      >
        <Flex direction='column' gap='3'>
          <Box pt='5'>
            <Avatar
              size='8'
              radius='full'
              variant='soft'
              src={ensData?.avatar || 'https://metadata.ens.domains/mainnet/avatar/dr3a.eth'}
              fallback={<Placeholder />}
            />
          </Box>
          <Box>
            <Text my='3' size='7' align='left' weight='bold'>
              dr3a.eth
            </Text>
          </Box>
        </Flex>

        <Flex direction='column' gap='5' mx='auto' width='100%'>
          <Box>
            <Flex className='space-x-6' align='center' justify='center' pt='5'>
              <Link target='_blank' rel='noopener noreferrer' href='https://x.com/ethfollowpr'>
                <Avatar src='/logo.png' fallback='/logo.png' size='3' />
              </Link>
              <Flex className='sm:flex-row flex-col space-x-3' align='center' justify='center'>
                <p className='mx-auto text-center pl-3 sm:pl-0 font-bold text-xl'>
                  {followersAddresses.length}
                </p>
                <Text size='2' align='center'>
                  Followers
                </Text>
              </Flex>
              <Separator orientation='vertical' mx='1' />
              <Flex className='sm:flex-row flex-col space-x-3' align='center' justify='center'>
                <p className='mx-auto text-center pl-3 sm:pl-0 font-bold text-xl'>
                  {followingAddresses.length}
                </p>
                <Text size='2' align='center'>
                  Following
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box grow='1'>
            <Tabs.Root defaultValue='followers' className='px-3'>
              <Tabs.List size='1' className='mx-auto justify-center shadow-none gap-x-28'>
                <Tabs.Trigger
                  value='followers'
                  className='before:bg-transparent data-[state=active]:bg-zinc-300 hover:bg-zinc-300 hover:rounded-full rounded-full p-1.5 data-[state=active]:font-extrabold'
                >
                  <Text size='3' weight='bold'>
                    Followers
                  </Text>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value='following'
                  className='before:bg-transparent data-[state=active]:bg-zinc-300 hover:bg-zinc-300 hover:rounded-full rounded-full p-1.5 data-[state=active]:font-extrabold'
                >
                  <Text size='3' weight='bold'>
                    Following
                  </Text>
                </Tabs.Trigger>
              </Tabs.List>
              <Box py='5' px='5' mx='auto' height='auto'>
                <Tabs.Content value='followers' className='h-auto'>
                  {followersProfiles?.map(([address, name]) => (
                    <Card variant='ghost' className='sm:pl-5' key={address}>
                      <Flex gap='4' align='center'>
                        <Avatar
                          size='3'
                          src={`https://metadata.ens.domains/mainnet/avatar/${name}`}
                          radius='full'
                          fallback={<Placeholder />}
                        />
                        <Box>
                          <Text as='div' size='3' weight='bold' className='hover:text-pink-300'>
                            {name || truncateAddress(address)}
                          </Text>
                        </Box>
                      </Flex>
                    </Card>
                  ))}
                </Tabs.Content>
                <Tabs.Content value='following'>
                  {followingProfiles?.map(([address, name]) => (
                    <Card variant='ghost' className='sm:pl-5' key={address}>
                      <Flex gap='4' align='center'>
                        <Avatar
                          size='3'
                          src={`https://metadata.ens.domains/mainnet/avatar/${name}`}
                          radius='full'
                          fallback={<Placeholder />}
                        />
                        <Box>
                          <Text as='div' size='3' weight='bold' className='hover:text-pink-400'>
                            {name || truncateAddress(address)}
                          </Text>
                        </Box>
                      </Flex>
                    </Card>
                  ))}
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </Box>
        </Flex>
      </Container>
    </Flex>
  )
}
