# Playwright JavaScript Automation Framework

## Project Overview

This project is built using Playwright with JavaScript for end-to-end automation testing of web applications.

It covers major user flows like Login, Product Search, Add to Cart, Checkout, and API validations using a structured automation framework.

---

## Tools Used

- Playwright
- JavaScript
- Node.js
- Visual Studio Code
- Git
- GitHub

---

## Framework Structure

PlaywrightFramework/
│
├── tests/
├── pages/
├── utils/
├── test-data/
├── reports/
├── screenshots/
├── playwright.config.js
├── package.json
└── README.md

---

## Features Covered

- Login validation
- Search functionality
- Add to cart
- Checkout flow
- API validation
- Page Object Model (POM)
- Parallel execution
- Retry mechanism
- Screenshots on failure
- HTML Reports

---

## How to Run Tests

### Install dependencies

npm install

### Run all tests

npx playwright test

### Run specific test

npx playwright test login.spec.js

### Open HTML report

npx playwright show-report

---

## Reports and Screenshots

HTML reports are generated after execution.

Failure screenshots are captured automatically for debugging.

Trace Viewer can also be used for failure analysis.

--- 