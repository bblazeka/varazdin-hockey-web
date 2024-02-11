import strings from "@/utils/strings";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: strings.CLUB_NAME,
  description: "Varaždinske vatre",
  navItems: [
    {
      label: strings.NEWS,
      href: "/posts",
    },
    {
      label: strings.TEAM,
      href: "/team",
    },
    {
      label: strings.ABOUT,
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: strings.NEWS,
      href: "/posts",
    },
    {
      label: strings.TEAM,
      href: "/team",
    },
    {
      label: strings.ABOUT,
      href: "/about",
    },
  ],
  links: {
    facebook:
      "https://www.facebook.com/people/KHL-Vara%C5%BEdin/100041813816290/",
    instagram: "https://www.instagram.com/ihkvarazdin",
  },
};
