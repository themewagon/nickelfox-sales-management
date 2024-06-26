import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Menu: Components<Omit<Theme, 'components'>>['MuiMenu'] = {
  defaultProps: {},
  styleOverrides: {
    list: ({ theme }) => ({
      gap: 4,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }),
  },
};

export default Menu;
