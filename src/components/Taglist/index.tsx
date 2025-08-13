/* eslint-disable no-shadow */
import type { JSX } from 'react';

import SketchIcon from '@mui/icons-material/AutoAwesome';
import FigmaIcon from '@mui/icons-material/Brush';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SourceIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import { Chip, useTheme, Box, type SxProps, type Theme } from '@mui/material';

export enum Tags {
  Feedback = 'Feedback',
  BundleSize = 'Bundle size',
  Source = 'Source',
  MaterialDesign = 'Material Design',
  Figma = 'Figma',
  Sketch = 'Sketch',
}

const tagIcons: Record<Tags, JSX.Element> = {
  [Tags.Feedback]: <FeedbackIcon />,
  [Tags.BundleSize]: <StorageIcon />,
  [Tags.Source]: <SourceIcon />,
  [Tags.MaterialDesign]: <DesignServicesIcon />,
  [Tags.Figma]: <FigmaIcon />,
  [Tags.Sketch]: <SketchIcon />,
};

type TagListProps = {
  tags?: Tags[];
  sx?: SxProps<Theme>;
};

export default function TagList({ tags = Object.values(Tags), sx }: TagListProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', ...sx }}>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          icon={tagIcons[tag]}
          variant="outlined"
          sx={{
            // color: isDark ? 'white' : 'black',
            // borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
            borderColor: 'text.secondary',
            color: 'text.secondary',
            borderRadius: '999px',
            paddingX: '5px',
            minHeight: '25px',
            backgroundColor: 'transparent',
            '& .MuiChip-icon': {
              color: 'text.secondary',
              mr: 0,
            },
          }}
        />
      ))}
    </Box>
  );
}
