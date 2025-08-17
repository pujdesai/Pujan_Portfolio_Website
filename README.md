# Pujan Desai - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a glassmorphic design.

**🌐 Live Website**: [https://pujan-portfolio.vercel.app/](https://pujan-portfolio.vercel.app/)

## 🌟 Features

### **Responsive Design**
- **Fully responsive** across all screen sizes (320px - 1600px+)
- **Custom breakpoints**: 2xs (320px), xs (480px), sm (600px), md (800px), lg (1096px), xl (1366px), 2xl (1600px+)
- **No page scroll** - all content fits within 100vh viewport
- **Touch-friendly** interface optimized for mobile devices

### **Interactive Components**
- **Loading Screen** - Animated progress bar with skip functionality
- **Navigation** - Dynamic navigation with Orb background effect
- **Profile Section** - Animated text and interactive elements
- **About Section** - Tabbed interface with education and experience
- **Skills Section** - Interactive skill cards with responsive pill layout
- **Projects Section** - Carousel with project demos and GitHub links
- **Contact Section** - Functional contact form with EmailJS integration

### **Design Elements**
- **Glassmorphic UI** - Frosted glass effects with backdrop blur
- **Smooth Animations** - Framer Motion powered transitions
- **Custom Cursor** - Interactive cursor effects
- **Floating Particles** - Animated background elements
- **Responsive Typography** - Scalable text across all devices

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### **Styling & Design**
- **Custom Fonts** - Nexora (primary) and Preospe (secondary)
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout techniques
- **Custom Breakpoints** - Tailored for specific screen sizes

### **External Services**
- **EmailJS** - Contact form functionality
- **GitHub** - Project repositories and deployment
- **LinkedIn** - Professional networking integration

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Description |
|------------|-------------|-------------|
| 2xs | 320px+ | Very small phones |
| xs | 480px+ | Small phones |
| sm | 600px+ | Large phones |
| md | 800px+ | Tablets |
| lg | 1096px+ | Small laptops |
| xl | 1366px+ | Large laptops |
| 2xl | 1600px+ | Desktop monitors |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pujdesai/pujan-portfolio-robot.git
   cd pujan-portfolio-robot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with tabs
│   ├── Contact.tsx        # Contact form and info
│   ├── CustomCursor.tsx   # Interactive cursor
│   ├── Loading.tsx        # Loading screen
│   ├── Navigation.tsx     # Main navigation
│   ├── Orb.tsx           # Animated background orb
│   ├── Profile.tsx       # Profile section
│   ├── Projects.tsx      # Projects carousel
│   ├── Section.tsx       # Section wrapper
│   └── Skills.tsx        # Skills grid
├── App.tsx               # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Design System

### **Colors**
- **Primary**: Indigo (#6366f1)
- **Background**: Dark theme with transparency
- **Text**: White with opacity variations
- **Accents**: Indigo with transparency

### **Typography**
- **Primary Font**: Nexora (headings)
- **Secondary Font**: Preospe (body text)
- **Responsive Scaling**: Progressive font sizing

### **Components**
- **Cards**: Glassmorphic with backdrop blur
- **Buttons**: Hover effects with scale animations
- **Forms**: Styled inputs with focus states
- **Navigation**: Interactive with hover effects

## 📧 Contact Form

The contact form uses EmailJS for seamless email delivery:

1. **Form Fields**: Name, Email, Subject, Message
2. **Validation**: Required field validation
3. **Status Feedback**: Loading, success, and error states
4. **Auto-reset**: Form clears after successful submission

## 🔧 Customization

### **Adding New Projects**
Edit `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description...",
    githubUrl: "https://github.com/...",
    hasDemo: true,
    demoUrl: "demo-image.png",
    skills: ["React", "TypeScript", "Tailwind"]
  }
];
```

### **Updating Skills**
Edit `src/components/Skills.tsx`:
```typescript
const skillsData = [
  {
    category: "Frontend",
    icon: "💻",
    skills: ["React", "TypeScript", "Tailwind CSS"]
  }
];
```

### **Modifying Breakpoints**
Edit `tailwind.config.js`:
```javascript
screens: {
  '2xs': '320px',
  'xs': '480px',
  'sm': '600px',
  'md': '800px',
  'lg': '1096px',
  'xl': '1366px',
  '2xl': '1600px',
}
```

## 🌐 Deployment

The website is optimized for deployment on various platforms:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

## 📞 Contact

- **Email**: desai.puj@northeastern.edu
- **LinkedIn**: [Pujan Desai](https://linkedin.com/in/pujandesai)
- **GitHub**: [pujdesai](https://github.com/pujdesai)

---
