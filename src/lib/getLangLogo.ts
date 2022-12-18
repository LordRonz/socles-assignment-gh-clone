export const getLangLogo = (lang: string) =>
  `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${lang
    .trim()
    .toLowerCase()}/${lang.trim().toLowerCase()}.png`;

export default getLangLogo;
