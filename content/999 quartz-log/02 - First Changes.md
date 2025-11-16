---
title: First Changes
draft: "false"
lang: en
---
## The palette

The palette of this page is inspired in [Nord Theme](https://www.nordtheme.com/docs/colors-and-palettes) with different base color.  I've created a similar palette for Polar Night, Snow Storm and Frost. 

Using the  *HSL model color* and assuming that the Nord theme use a hue of $h_{\text{Nord}} = 220$, the "transformation" is 

$$
\begin{aligned}
\text{HSL}\left(h_{\text{Nord}},\,16,\,22\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}},\,16,\,22\right) && (\#w0) \\
\text{HSL}\left(h_{\text{Nord}}+2,\,16,\,28\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}+2,\,16,\,28\right) && (\#w1) \\
\text{HSL}\left(h_{\text{Nord}},\,17,\,32\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}},\,17,\,32\right) && (\#w2) \\
\text{HSL}\left(h_{\text{Nord}},\,16,\,36\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}},\,16,\,36\right) && (\#w3) \\
\\[-4pt]
\text{HSL}\left(h_{\text{Nord}}-1,\,28,\,88\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}-1,\,28,\,88\right) && (\#w4) \\
\text{HSL}\left(h_{\text{Nord}}-2,\,27,\,92\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}-2,\,27,\,92\right) && (\#w5) \\
\text{HSL}\left(h_{\text{Nord}}-2,\,27,\,94\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}-2,\,27,\,94\right) && (\#w6) \\
\\[-4pt]
\text{HSL}\left(h_{\text{Nord}}-41,\,25,\,65\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}-41,\,25,\,65\right) && (\#w7) \\
\text{HSL}\left(h_{\text{Nord}}-27,\,43,\,67\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}-27,\,43,\,67\right) && (\#w8) \\
\text{HSL}\left(h_{\text{Nord}}-10,\,34,\,63\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}-10,\,34,\,63\right) && (\#w9) \\
\text{HSL}\left(h_{\text{Nord}}-7,\,32,\,52\right) &\;\longrightarrow\; \text{HSL}\left(h_{\text{new}}-7,\,32,\,52\right) && (\#w10) \\
\end{aligned}


$$

In the configuration:

```ts title="quartz.config.ts "
...
const colorPage: number = 41  //220 for Nord
...
...,
darkMode: {
          light: `hsl(${colorPage},16%,22%)`, // W0
          lightgray: `hsl(${colorPage},17%,32%)`, //W2
          gray: `hsl(${colorPage},16%,36%)`, //W3
          darkgray: `hsl(${colorPage-1},28%,88%)`, //W4
          dark: `hsl(${colorPage-2},27%,94%)`, //W6
          tertiary: `hsl(${colorPage-7},32%,52%)`, // w10
          secondary:`hsl(${colorPage-10},43%,67%)`, // W9
          highlight: `hsla(${colorPage}, 17%, 32%, 0.35)`, //w2
          textHighlight: `hsla(${colorPage-27},43%,67%,0.8)`, //w8
        }, ...
```

> [!advice] 
> Should be a better way to do this 

## Additional modification

Title modified

```ts title="quart.config.ts "

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ricardx.fm", // future domain
    
```

## Example color


<div style="display:flex; justify-content:center; margin: 2rem 0;">
  <div style="
      width: 512px;
      height: 128px;
      display: flex;
      border-radius: 10px;
      overflow: hidden;
      border: 3px solid hsl(64,32%,52%);
  ">
    
    <div style="
      flex: 1;
      background: hsl(71,16%,22%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    ">hsl(71,16%,22%)</div>

    <div style="
      flex: 1;
      background: hsl(73,16%,28%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    ">hsl(73,16%,28%)</div>

    <div style="
      flex: 1;
      background: hsl(71,17%,32%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    ">hsl(71,17%,32%)</div>

    <div style="
      flex: 1;
      background: hsl(71,16%,36%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    ">hsl(71,16%,36%)</div>
  </div>
</div>



