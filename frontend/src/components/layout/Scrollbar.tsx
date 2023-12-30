import { Box, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  height?: string;
}

function Scrollbar(props: IProps) {
  const { children, height = `calc(100vh - 15rem)` } = props;
  const theme = useTheme();
  return (
    <Box
      className="cs"
      sx={{
        maxHeight: height,
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {children}
    </Box>
  );
}

export default Scrollbar;
