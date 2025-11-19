import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const colorPage:number = 71   //71 220 for Nord 
const wrapHue = (hue:number) => (hue%360+360)%360;
const W = {
  // Alternative to Polar Night
  w0:  (h:number) => `hsl(${wrapHue(h)},16%,22%)`,
  w1:  (h:number) => `hsl(${wrapHue(h+2)},16%,28%)`,
  w2:  (h:number) => `hsl(${wrapHue(h)},17%,32%)`,
  w3:  (h:number) => `hsl(${wrapHue(h)},16%,36%)`,
  // Alternative to Snow Storm
  w4:  (h:number) => `hsl(${wrapHue(h-1)},28%,88%)`,
  w5:  (h:number) => `hsl(${wrapHue(h-2)},27%,92%)`,
  w6:  (h:number) => `hsl(${wrapHue(h-2)},27%,94%)`,

  // Alternative to Frost
  w7:  (h:number) => `hsl(${wrapHue(h-41)},25%,65%)`,
  w8:  (h:number) => `hsl(${wrapHue(h-27)},43%,67%)`,
  w9:  (h:number) => `hsl(${wrapHue(h-10)},34%,63%)`,
  w10: (h:number) => `hsl(${wrapHue(h-7)},32%,52%)`,
};


/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ricardx.fm",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "ricardxjmg.github.io/ricardx-quartz/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        /* lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        }, 
        */
        /* darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        }, 
        */

        // This is my propose for create a palette similar as Nord, but with other color
        
        lightMode: {
          light:        W.w6(colorPage),
          lightgray:    W.w4(colorPage),
          gray:         W.w3(colorPage),
          darkgray:     W.w2(colorPage),
          dark:         W.w0(colorPage),
          secondary:    W.w10(colorPage),
          tertiary:     W.w8(colorPage),
          highlight:    `hsla(${wrapHue(colorPage-41)}, 25%, 65%,0.17)`,   // w7   
          textHighlight:`hsla(${wrapHue(colorPage-10)}, 34%, 63%,0.85)`,     // w9  
        },

        darkMode: {
          light:        W.w0(colorPage),
          lightgray:    W.w2(colorPage),
          gray:         W.w3(colorPage),
          darkgray:     W.w4(colorPage),
          dark:         W.w6(colorPage),
          secondary:    W.w10(colorPage),
          tertiary:     W.w8(colorPage),
          highlight:    `hsla(${wrapHue(colorPage-41)}, 25%, 65%, 0.15)`,   // w7   
          textHighlight:`hsla(${wrapHue(colorPage-10)}, 34%,63%,0.85)`,     // w9  
        }
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
     // Plugin.CustomOgImages(),
    ],
  },
}

export default config
