# What are custom hooks

Hooks that you create yourself, so other people can use them are called custom hooks. A custom hook is effectively a function, but with the following properties:
- Uses another hook internally (useState, useEffect, another custom hook)
- Starts with `use`

A few good examples of this can be:
- Data fetching hooks
- Browser functionality related hooks: `useOnlineStatus`, `useWindowSize`, `useMousePosition`
- Performance/Timer based hooks: `useInterval`, `useDebounce`