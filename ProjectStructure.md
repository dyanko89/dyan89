mastra-inspired-site/
├── app/                            # Main application directory (Next.js App Router)
│   ├── components/                 # All React components live here
│   │   ├── EnhancedHomePage.tsx    # Component for homepage content (NOT a page file)
│   │   ├── EnhancedProjectsPage.tsx # Component for projects page content (NOT a page file)
│   │   ├── NavBar.tsx              # Navigation component
│   │   ├── TerminalText.tsx        # Reusable terminal text component
│   │   └── ui/                     # UI components from shadcn/ui
│   │
│   ├── globals.css                 # Global CSS styles
│   │
│   ├── page.tsx                    # ACTUAL Homepage file (Next.js page)
│   │                               # This imports EnhancedHomePage.tsx and displays it
│   │
│   ├── projects/                   # Projects page directory
│   │   └── page.tsx                # ACTUAL Projects page file (Next.js page)
│   │                               # This imports EnhancedProjectsPage.tsx
│   │
│   ├── about/                      # About page directory
│   │   └── page.tsx                # About page (would import an EnhancedAboutPage component)
│   │
│   ├── contact/                    # Contact page directory
│   │   └── page.tsx                # Contact page (would import an EnhancedContactPage component)
│   │
│   └── layout.tsx                  # Root layout (wrapper for all pages)
│
├── public/                         # Static assets directory
│   └── images/                     # Image files
│
├── tailwind.config.ts              # Tailwind configuration
└── package.json                    # Project dependencies