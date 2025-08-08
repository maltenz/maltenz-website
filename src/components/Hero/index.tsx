import { useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useGLTF, Center, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

import type { HeroData } from '../../types/content';
import Author from '../Author';
import TagList, { Tags } from '../Taglist';

const ROTATE = 2;

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  // flexGrow: 1,
  maxWidth: 780,
}));

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
      actions[names[0]]?.reset().play();
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

  return (
    <>
      {/* <Box sx={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, zIndex: -1 }}>
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

        <Box
          component="img"
          src="/brand/background.png"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.2,
          }}
        />
      </Box> */}

      <Container maxWidth="lg" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div>
            <Typography variant="h1" gutterBottom sx={{ whiteSpace: 'pre-line', mt: 0, mb: 4 }}>
              {data.title
                .replace('Aimi', '|AIMI|')
                .split('|')
                .map((part) => {
                  if (part === 'AIMI') {
                    return (
                      <Box
                        key="aimi-styled"
                        component="span"
                        sx={{
                          fontFamily: '"Pacifico", cursive',
                        }}
                      >
                        Aimi
                      </Box>
                    );
                  }
                  return part;
                })}
            </Typography>
          </div>

          <Grid container spacing={2} columns={12}>
            <Grid size={{ xs: 12, md: 12 }} sx={{ height: '100%' }}>
              <Typography variant="h4" mb={2} sx={{ fontWeight: '400' }}>
                Demo
              </Typography>

              <StyledCard variant="outlined">
                {/* <Box
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
                </Box> */}

                <Box component="img" src="/brand/build-your-dream-mix-min.png" sx={{ borderRadius: 1 }} />

                <StyledCardContent>
                  <TagList tags={[Tags.Sketch, Tags.Source]} sx={{ mb: 2 }} />

                  <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                    {data.description}
                  </Typography>
                </StyledCardContent>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 2,
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
