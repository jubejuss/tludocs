module.exports = {
  title: "RIF 20",
  description: "Koolidokud",
  base: "/tludocs/",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Vitepress", link: "/vitepress/" },
      { text: "MD", link: "/md/" },
      { text: "Git", link: "/github/" },
      { text: "PHP", link: "/php/" },
      { text: "DB", link: "/db/" },
      { text: "Prog", link: "/prog/" },
    ],

    sidebar: {
      "/vitepress/": getVitepressSidebar(),
      "/md/": getMdSidebar(),
      text: "Our Story",
      link: "/about/our-story", // juhul kui pole vaja mitme alamlehega menüüd ehk folderit
    },
  },
};

function getVitepressSidebar() {
  return [
    { text: "Vitepress", link: "/vitepress/" },
    { text: "Teine leht", link: "/vitepress/teine" },
  ];
}
function getMdSidebar() {
  return [
    { text: "Markdown", link: "/md/" },
    { text: "Markdown2", link: "/md/teinemd" },
  ];
}
