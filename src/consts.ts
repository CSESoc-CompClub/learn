import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Compclub Learn",
  DESCRIPTION: "Dedicated to Transforming Computing Education for High School Students",
  EMAIL: "contact@compclub.org",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Learn is a little corner created by CompClub, where we have a little amalgamation of fun deep dives into random rabbit holes, as well as an archive of resources that you can browse to help you out on your journey to explore computer science!",
};

export const BLOG: Metadata = {
  TITLE: "Blogs",
  DESCRIPTION: "A fun collection of articles on topics we are passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "An archive of tutorials and resources for your journey.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Website",
    HREF: "https://compclub.org/",
  },
  {
    NAME: "Facebook",
    HREF: "https://www.facebook.com/CompClubUNSW",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/company/compclub/mycompany/",
  },
  {
    NAME: "Instagram",
    HREF: "https://www.instagram.com/unswcompclub/",
  },
];
