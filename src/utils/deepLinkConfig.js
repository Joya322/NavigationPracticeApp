export const linking = {
  prefixes: ["myapp://"],

  config: {
    screens: {
      HomeTabs: {
        screens: {
          HomeStack: {
            screens: {
              Details: "details/:id",
            },
          },
        },
      },
    },
  },
};
