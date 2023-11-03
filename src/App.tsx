import { Box, Button, Flex } from '@radix-ui/themes'
import { Header } from '#/components/header.tsx'

export default function App() {
  return (
    <Flex>
      <Header />
      <Box className='mx-0 mt-12 flex h-full min-h-full w-full flex-col items-center justify-center'>
        <Button>Lorem</Button>
      </Box>
    </Flex>
  )
}
