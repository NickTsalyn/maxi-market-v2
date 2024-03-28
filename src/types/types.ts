export type NavLink = {//тип кожного посилання
  href: string;
  title: string;
};

export type NavBar = {// тип кожного блоку
  heading: string;
  links: NavLink[];
};
