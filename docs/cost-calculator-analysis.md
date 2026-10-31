# Technical Overview

## 1. Data Sources
All data is hardcoded locally in JavaScript (No external REST APIs):
* **Vehicle Data:** MSRP, efficiency, maintenance, insurance, depreciation rates.
* **Province Data:** Electricity rates, gas prices, grid CO2 intensity.
* **Incentive Data:** Federal and provincial EV rebates & MSRP caps.

## 2. Web APIs & Libraries
* **Chart.js:** For rendering TCO line and bar charts.
* **Google Analytics (gtag.js):** For tracking user events.
* **URLSearchParams & History API:** To sync user selections with the URL.
* **Intl.NumberFormat:** For formatting CAD currency and numbers.
* **Clipboard API:** For the "Share Link" feature.
* **Print API:** For generating PDF reports.

## 3. Calculation Methodology
* **Net Price:** `MSRP - Federal Rebates - Provincial Rebates`
* **Blended Efficiency:** Base efficiency adjusted by City vs. Highway driving ratio.
* **Annual Fuel Cost:** `Annual Distance × Blended Efficiency × Energy Price ($/kWh or $/L)`
* **CO2 Emissions:** Gas (2.31 kg/L) vs. EV (Grid CO2 g/kWh).
* **Resale Value:** `MSRP × (1 - Annual Depreciation Rate)^Years`
* **Total Cost of Ownership (TCO):** `Net Price + Cumulative Running Costs (Fuel + Maint + Ins) - Resale Value`
* **Break-Even Point:** The year when EV Cumulative TCO becomes cheaper than Gas Cumulative TCO.