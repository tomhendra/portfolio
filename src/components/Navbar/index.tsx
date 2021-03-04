/** @jsxImportSource theme-ui */
import { NavbarLink, ModeToggle } from '@components';
import { Box, Flex } from 'theme-ui';

export function Navbar(): React.ReactElement {
  return (
    <Box>
      <Flex
        as="nav"
        p={4}
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <NavbarLink href="/">tomhendra.dev</NavbarLink>
        <Flex
          sx={{
            width: '5/6',
            justifyContent: 'space-between',
          }}
        >
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/blog">Blog</NavbarLink>
          <ModeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}
