# MSTRMND

Dual-stack project:

- **Web** (Next.js) — root package
- **Mobile** (Expo + NativeWind) — `mobile/`

## Web

```bash
pnpm install
pnpm dev
```

## Mobile

```bash
cd mobile
npm install
npx expo start
```

Mobile includes onboarding, home/activity/card/statistics tabs, and transfer/request/transaction modals. Data is currently mock (`mobile/lib/mock-data.ts`).
