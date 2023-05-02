---
brand: 'Portal'
description: 'Custom sales, ordering and marketing platform'
facts:
  - Dynamic sales engine
  - 3CX, Grandstream, Bambora, Purolator, Sage and Mailchimp
    integrations
  - SKU automation
  - Barcode generation
  - Reseller API infrastructure
  - MERN stack
gallery:
  - tdl-gentek-dashboard.webp,Dashboard
  - tdl-gentek-order.webp,Order form
  - tdl-gentek-product.webp,Reseller website
priority: 2
slug: 'tdl'
title: 'Gentek'
---

Gentek greatly influenced major versions one and two of
[Q3](/q3), as the largest and most complex adopter of the
framework. It's a heavily integrated system with layers of
business logic, tied to dozens of modules and user types.

The custom portal, referred to as _OET_, stands in front of
an on-premise ERP system. Given its age and limitations, the
client decided to implement all business logic in the
portal, acting as the "brain" for their ERP's "body". As
such, except for financial responsibilies, OET truly takes
care of everything else: from sales to returns to
prospecting to vendor management.

## Dynamic sales engine

By far the most intense aspect of the portal deals with
pricing -- both in terms of quoting as well as over-the-top
incentives like rebates and claim-backs. It's common for
some customers to have hundreds of sales rules on their
profile, some affecting single SKUs and others whole vendor
catalogues.

### Custom pricing

The price engine supports six discounting formulas, each
applicable on both a company and association (group) level.
Additionally, the discounts can apply to one or more SKUs or
vendors, with customizable start and end dates, currencies
and price targets. Given that the company sells in different
currencies, with product pricing changing every few days,
this engine took a trememdous amount of work.

### Rebates

The instant rebate module inherited much of the same
functionality of the pricing engine, with additional
features such as quantity tracking, life time tracking,
conditions (i.e. must order another product too) and more.
Unlike some more rudimentary implementions, such as coupons,
rebating is an advanced feature that works in lockstep with
a customer's existing custom prices and sales history.

### Claim-backs

The client can offset hard costs with claim-backs from their
vendors. Having dozens of vendors, keeping track of which
programs apply to which orders and products can get hairy,
so I worked them into the sales cycle via the rebate and
custom price modules so that managers can see profit margins
behind these incentives and keep track of money owed after
point-of-sale.

## Storefront

Connected to OET sits a static e-commerce storefront,
whereby resellers can quote and order products for their own
customers. In terms of e-commerce, it's rather
run-of-the-mill, as most of the product nuances are handled
API-side.

### Real-time shipping

The system integrates with Purolator's SOAP e-ship API. As I
couldn't find a decent Node JS implementation of the API,
[I created an abstraction for it and published to NPM before](https://github.com/MikeIbberson/purolator)
installing on the site for use.

### Saved carts

Given that TDL Gentek's pricing is highly dynamic, shopping
carts have expiry dates, so unlike abandoned carts,
customers are often encouraged to start over if an order's
idled too long. That said, a sales representive offered
ushers customers through the sales process, so the OET and
website often work collaboratively, as a customer adds
things to their order and the rep modifies them on the
back-end.

### Product visibility

Some products need to be hidden per customer due to _Do Not
Sell_ lists provided by vendors. Likewise, if a customer's
been banned from ordering specific products, admistrators
need the tools to either hide or disable them from the
shopping cart.
