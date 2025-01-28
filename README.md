# Every Day React Hooks in TS

![image](https://github.com/user-attachments/assets/8af6cb5e-df5b-4fe4-a7ea-5e49f006dd5d)


Hooks that you create yourself, so other people can use them are called custom hooks. A custom hook is effectively a function, but with the following properties:
- Uses another hook internally (useState, useEffect, another custom hook)
- Starts with `use`

A few good examples of this can be:
- Data fetching hooks
- Browser functionality related hooks: `useOnlineStatus`, `useWindowSize`, `useMousePosition`
- Performance/Timer based hooks: `useInterval`, `useDebounce`
