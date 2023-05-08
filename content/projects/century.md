---
brand: 'Storefront'
description: 'Custom e-commerce layer for Contentful'
facts:
  - Accessibility for Ontarians with Disabilities Act
  - Excel inventory management
  - Bambora, Contentful and Mailgun integrations
  - Multilingual
  - JAMstack
gallery:
  - century-homepage.webp,Homepage
  - century-orders.webp,Orders list
priority: 4
slug: 'century'
title: 'Century'
---

While at [3merge](https://3merge.ca/), I designed and
developed an AODA-compliant (The Accessibility for Ontarians
with Disabilities Act) website for
[Century Welding](https://centurywelding.ca), a
[Lincoln Electric](https://www.lincolnelectric.com/en)
brand. Additionally, I created a custom back-office order
management system, using 3merge's homegrown framework, Q3.

Initially, the client considered implementing WooCommerce;
however, they liked the [JAMstack](https://jamstack.org/)
approach better, so they decided to go with Contentful CMS
and Gatsby JS (React).

## Accessibility

While WooCommerce supports custom theming, the client
recognized that their shop faced some technical constraints
that might lend better to something less opinionated and
headless. One of my deliverables was to audit the final
product and ensure it met all criteria of AODA.

AODA had been particularly challenging because some UI
patterns the site employed are notoriously tricky to
accomodate keyboard and screen-reader users. One such
example is the product gallery, which users can pan and zoom
on the high-resolution photos in a separate dialog.

## Custom checkout

Century's checkout process is fairly vanilla, save for a few
enhancements they might've needed plugins or add-ons for in
an off-the-shelf ecosystem:

- Email inbox validation to prevent spam and improve
  deliverability
- Guest checkout
- AVS fraud detection
- Flat-rate shipping
- Inventory alerts

Given that another project I had been working on used
Bambora for credit card handling,
[I created a package](https://github.com/MikeIbberson/bambora)
that configures the hosted webforms in React.

## Multilingual

As a Canadian brand, the public site needed to support
English and French natively. Thankfully, Contentful offers
the tools to do so baked-in, so I was only tasked with
making sure the implementation avoided common pitfalls like
duplicate content and disjointed navigation.

## Excel workbook automation

Most of Century's inventory data comes from a workbook
upstream. The client did not wish to use the admin UI to
manage this information, so I integrated with Excel to read
the file and map accordingly with the Contentful product
schema.
