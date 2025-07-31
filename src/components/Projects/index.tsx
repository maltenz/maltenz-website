import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Card, CardContent, CardActions, Typography, Chip, Button, Box, Stack } from '@mui/material';

type PostProps = {
  title: string;
  description: string;
  publishDate: Date;
  author?: string;
  tags?: string[];
  featured?: boolean;
  slug: string;
  image?: string;
};

export default function Post({ title, description, publishDate, author, tags, featured, slug, image }: PostProps) {
  const formattedDate = publishDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
        ...(featured && {
          border: 2,
          borderColor: 'primary.main',
        }),
      }}
    >
      {featured && (
        <Chip
          label="Featured"
          color="primary"
          size="small"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
          }}
        />
      )}

      {image && (
        <Box
          sx={{
            height: 200,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <CalendarTodayIcon fontSize="small" color="action" />

            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
          </Box>
        </Stack>

        {tags && tags.length > 0 && (
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {tags.slice(0, 3).map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}

            {tags.length > 3 && <Chip label={`+${tags.length - 3} more`} size="small" variant="outlined" />}
          </Stack>
        )}
      </CardContent>

      <CardActions>
        <Button size="small" endIcon={<ArrowForwardIcon />} href={`/projects/${slug}`} sx={{ ml: 'auto' }}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
