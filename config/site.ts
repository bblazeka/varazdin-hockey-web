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
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    facebook:
      "https://www.facebook.com/people/KHL-Vara%C5%BEdin/100041813816290/",
    instagram: "https://www.instagram.com/khlvarazdin/?hl=de",
  },
};
