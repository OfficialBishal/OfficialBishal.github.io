---
title: Working with Jekyll
date: 2020-06-15 11:58:47 +07:00
tags: [jekyll, Github, Ruby, Markdown]
description: This is about how I created my personal site with the help of Jekyll and Github-Pages.
---

<a href="https://jekyllrb.com/" target="_blank" rel="noopener">Jekyll</a> is most popular Static Site Generator which is widely used in github-pages for free. If you are thinking of having a personal site with blog in it, then Jekyll oon Github-Pages is the perfect choice for us developers.


`Pre-requisites for Jekyll are Ruby and Gems.  It comes in default with macOS.`

```
$ brew install ruby
```

#### Getting Started with jekyll

```
$ gem install bundler jekyll
$ jekyll new my-awesome-site
$ cd my-awesome-site
$ bundle exec jekyll serve
# => Now browse to http://localhost:4000
```

I'll go straight to **commands** that are essential:
```
$ jekyll new bs_blog        # bs_blog represent the name for my site
$ bundle exec jekyll serve  # initially running the jekyll site
$ jekyll serve              # later you can use this command to run locally
$ jekyll serve --draft      # to run the draft of Jekyll site too
$ bundle install            # install all the required prerequisites
$ bundle update             # it updates to current bundle, useful when applying themes
```


#### Important files inside Jekyll site
- _config   : contains all the important data for site (brain)
- Gemfile   : Jekyll works on Gem structure
- _drafts   : this folder contains all the draft files(posts & pages)
- _layout   : this folder contains layout for site such as home, 404, page & posts
- _posts    : this folder contains all the posts
- _pages    : this folder contains all the Pages


#### Posts Naming Convention
It is mandatory to follow this rule in Jekyll.\
***Year-Month_Date-Title***\
2020-01-30-working-with-jekyll

#### Front Matter
All the posts and pages contains Front Matter. It contains the properties that are to be followed. It can be <kbd>YAML</kbd> or <kbd>JASON</kbd>

##### Example
```
layout: post
title: “”
date: 2017-12-12 12:12:12 -0900
categories: asd
permalink: /:categories/about/
author: “BS”
```

We can configure _config.yml to have default parameters for Front Matter. It applies the values in case these values are missing in posts or pages.
```
defaults:
	-
		scope:
			path: “”
			type: “posts”
		values:
			layout: “post”
			title: “”
```

##### Resources

- [Ruby Installation](https://www.ruby-lang.org/en/documentation/installation/)
- [Jekyll GitHub Pages](https://jekyllrb.com/docs/github-pages/)
- [Getting started with GitHub Pages](https://help.github.com/en/github/working-with-github-pages/getting-started-with-github-pages)
- [GitHub Pages themes](https://jekyllthemes.io/github-pages-themes)
