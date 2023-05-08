---
brand: 'Product'
description: 'Proprietary journaling and coaching platform'
facts:
  - Approved by the US Naval Facilities Engineering System
    Command
  - PayPal subscriptions
  - Homegrown RTE (Rich Text Editor) component
  - Multi-tenancy
  - Component-driven, MERN stack
gallery:
  - je-mobile-feed.webp,Mobile journal feed
  - je-dashboard.webp,Administrator dashboard
  - je-course-admin.webp,Course administration
priority: 3
slug: 'je'
title: 'JournalEngine'
---

Before _JournalEngine_ (JE), I worked on another project for
this team,
_[The Journal That Talks Back](https://www.thejournalthattalksback.com/)_.
From design to execution, it took a little under a year,
during which time we learned more about JE's existing
software and formed a plan to overhaul it after the project
launched.

Although different audiences and applications, the two
projects shared a lot of similarities. This allowed me to
keep redundancy low and provided efficiencies when
supporting these projects long term.

## Admin utilities

Given that JE is a one-to-many coaching platform, its
courses require many functions and features for keeping its
members on track and engaged:

- Call scheduling
- Homework assignment
- File management
- Rich text editing
- Timezone handling
- Reminder campaigns

Sometimes, clients request offshoots of JE, creating their
own course loads and members separate from the main app.
Thanks to this proejct, I introduced multi-tenancy to Q3 v3,
which brought about utilities in-app locale editing, email
template editing and branding.

## Subscriptions

Various e-commerce capabilities exist in JE for onboarding
paid coaches, members and tenants. From ordering to
upgrading and downgrading to cancelling, the system
integrates with PayPal's order and subscription endpoints to
support both recurring and one-time transactions. Tax, free
trials and discounts are also supported on plans across
North America.

## Notifications

JE uses various media to notify its users, so I integrated
both [Mailgun](https://www.mailgun.com/) (email) and
[Twilio](https://www.twilio.com/en-us) (text). Additionally,
I created an in-app notification centre for keeping members
up-to-date with messages that may have been missed in
everyday clutter.

## Data migration

For about a year, I reverse engineered the existing JE
product and designed, developed and tested a new version
that launched earlier in 2023. A huge effort went into
mapping the existing system, as I pivoted from Postgres to
Mongo (relational to non-relational databases).
