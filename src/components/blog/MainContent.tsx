import * as React from 'react';

import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const cardData = [
  {
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description:
      'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    authors: [
      { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Design',
    title: 'Designing for the future: trends and insights',
    description:
      'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Company',
    title: "Our company's journey: milestones and achievements",
    description:
      "Take a look at our company's journey and the milestones we've achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.",
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    img: 'https://picsum.photos/800/450?random=45',
    tag: 'Engineering',
    title: 'Pioneering sustainable engineering solutions',
    description:
      "Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of our eco-friendly initiatives.",
    authors: [
      { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
    ],
  },
  {
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Product',
    title: 'Maximizing efficiency with our latest product updates',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
  },
];

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

type AuthorProps = {
  authors: { name: string; avatar: string }[];
};

function Author({ authors }: AuthorProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar key={index} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
          ))}
        </AvatarGroup>

        <Typography variant="caption">{authors.map((author) => author.name).join(', ')}</Typography>
      </Box>

      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

export function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.primary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);

  const handleFocus = (index: number) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Hi there 👋
          <br />
          I&rsquo;m a User Interface Developer,
          <br />
          come check out of my work
        </Typography>
      </div>

      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
          gap: 1,
          width: { xs: '100%', md: 'fit-content' },
          overflow: 'auto',
        }}
      >
        <Search />

        <IconButton size="small" aria-label="RSS feed">
          <RssFeedRoundedIcon />
        </IconButton>
      </Box>

      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography variant="h3" mb={4}>
            Projects
          </Typography>

          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1104424434?h=96c12fa9ce&loop=1&muted=1"
                title="vimeo-player"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </Box>

            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[0].tag}
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                {cardData[0].title}
              </Typography>

              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[0].description}
              </StyledTypography>
            </SyledCardContent>

            <Author authors={cardData[0].authors} />
          </SyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}
