# React re-rendering avoidance examples

A series of examples and pattern on how to avoid React to rerenders.

## Deployed app

https://sagaban.github.io/playing-with-react-vite-bun/

## Development

### Before use Bun you have to [install](https://bun.sh/) Bun

- `curl https://bun.sh/install | bash`

### How to start

1. `bun install`
2. `bun run dev`

### Deploy to Github Pages

#### Automatic Deployment (Recommended)
The project is configured with GitHub Actions to automatically deploy when you push to the `main` or `master` branch. Just push your changes and the workflow will handle the deployment.

To enable GitHub Pages:
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"

#### Manual Deployment
You can also deploy manually using the deploy script:

```bash
bun run deploy
# or
./deploy.sh
```

This will build the project and push it to the `gh-pages` branch.

## Acknowledgments

- [I use this template](https://github.com/SuhyeonP/Bun-Vite-React-Template) made by suhyeon
