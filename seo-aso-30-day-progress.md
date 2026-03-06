# Bezel Studio 30-Day ASO-to-SEO Progress Log

## Day 1 - 2026-03-05
- Completed:
  - Published ASO blog post targeting "app screenshots for app store" intent.
  - Updated homepage and feature metadata for high-intent query coverage.
  - Updated sitemap and ASO naming alignment across main pages.
- KPI snapshot:
  - GSC: 2 clicks, 29 impressions, CTR 6.9%, avg position 4.79.
  - GA4: blocked at that run (insufficient scope, later re-authorized).
  - PSI mobile: perf 64, SEO 92, LCP 128.1s.
  - PSI desktop: perf 75, SEO 92, LCP 9.8s.

## Day 2 - 2026-03-06
- Completed high-impact task (Priority #1 - Core Web Vitals/LCP):
  - Deferred hero video resource loading by switching to `preload="none"` and `data-src` hydration.
  - Added viewport-triggered playback logic (IntersectionObserver) with reduced-motion/save-data safeguards.
  - Added poster fallback and high-priority hero logo preload/fetch priority.
- Internal linking + ASO labeling updates:
  - Updated homepage card label from "Keyword Focus" to "ASO Playbook".
  - Added ASO Blog links in navigation/footer for key feature pages (`export-share`, `projects-presets`).
  - Added contextual internal links from feature pages to ASO blog posts.
  - Updated sitemap `lastmod` for homepage and modified feature pages.
- KPI snapshot (latest run):
  - GSC period compare (2026-02-06..2026-03-05 vs 2026-01-09..2026-02-05):
    - Clicks: 2 (delta +2)
    - Impressions: 28 (delta +23)
    - CTR: 7.14% (delta +7.14pp)
    - Avg position: 5.18 (improved by 0.82 vs 6.00)
  - GA4 API snapshot:
    - Property `453433922` returned metadata but no rows for requested website metrics windows; users/sessions/page views/engagement deltas unavailable today.
  - PageSpeed (2026-03-06 fetch):
    - Mobile: perf 65 (delta +1 DoD), SEO 92 (flat), LCP 127.6s (improved by ~0.5s DoD)
    - Desktop: perf 92 (delta +17 DoD), SEO 92 (flat), LCP 1.86s (improved by ~7.94s DoD)
- Trend keywords reviewed (SerpApi):
  - app screenshots for app store
  - app store connect
  - app store screenshot
  - app store screenshots sizes
  - apple app store
- Next queued actions:
  - Add Breadcrumb schema to feature/blog pages (Priority #2).
  - Publish one demand-led ASO blog update tied to "app store screenshots sizes" refresh opportunity.
  - Verify GA4 web data stream/property mapping to restore daily website deltas.
