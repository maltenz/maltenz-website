/* eslint-disable jsx-a11y/anchor-is-valid */
import type { ReactNode } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoadingButton from '@mui/lab/LoadingButton';
import { type SxProps, type Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { useThemeStore } from '../../../stores/themeStore';
import Logo from '../../Logo';
import RHFTextField from '../../RhfTextField';

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
});

const defaultValues = {
  name: '',
  email: '',
};

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
};

function FooterLink({ href, children, sx }: FooterLinkProps) {
  return (
    <Link
      color="text.secondary"
      variant="body2"
      href={href}
      underline="none"
      py={1}
      sx={{
        flex: '1',
        '&:before': {
          display: 'none',
        },
        ...sx,
      }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const { colorScheme } = useThemeStore();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const isDark = colorScheme === 'dark';

  const onSubmit = handleSubmit(async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    } catch (error) {
      reset();
      if (error instanceof Error) {
        /* empty */
      } else {
        /* empty */
      }
    }
  });

  const renderForm = (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Stack spacing={2.5}>
          <RHFTextField name="name" label="Name" />
          <RHFTextField name="email" label="Email" />

          <LoadingButton
            fullWidth
            color="inherit"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ mb: '20px', fontSize: '17px' }}
          >
            Subscribe
          </LoadingButton>
        </Stack>
      </form>
    </FormProvider>
  );

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 2,
            }}
          >
            <Box>{renderForm}</Box>

            <Box>
              <Box sx={{ mb: 1 }}>
                <Logo variant={isDark ? 'light' : 'dark'} />
              </Box>

              <Typography variant="body2" gutterBottom sx={{ fontWeight: 600 }}>
                Newsletter
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, maxWidth: 300 }}>
                Subscribe to our newsletter for
                <wbr /> updates and promotions.
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} useFlexGap>
              <IconButton
                color="inherit"
                size="small"
                href="https://github.com/maltenz"
                aria-label="GitHub"
                sx={{ alignSelf: 'center' }}
              >
                <GithubIcon />
              </IconButton>

              <IconButton
                color="inherit"
                size="small"
                href="https://www.linkedin.com/in/malte-boeing-858990170/"
                aria-label="LinkedIn"
                sx={{ alignSelf: 'center' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Links
          </Typography>

          <Link color="text.secondary" variant="body2" href="#">
            Services
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            Projects
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            About
          </Link>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Legal
          </Typography>

          <Link color="text.secondary" variant="body2" href="#">
            Terms
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            Privacy
          </Link>

          <Link color="text.secondary" variant="body2" href="#">
            Contact
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          alignItems: 'center',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <FooterLink href="#">Privacy Policy</FooterLink>

        <FooterLink href="#" sx={{ textAlign: 'center' }}>
          Terms of Service
        </FooterLink>

        <FooterLink href="#" sx={{ textAlign: 'right' }}>
          {`Copyright © ${new Date().getFullYear()}`}
        </FooterLink>
      </Box>
    </Container>
  );
}
