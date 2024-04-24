export type NavLink = {
  href: string;
  title: string;
};

export type NavBar = {
  heading: string;
  links: NavLink[];
};

export type CreateAdvertValues = {
  activity?: string;
  condition?: string;
  color?: string;
  author?: string;
  phone?: string;
  adress?: string;
};
