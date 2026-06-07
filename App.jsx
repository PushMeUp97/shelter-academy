import React, { useState } from 'react';

// --- SUB-COMPONENT: NAVBAR ---
function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>🎓</span> Shelter Academy
      </div>
      <div style={styles.rightMenu}>
        <a href="#explore" style={styles.link}>Explore</a>
        <button style={styles.loginBtn}>Sign In</button>
      </div>
    </nav>
  );
}

// --- SUB-COMPONENT: COURSE CARD ---
function CourseCard({ course }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageBlock}>
        <span style={styles.badge}>{course.tag}</span>
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.courseTitle}>{course.title}</h3>
        <p style={styles.desc}>{course.description}</p>
        <div style={styles.cardFooter}>
          <span style={styles.duration}>⏱️ {course.duration}</span>
          <button style={styles.enrollBtn}>Start Learning</button>
        </div>
      </div>
    </div>
  );
}

// --- MAIN APPLICATION INTERFACE ---
export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'AI & Digital Skills', 'Climate & Urban', 'Business & Growth'];

  const courses = [
    { 
      id: 1, 
      category: 'AI & Digital Skills', 
      title: 'Practical Gemini AI Course: Basic to Advanced', 
      description: 'Master prompting, automated research, and workplace AI integration.',
      duration: '450 Mins',
      tag: 'AI Literacy'
    },
    { 
      id: 2, 
      category: 'Business & Growth', 
      title: 'Affiliate Marketing & Passive Income Blueprint', 
      description: 'Learn how to generate sustainable income online using step-by-step marketing strategies.',
      duration: '320 Mins',
      tag: 'Marketing'
    },
    { 
      id: 3, 
      category: 'Business & Growth', 
      title: 'Freelancing Career Strategy for Everyone', 
      description: 'Build your profile, secure international clients, and price your services effectively.',
      duration: '280 Mins',
      tag: 'Freelancing'
    },
    { 
      id: 4, 
      category: 'AI & Digital Skills', 
      title: 'Website Creation & Monetization with Blogspot', 
      description: 'A complete beginner guide to building blogs and optimizing them for revenue.',
      duration: '390 Mins',
      tag: 'Web Dev'
    },
    { 
      id: 5, 
      category: 'Climate & Urban', 
      title: 'Urban Resilient Infrastructure & Climate Adaptation', 
      description: 'High-level training framework for building future-proof sustainable smart cities.',
      duration: '600 Mins',
      tag: 'Urban Planning'
    }
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div style={styles.container}>
      <Navbar />

      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Shelter Academy</h1>
        <p style={styles.subtitle}>Explore Online. Learn Anytime. Advance Your Future Skills.</p>
      </header>

      <div style={styles.tabContainer}>
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.tabButton,
              backgroundColor: activeCategory === cat ? '#2563eb' : '#fff',
              color: activeCategory === cat ? '#fff' : '#4b5563',
              border: activeCategory === cat ? '1px solid #2563eb' : '1px solid #e5e7eb',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <main style={styles.gridContainer}>
        <div style={styles.grid}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}

// --- GLOBAL STYLES OBJECT ---
const styles = {
  container: { backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1f2937' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontSize: '1.25rem', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  logoIcon: { fontSize: '1.5rem' },
  rightMenu: { display: 'flex', alignItems: 'center', gap: '1.5rem' },
  link: { textDecoration: 'none', color: '#4b5563', fontSize: '0.95rem', fontWeight: '500' },
  loginBtn: { backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0.5rem 1.2rem', borderRadius: '8px', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer' },
  hero: { textAlign: 'center', padding: '3.5rem 1rem 1.5rem 1rem' },
  heroTitle: { fontSize: '2.5rem', fontWeight: '800', color: '#111827', margin: '0 0 0.5rem 0' },
  subtitle: { fontSize: '1.1rem', color: '#6b7280', margin: 0 },
  tabContainer: { display: 'flex', justifyContent: 'center', gap: '0.75rem', margin: '1.5rem 0 2.5rem 0', flexWrap: 'wrap' },
  tabButton: { padding: '0.6rem 1.2rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
  gridContainer: { maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 4rem 1.5rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' },
  card: { backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', display: 'flex', flexDirection: 'column' },
  imageBlock: { height: '140px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
  badge: { position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#4f46e5', padding: '0.25rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' },
  cardContent: { padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  courseTitle: { fontSize: '1.1rem', fontWeight: '700', color: '#1f2937', margin: '0 0 0.5rem 0', lineHeight: '1.4' },
  desc: { fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.5', margin: '0 0 1.25rem 0', flexGrow: 1 },
  cardFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' },
  duration: { fontSize: '0.85rem', color: '#6b7280', fontWeight: '500' },
  enrollBtn: { backgroundColor: '#f3f4f6', color: '#1f2937', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer' }
};
