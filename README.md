# Ar-Rasheed Renaissance

You are a senior product designer, UX/UI architect, frontend engineer, and accessibility/SEO specialist.

Your task is to completely redesign and rebuild the official website of:

Ar-Rasheed Smart University — جامعة الرشيد الذكية Current website: https://ar-rasheed.edu.ye/

This is NOT a simple visual refresh.

Build a premium, modern, interactive, production-quality university digital experience that can realistically be presented to the university as a professional website redesign proposal.

The website must feel like a serious modern university, not a generic WordPress template.

==================================================

CORE PRODUCT VISION ==================================================

Create a digital identity around:

Modern University

Smart Campus

Academic Excellence

Innovation

Student Experience

Professionalism

Trust

Yemeni identity

Visual direction:

Premium academic

Modern and sophisticated

Clean editorial layouts

Strong typography

Generous whitespace

Elegant cards

Subtle glass effects only where appropriate

High-quality photography

Refined micro-interactions

Smooth but restrained animations

Strong visual hierarchy

No excessive gradients

No childish UI

No generic SaaS appearance

No excessive rounded cards everywhere

No template-like Bootstrap appearance

The final result should look like a university that is confident, modern, ambitious and technology-oriented.

================================================== 2. IMPORTANT SOURCE OF TRUTH

Use the existing university website as the primary content reference:

https://ar-rasheed.edu.ye/

Do not invent official university facts, statistics, programs, names, accreditation claims, rankings, tuition fees, contact information, or academic information.

Reuse and reorganize existing real content where appropriate.

If information is unavailable, use clearly marked editable placeholder content rather than fabricating facts.

Important: The current website contains inconsistent/outdated statistics and placeholder content.

Do NOT blindly copy them.

Create a centralized data structure so university staff can replace statistics/content later.

================================================== 3. LANGUAGE ARCHITECTURE

Arabic is the primary language.

Support:

Arabic: ar RTL

English: en LTR

Implement true bidirectional layout support.

Do not simply translate text.

All components must support:

RTL

LTR

Arabic typography

English typography

mirrored directional layouts where appropriate

icons with directional meaning

breadcrumbs

carousels

navigation

forms

tables

pagination

Language switcher:

العربية | English

Default: Arabic.

Persist selected language.

Use proper locale-aware formatting for:

dates

numbers

time

currencies if eventually needed

Structure the application so additional languages could be added later without rewriting the UI.

================================================== 4. THEME SYSTEM

Implement three theme modes:

System Light Dark

Default: System.

Persist user preference.

Dark mode must be intentionally designed, not simply inverted colors.

Use semantic design tokens:

--background --foreground --muted --card --border --primary --secondary --accent --success --warning --danger

Ensure WCAG AA contrast.

Theme selector should be accessible and elegant.

================================================== 5. RESPONSIVE STRATEGY

Mobile-first.

Optimize for:

360px 390px 430px 768px 1024px 1280px 1440px 1920px+

The mobile experience is a first-class experience.

Do NOT simply shrink the desktop layout.

Mobile navigation should use a polished full-screen or large-sheet navigation experience.

Ensure:

touch-friendly controls

readable typography

appropriate spacing

sticky CTA where useful

optimized images

no horizontal overflow

responsive tables

responsive mega menus

responsive carousels

================================================== 6. DESIGN SYSTEM

Create a reusable design system.

Typography:

Use a high-quality Arabic font such as: IBM Plex Sans Arabic or another modern Arabic typeface with excellent readability.

English: Inter / Geist / similar modern professional sans-serif.

Use a clear type scale.

Create reusable components:

Button IconButton Badge Card NewsCard ProgramCard FacultyCard StatCard EventCard AnnouncementCard PersonCard Breadcrumb Tabs Accordion Modal Sheet Dropdown Select Input Textarea Search Pagination Carousel Timeline SectionHeader Logo Navbar Footer LanguageSwitcher ThemeSwitcher

Avoid component duplication.

================================================== 7. BRAND DIRECTION

Respect the existing Ar-Rasheed Smart University identity and logo.

Do not replace the university logo with an invented logo.

Use the existing visual identity as the foundation, but modernize the presentation.

The visual language should communicate:

Academic authority Technology Trust Innovation Future Education

Use the university's existing brand colors where identifiable.

Do not randomly introduce unrelated colors.

Create a sophisticated color system around the existing identity.

================================================== 8. HOMEPAGE

Create a highly impressive homepage.

Suggested structure:

HEADER

Top utility bar:

Important announcement

Contact

Quick links

Language

Theme

Main navigation:

Logo عن الجامعة الكليات والبرامج القبول والتسجيل الحياة الجامعية البحث والابتكار الأخبار والفعاليات

Primary CTA:

"التقديم والالتحاق"

Secondary:

"بوابة الطالب"

Add search.

On scroll:

Navbar becomes compact/sticky with subtle backdrop.

HERO

Use a high-quality university/campus/student image.

Do not use generic stock imagery if real university imagery can be used.

Hero content in Arabic:

Eyebrow: "جامعة الرشيد الذكية"

Strong headline communicating:

"نصنع المعرفة... ونمكّن المستقبل"

Use the actual university messaging where appropriate.

Supporting paragraph.

Primary CTA: "اكتشف برامجنا"

Secondary CTA: "ابدأ رحلة الالتحاق"

Add subtle animated visual layer.

Possible visual treatment:

Large photographic hero + dark/light overlay + floating academic information card + subtle motion.

Do not make the hero overly busy.

UNIVERSITY SNAPSHOT

Animated statistics.

Examples of data fields:

الكليات البرامج الأكاديمية أعضاء هيئة التدريس سنوات التميز

BUT:

Do not invent values.

Use centralized editable data.

Animate numbers only when actual values exist.

WHY AR-RASHEED

Present the university's real strengths:

Modern infrastructure

Smart technologies

Qualified faculty

Modern curricula

Research

Practical learning

English language development

Computer skills

Student support

Community engagement

Use an elegant editorial layout rather than 10 identical cards.

COLLEGES

Show the university faculties with strong visual cards.

Current content includes faculties such as:

كلية الطب والعلوم الصحية

كلية طب الأسنان

كلية الهندسة والتكنولوجيا

كلية المال والأعمال

Each card:

Image Faculty name Short description Programs count if available "استكشف الكلية"

Hover:

Image zoom subtle gradient arrow movement

ACADEMIC PROGRAMS

Create a Program Explorer.

Features:

Search Filter by college Filter by degree Filter by field

Example categories:

Medical Engineering & Technology Business & Finance

Each program has:

Name College Short description Duration only if verified CTA

SMART CAMPUS

Create a visually strong section showing:

Labs Smart classrooms Library Technology Campus facilities

Use actual university content.

Include horizontal scrolling / image gallery on mobile.

UNIVERSITY LIFE

Show:

Student activities Campus life Clubs Events Community activities

Use editorial cards.

RESEARCH & INNOVATION

Highlight:

Research Innovation Scientific activities Partnerships Community impact

Use a more academic visual style.

LATEST NEWS

Premium news grid.

Featured story: large

Secondary stories: smaller cards

Each:

Image Category Date Title Excerpt Read more

ANNOUNCEMENTS

Separate announcements from news.

Create a clean announcement feed.

ADMISSION CTA

A powerful conversion section:

"مستقبلك يبدأ بخطوة"

Buttons:

"دليل القبول والتسجيل" "ابدأ طلب الالتحاق"

Use the current official admission guide as a content reference.

FOOTER

Professional multi-column footer.

Include:

University Academic Admissions Student services Resources Contact Social media

Newsletter only if an actual backend exists.

Bottom:

Copyright Privacy Terms Accessibility

================================================== 9. ABOUT UNIVERSITY

Create a premium About page.

Sections:

Hero University story Vision Mission Values Strategic objectives Leadership President message University timeline

Use the real information from the existing website.

Leadership section should include:

President Name Photo if available Position Message

Do not fabricate biographies.

================================================== 10. COLLEGES

Create:

/colleges

And individual pages:

/colleges/[slug]

Each faculty page:

Hero Overview Dean/leadership if available Programs Learning outcomes if available Facilities News Contact CTA

Use a flexible content structure.

================================================== 11. PROGRAM PAGES

Create:

/programs/[slug]

Each program should contain:

Program overview College Degree Description Objectives Career opportunities Study structure Admission requirements Related programs

Only display fields for which verified information exists.

================================================== 12. ADMISSION EXPERIENCE

Do not make admission a boring text page.

Create:

/admission

Interactive admission journey:

01 Discover

02 Choose program

03 Review requirements

04 Prepare documents

05 Apply

06 Follow application

Use a visual timeline.

Create:

"Admission Guide"

with downloadable official PDF.

Create FAQ accordion.

Create strong CTAs.

================================================== 13. UNIVERSITY LIFE

Create:

/student-life

Sections:

Campus Activities Facilities Student services Clubs Events Gallery

Create a visual campus experience.

================================================== 14. NEWS

Create:

/news

Features:

Search Categories Pagination Featured news Latest news

Article page:

/news/[slug]

Include:

Title Date Category Hero image Content Related news Share actions Breadcrumbs

================================================== 15. EVENTS

Create:

/events

Each event:

Date Time Location Category Description Registration CTA if applicable

Calendar/list view can be added if useful.

================================================== 16. SEARCH

Implement global search UI.

Search across:

Pages News Programs Colleges Announcements Events

Create:

/search

with:

Search input Filters Results Empty state

================================================== 17. CONTACT

Create a premium contact page.

Include verified university contact information only.

Contact form:

Name Email Phone Subject Message

Client-side validation.

Show proper success/error states.

Never pretend a message was sent if there is no backend.

================================================== 18. ACCESSIBILITY

Target WCAG 2.2 AA.

Implement:

Keyboard navigation Visible focus Semantic HTML ARIA where needed Screen-reader labels Accessible dialogs Accessible dropdowns Accessible navigation Reduced-motion support

Respect:

prefers-reduced-motion

Animations should be disabled/reduced when requested by the user.

================================================== 19. ANIMATION

Use subtle premium motion.

Examples:

Hero entrance Scroll reveal Card hover Image zoom Number counters Navbar transition Page transitions Accordion animation Modal transitions

Use Framer Motion or an equivalent robust animation library if appropriate.

Avoid:

Excessive parallax Huge animations Constant movement Slow page transitions Animations that hurt usability

Animation should communicate hierarchy and interaction.

================================================== 20. SEO

Implement strong technical SEO.

Every page must have:

Unique title Meta description Canonical URL Open Graph Twitter/X metadata Structured data where appropriate

Add JSON-LD for:

Organization EducationalOrganization CollegeOrUniversity Article Event BreadcrumbList

Generate:

sitemap.xml robots.txt

Support Arabic and English alternate URLs using hreflang.

================================================== 21. PERFORMANCE

Target excellent Lighthouse performance.

Optimize:

Images Fonts JavaScript CSS Lazy loading Code splitting Caching

Avoid unnecessary client-side rendering.

Use server rendering/static generation where appropriate.

Do not load huge libraries for trivial features.

================================================== 22. SECURITY

Never expose secrets in frontend code.

Use environment variables.

Forms must be validated.

Sanitize user-generated content.

Do not create fake authentication.

If backend functionality is unavailable, build clean frontend interfaces with clear integration points.

================================================== 23. CONTENT MANAGEMENT ARCHITECTURE

Do not hard-code everything inside UI components.

Create structured data/models for:

University Colleges Programs News Announcements Events Leadership Facilities Pages

Example conceptual structure:

data/ university colleges programs news announcements events leadership

This allows future connection to:

WordPress REST API Headless CMS Supabase Custom backend

without redesigning the frontend.

================================================== 24. ADMIN-READY ARCHITECTURE

Even though this task focuses on the public website, structure the frontend so future administration is possible.

Possible future CMS management:

News Announcements Events Programs Colleges Pages Media SEO Translations

Do not build a fake admin dashboard unless needed.

================================================== 25. ERROR / EMPTY / LOADING STATES

Every dynamic component must have:

Loading state Empty state Error state Success state

Do not leave blank spaces.

Examples:

"No news available." "No events found." "No programs match your search."

Create polished skeleton loaders.

================================================== 26. MICROCOPY

Arabic UI should feel professionally written.

Avoid machine-translated Arabic.

Use clear university terminology.

Examples:

استكشف البرامج الأكاديمية اكتشف الحياة الجامعية تعرّف على الكليات ابدأ رحلة الالتحاق آخر الأخبار الإعلانات الفعاليات اكتشف المزيد عرض جميع الأخبار

English must use professional university terminology.

================================================== 27. MOBILE NAVIGATION

Mobile menu should include:

Logo Search العربية / English Theme Navigation groups Primary CTA

Use an elegant full-screen sheet.

Navigation groups:

عن الجامعة الكليات والبرامج القبول والتسجيل الحياة الجامعية البحث والابتكار الأخبار والفعاليات

================================================== 28. SEARCH EXPERIENCE

Desktop:

Search icon in navbar.

Clicking opens a large command-style search interface.

Mobile:

Full-screen search.

Keyboard shortcut:

/

if appropriate.

Results should be grouped by:

Pages Programs News Events

================================================== 29. VISUAL DETAILS

Use:

Large editorial typography High-quality imagery Subtle borders Soft shadows Layered surfaces Consistent radius system Precise spacing Elegant dividers Strong section headers

Avoid:

Generic dashboard cards Excessive rounded corners Huge text everywhere Random gradients Neon colors Overuse of glassmorphism Cheap-looking icons Stock-photo-heavy design

================================================== 30. ICONOGRAPHY

Use a consistent icon library such as Lucide.

Do not mix multiple icon styles.

Icons must support RTL.

Directional icons should flip where appropriate.

================================================== 31. IMAGE STRATEGY

Prioritize real university imagery.

Use placeholders only where actual imagery is unavailable.

Create clear image slots for:

Campus Students Labs Faculty Classrooms Library Events Graduation Research

Use proper aspect ratios.

All images need meaningful Arabic/English alt text.

================================================== 32. TECHNICAL STACK

Use a modern production-ready stack supported by Lovable.

Preferred:

React TypeScript Vite Tailwind CSS shadcn/ui Lucide Framer Motion

Use clean modular architecture.

Use TypeScript strictly.

Avoid unnecessary dependencies.

================================================== 33. CODE QUALITY

Follow:

SOLID DRY KISS Clean Architecture principles where appropriate

Components must be reusable.

Avoid giant components.

Avoid duplicated RTL/LTR code.

Avoid duplicated light/dark components.

Use centralized design tokens.

Use reusable hooks.

Use semantic HTML.

================================================== 34. ROUTES

Implement at minimum:

/ /about /colleges /colleges/[slug] /programs /programs/[slug] /admission /student-life /research /news /news/[slug] /events /announcements /search /contact

Arabic/English routing must be supported appropriately.

================================================== 35. IMPORTANT UX RULE

Do not build every page as the same card grid.

Use different layouts:

Editorial Split-screen Timeline Bento Full-width photography Grid List Tabs Accordion Horizontal scrolling Featured content

The website should feel designed, not generated.

================================================== 36. CURRENT WEBSITE IMPROVEMENT

Specifically identify and improve weak patterns visible in the existing website:

Generic WordPress-style layouts

Weak visual hierarchy

Placeholder text

Inconsistent statistics

Basic forms

Weak CTA hierarchy

Limited content discoverability

Lack of strong program exploration

Weak mobile-first experience

Lack of sophisticated search

Lack of cohesive design system

Limited interaction

Weak storytelling

Do not criticize the university publicly inside the website.

This is a redesign, not a criticism report.

================================================== 37. DEMO DATA

Use verified current university content where possible.

For data that is unavailable:

Use clearly labeled mock/demo values ONLY in development.

Never present invented data as factual university information.

Make demo content easy to replace.

================================================== 38. FINAL QUALITY BAR

Before considering the implementation complete, verify:

Arabic is the default.

RTL works correctly.

English works correctly.

LTR works correctly.

System theme works.

Light theme works.

Dark theme works.

Mobile layout works.

Tablet layout works.

Desktop layout works.

Navigation works.

Search works.

Forms have validation.

All routes work.

No broken links.

No horizontal overflow.

No console errors.

No placeholder text visible accidentally.

No fake university statistics.

No lorem ipsum.

No untranslated UI strings.

No duplicated components unnecessarily.

No inaccessible buttons.

No inaccessible dialogs.

No layout breaking when Arabic text becomes longer.

No layout breaking when English text becomes longer.

Run a final responsive and accessibility audit.

================================================== 39. DELIVERABLE

Build the complete frontend prototype.

The result must be impressive enough to present directly to:

University leadership Admissions department Marketing department IT department

The first impression should immediately communicate:

"This is a modern smart university."

Do not produce a generic university template.

Build a distinctive, premium and believable digital identity for Ar-Rasheed Smart University.

Most importantly:

Design the experience first. Then implement the interface.

Every visual decision must have a purpose. Every animation must have a purpose. Every section must support a real university goal. Every CTA must guide the user toward a meaningful action.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8a1b6cb5-79b9-40d6-b779-0f50703c9791).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
