---
title: Changed Colors (again)
draft: "false"
lang: es
---
This an easier way to implement   [[02 - First Changes#The palette|my color palette]]  than the code of that note.  Also I've designed the light mode. 

Here is the change;


```ts title="quartz.config.ts "

const colorPage:number = 71   // 220 for Nord
const wrapHue = (hue:number) => (hue%360+360)%360;
const W = {
  // Alternative to Polar Night
  w0:  (h:number) => `hsl(${wrapHue(h)},16%,22%)`,
  w1:  (h:number) => `hsl(${wrapHue(h+2)},16%,28%)`,
  w2:  (h:number) => `hsl(${wrapHue(h)},17%,32%)`,
  w3:  (h:number) => `hsl(${wrapHue(h)},16%,36%)`,
  // Alternative to Snow Storm
  w4:  (h:number) => `hsl(${wrapHue(h-1)},28%,88%)`,
  w5:  (h:number) => `hsl(${wrapHue(h-2)},27%,92%)`,
  w6:  (h:number) => `hsl(${wrapHue(h-2)},27%,94%)`,
  // Alternative to Frost
  w7:  (h:number) => `hsl(${wrapHue(h-41)},25%,65%)`,
  w8:  (h:number) => `hsl(${wrapHue(h-27)},43%,67%)`,
  w9:  (h:number) => `hsl(${wrapHue(h-10)},34%,63%)`,
  w10: (h:number) => `hsl(${wrapHue(h-7)},32%,52%)`,
};

const config: QuartzConfig = {
	colors = { 
		lightMode: {
          light:        W.w4(colorPage),
          lightgray:    W.w8(colorPage),
          gray:         W.w3(colorPage),
          darkgray:     W.w2(colorPage),
          dark:         W.w1(colorPage),
          secondary:    W.w10(colorPage),
          tertiary:     W.w9(colorPage),
          highlight:    `hsla(${wrapHue(colorPage-27)},43%,67%,0.22)`,
          textHighlight:`hsla(${wrapHue(colorPage-41)},32%,52%,0.65)`,
        },
        darkMode: {
          light:        W.w0(colorPage),
          lightgray:    W.w2(colorPage),
          gray:         W.w3(colorPage),
          darkgray:     W.w4(colorPage),
          dark:         W.w6(colorPage),
          secondary:    W.w9(colorPage),
          tertiary:     W.w10(colorPage),
          highlight:    `hsla(${wrapHue(colorPage-27)}, 43%, 67%, 0.22)`,      
          textHighlight:`hsla(${wrapHue(colorPage-41)}, 32%,52%,0.65)`,       
        }
	
	}

}

```

Again, I think should be a better perform this. 
