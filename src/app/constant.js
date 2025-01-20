export const FOLDER_DATA = [
  {
    name: "src",
    isFolder: true,
    items: [
      {
        name: "app",
        isFolder: true,
        items: [
          {
            name: "auth",
            isFolder: true,
            items: [
              {
                name: "login",
                isFolder: true,
                items: [{ name: "page.js", isFolder: false }],
              },
            ],
          },
          {
            name: "Dashboard",
            isFolder: true,
            items: [
              {
                name: "@analytics",
                isFolder: true,
                items: [{ name: "page.js", isFolder: false }],
              },
              {
                name: "@notifications",
                isFolder: true,
                items: [{ name: "page.js", isFolder: false }],
              },
            ],
          },
          { name: "constant.js", isFolder: false },
          { name: "layout.js", isFolder: false },
          { name: "loading.js", isFolder: false },
          { name: "not-found.js", isFolder: false },
          { name: "page.js", isFolder: false },
          { name: "theme-provider.js", isFolder: false },
        ],
      },
      { name: "middleware.js", isFolder: false },
    ],
  },
];
