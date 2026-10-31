// Medic Point (Dental Practice Dashboard) case study content. Text comes from the
// supplied case-study document. Fields the document leaves as placeholders (role,
// timeline, team, tools, outcome numbers) and its internal layout / export checklists
// are intentionally not shown. Names, dates and amounts inside the screens are demo data.

const img = (name) => `/dental/${name}.webp`;

export const dentalProject = {
  id: "dental",
  caseStudy: "dental",
  title: "Medic Point — Dental Practice Dashboard",
  subtitle: "UX Case Study · Web Dashboard + Tablet & Mobile",
  client: "Dr Loukia",
  year: "2023",
  category: "Healthcare",
  tags: ["Healthcare", "Admin Dashboard", "Web Dashboard", "Responsive", "Design System"],
  image: img("cover"),
  overview:
    "Medic Point is a medical admin dashboard for a dental practice. From one sidebar-based workspace, the dentist and practice staff can see the day's appointments, work through tasks and notifications, open a patient's full dental and orthodontic record, and manage billing and invoices.",
  highlights: [],
};

export const dentalCaseStudy = {
  hero: {
    title: "Medic Point — Dental Practice Dashboard",
    subtitle: "UX Case Study · Client: Dr Loukia · 2023 · Web Dashboard + Tablet & Mobile",
    image: img("dashboard"),
    phone: img("dash-mobile"),
  },
  intro:
    "Medic Point is a medical admin dashboard for a dental practice. From one sidebar-based workspace, the dentist and practice staff can see the day's appointments, work through tasks and notifications, open a patient's full dental and orthodontic record, and manage billing and invoices. It is an internal practice tool, not a patient-facing app — patients appear in the product as records, never as logged-in users.",
  glance: [
    ["Product", "Medic Point — Medical Admin Dashboard for a dental practice"],
    ["Client", "Dr Loukia"],
    ["Year", "2023"],
    ["Platforms", "Desktop web (1,440 px frames) as the primary layout, with tablet (iPad) and mobile adaptations"],
    ["Users", "Dentist / practice administrator (primary), practice staff; patients exist as records only"],
    [
      "Scope designed",
      "Login, dashboard overview, notifications, calendar, patient record (dental chart, orthodontic treatment, management), billing and invoices, settings area, plus a foundations style guide (colour tokens, inputs, buttons, badges) and responsive variants",
    ],
  ],
  problem: {
    title: "The Problem",
    paragraphs: [
      "Running a dental practice means juggling an appointment book, patient treatment records, insurance and pre-authorisation paperwork, reminders, and billing — work that is easily scattered across paper files, spreadsheets and separate tools. When a patient is in the chair, the team needs the full picture fast: medical flags, treatment history, what is outstanding, and what happens next.",
      "Medic Point brings that working day into one dashboard: appointments, tasks, notifications, clinical records and money on a single sidebar, so nothing about a patient or a payment has to be hunted down across systems.",
    ],
  },
  roles: {
    title: "Users and Roles",
    rows: [
      {
        role: "Dentist / practice administrator",
        who: "The practice owner and lead clinician (the client's role)",
        needs: "See the whole day at a glance, review patient records and treatment progress, approve plans, keep billing healthy",
      },
      {
        role: "Practice staff",
        who: "Front-desk and admin team supporting the dentists",
        needs: "Manage appointments and recalls, send insurance and pre-authorisation forms, chase reminders, raise invoices, contact patients",
      },
      {
        role: "Patients (records only)",
        who: "The people being treated — they never log in",
        needs: "Their details, health flags, dental chart, treatment history, appointments and balances must be complete, accurate and quick to open",
      },
    ],
  },
  goals: {
    title: "Design Goals",
    items: [
      ["One home for the working day.", "Appointments, tasks, finance and upcoming visits are summarised on a single overview instead of separate modules."],
      ["Clinical depth without clutter.", "The patient record carries real dental detail — chart, brackets, wires, elastics, medical flags — organised in tabs so it stays scannable."],
      [
        "Status visible at a glance.",
        "A consistent colour language (blue = action, green = done/paid, amber = pending, red = overdue/critical) runs through badges, cards, charts and the calendar.",
      ],
      ["Money in the same place as care.", "Billing overview, a full ledger table and invoice creation sit one click from the clinical work."],
      ["Desktop-first, responsive by design.", "The same cards reflow for tablet and mobile so the dashboard works at the front desk, in the surgery, or on the move."],
    ],
  },
  scope: {
    title: "Scope and Information Architecture",
    text: "A persistent left sidebar organises the whole product — logo and main menu at the top, help and settings at the bottom — with a top bar carrying search and the signed-in profile. The designed areas are:",
    items: [
      ["Login", "license-credential sign-in for practice staff."],
      ["Dashboard / Overview", "appointment totals, task list, financial summary chart, billing card with recent transactions, upcoming appointments, statistics and a weekly income trend."],
      ["Notifications", "a popover over the dashboard grouping clinical alerts, appointment reminders, messages and vaccination reminders."],
      ["Calendar", "month/week appointment grids with colour-coded appointment blocks."],
      ["Patient record", "patient details header plus Workflow, Management and Financial tabs; Workflow splits into Dental Chart, Medical List and Orthodontic Treatment."],
      ["Billing", "status overview cards, a detailed billing ledger, and invoice creation."],
      ["Settings", "a settings area in the same sidebar layout, with tablet/mobile variants."],
      ["Style guide", "a foundations page with named colour-token scales and core components (inputs, buttons, status and label badges), plus an icon library page."],
    ],
  },
  flows: {
    title: "Key User Flows",
    note: "The flows below follow the sidebar order and screen content, and are presented as the designed flow, not as a tested prototype.",
    items: [
      {
        title: "Start of day",
        steps: ["Log in", "Dashboard overview", "Notifications", "Mark all as read", "Calendar / patient record"],
        text: "Log in with license credentials → Dashboard overview: appointment totals, task list and financial summary → open Notifications (clinical alert, appointment reminder, new message, vaccination reminder) → mark all as read → move into the calendar or a patient record.",
      },
      {
        title: "Patient visit",
        steps: ["Calendar", "Patient details", "Workflow tab", "Record the visit", "Save & Report", "Management tab"],
        text: "Calendar → open the patient record → Patient Details (identity, health-issue flags such as allergy and diabetes, outstanding amount, referral doctor) → Workflow tab: Dental Chart / Medical List / Orthodontic Treatment → record the visit (for orthodontics: bracket bonding, appliance setup, next-appointment planning) → Save & Report → Management tab for follow-up tasks, reminders and contact history.",
      },
      {
        title: "Billing",
        steps: ["Billing overview", "Billing ledger", "Create New Invoice"],
        text: "Billing → status overview (overdue, open, paid, unbilled) → billing ledger (date, service, method, price, discounts, credits, payments, balance) with search and status filter → Create New Invoice.",
      },
    ],
  },
  walkthrough: {
    title: "Design Walkthrough — Screen by Screen",
    login: {
      title: "Login — a credential gate for a clinical tool",
      text: "A split screen: the Medic Point brand, a welcome-back heading and username/password fields on the left, and a photograph of a dentist treating a patient on the right. The copy makes clear this is licensed staff access, with a route to the system administrator for login problems.",
      images: [[img("login"), "Login"]],
    },
    dashboard: {
      title: "Dashboard overview — the practice's day on one screen",
      text: "The overview stacks the day's essentials in cards: appointment totals, a task list with owners and status badges, a financial summary bar chart (daily charges against income collected across the week), a billing card with recent transactions, and an upcoming appointments table, extended by statistics and a weekly income trend. Everything a practice manager checks first is above or just below the fold, in one scroll.",
      images: [[img("dashboard"), "Dashboard overview"]],
    },
    notifications: {
      title: "Notifications — triaged by type, not just by time",
      text: "The notifications popover separates genuinely urgent clinical alerts from appointment reminders, patient messages with a reply action, and vaccination reminders, with a mark-all-as-read control. The design treats a clinical alert as a different class of information from an administrative reminder — a small decision that matters in a medical product.",
      images: [[img("notifications"), "Notifications popover"]],
    },
    calendar: {
      title: "Calendar — colour-coded at a glance",
      text: "Month and week grids use coloured blocks for appointments, with a variant adding a side panel and mini-calendar. Colour does the scanning work: the shape of a day is visible before a single entry is read.",
      images: [
        [img("calendar"), "Calendar grid"],
        [img("calendar-panel"), "Calendar with side panel and mini-calendar"],
      ],
    },
    record: {
      title: "Patient record — the centrepiece",
      text: "The record opens with a patient header — photo, ID, date of birth, outstanding amount, referral doctor, healthcare provider, and health-issue badges (allergy, diabetes) that stay visible because they affect treatment safety. Three tabs then organise the record the way the practice works: Workflow for clinical content, Management for tasks, reminders, appointment history and contact, and Financial for money.",
      images: [[img("record-b"), "Patient record — Workflow tab with dental chart"]],
      cols: "grid-cols-1 max-w-5xl",
    },
    ortho: {
      title: "Orthodontic treatment — designed with real clinical detail",
      text: "Inside Workflow, the orthodontic view supports the actual treatment workflow: treatment records by date, doctor, brackets and teeth; a bracket-bonding form with slot size and tooth/arch selection; an appliance setup covering wire types and sizes, springs and chains, and elastic configurations; and next-appointment planning with notes, saved as a report. This is the screen that shows the design was built around real dentistry rather than a generic medical template.",
      images: [
        [img("ortho-b"), "Orthodontic treatment"],
        [img("add-treatment"), "Add treatment"],
      ],
    },
    management: {
      title: "Management — the follow-up machinery",
      text: "The Management tab holds active and completed tasks with due dates and status badges (pending, overdue, done), recurring reminders such as insurance and pre-authorisation forms and progress reviews, the patient's appointment history in a table, and a contact panel with call actions and contact history — the unglamorous work that keeps a practice running, given a proper home.",
      images: [[img("management"), "Management tab"]],
      cols: "grid-cols-1 max-w-4xl",
    },
    billing: {
      title: "Billing — status first, ledger second, action always available",
      text: "Billing leads with four status cards (overdue, open, paid, unbilled), then a full ledger table with search and a status filter, and keeps invoice creation as a primary button. The same summary-then-detail pattern as the dashboard, applied to money.",
      images: [[img("billing"), "Billing overview and ledger"]],
    },
    settings: {
      title: "Settings — users, roles and permissions",
      text: "Settings sits in the same sidebar layout. The screens show a user-management list with role, colour code, contact details and status, and an Add New User form covering basic information, doctor colour, working hours per weekday, and permissions and access control.",
      images: [
        [img("settings-users"), "Settings — user management"],
        [img("settings-adduser"), "Add new user"],
      ],
    },
    responsive: {
      title: "Responsive — tablet and mobile",
      text: "The dashboard, billing and settings all have tablet and mobile variants in which the sidebar layout gives way to stacked cards in a long scroll, keeping the same content and status colours. The iPad variant keeps the two-column feel of the desktop overview at a smaller width.",
      tablets: [
        ["dash-tablet", "Dashboard — tablet"],
        ["billing-tablet", "Billing — tablet"],
        ["settings-tablet", "Settings — tablet"],
        ["calendar-tablet", "Calendar — tablet"],
      ],
      phones: [
        ["dash-mobile", "Dashboard"],
        ["dash-mobile-menu", "Main menu"],
        ["billing-mobile", "Billing"],
        ["settings-mobile", "Settings"],
        ["calendar-mobile", "Calendar"],
        ["record-mobile", "Patient record"],
        ["ortho-mobile", "Orthodontic treatment"],
      ],
    },
  },
  system: {
    title: "Design System",
    rows: [
      ["Foundations", "A dedicated style-guide page: named colour scales (teal, sky, red, orange and others) in 950–50 steps, each token documented with its hex value, RGB value and a contrast rating — accessibility checked at the token level, not as an afterthought"],
      ["Colour roles in product", "Blue for primary actions and the active state (Login, Create New Invoice, Save & Report, active sidebar and tabs); green for completed/paid; amber/orange for pending and partial states; red for overdue, due amounts and critical alerts; multi-colour blocks and chart series for the calendar and statistics"],
      ["Typography", "Clean sans-serif throughout; large bold headings, small grey labels and table headers, large coloured numbers on stat cards."],
      ["Layout", "Persistent left sidebar + top bar (search, profile); white cards with generous padding on a light-grey background; dense data tables below the fold; desktop-first 1,440 px frames with tablet/mobile stacked reflows"],
      ["Components", "Sidebar menu, search bar, stat cards, task list with avatars and checkboxes, status badges and label badges, inputs, primary buttons, tabs and sub-tabs, dropdowns, form checkbox groups, bar and line charts, data tables, notification popover"],
      ["Icons", "Small thin outline icons in the sidebar and tables, drawn from a grouped icon library (navigation, interface, tasks, medicine and health, user, editor). A curated stock set, not a custom dental icon family"],
    ],
    swatches: ["#4f6bff", "#00a6ff", "#16b05b", "#ff7a1a", "#ef4444", "#a855f7", "#00b0cc"],
  },
  decisions: {
    title: "Key Design Decisions",
    items: [
      ["A sidebar that never moves.", "Every area — clinical, admin, money — is reached from the same menu, so staff never relearn navigation between tasks."],
      ["The overview as a command centre.", "Appointments, tasks, finance and billing are summarised together because that is how a practice manager actually starts the day."],
      ["Health flags pinned to the patient header.", "Allergies and conditions sit beside the patient's name on every record view, not buried in a history tab — a safety decision, not a styling one."],
      ["Tabs that mirror the practice's own divisions.", "Workflow, Management and Financial separate clinical work, follow-up work and money the same way the team divides responsibilities."],
      ["One status language everywhere.", "The same badge colours mean the same thing on tasks, transactions, appointments and billing cards, so status is learned once."],
      ["Orthodontics as a first-class workflow.", "Brackets, wires and elastics get structured forms instead of free-text notes, which makes treatment records consistent across visits and doctors."],
    ],
  },
  refinements: {
    title: "Refinements Identified (Next Iteration)",
    items: [
      "Add the missing account paths: there is no forgot-password flow on the login screen.",
      "Tame the dashboard density: the overview is one very long scroll; grouping or collapsing the statistics and income sections would help scanning.",
      "Add the states that are missing everywhere: empty, error, loading, no-search-results and delete-confirmation states.",
      "Replace placeholder data before presenting: several amounts repeat identically across cards and transactions, and demo dates are inconsistent across screens.",
    ],
  },
  learnings: {
    title: "What I Learned",
    items: [
      "Admin products earn trust through consistency: one sidebar, one status language and one summary-then-detail pattern carried the whole dashboard.",
      "In clinical software, information hierarchy is a safety feature — what stays pinned (health flags, outstanding amounts) matters as much as what is included.",
    ],
  },
  summary:
    "Medic Point is a dental practice dashboard designed for Dr Loukia (2023) that brings appointments, tasks, notifications, patient dental and orthodontic records, and billing into one sidebar workspace. I designed the end-to-end admin experience — from the overview command centre to a clinically detailed patient record with structured orthodontic treatment forms — on a token-based design system with documented colour contrast, across desktop, tablet and mobile.",
};
