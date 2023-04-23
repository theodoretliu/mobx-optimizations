# MobX Explorations

## Getting things up and running

1. `yarn`
2. `yarn build --watch`
3. `yarn serve` (in a separate terminal window)
4. Visit `localhost:3000/naive` and `localhost:3000/mobx-optimal` in two different browser windows

## Observations

- The `/mobx-optimal` window will fill up with gray squares faster than the `/naive` window
- The gap between naive React `useState` and MobX shrinks when compiling with `NODE_ENV=production`. The React version is unbearably slow when using the development bundle. MobX works fine though!
- The speed increases from the new `createRoot` from `react-dom/client` is considerable compared to `render` from `react-dom`. This is part of React 18's [batching](https://github.com/reactwg/react-18/discussions/21).
