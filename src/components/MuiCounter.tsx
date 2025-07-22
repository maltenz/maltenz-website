import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Card, CardActions, CardContent, Typography, Box, Chip } from '@mui/material';

type MuiCounterProps = {
  initialCount?: number;
};

export default function MuiCounter({ initialCount = 0 }: MuiCounterProps) {
  const [count, setCount] = useState(initialCount);

  const getChipColor = () => {
    if (count > 0) return 'primary';
    if (count < 0) return 'error';

    return 'default';
  };

  return (
    <Card sx={{ maxWidth: 400, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          MUI Counter Component
        </Typography>

        <Box display="flex" alignItems="center" gap={2} my={2}>
          <Typography variant="body1">Current count:</Typography>
          <Chip label={count} color={getChipColor()} size="medium" />
        </Box>
      </CardContent>

      <CardActions>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setCount(count + 1)} size="small">
          Increment
        </Button>

        <Button variant="outlined" startIcon={<RemoveIcon />} onClick={() => setCount(count - 1)} size="small">
          Decrement
        </Button>

        <Button variant="text" startIcon={<RefreshIcon />} onClick={() => setCount(0)} size="small">
          Reset
        </Button>
      </CardActions>
    </Card>
  );
}
