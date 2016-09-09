---
date: "2016-05-09T11:57:04-04:00"
title: "About Interactives@CTL"
lede: "Interactives@CTL is a collection of rich client-side Javascript interactive content developed at Columbia's Center for Teaching and Learning (CTL)."
---

Interactives@CTL is a collection of rich Javascript interactive content developed at Columbia's [Center for Teaching and Learning](http://ctl.columbia.edu) (CTL). These interactives are modular, reusable, and can be embedded anywhere using the `iframe` code that we provide. Interactives@CTL is part of our effort to build interactive widgets with a minimal technology stack. These interactives are implemented without database or backend engine, and requires no more than a webserver.

At CTL, client-side interactives enrich many of our serial-learning web applications. These discrete JavaScript blocks challenge students with quizzes, animations, case studies, calculators and games. The goal is to transform a passive reading exercise into an active learning experience. The interactives encourage students to use higher-order skills to deepen understanding and aid retention.

Our in-house content management tool [Pagetree](https://github.com/ccnmtl/django-pagetree) provides the framework for our interactives. The JavaScript blocks hook into the content hierarchy using well-known patterns. The Pagetree infrastructure is a powerful and cost-effective approach when user data must be collected and analyzed. Even though most of these interactives can run independently, they are often used in context of the learning applications and require user authentication. Our clients often want use these activities on other platforms such as blogs, wikis, LMS, and even MOOCs.

In summer of 2016, we, the developers at CTL, began exploring ways to make these interactives standalone and stateless. This portfolio is the result of our efforts.

The following [CompilED](https://compiled.ctl.columbia.edu) blog posts, detail the research and development behind these standalone interactives:

1. [Packaging JavaScript Interactives](https://compiled.ctl.columbia.edu/articles/standalone-interactives/)
2. [Testing JavaScript Interactives](https://compiled.ctl.columbia.edu/articles/standalone-interactives-testing/)

&nbsp;

## The codes and this site

Interactives@CTL is built with [Hugo](https://gohugo.io/) and [Bootstrap](http://getbootstrap.com/) by [Zarina Mustapha](http://ctl.columbia.edu/about/team/mustapha/).

Our [software development team](https://compiled.ctl.columbia.edu/authors/), as well as most of our projects are accessible, responsive and open. You can follow our reflections on the technical aspects of the our work here in [CompilED](..) and on [Github](http://github.com/ccnmtl).

