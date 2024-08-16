import { Link } from '@radix-ui/themes'

export function Header() {
  return (
    <header className='navigation backdrop-blur-lg bg-white/60 lg:bg-transparent lg:backdrop-blur-none flex w-full gap-4 z-50 px-4 sm:gap-8 fixed top-0 left-0 justify-between sm:justify-end items-center py-4'>
      <Link
        href='https://github.com/ethereumfollowprotocol/'
        target='_blank'
        rel='noopener noreferrer'
        className='rounded-full bg-transparent'
      >
        <svg
          className='w-8 h-8 text-gray-800 hover:text-gray-600'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z'
            fill='currentColor'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
      </Link>
      <Link
        href='https://x.com/efp'
        target='_blank'
        rel='noopener noreferrer'
        className='rounded-full'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-8 h-8 text-gray-800 hover:text-gray-600'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5h47.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z'
          ></path>
        </svg>
      </Link>
      <Link
        href='https://discord.ethfollow.xyz'
        target='_blank'
        rel='noopener noreferrer'
        className='rounded-full bg-transparent'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 h-10 text-gray-800 transition-colors hover:text-indigo-600'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z'
          ></path>
        </svg>
      </Link>
      <Link
        href='https://docs.ethfollow.xyz'
        target='_blank'
        rel='noopener noreferrer'
        className='text-black font-bold text-lg'
      >
        <button
          type='button'
          className='bg-[#FFE067] hover:opacity-80 transition-opacity py-2 rounded-xl cursor-pointer justify-center gap-2 w-32 flex items-center'
        >
          <img src='/common/follow-icon.svg' alt='follow icon' />
          <p>DOCS</p>
        </button>
      </Link>
    </header>
  )
}
