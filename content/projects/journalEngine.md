---
brand: 'Product'
description: 'Proprietary journaling and coaching platform'
facts:
  - Approved by the US Naval Facilities Engineering System
    Command
  - PayPal subscriptions
  - Homegrown rich text editor (RTE) component
  - Multi-tenancy
  - Component-driven, MERN stack
gallery:
  - je-dash.png,Screenshot of testing dashboard
priority: 3
slug: 'je'
title: 'JournalEngine'
---

Before _JournalEngine (JE)_, I worked on another project for
this team,
_[The Journal That Talks Back](https://www.thejournalthattalksback.com/)_.
From design to execution, it took a little under a year,
during which time we learned more about JE's existing
software and formed a plan to overhaul it after the first
project launched.

Although different audiences and applications, the two
projects shared a lot of similarities. This allowed us to
keep redundancy low and provided efficiencies when
supporting these projects long term.

## Admin utilities

Given that JE is a one-to-many coaching platform, its
courses require a bevy of functions for keeping its members
on track and engaged:

- Call scheduling
- Homework assignment
- File management
- Rich text editing
- Timezone handling
- Reminder campaigns

Sometimes, clients request offshoots of the JE, creating
their own course loads and members separate from the main
app. Thanks to this proejct, we introduced multi-tenancy to
Q3 v3, which brought about various other features including
in-app locale editing, email template editing and branding.

## Subscriptions

Various e-commerce utilities exist in JE for onboarding paid
coaches, members and tenants. From ordering to upgrading and
downgrading to cancelling, the system integrates with
PayPal's order and subscription endpoints to support both
recurring and one-time transactions. Additionally, tax, free
trials and discounts are supported on plans across North
America.

## Notifications

JE required flexibility in how it notifies its users. We
endeavoured to integrate both
[Mailgun](https://www.mailgun.com/) (email) and
[Twilio](https://www.twilio.com/en-us) (text) so that users
could tailer their notifications to suit their availablity
and lifestyle. Additionally, we created an in-app
notification centre for keeping members up-to-date with
messages that may have been missed in everyday clutter.

## Data migration

For about a year, we reverse engineered the existing JE
product and designed, developed and tested a new version
that we deployed earlier in 2023. A huge effort went into
mapping the existing system, as we pivoted from a Postgres
DB to Mongo DB (relational to non-relational).
