// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueScrollTo from "vue-scrollto";
import VueTypedJs from "vue-typed-js";
import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueTypedJs);

  Vue.use(VueScrollTo, {
    duration: 1200,
    easing: "ease-in-out",
    offset: -200,
  });

  head.meta.push({
    name: "keywords",
    content:
      "Mohamed Kassem, mkssm, kassm.me, pwc, aboelkassem, mo_kassm, ابوالقاسم,محمد عبدالرحمن,Mohamed Abdelrahman,aboelkassem,Abo elkassem,Mohamed, kassm.me,aboelkassem me,abo_elkassem,aboel_kassem,ab0elkassem,Aboelkassem77, distributed systems, developer, egypt, beni suef, pwc etic, web security, mohamed aboelkassem,Mohamed Abdelrahman Aboelkassem,mohamed abdelrahman,back-end engineer, web developer, full stack developer,junior full stack developer,.Net developer,software engineer,software developer,aboelkassem developer,Portfolio,Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS,Typescript,ASP.NET Core,Angular,Listify,SQL Server,github,code,software,open source,beni suef,Beni-Suef,egypt, silverkey, silverkeytech",
  });

  head.meta.push({
      name: 'description',
      content: 'Mohamed Kassem is a passionate software engineer based in Egypt who love the tech industry, problem solving, and open source contributions. He specializes in developing high-quality web applications',
  });

  head.meta.push({
    name: "author",
    content: "Mohamed Kassem",
  });

  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image",
  });

  head.meta.push({
    name: "twitter:creator",
    content: "@mo_kassm",
  });

  head.meta.push({
    name: "twitter:description",
    content:
      "Mohamed Kassem is a passionate software engineer based in Egypt who love the tech-industry, problem-solving, and open source contributions. He specializes in developing high-quality web applications",
  });

  head.meta.push({
    name: "twitter:site",
    content: "@mo_kassm",
  });

  head.meta.push({
    name: "twitter:title",
    content: "Software Developer| Mohamed Kassem",
  });

  head.meta.push({
    name: "twitter:image",
    content:
      "https://res.cloudinary.com/dvdcninhs/image/upload/v1616943424/IMG_20210325_074803_ykddh1.jpg",
  });

  head.meta.push({
    name: "twitter:url",
    content: "https://kassm.me",
  });

  head.meta.push({
    name: "og:image",
    content:
      "https://res.cloudinary.com/dvdcninhs/image/upload/v1616943424/IMG_20210325_074803_ykddh1.jpg",
  });

  head.meta.push({
    name: "og:title",
    content: "Software Developer| Mohamed Kassem",
  });

  head.meta.push({
    name: "og:description",
    content:
      "Mohamed Kassem is a passionate software engineer based in Egypt who love the tech industry, problem-solving, open-source contributions and specializes in developing high-quality web applications",
  });

  head.meta.push({
    name: "og:type",
    content: "website",
  });

  head.meta.push({
    name: "og:url",
    content: "https://www.kassm.me",
  });

  head.meta.push({
    name: "og:site_name",
    content: "Mohamed Kassem",
  });

  head.meta.push({
    name: "og:locale",
    content: "en_US",
  });

  head.meta.push({
    name: "og:image:type",
    content: "image/png",
  });

  head.meta.push({
    name: "og:image:width",
    content: "1280",
  });

  head.meta.push({
    name: "og:image:height",
    content: "640",
  });

  head.meta.push({
    name: "og:image:alt",
    content: "Mohamed Kassem",
  });

  head.meta.push({
    name: "canonical",
    content: "https://kassm.me",
  });

  head.meta.push({
    name: "google-site-verification",
    content: "Cfa3-x3PAYmdZcQUYdxt-HZ0SkbHwLMPIUwIGxTCnj0",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700",
  });

  head.link.push({
    rel: "icon",
    href: "/favicon.ico",
  });

  head.link.push({
    rel: "shortcut icon",
    href: "/favicon.ico",
  });

  head.script.push({
    type: "text/javascript",
    "data-ad-client": "ca-pub-1672384345508414",
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    async: true,
  });
}
