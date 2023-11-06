import { useQuery } from '@tanstack/react-query'
import {
  Box,
  Flex,
  Text,
  Code,
  Tabs,
  Avatar,
  Separator,
  Grid,
  Card,
  Link,
  Container
} from '@radix-ui/themes'

import { Header } from '#/components/header.tsx'
import { Footer } from '#/components/footer.tsx'
import { PLACEHOLDER_AVATAR } from '#/utilities.ts'
import { useEnsProfile } from '#/hooks/use-ens-profile.ts'
import { fetchEfpUserFollowers, fetchEfpUserFollowing } from '#/fetchers'

/**
 * Still WIP
 */

// Vitalik's wallet address
const WALLET_ADDRESS = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'

export default function App() {
  const { data: ensData, error: ensError, status: ensStatus } = useEnsProfile(WALLET_ADDRESS)

  const {
    data: followersData,
    error: followersError,
    status: followersStatus
  } = useQuery({
    queryKey: ['efp-followers', WALLET_ADDRESS],
    queryFn: () => fetchEfpUserFollowers(WALLET_ADDRESS),
    enabled: false // TODO: enable when ready
  })

  const {
    data: followingData,
    error: followingError,
    status: followingStatus
  } = useQuery({
    queryKey: ['efp-following', WALLET_ADDRESS],
    queryFn: () => fetchEfpUserFollowing(WALLET_ADDRESS),
    enabled: false // TODO: enable when ready
  })

  return (
    <Flex>
      <Header />

      <Grid
        gapY='3'
        rows='2'
        className='w-full sm:max-w-md font-serif sm:bg-zinc-50 rounded-xl py-7 sm:shadow-xl'
        mx='auto'
      >
        <Flex direction='column' gap='3'>
          <Box>
            <Avatar
              size='8'
              radius='full'
              variant='solid'
              src={
                ensData?.avatar ||
                'https://metadata.ens.domains/mainnet/avatar/vitalik.eth' ||
                PLACEHOLDER_AVATAR
              }
              fallback='V'
            />
          </Box>
          <Box>
            <Text my='3' size='7' asChild align='left' weight='bold' className='hover:text-sky-600'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`https://app.ens.domains/name/${ensData?.name}`}
              >
                {ensData?.name}
              </a>
            </Text>
          </Box>
        </Flex>

        <Flex direction='column' gap='5' mx='auto' width='100%' height='1'>
          <Box>
            <Flex className='space-x-6' align='center' justify='center'>
              <Link target='_blank' rel='noopener noreferrer' href='https://x.com/ethfollowpr'>
                <Avatar src='/logo.png' fallback='/logo.png' size='2' />
              </Link>
              <Flex className='sm:flex-row flex-col space-x-3' align='center'>
                <Text weight='bold' size='4' align='left'>
                  69
                </Text>
                <Text size='2'>Followers</Text>
              </Flex>
              <Separator orientation='vertical' mx='1' />
              <Flex className='sm:flex-row flex-col space-x-3' align='center'>
                <Text weight='bold' size='4' align='left'>
                  420
                </Text>
                <Text size='2'>Following</Text>
              </Flex>
            </Flex>
          </Box>
          <Box grow='1' px='6'>
            <Tabs.Root defaultValue='followers'>
              <Tabs.List size='1' className='mx-auto justify-center shadow-none gap-x-32'>
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
              <Box py='5' px='2' mx='auto'>
                <Tabs.Content value='followers' className='space-y-3'>
                  <Card variant='ghost' className='sm:pl-5'>
                    <Flex gap='4' align='center'>
                      <Avatar
                        size='3'
                        src='https://metadata.ens.domains/mainnet/avatar/brantly.eth'
                        radius='full'
                        fallback='T'
                      />
                      <Box>
                        <Text as='div' size='3' weight='bold' className='hover:text-sky-600'>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={`https://app.ens.domains/name/brantly.eth`}
                          >
                            brantly.eth
                          </a>
                        </Text>
                      </Box>
                    </Flex>
                  </Card>
                </Tabs.Content>
                <Tabs.Content value='following' className='space-y-3'>
                  <Card variant='ghost' className='sm:pl-5'>
                    <Flex gap='4' align='center'>
                      <Avatar
                        size='3'
                        src='https://metadata.ens.domains/mainnet/avatar/cory.eth'
                        radius='full'
                        fallback='T'
                      />
                      <Box>
                        <Text as='div' size='3' weight='bold' className='hover:text-sky-600'>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={`https://app.ens.domains/name/cory.eth`}
                          >
                            cory.eth
                          </a>
                        </Text>
                      </Box>
                    </Flex>
                  </Card>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </Box>
        </Flex>
      </Grid>

      <Footer />
    </Flex>
  )
}
