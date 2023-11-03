import {
  Box,
  Flex,
  Text,
  Code,
  Tabs,
  Avatar,
  Separator
} from '@radix-ui/themes'
import { Header } from '#/components/header.tsx'
import { useEnsProfile } from '#/hooks/use-ens-profile.ts'
import { PLACEHOLDER_AVATAR, humanReadableTimestamp } from '#/utilities.ts'

// Vitalik's wallet address
const WALLET_ADDRESS = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'

export default function App() {
  const {
    data: ensData,
    error: ensError,
    status: ensStatus
  } = useEnsProfile(WALLET_ADDRESS)

  return (
    <Flex className='font-serif'>
      <Header />
      <Box className='mx-0 mt-2 flex h-full min-h-full w-full flex-col items-center justify-center'>
        <Flex className='space-x-5 mb-12'>
          <Avatar
            size='9'
            radius='small'
            variant='solid'
            src={ensData?.avatar || PLACEHOLDER_AVATAR}
            fallback={'V'}
          />
          <Flex direction='column' className='space-y-2'>
            <Text
              my='3'
              size='7'
              asChild
              align='left'
              weight='bold'
              className='hover:text-sky-600'
            >
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://app.ens.domains/name/vitalik.eth'
              >
                {ensData?.name}
              </a>
            </Text>
            <Box mb='6'>
              <Flex gap='2' align='center' justify='center'>
                <Text>Following</Text>
                <Separator orientation='vertical' mx='1' />
                <Text>Followers</Text>
              </Flex>
              <Separator my='2' size='4' />
              <Flex
                gap='3'
                align='center'
                direction='row'
                justify='between'
                className='text-left'
              >
                <Text weight='bold' size='6' align='left' className='w-full'>
                  2524
                </Text>
                <Separator orientation='vertical' mx='1' />
                <Text weight='bold' size='6' align='left' className='w-full'>
                  524
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Tabs.Root defaultValue='following'>
          <Tabs.List className='mx-auto justify-center'>
            <Tabs.Trigger value='following'>
              <Text size='4'>Following</Text>
            </Tabs.Trigger>
            <Tabs.Trigger value='followers'>
              <Text size='4'>Followers</Text>
            </Tabs.Trigger>
          </Tabs.List>
          <Box py='3'>
            <Tabs.Content value='following'>
              <Flex className='space-x-2 max-h-6'>
                <Code color='pink' className='hidden lg:block'>
                  {humanReadableTimestamp('2021-11-02T11:19:15+00:00')}
                </Code>
                <Code
                  variant='ghost'
                  color='orange'
                  className='hidden lg:block'
                >
                  -
                </Code>
                <Code variant='solid' color='pink' highContrast>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://app.ens.domains/name/brently.eth`}
                  >
                    brantly.eth
                  </a>
                </Code>
                <Code highContrast>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://etherscan.io/address/0x983110309620D911731Ac0932219af06091b6744`}
                  >
                    0x983110309620D911731Ac0932219af06091b6744
                  </a>
                </Code>
              </Flex>
            </Tabs.Content>
            <Tabs.Content value='followers'>
              <Flex className='space-x-2'>
                <Code color='pink' className='hidden lg:block'>
                  {humanReadableTimestamp('2023-11-02T11:19:15+00:00')}
                </Code>
                <Code
                  variant='ghost'
                  color='orange'
                  className='hidden lg:block'
                >
                  -
                </Code>
                <Code variant='soft' color='teal' highContrast>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://app.ens.domains/name/zachxbt.eth`}
                  >
                    zachxbt.eth
                  </a>
                </Code>
                <Code color='iris'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://etherscan.io/address/0x9D727911B54C455B0071A7B682FcF4Bc444B5596`}
                  >
                    0x9D727911B54C455B0071A7B682FcF4Bc444B5596
                  </a>
                </Code>
              </Flex>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Box>
    </Flex>
  )
}
