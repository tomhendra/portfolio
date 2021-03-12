import { Children } from '../../../types';

type Props = {
  children: Children;
};

export const StyledContainer = ({ children }: Props) => (
  <div
    css={{
      position: 'relative',

      '&:hover': {
        // select StyledTooltip adn reveal on hover
        '& > :first-of-type': {
          visibility: 'visible',
        },
      },
    }}
  >
    {children}
  </div>
);