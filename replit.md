# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### chef-kingston (Your Personal Chef Kingston)
- **Type**: React + Vite (frontend-only, no backend)
- **Preview path**: `/` (root)
- **Package**: `@workspace/chef-kingston`
- **Directory**: `artifacts/chef-kingston/`
- **Pages**: Home (`/`), Menu (`/menu`), Meal Plans (`/meal-plans`), Catering (`/catering`), About (`/about`), Contact (`/contact`)
- **Routing**: wouter
- **Styling**: Tailwind CSS v4, warm cream/beige bg + warm orange accent (#secondary: 28 85% 52%) + dark navy primary, Playfair Display serif + Plus Jakarta Sans, rounded-2xl cards, pill buttons, hover lift/shadow effects, gradient overlays on food images, subtle decorative blurs, masonry-style gallery
- **Data**: Menu items in `src/data/menu.ts`, meal plans in `src/data/plans.ts`
- **Layout**: Global layout in `src/components/layout/` (gradient AnnouncementBar, Navbar with active link highlighting via useLocation, Footer with gradient CTA banner, FloatingWhatsApp)
- **Accessibility**: Form labels bound with htmlFor/id, aria-pressed on menu side-selection buttons, aria-label/aria-expanded on mobile nav toggle
- **Images**: Real food photos and chef logo in `attached_assets/` aliased as `@assets`
- **Contact**: (647) 200-0047, ypcdinners@gmail.com, WhatsApp +16472000047, Facebook: Your Personal Chef Kingston
- **Future-ready**: Data layer in `src/data/` can connect to Supabase/CMS. Structure prepared for Stripe integration.
