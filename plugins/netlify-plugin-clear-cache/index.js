const { rmSync, existsSync } = require('fs');
const { join } = require('path');

module.exports = {
  name: 'netlify-plugin-clear-cache',
  onPreBuild({ utils, constants }) {
    const pathsToClear = ['node_modules', '.cache', 'dist'];

    pathsToClear.forEach((dir) => {
      const fullPath = join(process.cwd(), dir);
      if (existsSync(fullPath)) {
        try {
          rmSync(fullPath, { recursive: true, force: true });
          console.log(`[clear-cache] Deleted ${dir}`);
        } catch (err) {
          utils.build.failPlugin('netlify-plugin-clear-cache', {
            error: new Error(`Failed to delete ${dir}: ${err.message}`),
          });
        }
      }
    });
  },
};
