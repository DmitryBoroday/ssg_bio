---
title: 'Markdown Guide'
date: 'April 20, 2023'
excerpt: 'About Markdown'
cover_image: '/images/markdown.png'
---

## Learn Markdown: Structure, Syntax, and Conventions

Content on the Web needs to be presented in HTML format. Many web publishing tools (such as blogging software and CMSs) convert your content (text, images and so on) into HTML for you. But there are many situations where you want to write HTML content yourself … and marking up content with HTML tags manually is laborious and not really viable. Enter Markdown.

Markdown is an easy, frictionless way of writing content for the Web and the perfect way for developers to create documentation. It lets you structure and format documents easily using simple, text-based markup, which then gets converted into HTML for you — all from within your favorite text editor.

If you’re not already using Markdown, now might be the time to begin. You can learn the basics in minutes, and with ongoing use, the syntax will become second nature. In this article, we’ll encourage you to start simply and show you how to use Markdown for a range of common tasks when creating content.

## What Is Markdown?

Markdown is a lightweight markup language created by John Gruber in 2004. It’s easy to write, easy to read, and can be easily turned into HTML. It was primarily designed for writing for the Web.

It has rapidly grown in popularity and is now used in contexts never envisaged by its creator. But it’s not perfect. It has limits, especially as it leaves out formatting for a lot of HTML elements you might need to use (such as tables). It can also be a little ambiguous.

As a result, a range of variants has been created to deal with these problems:

**CommonMark** attempts to standardize Markdown and make it less ambiguous, contradicting some of the original syntaxes in the process.
**GitHub Flavored Markdown** (GFM) extends CommonMark and is used when creating documentation on GitHub.
**MultiMarkdown** added new syntax for tables, footnotes, citations, and more.
**Pandoc extends** Markdown for multiple output formats (not just HTML) and supports document metadata, footnotes, tables, superscript, subscript, and more.

Some web services and Markdown editors support the syntax of some of these variants or even use their own version of Markdown. Fortunately, they all support the original Markdown syntax, and that’s what we’ll focus on in this article.

## Learning Markdown

The best way to learn Markdown is simply to start. Pick a use case and begin, whether that’s creating a blog post, working on documentation, or just adding some basic formatting to your notes. Pick up the syntax piece by piece as you need it.

You can use your favorite text editor, or choose one of the many apps designed to work with Markdown. Markdown editors can ease the learning process because they allow you to preview your formatting inline or in a separate pane. That means you can see at a glance whether or not you’re using the correct syntax.

## Structuring Documents

Markdown lets you add structural elements to your document, such as headings (h1, h2, h3 etc.). There are a few ways to add headings in Markdown . My favorite is to prefix a heading with hashes #, one for each level of heading:

        # Heading 1
        ## Heading 2
        ### Heading 3
        etc.
        And this is body text.

The hashes move lower-level headings further to the right, so they appear indented. You can optionally use the same number of hashes at the end of the line to close the headers:

        ### Heading 3 ###

There’s a second way, though I don’t see it used as often. You can create two levels of headings by underlining the H1 headings with equals = symbols and H2 headings with hyphens -:

        Heading 1 or Title
        ==================
        Heading 2
        ---------

Sections of a document can be separated using horizontal rules (<hr />), or lines. You create these in Markdown using three (or more) hyphens -, asterisks \*, underscores \_ or equals = signs. Place them alone on a line, with blank lines on either side:

        Brief introduction.

        ===

        # Chapter 1

        Lots of text.

        ---

        # Chapter 2

        Some more text

        ---

## Basic Text Formatting

Basic text formatting includes bold and italics. Underline doesn’t tend to be used on the Web, since it’s how hyperlinks are formatted, so it isn’t supported by Markdown. If you really want to use it, just use <u> HTML tags. (This is worth noting more generally. Where Markdown doesn’t support a particular type of HTML element, you can just use the HTML markup instead. There’s just one caveat: any Markdown syntax inside HTML tags won’t get parsed.)

Words in italics are delimited by a single asterisk (\*) or underscore (\_):

        this is *italics*
        and so is _this_

Words in bold are delimited by a double asterisk (\*\*) or underscore (\_\_):

        this is **bold**
        and so is __this__

## Final Words

Markdown isn’t for everyone, but there’s a lot to like. Personally, I appreciate that it’s open, easy to learn, and doesn’t lock you into using a particular program.

If you’ve made it to the end of this article, it might be the right tool for you, too. Dive in and start using it. Learn the syntax piece by piece as you need it, and before you know it, it will become second nature.
