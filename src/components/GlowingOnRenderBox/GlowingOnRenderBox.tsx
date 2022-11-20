import { Box, Chip, Tooltip, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';

interface GlowingOnRenderBoxProps {
  children: React.ReactNode;
}
export const GlowingOnRenderBox = (props: GlowingOnRenderBoxProps): JSX.Element => {
  const theme = useTheme();
  const backgroundEl = useRef<HTMLDivElement>();
  const renderCount = ++useRef(-1).current;

  useEffect(() => {
    if (backgroundEl.current) {
      backgroundEl.current.style.transition = '';
      backgroundEl.current.style.opacity = '1';
    }
    setTimeout(() => {
      if (backgroundEl.current) {
        backgroundEl.current.style.transition = 'opacity .5s ease-in-out';
        backgroundEl.current.style.opacity = '0';
      }
    }, 150);
  }, [renderCount]);

  return (
    <Box sx={{ p: 0.5, width: '100%', height: '100%', position: 'relative' }}>
      <Box
        ref={backgroundEl}
        sx={{
          backgroundColor: '#6d8bd2',
          position: 'absolute',
          inset: '0 0',
          borderRadius: 2,
          opacity: 1,
        }}
      ></Box>

      <Box
        sx={{
          p: 2,
          zIndex: 10,
          backgroundColor: theme.palette.background.default,
          position: 'relative',
          border: '1px solid grey',
          borderRadius: 1,
        }}
      >
        <Tooltip title="Rerenders counter">
          <Chip
            label={renderCount}
            sx={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'secondary.dark' }}
          />
        </Tooltip>

        {props.children}
      </Box>
    </Box>
  );
};
