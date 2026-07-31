import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const pdfPath = path.join(publicDir, 'Zahra-Zaranwala-Resume.pdf');
const writeStream = fs.createWriteStream(pdfPath);

doc.pipe(writeStream);

// Colors
const primaryColor = '#0f172a'; // Slate 900
const accentColor = '#0284c7';  // Cyan / Sky Blue
const textColor = '#334155';    // Slate 700
const lightColor = '#64748b';   // Slate 500

// Header
doc.fillColor(primaryColor).fontSize(24).font('Helvetica-Bold').text('ZAHRA ZARANWALA', { align: 'center' });
doc.moveDown(0.2);
doc.fillColor(accentColor).fontSize(12).font('Helvetica-Bold').text('Final Year Electronics & Communication Engineering Student | Building Intelligent Digital Solutions', { align: 'center' });
doc.moveDown(0.3);
doc.fillColor(lightColor).fontSize(9).font('Helvetica').text('Email: zaranwalazahra@gmail.com | LinkedIn: linkedin.com/in/gecdhd-ec-zahra | GitHub: github.com/zahratech123 | Location: Dahod, Gujarat, India', { align: 'center' });

doc.moveDown(0.8);
doc.strokeColor('#e2e8f0').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
doc.moveDown(0.8);

// Professional Summary
doc.fillColor(primaryColor).fontSize(13).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
doc.moveDown(0.3);
doc.fillColor(textColor).fontSize(10).font('Helvetica').text(
  'Final Year Electronics & Communication Engineering (ECE) student at Government Engineering College, Dahod, passionate about Artificial Intelligence, Embedded Systems, Signal Processing, and Automation. Dedicated to building intelligent digital solutions that combine hardware intelligence and software innovation.',
  { lineGap: 3 }
);

doc.moveDown(0.8);

// Education
doc.fillColor(primaryColor).fontSize(13).font('Helvetica-Bold').text('EDUCATION');
doc.moveDown(0.3);
doc.fillColor(primaryColor).fontSize(11).font('Helvetica-Bold').text('B.E. in Electronics & Communication Engineering (ECE)');
doc.fillColor(accentColor).fontSize(10).font('Helvetica-Oblique').text('Government Engineering College (GEC), Dahod, Gujarat, India | 2023 - Present');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text('Academic Focus: Communication Systems, Digital Signal Processing, Microcontrollers, Embedded Systems, and AI Application Workflows.');

doc.moveDown(0.8);

// Core Skills
doc.fillColor(primaryColor).fontSize(13).font('Helvetica-Bold').text('TECHNICAL SKILLS');
doc.moveDown(0.3);
doc.fillColor(textColor).fontSize(9.5).font('Helvetica');
doc.text('• Programming Languages: Python, JavaScript, HTML5, CSS3, ES6+', { lineGap: 2 });
doc.text('• Hardware & ECE: Embedded Systems Concepts, Microcontroller Logic, Signal Processing, MATLAB', { lineGap: 2 });
doc.text('• AI & Data Science: Machine Learning Fundamentals, Convolutional Neural Networks (CNNs), Generative AI & LLMs, Prompt Engineering', { lineGap: 2 });
doc.text('• Tools & Web Platforms: Git, GitHub, Version Control, GitHub Pages Deployment, REST API Integration', { lineGap: 2 });

doc.moveDown(0.8);

// Key Projects
doc.fillColor(primaryColor).fontSize(13).font('Helvetica-Bold').text('FEATURED PROJECTS');
doc.moveDown(0.3);

doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text('1. Premium Portfolio Website with AI Agent Integration');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text('Built a responsive personal branding website showcasing ECE milestones, 40+ certifications, and integrated Gemini AI Assistant for recruiter Q&A.', { lineGap: 2 });

doc.moveDown(0.4);
doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text('2. Zaranwala Grocery Web Application Concept');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text('Designed a digital grocery business model & web interface exploring e-commerce navigation, catalog management, and user interaction flow.', { lineGap: 2 });

doc.moveDown(0.4);
doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text('3. Interactive Calculator Web App');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text('Developed a clean web calculator with floating point arithmetic, keyboard shortcuts, and state handling in pure JavaScript.', { lineGap: 2 });

doc.moveDown(0.4);
doc.fillColor(primaryColor).fontSize(10.5).font('Helvetica-Bold').text('4. AI / ML Learning Progress Dashboard Concept');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica').text('Conceptualized an ML workflow tracker highlighting data splitting, model training metrics, and GenAI pipeline visualization.', { lineGap: 2 });

doc.moveDown(0.8);

// Achievements & Honors
doc.fillColor(primaryColor).fontSize(13).font('Helvetica-Bold').text('ACHIEVEMENTS & HONORS');
doc.moveDown(0.3);
doc.fillColor(textColor).fontSize(9.5).font('Helvetica');
doc.text('• 2 Gold Medals & 1 Silver Medal - Awarded in National Cadet Corps (NCC) for leadership, discipline, and rifle drill.', { lineGap: 2 });
doc.text('• Google Student Ambassador - Led campus technical events, community workshops, and technology awareness drives.', { lineGap: 2 });
doc.text('• Infosys Wingspan Badges - Earned DUELIST, WARRIOR, and ACE top-tier gamification badges for continuous technical mastery.', { lineGap: 2 });
doc.text('• 40+ Verified Certifications & Courses - Lean Six Sigma Yellow Belt, AWS Summit India, Data Science with AI, CNNs.', { lineGap: 2 });

doc.end();

writeStream.on('finish', () => {
  console.log('PDF generated successfully at:', pdfPath);
});
