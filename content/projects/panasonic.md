---
brand: 'Portal'
description: 'Custom sales and self-serve customer portal'
facts:
  - Integrated with DocuSign
  - Excel conversion project
gallery:
  - pana-login.png,Screenshot of the public login page
slug: 'panasonic'
title: 'Panasonic'
priority: 5
---

Back at AltMedia Inc, Panasonic was the first high-profile
web application I had the chance to collorate on and manage.
The client came to us with several Excel workbooks that
their sales teams used, asking us to convert them into a
self-service portal. This required us to first disect the
secrets of the workbook and then design a system that could
(a) satisfy those requirements and (b) cater to users
unfamiliar with portals and online systems.

## Component-driven

The portal serviced three user types, each drastically
different not just in authorization but also responsibility.
For this reason, we chose to approach this project with
components, allowing us to build reusable elements deployed
over three separate clients, all of which called a central
REST API.

I worked mostly on these front-end assets, but helped in a
few key areas of the back-end, such as with its
integrations.

## PDF signing

The client couldn't do away with paperwork altogether, so we
leveraged DocuSign to generate contracts and seamlessly work
them into the order flow.
