export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "IHK Varaždin",
  description: "IHK Varaždin",
  navItems: [
    {
      label: "Novosti",
      href: "/posts",
    },
    {
      label: "O klubu",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Novosti",
      href: "/posts",
    },
    {
      label: "O klubu",
      href: "/about",
    },
  ],
  links: {
    facebook:
      "https://www.facebook.com/people/KHL-Vara%C5%BEdin/100041813816290/",
    instagram: "https://www.instagram.com/khlvarazdin/?hl=de",
  },
};
