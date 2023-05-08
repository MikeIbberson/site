---
brand: 'Portal'
description: 'Custom sales and self-serve customer portal'
facts:
  - Integrated with DocuSign
  - Excel conversion project
gallery:
  - panasonic-login.webp,Login page
slug: 'panasonic'
title: 'Panasonic'
priority: 5
---

Back at AltMedia Inc, Panasonic was the first high-profile
web application I had the chance to collorate on and manage.
Panasonic came to us with several Excel workbooks that their
sales team used, asking us to convert them into a
self-service portal.

I had to first disect the secrets of the workbook and then
design a system that could satisfy the same requirements and
cater to users unfamiliar with portals and online systems.

## Component-driven

The portal serviced three user types, each different in
authorization and responsibility. Therefore, I chose to
approach this project with components, allowing me reuse UIs
across three separate clients, all calling into a central
REST API.

I worked mostly on these front-end assets but helped in a
few key areas of the back-end like its integrations.

## PDF signing

The client couldn't do away with paperwork altogether, so we
leveraged DocuSign to generate contracts and seamlessly work
them into the order flow.
