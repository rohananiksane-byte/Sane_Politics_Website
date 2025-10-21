# Sane Politics website

A comprehensive political education platform designed to inform citizens about global politics through accessible, nonpartisan analysis and educational resources.

## 🌐 About

Sane Politics is a full-stack web application that makes politics accessible to everyone. The platform provides real-time election tracking, curated political analysis articles, educational resources, and interactive data visualizations to promote informed civic engagement and democratic participation.

## 🛠️ Tech Stack

### Core Languages
- **TypeScript** - Type-safe development
- **JavaScript** - Runtime execution
- **HTML5** - Semantic markup
- **CSS3** - Modern styling

### Frameworks & Libraries
- **Next.js 15** - React framework with App Router for server-side rendering
- **React 19** - UI component library
- **Tailwind CSS v4** - Utility-first CSS framework with custom design tokens
- **Recharts** - Data visualization for election results
- **shadcn/ui** - Accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Development Tools
- **Node.js** - JavaScript runtime
- **TypeScript Compiler** - Type checking
- **ESLint** - Code quality
- **PostCSS** - CSS processing

## ✨ Features

### 📊 Election Tracking
- Real-time election results with interactive charts
- Bolivian Presidential Runoff results visualization
- German Federal Election statistics with party breakdowns
- Upcoming elections calendar covering 9 countries worldwide
- Regional filtering (Europe, Asia, Africa, Americas)

### 📰 Political Analysis
- 30+ curated articles across multiple categories
- Category-based filtering (Foreign Policy, Economic Strategy, Canadian Politics, Opinion & Editorial)
- Hash-based navigation for seamless browsing
- Reading time estimates for each article
- Featured author profiles with headshots

### 📚 Educational Resources
- Curated global news organizations
- Academic resources organized by topic
- Recommended political podcasts with descriptions
- Suggested books for political education
- Interactive filtering and search capabilities

### 🎨 Design & UX
- Fully responsive design (mobile, tablet, desktop)
- Professional navigation with mobile hamburger menu
- Smooth scroll-to-top functionality
- Semantic HTML with ARIA accessibility standards
- Custom design tokens for consistent theming
- 4x3 photo collage showcasing political imagery

### 📁 Project Structure
- ### sane-politics/
      - app/ – Next.js App Router pages
      - page.tsx – Homepage
      - articles/ – Articles page with filtering
      - election-models/ – Election tracking and results
      - learning-resources/ – Educational resources hub
      - about/ – About page with team info
- ### components/ – Reusable React components
      - navigation.tsx – Main navigation bar
      - footer.tsx – Site footer
      - ui/ – shadcn/ui components
- ### lib/ – Utility functions and data
      - articles-data.ts – Article content and metadata
- public/ – Static assets (images, etc.)
- app/globals.css – Global styles and Tailwind config


## 🎯 Key Pages

- **Home** (`/`) - Landing page with photo collage and feature overview
- **Articles** (`/articles`) - Political analysis with category filtering
- **Election Models** (`/election-models`) - Real-time election tracking and results
- **Educational Resources** (`/learning-resources`) - Curated learning materials
- **About** (`/about`) - Team information and contact details

## 🌟 Highlights

- **Type-Safe Development** - Full TypeScript implementation for reliability
- **Modern CSS** - Tailwind CSS v4 with custom design tokens
- **Server Components** - Optimized performance with Next.js App Router
- **Accessibility First** - WCAG compliant with semantic HTML and ARIA labels
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Data Visualization** - Interactive charts using Recharts library
- **External Integration** - Links to authoritative sources (NPR, Al Jazeera, European Parliament)

## 📊 Data Sources

Election data and political analysis sourced from:
- NPR (National Public Radio)
- Al Jazeera
- European Parliament Research
- AP News
- RTE (Ireland)
- Europe Elects
- And other authoritative political news organizations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


## 👤 Author

**Rohan Sane**
- Founder & Lead Analyst at Sane Politics
- Email: rsane@uwaterloo.ca

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
