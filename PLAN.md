cyber-dev-academy-next/
├── app/                # Next.js App Router structure
│   ├── (dashboard)/    # Route group for dashboard pages
│   │   ├── modules/    # Module list page
│   │   │   └── page.tsx
│   │   ├── practice/   # Practice questions page
│   │   │   └── page.tsx
│   │   ├── paths/      # Learning paths page
│   │   │   └── page.tsx
│   │   └── page.tsx    # Main dashboard page
│   ├── layout.tsx      # Root layout with theme provider
│   └── page.tsx        # Homepage redirect
├── components/         # Reusable components
│   ├── ui/             # shadcn-ui components
│   │   ├── tabs/       # Customized Tabs component
│   │   └── button/     # Customized Button component
│   ├── Header.tsx      # Top navigation bar
│   ├── SidebarNav.tsx  # Collapsible side navigation
│   ├── StatsCard.tsx   # Performance metrics card
│   ├── StreakCard.tsx  # Learning streak display
│   ├── ModuleCard.tsx  # Learning module preview
│   ├── QuizQuestion.tsx# Interactive quiz component
│   └── SkillLevelFilter.tsx # Difficulty selector
├── lib/                # Business logic
│   ├── api.ts          # Data fetching functions
│   └── auth.ts         # Authentication helpers
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions (UserStats, Module, etc)
├── public/             # Static assets
│   ├── icons/          # SVG icons
│   └── images/         # Marketing images
├── styles/             # Global CSS
│   └── globals.css
├── utils/              # Helper functions
│   └── theme.ts        # Theme configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
└── .gitignore          # Git exclusion rules