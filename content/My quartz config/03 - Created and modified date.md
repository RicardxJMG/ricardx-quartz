---
title: Created and modified date
draft: "false"
lang: es
date created: 2025-11-18
date modified: 2025-11-19
---

This modifications is obtained from [Eilleen's e-Notebook](https://quartz.eilleeenz.com/Quartz-customization-log) another beauty Garden created with Quartz. 

This modification basically is to add your created and modified date of a note. This is useful for those who use Obsidian with the Linter plugin.

The code is 

```ts title="quartz/plugins/transformers/frontmatter.ts"  {9-17}
export const FrontMatter: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "FrontMatter",
    markdownPlugins(ctx) {
      const { cfg, allSlugs } = ctx
      return [
      ...
       const created = coalesceAliases(data, ["created", "date", "date created"])
            if (created) data.created = created
            const modified = coalesceAliases(data,[
              "modified",
              "lastmod",
              "update",
              "last-modified",
              "date modified"
            ])
       ...
       ]
```

```ts title="quartz/components/Date.tsx"
export function _getDateCustom(cfg: GlobalConfiguration, data: QuartzPluginData, dateType: 'modified' | 'created'): Date | undefined {
  // Check if the dateType provided is valid
  if (dateType !== 'modified' && dateType !== 'created') {
    throw new Error(`Invalid date type '${dateType}'. Valid options are 'modified' or 'created'.`)
  }

```

The following code add the created and modified date for almost every notes, except for `index.md`.

```ts title="quartz/components/ContentMeta.tsx" {4-18}
export default (opts?: Partial<ContentMetaOptions>) => {
   function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps){
   if(text){
	  if (fileData.dates && fileData.slug !== "index") { 
	  segments.push(<> Created: <Date date={_getDateCustom(cfg, fileData, 'created')!} locale={cfg.locale} />
        </>)
        // Only show the modified date if it's NOT equal to the created date
        // Extract the actual date values for comparison
        const datecreatedValue = _getDateCustom(cfg, fileData, 'created');
        const datemodifiedValue = _getDateCustom(cfg, fileData,'modified');
        // Compare the actual date values (ignoring the JSX components)
        const areDatesNotEqual = datecreatedValue?.getTime() !== datemodifiedValue?.getTime();
        if (areDatesNotEqual) {
            segments.push(<>
            Modified: <Date date={_getDateCustom(cfg, fileData,'modified')!} locale={cfg.locale} />
            </>)
        }
	  }
    }
  }
}

```


```ts title
```


