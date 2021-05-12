# Resumen HTML - Structuring the WEB

HTML element:

![](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started/grumpy-cat-small.png)

### Adding CSS:

```html
<link rel="stylesheet" href="my-css-file.css" />
```

### Adding JavaScrip:

```html
<script src="my-js-file.js" defer></script>
```

### Lists

Unordered list:

```html
<ul>
    <li></li>
</ul>
```

Ordered list:

```html
<ol>
    <li></li>
</ol>
```

Description list:

```html
<dl>
    <dt>Description term</dt>
    <dd>Description definition</dd>
</dl>
```

### Hyperlinks

```html
<a href="https://www.mozilla.org/en-US/" title="link title" target:"_blank">the Mozilla homepage</a>.

<p>Visit my <a href="projects/index.html">project homepage</a>

<a href="mailto:nowhere@mozilla.org?subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
```

### Quotations

Bloque quotes

```html
<blockquote cite="Quote site">Quote</blockquote>
```

Inline quotations

```html
<q cite="Quote site">Quote</q>
```

### Citations

```html
<cite>Citation</cite>
```

### Abreviations

<abbr title="abbreviation title">Abrebiation</abbr>

### Superscript & Subscript

```html
25<sup>th</sup> of May C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
```

### Contact details

```html
<addres>
    <p>...</p>
    <li>...</li>
</addres>
```

### Times and dates

```html
<time datetime="2016-01-20">20 January 2016</time>

<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">7.30pm, 20 January 2016 is 8.30pm in France</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

### Document and website structure

-   header: `<header>`.
-   navigation bar: `<nav>`.
-   main content: `<main>`, with various content subsections represented by `<article>`, `<section>`, and `<div>` elements.
-   sidebar: `<aside>`; often placed inside `<main>`.
-   footer: `<footer>`.
