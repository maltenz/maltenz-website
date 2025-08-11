import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';

type AuthorType = {
  name: string;
  avatar: string;
};

const authors: AuthorType[] = [{ name: 'Malt Biscuit', avatar: '/author/malte-boeing.jpeg' }];

export default function Author() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
      <AvatarGroup max={3}>
        {authors.map((author) => (
          <Avatar key={author.name} alt={author.name} src={author.avatar} sx={{ width: 24, height: 24 }} />
        ))}
      </AvatarGroup>

      <Typography variant="caption">{authors.map((author) => author.name).join(', ')}</Typography>
    </Box>
  );
}
