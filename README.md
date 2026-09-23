# ⚠️ This repo is NOT the live Kytran Empowerment website

This repository (`kytranempowerment-site`) is a **stale snapshot from 2026-04-14**. It does
**not** deploy anywhere, and it is not what serves **www.kytranempowerment.com** today.

## Where the real site lives

The live site's source is `website/kytranempowerment.com/` inside the private
**`KytranKatarn/archie-platform`** repository. Deploys go through that repo's
`platform_v2/services/deploy_service.py` (`STATIC_SITE_MAP`) via the Hostinger API
(`deployStaticWebsite` — always ships a full zip, replacing `public_html`).

An hourly cron (`scripts/website_content_autocommit.sh`) commits generated content
(roster/translations/portraits) straight into that repo, not this one.

## Why this repo is archived

This is the fourth repo in the same naming trap: a tidy `<name>-site` repo that looks like
the deploy source but isn't (see also `what-the-fact-site`, `kytran-news`,
`kytran-news-site` — all archived for the same reason). It kept getting handed to design
tooling as "the repo" because its name is the most obvious match, which risked porting
work into a dead end. Archived 2026-09-23 to stop that.

## About (historical)

Kytran Empowerment Inc. builds AI tools for business automation, governance, and
transparency. The platform includes 130+ AI agents across 17 departments.

### Products
- **A.R.C.H.I.E.** — Autonomous Resource & Cognitive Hyperintelligence Engine
- **C.R.E.E.D.** — AI governance scoring platform ([creed-ai.org](https://creed-ai.org))
- **What The Fact** — AI-powered transparent news ([what-the-fact.com](https://what-the-fact.com))
- **Kytran System Operations** — Self-hosted server management dashboard
- **Kytran Business Suite** — Business management tools

## License

AGPL-3.0 — see [LICENSE](LICENSE)
