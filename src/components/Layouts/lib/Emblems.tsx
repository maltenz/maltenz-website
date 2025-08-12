import { Box } from '@mui/material';

export default function Emblems() {
  return (
    <Box
      component="img"
      src="/brand/dali-logo-gray.svg"
      alt="Aimii Emblems"
      sx={{
        display: 'block',
        margin: '0 auto',
        width: 40,
        borderRadius: 0.5,
        border: `1px solid`,
        borderColor: 'divider',
      }}
    />
  );
}
