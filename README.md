# OnlyMakeAI

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Supabase-Backend-green" alt="Supabase" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License" />
</div>

## 🎯 Overview

OnlyMakeAI is a modern, full-stack SaaS platform for AI-powered content creation and management. Built with Next.js 14, TypeScript, and Supabase, it provides a comprehensive solution for creating, managing, and monetizing AI-generated content with a subscription-based model.

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Authentication**: Email/password and OAuth support via Supabase Auth
- **User Profiles**: Customizable user profiles with avatars and bio
- **Role-Based Access Control**: Admin and user roles with different permissions
- **Session Management**: Secure session handling with automatic token refresh

### 💳 Subscription & Payments
- **Stripe Integration**: Full payment processing with Stripe
- **Multiple Subscription Tiers**: Free, Pro, and Enterprise plans
- **Subscription Management**: Easy upgrade, downgrade, and cancellation
- **Usage Tracking**: Monitor API usage and credit consumption
- **Webhook Handling**: Real-time payment status updates

### 🤖 AI Content Generation
- **Multiple AI Models**: Support for various AI models and providers
- **Content Types**: Generate text, images, and more
- **Template System**: Pre-built templates for common use cases
- **Customization**: Fine-tune generation parameters
- **History Tracking**: Keep track of all generated content

### 📊 Analytics & Monitoring
- **Usage Analytics**: Track user activity and content generation
- **Performance Metrics**: Monitor system performance and reliability
- **User Insights**: Understand user behavior and preferences
- **Admin Dashboard**: Comprehensive admin tools for platform management

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Dark Mode**: Built-in dark mode support
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **shadcn/ui Components**: Beautiful, accessible component library
- **Real-time Updates**: Live data updates using Supabase Realtime

### 🔒 Security Features
- **Rate Limiting**: Protect against abuse and DDoS attacks
- **CSRF Protection**: Cross-site request forgery prevention
- **SQL Injection Prevention**: Parameterized queries and ORM protection
- **XSS Protection**: Input sanitization and output encoding
- **Row Level Security**: Database-level security with Supabase RLS

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **State Management**: React Hooks, Context API
- **Forms**: React Hook Form with Zod validation

### Backend
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Realtime**: Supabase Realtime
- **API**: Next.js API Routes

### Infrastructure
- **Hosting**: Vercel (recommended)
- **Database**: Supabase
- **Payments**: Stripe
- **Email**: Resend or similar service

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm**: Latest version
- **Git**: For version control

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/onlymakeai/onlymakeai.git
cd onlymakeai
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Stripe Price IDs
STRIPE_PRICE_ID_PRO_MONTHLY=price_xxx
STRIPE_PRICE_ID_PRO_YEARLY=price_xxx
STRIPE_PRICE_ID_ENTERPRISE_MONTHLY=price_xxx
STRIPE_PRICE_ID_ENTERPRISE_YEARLY=price_xxx

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=OnlyMakeAI

# Email Configuration (Optional)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=noreply@yourdomain.com

# AI Provider Configuration (Optional)
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### 4. Supabase Setup

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key

#### Run Database Migrations

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your_project_ref

# Push database schema
supabase db push
```

Alternatively, run the SQL migrations manually in the Supabase SQL editor:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create subscriptions table
CREATE TABLE subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  stripe_price_id TEXT,
  plan_name TEXT NOT NULL,
  status TEXT NOT NULL,
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create usage table
CREATE TABLE usage (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  credits_used INTEGER DEFAULT 0,
  credits_limit INTEGER,
  period_start TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own subscription" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own usage" ON usage
  FOR SELECT USING (auth.uid() = user_id);
```

### 5. Stripe Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Create products and prices in Stripe
4. Set up webhook endpoint: `https://your-domain.com/api/webhooks/stripe`
5. Configure webhook to listen for these events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`

### 6. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage Examples

### User Authentication

```typescript
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient()

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123',
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password123',
})

// Sign out
await supabase.auth.signOut()
```

### Creating a Checkout Session

```typescript
const response = await fetch('/api/stripe/create-checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    priceId: 'price_xxx',
    successUrl: `${window.location.origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}/pricing`,
  }),
})

const { sessionId } = await response.json()
```

### Generating AI Content

```typescript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'Write a blog post about AI',
    model: 'gpt-4',
    maxTokens: 1000,
  }),
})

const { content } = await response.json()
```

### Checking User Subscription

```typescript
import { getSubscription } from '@/lib/subscription'

const subscription = await getSubscription(userId)

if (subscription?.status === 'active') {
  // User has active subscription
  console.log('Plan:', subscription.plan_name)
} else {
  // Redirect to pricing page
}
```

## 🏗️ Project Structure

```
onlymakeai/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   └── shared/           # Shared components
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase clients
│   ├── stripe/           # Stripe utilities
│   └── utils.ts          # Helper functions
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── public/               # Static assets
├── styles/               # Global styles
└── supabase/             # Supabase migrations
    └── migrations/       # Database migrations
```

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Environment Variables for Production

Ensure all environment variables from `.env.local` are set in your Vercel project settings.

### Post-Deployment Steps

1. Update Stripe webhook URL to production domain
2. Update Supabase redirect URLs
3. Configure custom domain (optional)
4. Set up monitoring and analytics

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler check

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Use ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 🐛 Known Issues

- See [GitHub Issues](https://github.com/onlymakeai/onlymakeai/issues) for current known issues

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend platform
- [Stripe](https://stripe.com/) - Payment processing
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📧 Support

For support, email support@onlymakeai.com or join our [Discord community](https://discord.gg/onlymakeai).

## 🔗 Links

- [Documentation](https://docs.onlymakeai.com)
- [Website](https://onlymakeai.com)
- [Twitter](https://twitter.com/onlymakeai)
- [Discord](https://discord.gg/onlymakeai)

---

<div align="center">
  Made with ❤️ by the OnlyMakeAI Team
</div>