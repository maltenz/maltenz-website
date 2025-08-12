import { Box } from '@mui/material';

export default function Emblems() {
  return (
    <Box
      component="img"
      src="/brand/dali-logo.svg"
      alt="Aimii Emblems"
      sx={{ display: 'block', margin: '0 auto', width: 100, borderRadius: 1, filter: `grayscale(1) contrast(1.2)` }}
    />
  );
}
