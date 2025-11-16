# OnlyMakeAI

<div align="center">
  <h3>🤖 AI-Powered Content Creation & Management Platform</h3>
  <p>Create, manage, and monetize AI-generated content with powerful automation tools</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
  [![Supabase](https://img.shields.io/badge/Supabase-Latest-green.svg)](https://supabase.com/)
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

OnlyMakeAI is a comprehensive platform for creating, managing, and monetizing AI-generated content. Built with modern web technologies, it provides a seamless experience for content creators, businesses, and developers looking to leverage AI capabilities.

### Key Capabilities

- **AI Content Generation**: Generate high-quality text, images, and multimedia content
- **Workflow Automation**: Create custom workflows with visual node-based editor
- **Multi-Model Support**: Integrate with multiple AI providers (OpenAI, Anthropic, Google, etc.)
- **Team Collaboration**: Share projects and collaborate in real-time
- **Analytics & Insights**: Track usage, performance, and content metrics
- **Monetization Tools**: Built-in payment processing and subscription management

---

## ✨ Features

### 🎨 Content Creation
- **Text Generation**: Blog posts, articles, social media content, and more
- **Image Generation**: AI-powered image creation with multiple style options
- **Code Generation**: Generate and explain code in multiple programming languages
- **Audio/Video**: Text-to-speech and basic video generation capabilities

### 🔧 Workflow Builder
- **Visual Editor**: Drag-and-drop interface for building AI workflows
- **Pre-built Templates**: Ready-to-use templates for common use cases
- **Custom Nodes**: Create your own nodes with custom logic
- **Conditional Logic**: Add branching and decision-making to workflows
- **API Integration**: Connect to external services and APIs

### 👥 Team & Collaboration
- **Multi-user Support**: Invite team members with role-based access control
- **Project Sharing**: Share projects and templates with team members
- **Version Control**: Track changes and roll back to previous versions
- **Comments & Feedback**: Collaborate with inline comments

### 📊 Analytics & Monitoring
- **Usage Dashboard**: Track API usage, costs, and performance
- **Content Analytics**: Monitor content performance and engagement
- **Error Tracking**: Built-in error monitoring and debugging tools
- **Custom Reports**: Generate custom reports and export data

### 💰 Monetization
- **Subscription Plans**: Flexible pricing tiers for different user types
- **Usage-based Billing**: Pay-as-you-go pricing for API usage
- **Payment Integration**: Stripe integration for secure payments
- **API Marketplace**: Sell and distribute your workflows

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)

### Backend
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **API**: Next.js API Routes
- **Real-time**: Supabase Realtime

### AI & ML
- **OpenAI**: GPT-4, DALL-E 3
- **Anthropic**: Claude 3
- **Google**: Gemini Pro
- **Stability AI**: Stable Diffusion

### DevOps
- **Hosting**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions
- **Monitoring**: Vercel Analytics
- **Error Tracking**: Sentry (optional)

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 18.17.0 ([Download](https://nodejs.org/))
- **npm**: >= 9.0.0 or **yarn**: >= 1.22.0 or **pnpm**: >= 8.0.0
- **Git**: Latest version ([Download](https://git-scm.com/))
- **Supabase CLI**: Optional but recommended ([Install](https://supabase.com/docs/guides/cli))

### Required Accounts

- **Supabase**: [Sign up](https://supabase.com/) for a free account
- **OpenAI**: [Get API key](https://platform.openai.com/)
- **Stripe**: [Create account](https://stripe.com/) (for payments)
- **Vercel**: [Sign up](https://vercel.com/) (for deployment)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/onlymakeai/onlymakeai.git
cd onlymakeai
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# AI Providers
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
GOOGLE_AI_API_KEY=your_google_ai_api_key

# Stripe (Optional)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 4. Set Up Database

Run the database migrations:

```bash
# If using Supabase CLI
supabase db reset

# Or manually run the SQL files in /supabase/migrations
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

---

## ⚙️ Configuration

### Database Schema

The application uses the following main tables:

- `users`: User profiles and authentication
- `projects`: User projects and workspaces
- `workflows`: AI workflow configurations
- `generations`: AI generation history
- `subscriptions`: User subscription data
- `api_keys`: User API key management

### AI Provider Configuration

Configure AI providers in the dashboard:

1. Navigate to **Settings** > **AI Providers**
2. Add your API keys for each provider
3. Configure model preferences and defaults
4. Set usage limits and quotas

### Supabase Setup

1. Create a new Supabase project
2. Run the SQL migrations from `/supabase/migrations`
3. Configure Row Level Security (RLS) policies
4. Set up Storage buckets for file uploads
5. Configure authentication providers (Email, OAuth, etc.)

---

## 📖 Usage

### Creating Your First Project

1. **Sign Up**: Create an account at `/signup`
2. **Create Project**: Click "New Project" from the dashboard
3. **Configure**: Set project name, description, and settings
4. **Start Creating**: Begin generating content or building workflows

### Generating Content

#### Text Generation

```typescript
import { generateText } from '@/lib/ai/text-generation';

const result = await generateText({
  prompt: 'Write a blog post about AI',
  model: 'gpt-4-turbo',
  maxTokens: 1000,
  temperature: 0.7
});

console.log(result.text);
```

#### Image Generation

```typescript
import { generateImage } from '@/lib/ai/image-generation';

const result = await generateImage({
  prompt: 'A futuristic city at sunset',
  model: 'dall-e-3',
  size: '1024x1024',
  quality: 'hd'
});

console.log(result.imageUrl);
```

### Building Workflows

1. Navigate to **Workflows** > **New Workflow**
2. Drag nodes from the sidebar to the canvas
3. Connect nodes to create your workflow logic
4. Configure each node's parameters
5. Test and deploy your workflow

#### Example Workflow: Blog Post Generator

```typescript
// workflow.config.ts
export const blogPostWorkflow = {
  name: 'Blog Post Generator',
  nodes: [
    {
      id: 'input',
      type: 'input',
      data: { field: 'topic' }
    },
    {
      id: 'research',
      type: 'ai-text',
      data: {
        prompt: 'Research and outline: {{input.topic}}',
        model: 'gpt-4'
      }
    },
    {
      id: 'write',
      type: 'ai-text',
      data: {
        prompt: 'Write a blog post based on: {{research.output}}',
        model: 'gpt-4-turbo'
      }
    },
    {
      id: 'image',
      type: 'ai-image',
      data: {
        prompt: 'Hero image for: {{input.topic}}',
        model: 'dall-e-3'
      }
    },
    {
      id: 'output',
      type: 'output',
      data: {
        text: '{{write.output}}',
        image: '{{image.output}}'
      }
    }
  ],
  edges: [
    { source: 'input', target: 'research' },
    { source: 'research', target: 'write' },
    { source: 'input', target: 'image' },
    { source: 'write', target: 'output' },
    { source: 'image', target: 'output' }
  ]
};
```

### API Usage

OnlyMakeAI provides a REST API for programmatic access:

#### Authentication

```bash
curl -X POST https://api.onlymakeai.com/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"your_password"}'
```

#### Generate Text

```bash
curl -X POST https://api.onlymakeai.com/v1/generate/text \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Write a haiku about coding",
    "model": "gpt-4",
    "maxTokens": 100
  }'
```

#### Execute Workflow

```bash
curl -X POST https://api.onlymakeai.com/v1/workflows/:id/execute \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": {
      "topic": "Machine Learning Basics"
    }
  }'
```

---

## 📁 Project Structure

```
onlymakeai/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Authentication routes
│   ├── (dashboard)/         # Dashboard routes
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── components/              # React components
│   ├── ui/                  # UI components
│   ├── workflow/            # Workflow builder
│   ├── chat/                # Chat interface
│   └── ...                  # Other components
├── lib/                     # Utility functions
│   ├── ai/                  # AI provider integrations
│   ├── db/                  # Database utilities
│   ├── auth/                # Authentication helpers
│   └── utils/               # General utilities
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
├── supabase/               # Supabase configuration
│   ├── migrations/          # Database migrations
│   └── seed.sql            # Seed data
├── tests/                   # Test files
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

---

## 📚 API Documentation

### Base URL

```
https://api.onlymakeai.com/v1
```

### Authentication

All API requests require authentication using an API key:

```
Authorization: Bearer YOUR_API_KEY
```

### Endpoints

#### Text Generation

**POST** `/generate/text`

```json
{
  "prompt": "string",
  "model": "gpt-4 | gpt-4-turbo | claude-3-opus",
  "maxTokens": 1000,
  "temperature": 0.7,
  "systemPrompt": "optional string"
}
```

#### Image Generation

**POST** `/generate/image`

```json
{
  "prompt": "string",
  "model": "dall-e-3 | stable-diffusion-xl",
  "size": "1024x1024 | 1024x1792 | 1792x1024",
  "quality": "standard | hd",
  "style": "vivid | natural"
}
```

#### Workflow Execution

**POST** `/workflows/:id/execute`

```json
{
  "inputs": {
    "key": "value"
  },
  "async": false
}
```

#### Projects

- **GET** `/projects` - List all projects
- **POST** `/projects` - Create new project
- **GET** `/projects/:id` - Get project details
- **PUT** `/projects/:id` - Update project
- **DELETE** `/projects/:id` - Delete project

For complete API documentation, visit: `https://docs.onlymakeai.com/api`

---

## 🔧 Development

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage

# Run E2E tests
npm test:e2e
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

### Database Management

```bash
# Create new migration
supabase migration new migration_name

# Apply migrations
supabase db reset

# Generate TypeScript types
supabase gen types typescript --local > types/database.ts
```

### Local Development Tips

1. **Hot Reload**: Changes are automatically reflected
2. **Debug Mode**: Set `NODE_ENV=development` for detailed logs
3. **Mock AI**: Use `AI_MOCK_MODE=true` to avoid API costs during development
4. **Database Viewer**: Use Supabase Studio at `http://localhost:54323`

---

## 🚀 Deployment

### Deploy to Vercel

1. **Connect Repository**:
   ```bash
   vercel
   ```

2. **Configure Environment Variables** in Vercel dashboard

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Deploy with Docker

```bash
# Build image
docker build -t onlymakeai .

# Run container
docker run -p 3000:3000 --env-file .env.local onlymakeai
```

### Environment-Specific Configuration

#### Production
- Enable caching and optimization
- Configure CDN for static assets
- Set up monitoring and alerts
- Enable rate limiting
- Configure backup strategies

#### Staging
- Mirror production setup
- Use separate database
- Enable detailed logging

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Write or update tests
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

### Pull Request Process

1. Ensure all tests pass
2. Update README if needed
3. Add description of changes
4. Request review from maintainers
5. Address review feedback

### Reporting Issues

When reporting issues, please include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, etc.)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 OnlyMakeAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Links

- **Website**: [https://onlymakeai.com](https://onlymakeai.com)
- **Documentation**: [https://docs.onlymakeai.com](https://docs.onlymakeai.com)
- **Discord**: [Join our community](https://discord.gg/onlymakeai)
- **Twitter**: [@onlymakeai](https://twitter.com/onlymakeai)
- **Blog**: [https://blog.onlymakeai.com](https://blog.onlymakeai.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [Vercel](https://vercel.com/) - Deployment platform
- [OpenAI](https://openai.com/) - AI models and APIs
- [Anthropic](https://anthropic.com/) - Claude AI models
- All our [contributors](https://github.com/onlymakeai/onlymakeai/graphs/contributors)

---

## 📞 Support

Need help? We're here for you:

- 📧 Email: support@onlymakeai.com
- 💬 Discord: [Join our server](https://discord.gg/onlymakeai)
- 📖 Docs: [docs.onlymakeai.com](https://docs.onlymakeai.com)
- 🐛 Issues: [GitHub Issues](https://github.com/onlymakeai/onlymakeai/issues)

---

<div align="center">
  <p>Made with ❤️ by the OnlyMakeAI Team</p>
  <p>
    <a href="https://github.com/onlymakeai/onlymakeai">⭐ Star us on GitHub</a> |
    <a href="https://twitter.com/onlymakeai">🐦 Follow on Twitter</a> |
    <a href="https://discord.gg/onlymakeai">💬 Join Discord</a>
  </p>
</div>