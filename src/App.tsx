import { useQuery } from '@tanstack/react-query'
import { Box, Flex, Text, Code, Tabs, Avatar, Separator, Grid, Card, Link } from '@radix-ui/themes'

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
    <Flex className='font-serif'>
      <Header />
      <Grid gapY='3' rows='2' className='w-full sm:max-w-lg font-serif' mx='auto'>
        <Flex direction='column' gap='3'>
          <Box>
            <Avatar
              size='9'
              radius='medium'
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
                <Avatar src='/logo.png' fallback='/logo.png' size='3' />
              </Link>
              <Flex className='sm:flex-row flex-col space-x-3' align='center'>
                <Text weight='bold' size='6' align='left'>
                  69
                </Text>
                <Text size='5'>Followers</Text>
              </Flex>
              <Separator orientation='vertical' mx='1' />
              <Flex className='sm:flex-row flex-col space-x-3' align='center'>
                <Text weight='bold' size='6' align='left'>
                  420
                </Text>
                <Text size='5'>Following</Text>
              </Flex>
            </Flex>
          </Box>
          <Box grow='1' px='2'>
            <Tabs.Root defaultValue='followers'>
              <Tabs.List size='2' className='mx-auto justify-center'>
                <Tabs.Trigger value='followers'>
                  <Text size='4'>Followers</Text>
                </Tabs.Trigger>
                <Tabs.Trigger value='following'>
                  <Text size='4'>Following</Text>
                </Tabs.Trigger>
              </Tabs.List>
              <Box py='3'>
                <Tabs.Content value='followers'>
                  <Flex direction='column' gap='3'>
                    <Card>
                      <Flex gap='5' align='center'>
                        <Avatar
                          size='4'
                          src='https://metadata.ens.domains/mainnet/avatar/brantly.eth'
                          radius='full'
                          fallback='T'
                        />
                        <Box>
                          <Text as='div' size='4' weight='bold' className='hover:text-sky-600'>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href={`https://app.ens.domains/name/brantly.eth`}
                            >
                              brantly.eth
                            </a>
                          </Text>
                          <Code size='1' variant='soft'>
                            <a
                              target='_blank'
                              rel='noopener noreferrer'
                              href={`https://etherscan.io/address/0x983110309620D911731Ac0932219af06091b6744`}
                            >
                              0x983110309620D911731Ac0932219af06091b6744
                            </a>
                          </Code>
                        </Box>
                      </Flex>
                    </Card>
                  </Flex>
                </Tabs.Content>
                <Tabs.Content value='following' className='space-y-6 md:space-y-3'>
                  <Flex direction='column' gap='5' px='2'>
                    <Flex justify='start' align='center' gap='4'>
                      <Avatar
                        size='4'
                        radius='full'
                        src='https://metadata.ens.domains/mainnet/avatar/cory.eth'
                        fallback='B'
                      />
                      <Code
                        mx='1'
                        variant='ghost'
                        color='teal'
                        highContrast
                        className='md:tracking-normal tracking-widest'
                        size='5'
                      >
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`https://app.ens.domains/name/cory.eth`}
                        >
                          cory.eth
                        </a>
                      </Code>
                    </Flex>
                  </Flex>
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
