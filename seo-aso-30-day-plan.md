# Bezel Studio 30-Day ASO-to-SEO Growth Plan

- Site: https://bezelstudio.parthant.com
- Plan window: March 5, 2026 to April 3, 2026
- Current run day: Day 10 (March 14, 2026)
- Primary objective: increase qualified organic traffic and ranking coverage for high-intent ASO screenshot terms.

## KPI Baseline (as of March 14, 2026)
- GSC (last 28 days): unavailable today (`invalid_grant` on Google refresh token from `.env.seo`; token expired/revoked).
- GA4 (website snapshot, property `500585866`, host filter `bezelstudio.parthant.com`): unavailable today for the same auth reason (`invalid_grant`).
- PageSpeed mobile: performance 69, SEO 92, LCP 7.28s.
- PageSpeed desktop: performance 99, SEO 92, LCP 0.98s.

## Week-by-Week Roadmap

### Week 1 (Days 1-7): Core Web Vitals + Crawl Foundation
- Goal: reduce above-the-fold render delay and ensure indexable ASO content paths are connected.
- Actions:
  - Defer non-critical hero media loading and avoid immediate heavy payload on first paint.
  - Maintain sitemap freshness on all changed high-intent pages.
  - Keep homepage and nav ASO terminology consistent (ASO Blog, ASO Insights, ASO Playbook).
  - Strengthen internal links from feature pages to ASO blog targets.
- Success metric targets:
  - Mobile LCP trend moving down run-over-run.
  - Desktop performance > 85 sustained.
  - All priority pages listed in sitemap with fresh `lastmod`.

### Week 2 (Days 8-14): Structured Data Expansion
- Goal: increase rich result eligibility and clarify topical relevance.
- Actions:
  - Expand structured data where relevant: BreadcrumbList on feature/blog pages.
  - Add or refine FAQ/Article schema fields aligned to target queries.
  - Validate schema in Rich Results Test and fix warnings.
- Success metric targets:
  - Valid structured data across homepage + key feature/blog URLs.
  - Increased query impressions for FAQ/article-intent terms.

### Week 3 (Days 15-21): ASO Topical Cluster + Internal Linking
- Goal: improve authority around screenshot workflow intent.
- Actions:
  - Build tighter cluster linking between homepage, feature guides, and ASO blog posts.
  - Add contextual anchor links with intent terms (sizes, templates, connect upload workflow).
  - Publish/update at least 2 support pages with explicit cross-links.
- Success metric targets:
  - More GSC query rows appearing for target ASO terms.
  - Rising impressions on blog + feature pages.

### Week 4 (Days 22-30): Metadata + On-Page + Demand-Led Publishing
- Goal: convert impressions into qualified clicks.
- Actions:
  - Iterate titles/descriptions/H1s for high-intent keywords based on GSC deltas.
  - Publish demand-led ASO blog updates for trending keyword opportunities.
  - Refresh homepage ASO insights card with latest topical target.
- Success metric targets:
  - CTR improvement on top landing pages.
  - Sustained click growth week-over-week.

## Prioritized Backlog (Execution Order)
1. Core Web Vitals/LCP improvements (active, ongoing stabilization).
2. Structured data expansion (Breadcrumb/Article/FAQ refinements, next primary).
3. ASO topical cluster/internal linking.
4. High-intent metadata and on-page optimization.
5. New ASO blog publication based on current trend demand.

## Current Focus Decision
- Chosen for Day 10: Priority #1 Core Web Vitals/LCP.
- Reason: Desktop is now healthy (LCP 0.98s), but mobile LCP remains elevated (7.28s). Reducing above-the-fold image payload and logo transfer cost is still the highest-impact action before moving to structured data rollout.
