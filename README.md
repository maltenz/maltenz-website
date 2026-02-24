# Maltenz Website

## 🔐 Netlify Account & Identity Notes
This project is deployed via Netlify.
For stability and account recovery purposes, the Netlify account and Netlify Identity admin access use:
biscuitmalt@gmail.com
Do not use hello@malte.nz for:
Netlify account login
Netlify Identity admin users
Account recovery
2FA verification
The custom domain email previously caused verification and identity issues.

A modern website built with Astro, React, and Material-UI, featuring a Netlify CMS for content management.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:4323` for the website and `http://localhost:4323/admin` for the CMS.

### Build
```bash
npm run build
```

## 📦 Deployment

### Automatic Deployment (Recommended)
The site automatically deploys to Netlify when you push to the `main` branch.

### Manual Deployment with Netlify CLI
For immediate deployment of local changes:

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy to production
npm run build
netlify deploy --prod --dir=dist
```

### Manual Deployment Steps
1. **Build the project**: `npm run build`
2. **Deploy**: `netlify deploy --prod --dir=dist`
3. **Verify**: Check `https://maltenz-website.netlify.app`

## 🎛️ Content Management

### CMS Access
**Production CMS**: https://maltenz-website.netlify.app/admin/

> **Note**: Use only the production CMS for content editing. Local development is for code changes only.

### Authentication
The CMS uses **GitHub OAuth** for authentication:
1. Click "Login with GitHub"
2. Authorize the application
3. Access your content collections

### Collections
- **Hero Section**: Site homepage hero content
- **Projects**: Portfolio management with video support

## 🏗️ Tech Stack

- **Framework**: Astro 5.12.2
- **UI Library**: React 19.1.0 + Material-UI 7.2.0
- **CMS**: Netlify CMS (Decap CMS)
- **Styling**: Material-UI + Emotion
- **Deployment**: Netlify
- **Version Control**: Git + GitHub

## 📁 Project Structure

```
├── public/
│   ├── admin/           # CMS admin interface
│   ├── config.yml       # CMS configuration
│   └── uploads/         # Media uploads
├── src/
│   ├── components/      # React components
│   ├── content/         # Content collections
│   ├── layouts/         # Astro layouts
│   ├── pages/           # Astro pages
│   └── theme/           # Material-UI theme
├── netlify.toml         # Netlify configuration
└── package.json
```

## 🔧 Configuration

### CMS Configuration
The CMS is configured in `public/config.yml` with:
- GitHub backend for direct repository access
- Collections for Hero Section and Projects
- Media uploads to `public/uploads/`

### Netlify Configuration
Deployment settings in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Git LFS enabled for large files (videos)

## 📝 Content Guidelines

### Adding Projects
1. Go to CMS admin
2. Select "Projects" collection
3. Click "New Projects"
4. Fill in required fields:
   - Title
   - Description
   - Publish Date
   - Body content
5. Optional: Add video, featured image, tags
6. Save and publish

### Video Uploads
- **Supported formats**: MP4, MOV, AVI, WebM
- **Large files**: Handled by Git LFS
- **Recommendation**: Compress videos before upload

## 🚀 Advanced Deployment

### Environment Variables
No environment variables required for basic operation.

### Git LFS
Large files (videos) are handled by Git LFS:
```bash
git lfs track "*.mp4"
git lfs track "*.mov"
git lfs track "*.avi"
git lfs track "*.webm"
```

### Troubleshooting Deployment
If deployment fails:
1. Check build logs in Netlify dashboard
2. Verify all dependencies are installed
3. Test build locally: `npm run build`
4. Use manual deployment: `netlify deploy --prod --dir=dist`

## 📞 Support

For issues with:
- **CMS**: Check GitHub authentication and repository permissions
- **Deployment**: Verify Netlify CLI authentication and build success
- **Content**: Ensure proper file formats and sizes

## 🔗 Links

- **Live Site**: https://maltenz-website.netlify.app
- **CMS Admin**: https://maltenz-website.netlify.app/admin
- **Repository**: https://github.com/maltenz/maltenz-website
- **Netlify Dashboard**: https://app.netlify.com/projects/maltenz-website

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
