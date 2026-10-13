# Yumocare Figma-to-Website Comprehensive Mapping

This document provides a systematic mapping of all 41 locally downloaded Figma mobile app design screens (from `/Users/sush/Downloads/Shared YUMO (1)/`) into the official Yumocare responsive web platform.

---

## 1. Inventory & Inspection Summary

- **Total Screens Discovered:** 41 PNG files (iPhone 13 & 14 dimension standards, width 390px, height 844px–1758px).
- **Format:** High-resolution PNG exports.
- **Source Folder:** `/Users/sush/Downloads/Shared YUMO (1)/` (Preserved intact; mirrored to `public/assets/figma-screens/` for responsive web mockups).
- **Product Identity:** **Yumocare** — An integrated, clinical & holistic women's health platform specializing in PCOS management, cycle intelligence, metabolic tracking, craving control, cycle-synced nutrition & workouts, treatment adherence, and endocrinology/gynecology telehealth.

---

## 2. Figma Screens to Website Architecture Mapping Table

| # | Downloaded Figma Screen | Purpose & Visible Information Identified | Related App Feature | Relevant Website Page / Nav Item | Proposed Website Section / Reusable Component | Assets & Visual Styles to Reuse | Implementation Status | Missing Information / Uncertainty |
|---|---|---|---|---|---|---|---|---|
| 1 | `iPhone 13 & 14 - 63.png` | Main Daily Dashboard: "Good morning, Riya", PCOS Score 75/100, Cycle Status Day 6 of 28 Follicular Phase, Health Score 7.5/10, Today's Progress (Water 2 glasses, Walk 6,434 steps, Sleep 6.5h, Workout 30m), Weekly insights teaser | Core App Dashboard & Overview | Home (`/`) | Hero App Showcase, Interactive Daily Health Score card | Rose badges (`#F43F5E`), Mint health progress pill, soft white cards, ring gauges | Mapped for Hero & Features | None; fully readable |
| 2 | `iPhone 13 & 14 - 64.png` | Health Score Details: 75/100 Improving; Sub-scores: Cycle Regularity (7/10), Symptom Severity (8/10), Supplement Consistency (6/10), Insulin Indicators (7/10), Lifestyle Habits (8/10); Actionable recommendations (15-min walk, hydration) | Multidimensional Health & PCOS Scoring Engine | Features (`/features`) & Home (`/`) | Health Score Breakdown Component & Interactive Slider | Mint trend chips, score breakdown progress bars | Mapped for Health Intelligence section | None; explicit formulas |
| 3 | `iPhone 13 & 14 - 56.png` | Smart Cycle Intelligence: Next Period countdown (3 May, in 10 days), Logged symptom frequency (Cramps 5x, Bloating 4x, Fatigue 3x), Average cycle length (29 days over 3 cycles), cycle wave visualization | AI Cycle Prediction & Symptom Aggregation | Features (`/features`), Phases (`/phases`) | Smart Cycle Intelligence Feature Card & Timeline preview | Wave cycle graph, countdown cards, soft rose highlight | Mapped | None |
| 4 | `iPhone 13 & 14 - 65.png` | Cycle Phase Deep-Dive: Day 6 of 28 Follicular Phase; 4-Phase timeline (Menstrual Day 1-5, Follicular Day 6-13, Ovulation Day 14-16, Luteal Day 17-28); Next milestones (Ovulation in 8 days, Period in 16 days); Expected symptoms & hormonal superpowers | Cycle Phase Education & Hormonal Mapping | Phases (`/phases`), Features (`/features`) | Phase Navigator & Phase Energy Matrix | Horizontal phase stepper, hormonal symptom forecast badges | Mapped | None |
| 5 | `iPhone 13 & 14 - 84.png` | Cycle Settings & History: Period start date, Period duration (5d), Cycle length (28d), Prediction preview (Next period, Ovulation, Fertile window), Irregular cycle toggles, 4-month history log | Personalized Cycle Calibration | Calculators (`/calculators`), Features | Interactive Cycle Calibration & Ovulation / Period Preview | Stepper buttons, date pickers, irregular cycle disclaimer | Mapped | None |
| 6 | `iPhone 13 & 14 - 32.png` | Metabolic Tracker: Target goal (Maintain 60-63 kg), Current Weight (62.0 kg, -0.5 kg), Waist circumference (72 cm, -1 cm), BMI (22.4 Steady), 4-Week Weight over time chart, Daily log inputs | Metabolic Health & Body Composition Tracking | Features (`/features`) | Metabolic Tracker Showcase & Body Metrics Grid | Stat cards with delta indicators, 4-week SVG chart | Mapped | None |
| 7 | `iPhone 13 & 14 - 33.png` | Craving Control: Craving category grid (Sweet, Salty, Spicy, Caffeine, Carbs, Chocolate, Fatty, Other), Intensity slider, Triggers (stress, boredom), AI Pattern detection ("Insulin dip. Try adding protein"), Healthy swaps (Dark chocolate, Air-popped popcorn), Recent history | Hormonal Craving AI & Insulin Spike Interventions | Features (`/features`) | Craving Control & Healthy Swaps Interactive Showcase | Craving chip selectors, trigger pill tags, recipe/swap cards | Mapped | None |
| 8 | `iPhone 13 & 14 - 40.png` | Weight Trends: 1W, 1M, 3M, 6M filters, 62.4 kg Stable (-0.2 kg), Highest (64 kg), Lowest (61.8 kg), Cycle connection educational callout ("Weight often increases 1-2 kg before period") | Long-term Trend Analysis & Cycle Correlation | Features (`/features`) | Weight & Fluid Retention Educational Module | Metric range summary cards, cycle hormonal note | Mapped | None |
| 9 | `iPhone 13 & 14 - 68.png` | Meal Planner: Follicular phase dietary recommendation ("Focus on iron-rich foods to replenish body and support rising energy"), Daily macro breakdown (1,840/2,100 kcal, Protein 92g 65%, Carbs 140g 40%, Fat 54g 80%), Glycemic Load (GL) rating per meal (Greek Yogurt Bowl GL 6, Almonds & Honey GL 8) | Cycle-Synced Nutrition & Low-Glycemic Index Meal Planning | Features (`/features`), Learn (`/learn`) | Cycle-Synced Meal Planner Showcase with Glycemic Load Badges | Macro distribution bars, GL pill tags, meal card hierarchy | Mapped | None |
| 10 | `iPhone 13 & 14 - 34.png` | Workout Plans: Cycle-aligned workouts by level (Cardio Beginner: Morning Energy Boost 20m 5 exercises; Yoga Intermediate: Core Flow 35m 8 exercises; Strength Advanced: Full Body Sculpt 45m 12 exercises) | Phase-Adaptive Fitness Routines | Features (`/features`) | Workout & Movement Guide by Cycle Phase | Workout plan cards with exercise pill tags, duration badges | Mapped | None |
| 11 | `iPhone 13 & 14 - 35.png` | Symptom Tracker: Quick symptom tap (Cramps, Bloating, Fatigue, Headache, Nausea, Mood Swings, + More), Severity slider (Low, Moderate, Severe), Notes field, Symptom pattern detection (Bloating usually Day 20-25, Cramps usually Day 1-4) | Daily Symptom Journal & Pattern Recognition | Features (`/features`) | Symptom Logging & Pattern Detection Card | Symptom icon chips, 3-state severity pills, pattern insight callout | Mapped | None |
| 12 | `iPhone 13 & 14 - 38.png` | Symptom Trends: 4-week bar charts, Most common symptoms (Headache 12d, Fatigue 8d, Cramps 5d, Bloating 3d, Nausea 2d), Symptom occurrence correlated across Menstrual, Follicular, Ovulation, Luteal phases | Longitudinal Symptom Correlation Engine | Features (`/features`) | Symptom Frequency & Phase Correlation Visualization | Horizontal frequency bars, cycle phase color tags | Mapped | None |
| 13 | `iPhone 13 & 14 - 39.png` | Health Trends Hub: Unified overview of weight (142.4 lbs), daily steps (8,432), sleep duration, and 4-week symptom frequency | Multi-Metric Health Overview | Features (`/features`) | Holistic Wellness Dashboard Grid | Card layout with quick links into specific deep dives | Mapped | None |
| 14 | `iPhone 13 & 14 - 61.png` | Daily Steps Tracker: 8,432 / 10,000 steps (84%), Mon–Sun weekly bar chart, 5-day active streak encouragement | Daily Activity & Step Consistency | Features (`/features`) | Activity & Movement Consistency Tracker | Weekly step chart, streak flame badge | Mapped | None |
| 15 | `iPhone 13 & 14 - 66.png` | Daily Log Modal: Date selector, Mood face selector (Great, Good, Okay, Sad, Bad), Personal note, Symptoms checklist, Lifestyle logging (Water, Steps, Sleep, Workout) | Comprehensive Daily Check-In Workflow | Features (`/features`) | Daily Wellness Check-In Interactive Experience | Mood smileys, multi-category logging forms | Mapped | None |
| 16 | `iPhone 13 & 14 - 67.png` | Wellness Tracker / Weekly Insights: Weekly averages (Sleep 6.8h, Steps 7,200, Workouts 3/5, Water 5.2/8), AI pattern detection ("Exercise boosts sleep quality by 45 min", "Hydration dips mid-week by 30%"), Actionable focus tip for next week | AI Wellness Intelligence & Habit Correlation | Features (`/features`) | Intelligent Weekly Insights & Behavior Patterns Showcase | Insight cards with "Learn More" links, actionable focus tip card | Mapped | None |
| 17 | `iPhone 13 & 14 - 85.png` | Habit Tracker: Daily habit checklist (Drink 8 glasses - 12d streak, 7h sleep - 5d streak, 10k steps - 2d streak, Meditation - 0d streak), Luteal phase cycle tip ("Take magnesium tonight to help reduce cravings and support sleep quality") | Habit Building & Phase-Specific Health Prompts | Features (`/features`) | Habit Tracker & Micro-Routine Cards | Habit streak badges, phase-targeted micro-action card | Mapped | None |
| 18 | `iPhone 13 & 14 - 88.png` | My Treatments: Today's adherence score (84%), 12-day active streak, Daily regimen schedule (Inositol 2g Morning 12d streak, Vitamin D 2000 IU Night 8d streak, Spearmint 1 cap Morning 4d streak), Clinical treatment insight on Inositol & bloating | PCOS Supplement & Medication Adherence Tracker | Features (`/features`) | Clinical Supplement Protocols & Adherence Tracker | Treatment pill cards, adherence percentage ring, clinical insight banner | Mapped | None |
| 19 | `iPhone 13 & 14 - 89.png` | Add Supplement Form: Name (Vitamin D3, Inositol, etc.), Dose (1000 IU / 1 cap), Frequency, Time of day (Morning/Afternoon/Night), Smart reminder toggle, Notes | Medication & Supplement Customization | Features (`/features`) | Protocol Customization Workflow Mockup | Form layout with dosage and timing chips | Mapped | None |
| 20 | `iPhone 13 & 14 - 91.png` | Reminders Hub: 5 active reminders, Next reminder indicator ("Water Reminder 2:00 PM"), Reminder categories (Medication & Supplements, Sleep, Workout) | Intelligent Notification & Health Reminders | Features (`/features`) | Smart Reminders & Adherence System | Reminder category cards, schedule indicators | Mapped | None |
| 21 | `iPhone 13 & 14 - 92.png` | Set Reminders: Reminder Name (Myo-Inositol), Time (8:00 AM), Frequency (Daily), Start Date, Notes | Time-based Routine Scheduling | Features (`/features`) | Reminder Configuration Flow | Clean form inputs, time pickers | Mapped | None |
| 22 | `iPhone 13 & 14 - 87.png` | Upload Report Hub: Upload medical reports (PDF, JPG, PNG up to 10MB), Blood Test Result categorization, "Extract Lab Values" AI feature ("Extract glucose, insulin, testosterone, vitamin D, TSH automatically"), "Share with Doctor" button | AI Medical Document Processing & Care Team Sharing | Clinic / Experts (`/clinic`) | AI Lab Report Scanner & Clinical Sharing Showcase | Upload dropzone, report file cards, action CTAs | Mapped | None |
| 23 | `iPhone 13 & 14 - 86.png` | Lab Values - AI Extracted Report: "Lab values extracted successfully! Blood Test Result.pdf (4.2 MB)"; Extracted lab values with clinical reference ranges and status tags: Fasting Glucose (96 mg/dL Normal, 70-99), Fasting Insulin (18.6 pIU/mL Mid, 2-25), Testosterone (68 ng/dL High, 15-70), Vitamin D (24 ng/mL Low, 30-100); "Save to My Lab Timeline" CTA; AI medical disclaimer | Automated Lab Value Interpretation & Health Timeline | Clinic / Experts (`/clinic`), Features | Interactive Lab Value Interpretation Component | Reference range bar meters, Normal/High/Low status pills, timeline button | Mapped | None |
| 24 | `iPhone 13 & 14 - 42.png` | Clinic Hub: "Consult experts. Get personalized care", Services grid (Book Appointment, Video Consultation, Prescriptions, View Report), Upcoming appointment card (Dr. Priya Sharma Endocrinologist Wed 7 Sep), Upload reports banner | Telehealth & Specialized Clinical Care Services | Clinic / Experts (`/clinic`) | Telehealth Services Grid & Clinical Care Hub | 4-icon service grid, doctor appointment card, upload banner | Mapped | None |
| 25 | `iPhone 13 & 14 - 47.png` | Doctor Directory: Specialist filter tabs (Endocrinologist, Gynecology, General), Doctor profile cards: Dr. Sarah Jenkins (4.9 rating, Lumina Clinic), Dr. Rani Sharma (4.5 rating, General Clinic), Dr. Priya Sharma (4.7 rating, Endo Clinic); "Book" action | Certified PCOS & Reproductive Health Specialists | Clinic / Experts (`/clinic`) | Specialist Directory & Booking Interface | Doctor avatar, specialty badge, clinic name, star rating, Book button | Mapped | None |
| 26 | `iPhone 13 & 14 - 41.png` | Video Consultation Schedule: Dr. Priya Sharma Endocrinologist, 5-day calendar selector (Mon 12 - Fri 16), Time slots (09:00 AM - 11:30 AM), "How it works" 3-step guide: 1. Book time slot, 2. Get secure link, 3. Join the call | Frictionless Video Consult Booking | Clinic / Experts (`/clinic`) | Telehealth Booking Workflow & Steps Component | Date carousel, time slot grid, 3-step numbered guide | Mapped | None |
| 27 | `iPhone 13 & 14 - 45.png` | Video Consultation Step 2: Date & time selection with calendar pill row and active slot selection | Telehealth Scheduling Sub-flow | Clinic / Experts (`/clinic`) | Interactive Booking Modal / Component | Stepper progress bar, active slot styling | Mapped | None |
| 28 | `iPhone 13 & 14 - 46.png` | Review & Confirm: Step 3 review of Doctor, Date & Time, Consultation Type (In-Person vs Video), Patient Information (Ananya Sharma, Email, Phone), "Confirm Appointment" CTA | Booking Confirmation & Patient Intake | Clinic / Experts (`/clinic`) | Telehealth Confirmation Modal & Intake Form | Summary card, patient info fields, primary confirm CTA | Mapped | None |
| 29 | `iPhone 13 & 14 - 43.png` | Appointment Details: Confirmed video consultation Dr. Sarah Jenkins (Endocrinologist, 4.9, Lumina Clinic), Oct 24 10:30 AM, Checklist Before You Go (Quiet room, camera/mic test, medical history ready), Actions: Add to Calendar, Reschedule, Cancel | Post-Booking Care & Patient Preparation | Clinic / Experts (`/clinic`) | Appointment Preparation & Pre-Consultation Checklist | Status badge (Confirmed), 3-item preparation checklist, secondary action buttons | Mapped | None |
| 30 | `iPhone 13 & 14 - 80.png` | In-Person Appointment Details: Confirmed hospital visit details for Dr. Sarah Jenkins | Hybrid In-Person Clinical Care | Clinic / Experts (`/clinic`) | Hybrid Care (Virtual + In-Clinic) Explanation | Consultation type badge, calendar integration | Mapped | None |
| 31 | `iPhone 13 & 14 - 82.png` | Subscription Plans: Plus plan (₹199/month: Cycle & symptom tracking, smart predictions, lifestyle recommendations, email support), Premium plan (₹299/month Most Popular: 7-day free trial, advanced cycle & symptom insights, personalized diet & workout plans, expert recommended tips, priority support, export reports); Trust Badges: Secure Payments, Cancel Anytime, 100% Data Privacy, 24/7 Support | Transparent Pricing & Membership Tiers | Pricing (`/pricing`) & Home (`/`) | Pricing Comparison Table & Membership Plans Card | "Most Popular" pill, 7-day trial badge, feature checkmark list, 4 trust guarantee badges | Mapped | None |
| 32 | `iPhone 13 & 14 - 50.png` | Help & FAQ: Search input, Top FAQs (Water tracking, Health sync with Apple Health / Google Fit, Subscription management, Data privacy & security), "Chat with Support" specialized team CTA | Customer Support & Knowledge Base | Support (`/support`), Contact (`/contact`) | FAQ Accordion & Live Support Card | Search bar, expandable FAQ cards, support contact banner | Mapped | None |
| 33 | `iPhone 13 & 14 - 54.png` | Privacy & Security: Password change, Two-Factor Authentication via SMS, Active Sessions device list, Share Anonymous Data toggle, Personalized Recs toggle, Download My Data feature, Device Permissions (Camera, Notifications, Health Sync) | Enterprise-Grade Health Data Privacy & HIPAA/GDPR Compliance | Privacy (`/privacy`), Privacy Hub (`/privacy-hub`) | Trust, Privacy & Data Security Architecture Page | Toggle switches, security verification cards, export data CTA | Mapped | None |
| 34 | `iPhone 13 & 14 - 52.png` | Profile Hub: User summary (Ananya Sharma, Cycle Day 12, Condition: PCOS), Navigation list: Personal Info, Health Preferences, Notifications, Subscription, Privacy & Security, Help / FAQ, Logout | Account & Health Settings | Support (`/support`), About (`/story`) | Patient Profile & Holistic Ecosystem Overview | User header card with cycle day & condition badge, menu item list | Mapped | None |
| 35 | `iPhone 13 & 14 - 62.png` | Personal Info Form: Patient demographics (Sarah Jenkins, DOB 12/08/1990, Phone, Email, Pune, Blood Group A+, Height 168cm, Weight 62kg) | Clinical Baseline & Profile Onboarding | About (`/story`), Privacy (`/privacy`) | Patient-Centric Health Records Overview | Form field styling with demographic badges | Mapped | None |
| 36 | `iPhone 13 & 14 - 53.png` | Health Preferences: Health Goals (Weight Management, Stress Reduction, Cycle Tracking, Better Sleep), Chronic Conditions tags (PCOS with remove/add), Cycle settings (Length 28, Duration 5, Notifications) | Personalized Goal & Condition Management | Features (`/features`), Story (`/story`) | Goal Customization & Multi-Condition Management Component | Goal chip selectors, condition tags, cycle duration counters | Mapped | None |
| 37 | `iPhone 13 & 14 - 49.png` | Notifications Settings: Master switch, Category switches for Reminders (Period, Meds, Hydration, Workout, Sleep), Insights (Fertile Window, Health Insights, Weekly Report), Clinic (Appointments, Refills, Care Messages) | Proactive Care Alerts & Engagement | Features (`/features`) | Proactive Care Notification System Showcase | Grouped toggle list with descriptive subtext | Mapped | None |
| 38 | `iPhone 13 & 14 - 31.png` | Notifications Feed: Filter tabs (All, Health, Cycle, Clinic, Reminders), Live notification cards (Cycle update prediction, Hydration 2 glasses away, 10,000 steps reached, Clinic appointment reminder) | Real-Time Clinical & Wellness Feed | Features (`/features`) | Real-Time Alerts & Notification Feed Showcase | Notification cards with timestamp, icon badges, action links | Mapped | None |
| 39 | `iPhone 13 & 14 - 51.png` | Log Out Modal: Clean confirmation dialog ("Are you sure you want to log out?...") | Session Management | App UI / Components | Accessible Modal Dialog Pattern | Clean white overlay modal, dual action buttons | Mapped | None |
| 40 | `iPhone 13 & 14 - 37.png` | Progress Hub: Track your health journey (Overview / Weekly / Monthly), Health Score 75/100 Improving, Trends (Weight Trend, Symptoms Trend), Consistency (Workouts 71% 5/7d, Habits 86% 6/7d), Dinner timing recommendation (< 9:30 PM) | Longitudinal Progress & Habit Consistency Engine | Features (`/features`), Home (`/`) | Health Journey Progress Hub & Habit Consistency Matrix | Consistency percentage rings, trend cards, recommendation banner | Mapped | None |
| 41 | `iPhone 13 & 14 - 60.png` | Explore Hub - Master Features Menu: Full directory of Yumocare engines: 1. Cycle Overview Calendar, 2. Smart Cycle Intelligence, 3. Meal Planner, 4. Metabolic Balance Tracker, 5. Craving Control, 6. Workout Plans, 7. Habit Tracker, 8. Symptom Management, 9. My Treatments, 10. Reminders | Complete Product Capability Architecture | Features (`/features`) & Site Navigation | Interactive Explore Hub / Features Directory Grid | 10 feature cards with icons, descriptions, and deep-dive routes | Mapped | Master sitemap source of truth |

---

## 3. Information Architecture & Final Website Sitemap

Based on the 41 screens, the website structure represents Yumocare's true product identity:

1. **Home (`/`)**:
   - Hero: Official Yumocare brand introduction, App Store & Google Play badges, dynamic phone mockup featuring `iPhone 13 & 14 - 63.png` (Daily Dashboard) and `iPhone 13 & 14 - 64.png` (Health Score).
   - Core Value Pillars: Smart Cycle Intelligence, PCOS & Metabolic Management, Telehealth & Lab Extraction, Cycle-Synced Lifestyle.
   - Interactive Health Score & Daily Routine Showcase.
   - 10-Feature Explore Grid (adapted from Screen 60).
   - Telehealth & Specialists Highlight (Dr. Priya Sharma, Dr. Sarah Jenkins, Dr. Rani Sharma).
   - Pricing & Membership Summary (Plus ₹199 / Premium ₹299 with 7-day free trial).
   - Testimonials & Trust Guarantees (Secure Payments, Cancel Anytime, 100% Data Privacy, 24/7 Support).
   - FAQ Accordion.

2. **Features (`/features`)**:
   - Comprehensive deep dives into all 10 verified modules from Screen 60:
     - Smart Cycle Intelligence (Screens 56, 65, 84).
     - Metabolic Balance & Weight Tracker (Screens 32, 40).
     - Craving Control & Healthy Swaps (Screen 33).
     - Cycle-Synced Meal Planner & Glycemic Load (Screen 68).
     - Cycle-Adaptive Workout Plans (Screen 34).
     - Symptom Management & Pattern Trends (Screens 35, 38).
     - Treatment Adherence & Supplement Regimen (Screens 88, 89).
     - Habit Tracker & Sleep/Hydration Routines (Screens 61, 67, 85).
     - Intelligent Health Scoring (Screens 37, 64).
     - Smart Reminders & Notifications (Screens 31, 49, 91, 92).

3. **Clinic & Specialists (`/clinic`)**:
   - Telehealth overview (Screen 42).
   - Specialist Directory: Verified Endocrinologists & Gynecologists (Dr. Priya Sharma, Dr. Sarah Jenkins, Dr. Rani Sharma from Screen 47).
   - 3-Step Video Consultation Booking Flow (Screens 41, 45, 46).
   - AI Lab Value Extraction & Blood Test Scanner (Screens 86, 87) with reference range meters.
   - Doctor-patient secure document sharing and appointment checklist (Screens 43, 80).

4. **Phases & Cycle Syncing (`/phases`)**:
   - 4-Phase Hormonal Roadmap: Menstrual (Day 1-5), Follicular (Day 6-13), Ovulation (Day 14-16), Luteal (Day 17-28) from Screen 65.
   - Hormone dynamics, expected symptoms, nutrition, movement, and productivity superpowers.

5. **Pricing & Plans (`/pricing`)**:
   - Transparent pricing directly from Screen 82:
     - **Plus Plan**: ₹199/month (Cycle & symptom tracking, smart predictions, lifestyle recommendations, email support).
     - **Premium Plan**: ₹299/month (Most Popular; 7-day free trial, advanced insights, personalized diet & workout plans, expert recommended tips, priority support, export reports).
   - Trust and security badges: Secure Payments, Cancel Anytime, 100% Data Privacy, 24/7 Support.

6. **Interactive Calculators (`/calculators`)**:
   - Preserved and upgraded with Yumocare styling and cycle algorithms:
     - Ovulation Calculator (`/calculators/ovulation`)
     - Phase Calculator (`/calculators/phase`)
     - Due Date Calculator (`/calculators/due-date`)
     - Implantation Calculator (`/calculators/implantation`)
     - hCG Doubling Calculator (`/calculators/hcg`)
     - Pregnancy Test Timing Calculator (`/calculators/pregnancy-test`)

7. **Our Story & About Us (`/story`)**:
   - Mission statement: Transforming women's hormonal, metabolic, and PCOS health with clinical science, daily lifestyle habits, and empathetic care.

8. **Support & FAQs (`/support`, `/contact`)**:
   - Searchable FAQs directly extracted from Screen 50 (water tracking, health sync with Apple Health / Google Fit, subscription management, data security).
   - Dedicated support contact form and channels.

9. **Privacy, Security & Terms (`/privacy`, `/privacy-hub`, `/terms-conditions`)**:
   - Health data privacy commitments inspired by Screen 54 (Two-Factor Auth, device permissions, anonymous data sharing controls, download my data, zero ad-tracking).
