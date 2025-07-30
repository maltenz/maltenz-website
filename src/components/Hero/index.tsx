import { Suspense, useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { OrbitControls, useGLTF, Center, Environment, useAnimations } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import { useThemeStore } from '../../stores/themeStore';
import type { HeroData } from '../../types/content';
import Author from '../Author';

const ROTATE = 2;

const StyledCard = styled(Card)(({ theme }) => ({
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

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
  maxWidth: 780,
});

type HeroProps = {
  data: HeroData;
};

function GLBModel({ colorScheme }: { colorScheme: string }) {
  const glbPath = colorScheme === 'dark' ? '/technical_difficulties-dark.glb' : '/technical_difficulties-light.glb';

  const gltf = useGLTF(glbPath, true);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const { actions, names } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      if (modelRef.current) {
        modelRef.current.rotation.y = Math.PI / -ROTATE + x * 0.17;
        modelRef.current.rotation.x = y * 0.05;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.position.set(21, 0, 0);
      gltf.scene.scale.set(1.05, 1.05, 1.05);
      gltf.scene.rotation.y = Math.PI / -ROTATE;
      modelRef.current = gltf.scene;
    }

    if (actions && names && names.length > 0) {
      // Optional: play animation
      // actions[names[0]]?.reset().play();
    }
  }, [gltf.scene, actions, names]);

  return (
    <Center disableY>
      <primitive object={gltf.scene} />
    </Center>
  );
}

export default function Hero({ data }: HeroProps) {
  const getDisplayDate = () => {
    if (data.publishDate) {
      return new Date(data.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return 'No date available';
  };

  const colorScheme = useThemeStore((state) => state.colorScheme);

  return (
    <>
      <Box sx={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, zIndex: -1 }}>
        <Canvas
          camera={{ position: [25.57389367777905, 14.115426737355802, 20.892499726765436], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
          gl={{ toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 7]} intensity={1.2} />

          <Suspense fallback={null}>
            <GLBModel colorScheme={colorScheme} />
            <Environment preset="city" background={false} />
          </Suspense>

          <OrbitControls enableZoom={false} enablePan enableRotate />
        </Canvas>
      </Box>

      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div>
            <Typography variant="h1" gutterBottom sx={{ whiteSpace: 'pre-line', mt: 6, mb: 4 }}>
              {data.title}
            </Typography>
          </div>

          <Grid container spacing={2} columns={12}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h4" mb={2} sx={{ fontWeight: '400' }}>
                Demo
              </Typography>

              <StyledCard variant="outlined">
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
                    src={data.vimeo}
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

                <StyledCardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    {data.tag && data.tag.join(', ')}
                  </Typography>

                  <Typography gutterBottom variant="h4" component="div">
                    {data.subtitle}
                  </Typography>

                  <Typography variant="body1" color="text.secondary" gutterBottom sx={{ whiteSpace: 'pre-line' }}>
                    {data.description}
                  </Typography>
                </StyledCardContent>

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
                  <Author />
                  <Typography variant="caption">{getDisplayDate()}</Typography>
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
