# Ntando Ndawonde Portfolio

BUILD A COMPLETE FULL-STACK PERSONAL PORTFOLIO WEBSITE FOR NTANDO NDAWONDE

I want a professional, polished, production-ready personal portfolio website.

This must be a REAL full-stack application with a separate frontend and custom backend.

DO NOT USE SUPABASE.
DO NOT USE FIREBASE.
DO NOT USE ANY BACKEND-AS-A-SERVICE PLATFORM.

Use a custom Node.js/Express backend and PostgreSQL database.

==================================================
1. TECHNOLOGY STACK
==================================================

FRONTEND:
- React
- TypeScript
- Tailwind CSS
- Vite
- Responsive design
- Reusable components

BACKEND:
- Node.js
- Express.js
- TypeScript
- REST API

DATABASE:
- PostgreSQL

AUTHENTICATION:
- JWT
- bcrypt/password hashing
- Protected admin routes

FILE HANDLING:
- Backend file upload system
- Multer or an appropriate secure upload library
- Store uploaded files on the backend/server
- Support images and PDF documents

ARCHITECTURE:

/frontend
/backend

Keep frontend and backend code clearly separated.

The React frontend must communicate with the backend through REST API endpoints.

==================================================
2. PERSONAL INFORMATION
==================================================

FULL NAME:

NTANDO NDAWONDE

PROFESSIONAL HEADLINE:

Computer Engineering Graduate | Software Developer | AWS Cloud Practitioner

LOCATION:

Bellville, South Africa

EMAIL:

ndawonden536@gmail.com

PHONE:

+27 73 102 2937

LINKEDIN:

https://www.linkedin.com/in/ntando-ndawonde-367540392

GITHUB:

https://github.com/Hackertho-viper

Use these exact LinkedIn and GitHub links.

Do not replace them with placeholder links.

Open external social links in a new browser tab securely.

==================================================
3. IMPORTANT EDUCATION RULE
==================================================

ONLY show:

Cape Peninsula University of Technology (CPUT)

National Diploma in Computer Engineering

Completed April 2025

VERY IMPORTANT:

DO NOT include a Bachelor's degree anywhere.

Do not mention a Bachelor's degree in:
- The Home page
- About section
- Education
- Resume/CV section
- Footer
- Metadata
- Admin dashboard
- Database seed data
- Page source
- Any generated text

The portfolio must contain NO Bachelor's degree information.

==================================================
4. DESIGN DIRECTION
==================================================

Create a premium, modern software-engineer portfolio.

The design must be:

- Clean
- Neat
- Professional
- Minimal
- Modern
- Technical
- Elegant
- Recruiter-friendly
- Easy to navigate

Do not make the website look like a generic template.

Do not make it look like a gaming website.

Do not overuse animations.

Do not use bright neon colors.

Do not use excessive gradients.

Do not use fake statistics.

Do not use fake testimonials.

Do not create fake employment experience.

Do not create fake companies.

Do not create fake project links.

Do not create fake certificates.

==================================================
5. COLOR PALETTE
==================================================

Use a dark blue and black visual identity.

Primary background:
#050A14

Secondary background:
#0A1220

Dark blue:
#0F1F3D

Blue accent:
#2563EB

Main text:
#F8FAFC

Secondary text:
#94A3B8

Use black and dark navy as the dominant background.

Use blue primarily for:
- Buttons
- Links
- Icons
- Borders
- Hover states
- Important highlights

Keep the blue subtle and professional.

The overall appearance should feel like a high-quality software engineer / cloud / technology portfolio.

==================================================
6. TYPOGRAPHY
==================================================

Use a modern professional sans-serif font.

Typography should have:

- Strong visual hierarchy
- Large but controlled hero heading
- Clean section headings
- Comfortable paragraph spacing
- Highly readable text
- Consistent font weights

Do not use overly decorative fonts.

==================================================
7. NAVIGATION
==================================================

Create a sticky navigation bar.

Navigation items:

Home
About
Skills
Projects
Certifications
Achievements
Education
Contact

Also include:

Download CV

On mobile:

Use a clean hamburger menu.

The mobile navigation must work properly.

Navigation should smoothly scroll to each section.

==================================================
8. HERO SECTION
==================================================

Create a strong professional Hero section.

Display:

NTANDO NDAWONDE

Computer Engineering Graduate | Software Developer | AWS Cloud Practitioner

Create a short professional introduction based ONLY on the information provided in this prompt.

Suggested direction:

A Computer Engineering graduate with practical experience across software development, cloud computing, IoT, embedded systems, networking, automation and computer graphics.

Do not exaggerate experience.

Hero buttons:

VIEW MY PROJECTS
DOWNLOAD CV
CONTACT ME

Also display:

LinkedIn
GitHub

Use the real URLs provided above.

==================================================
9. PROFILE PHOTO
==================================================

I have uploaded my actual professional photo to the Lovable project.

Use the uploaded photo.

Do NOT generate an AI replacement.

Do NOT use a stock photo.

Do NOT use a random placeholder.

Display the photo professionally in the Hero/About area.

Crop the image cleanly so the black bars/background space from the original image are not distracting.

Use a professional circular or softly rounded portrait presentation.

Do not apply excessive filters.

Add appropriate alt text.

The backend should support replacing the profile photo through the admin dashboard.

==================================================
10. ABOUT SECTION
==================================================

Create a professional About Me section.

Base the content on my actual skills, education, projects and achievements.

Mention my interests in:

- Software Development
- Cloud Engineering
- AWS
- Backend Development
- IoT
- Embedded Systems
- Automation

Do not invent employment history.

Do not claim professional experience that was not provided.

Keep the section concise and professional.

==================================================
11. TECHNICAL SKILLS
==================================================

Create a visually clean Skills section.

Organize the skills into categories.

PROGRAMMING:

Java
C
JavaScript
Python
HTML
CSS

SOFTWARE & WEB:

Node.js
React Native
MongoDB
NetBeans
VS Code
Git
GitHub
WebGL

CLOUD & INFRASTRUCTURE:

AWS
Amazon EC2
Amazon S3
IAM
Amazon VPC
Amazon CloudWatch
AWS Cloud Foundations

ENGINEERING:

Arduino
Embedded Systems
IoT
Sensors
MATLAB Simulink
Siemens TIA Portal
PLC Programming

NETWORKING:

Cisco Packet Tracer
Networking Fundamentals
VLANs
Routing
DHCP
NAT
ACLs
EtherChannel
STP
Port Security
Inter-VLAN Routing
Cisco IOS CLI

PROFESSIONAL STRENGTHS:

Problem Solving
Attention to Detail
Interpersonal Communication
Teamwork
Planning
Organisation
Coordination
Time Management
Troubleshooting
Adaptability
Leadership

Use clean skill cards or grouped lists.

Do not use fake percentage skill bars such as "95% Java".

==================================================
12. PROJECTS
==================================================

Create a professional Projects section.

Projects must be database-driven.

Do NOT hardcode all project information directly into the React components.

Create a PostgreSQL table:

projects

Fields:

id
title
description
technologies
image_url
github_url
live_demo_url
achievement
display_order
is_featured
created_at
updated_at

Create REST API endpoints:

GET /api/projects
GET /api/projects/:id
POST /api/projects
PUT /api/projects/:id
DELETE /api/projects/:id

Only authenticated admin users can create, update or delete projects.

==================================================
PROJECT 1
==================================================

Title:

GreenGuard SA – Smart Greenhouse Monitoring System

Technology:

Arduino
IoT
Sensors
Embedded Systems

Description:

A smart greenhouse monitoring and automation system developed to address overheating, poor soil conditions, and inefficient water usage.

The system integrates temperature, soil moisture, light and ultrasonic sensors with automated control features.

Achievement:

2nd Place — MICTSETA IoT Hackathon (2026)

Highlight this project as a featured project.

==================================================
PROJECT 2
==================================================

Title:

Smart Solar-Powered Washing Machine

Technology:

Java
Embedded Systems
Simulation Tools

Description:

An energy-efficient washing machine controller powered by solar energy, using adaptive power management and sensor integration for efficient operation.

==================================================
PROJECT 3
==================================================

Title:

Medical Appointment Management System

Technology:

C Programming

Description:

A C-based application enabling patients to book, view and manage appointments.

The system includes structured program logic and data flow between patients and doctors, with testing and debugging for reliable functionality.

==================================================
PROJECT 4
==================================================

Title:

PLC Four-Way Traffic Controller

Technology:

Siemens TIA Portal
PLC Programming

Description:

A four-way traffic light controller designed and simulated using PLC ladder logic.

Implemented timers and logical sequencing to manage traffic flow safely and efficiently.

==================================================
PROJECT 5
==================================================

Title:

Embedded System with Motor, Ultrasonic Sensor, LEDs and LCD Menu

Technology:

Arduino
Embedded Systems
Sensors

Description:

An embedded system integrating a motor, ultrasonic sensor, LEDs and an LCD menu interface.

The project demonstrates sensor integration and hardware-software interaction.

==================================================
PROJECT 6
==================================================

Title:

Cube Color Matcher / Crystal Gate Run

Technology:

WebGL
JavaScript
HTML
CSS

Description:

An interactive browser-based project using WebGL and JavaScript.

Implemented translation, rotation and scaling transformations, shaders, buffers, event handling and animation techniques.

==================================================
PROJECT LINKS
==================================================

Each project card may contain:

GitHub
Live Demo

BUT:

Only show these buttons when a real URL has been provided.

NEVER create fake GitHub URLs.

NEVER create fake live-demo URLs.

The admin dashboard must allow me to add these URLs later.

==================================================
13. CERTIFICATIONS
==================================================

Create a database-driven Certifications section.

Create PostgreSQL table:

certifications

Fields:

id
name
issuer
year
certificate_file
thumbnail
created_at
updated_at

REST API:

GET /api/certifications
POST /api/certifications
PUT /api/certifications/:id
DELETE /api/certifications/:id

Admin authentication is required for modifying certifications.

CERTIFICATION 1:

AWS Certified Cloud Practitioner (CLF-C02)

Year:
2026

CERTIFICATION 2:

AWS Academy Graduate – AWS Academy Cloud Foundations

Issuer:
AWS Academy

Year:
2026

Each certificate card must contain:

Certification name
Issuer
Year
View Certificate

The "View Certificate" button must open the actual uploaded certificate.

Do not invent certificate URLs.

==================================================
14. CERTIFICATE FILES
==================================================

I will provide/upload the actual certificate files.

The backend must allow the admin to:

- Upload certificate
- Replace certificate
- Delete certificate
- Upload certificate thumbnail
- Edit certificate information

Validate uploaded files.

Do not expose private or sensitive information from certificates as normal website text.

==================================================
15. CV / RESUME
==================================================

I have uploaded my CV PDF.

Use the actual uploaded CV.

Do NOT generate a fake CV.

Do NOT create a new CV.

Create backend functionality for the CV.

Only PDF files should be accepted for the CV.

API:

POST /api/cv

GET /api/cv

The public website must contain:

DOWNLOAD CV

The button must download or open the actual uploaded PDF.

The CV should not be embedded as a fake document.

The admin dashboard must allow me to replace the CV later.

==================================================
16. ACHIEVEMENTS
==================================================

Create an Achievements section.

Achievements:

2nd Place — MICTSETA IoT Hackathon (2026)

Distinction — Software Development 2 (2025)

Distinction — Engineering Physics 2 (2025)

Most Promising Young Player Award — SAB KZN Season (2021–2022)

Create a PostgreSQL table:

achievements

Fields:

id
title
description
year
display_order
created_at
updated_at

API:

GET /api/achievements
POST /api/achievements
PUT /api/achievements/:id
DELETE /api/achievements/:id

Admin authentication required for modifications.

Highlight the MICTSETA IoT Hackathon achievement prominently.

==================================================
17. EDUCATION
==================================================

Create a clean Education section.

ONLY show:

Cape Peninsula University of Technology (CPUT)

National Diploma in Computer Engineering

Completed April 2025

Do not include any Bachelor's degree.

Do not add additional degree information.

==================================================
18. CONTACT SECTION
==================================================

Create a professional Contact section.

Display:

Email:
ndawonden536@gmail.com

Phone:
+27 73 102 2937

Location:
Bellville, South Africa

Create buttons:

Email Me
Call Me
LinkedIn
GitHub

Email link:

mailto:ndawonden536@gmail.com

Phone link:

tel:+27731022937

LinkedIn:

https://www.linkedin.com/in/ntando-ndawonde-367540392

GitHub:

https://github.com/Hackertho-viper

==================================================
19. CONTACT FORM
==================================================

Create a fully functional contact form.

Fields:

Name
Email
Subject
Message

Frontend:

POST /api/contact

Backend:

Validate all input.

Store messages in PostgreSQL.

Create table:

contact_messages

Fields:

id
name
email
subject
message
created_at
is_read

Create:

GET /api/contact

Only authenticated admin users can access messages.

Admin should be able to:

- View messages
- Mark messages as read
- Delete messages

Never expose contact messages publicly.

Add basic spam/abuse protection and input validation.

==================================================
20. ADMIN AUTHENTICATION
==================================================

Create a private admin system.

Routes:

/admin/login
/admin

Admin login must use JWT authentication.

Use secure password hashing with bcrypt or an equivalent secure library.

Never store plain-text passwords.

Create authentication middleware.

Create authorization middleware.

Protect all admin API routes.

The public portfolio must NOT expose the admin dashboard.

==================================================
21. ADMIN DASHBOARD
==================================================

Create a professional admin dashboard.

Dashboard sections:

Overview
Projects
Certifications
Achievements
CV
Profile
Messages
Settings

The dashboard should be clean and easy to use.

Admin capabilities:

PROJECTS:
- Add
- Edit
- Delete
- Reorder
- Upload images
- Add GitHub URL
- Add live-demo URL
- Mark featured

CERTIFICATIONS:
- Add
- Edit
- Delete
- Upload certificate
- Replace certificate

ACHIEVEMENTS:
- Add
- Edit
- Delete
- Reorder

CV:
- Upload CV
- Replace CV
- Delete CV

PROFILE:
- Update name
- Update headline
- Update About text
- Update location
- Update email
- Update phone
- Upload profile photo
- Update LinkedIn
- Update GitHub

MESSAGES:
- View contact messages
- Mark as read
- Delete messages

==================================================
22. PROFILE DATABASE
==================================================

Create PostgreSQL table:

profiles

Fields:

id
name
headline
about
location
email
phone
profile_photo
linkedin_url
github_url
updated_at

API:

GET /api/profile

PUT /api/profile

The public frontend must retrieve profile information from the backend.

==================================================
23. FILE UPLOAD SYSTEM
==================================================

Use a secure backend upload system.

Suggested folders:

/backend/uploads/profile
/backend/uploads/cv
/backend/uploads/certificates
/backend/uploads/projects

Use appropriate file validation.

Profile/project images:
- JPG
- JPEG
- PNG
- WEBP

CV:
- PDF only

Certificates:
- PDF
- JPG
- JPEG
- PNG

Add reasonable file-size limits.

Do not allow executable files.

Use safe filenames.

==================================================
24. DATABASE
==================================================

Create PostgreSQL schema/migrations for:

users
profiles
projects
certifications
achievements
contact_messages

Use:

- Primary keys
- Timestamps
- Appropriate indexes
- Constraints
- Parameterized queries

Do not use insecure raw SQL string concatenation.

==================================================
25. BACKEND STRUCTURE
==================================================

Use a clean backend architecture.

Example:

backend/
  src/
    config/
    controllers/
    middleware/
    models/
    routes/
    services/
    utils/
    uploads/
    app.ts
    server.ts

Separate:

Routes
Controllers
Business logic
Database access
Authentication
Validation
File handling

Use proper HTTP status codes.

Return consistent JSON responses.

==================================================
26. API STRUCTURE
==================================================

Use REST APIs.

Suggested routes:

/api/auth/login

/api/profile

/api/projects
/api/projects/:id

/api/certifications
/api/certifications/:id

/api/achievements
/api/achievements/:id

/api/contact

/api/cv

/api/uploads

Use authentication middleware on protected routes.

==================================================
27. SECURITY
==================================================

Implement:

- JWT authentication
- Secure password hashing
- Authentication middleware
- Authorization middleware
- Input validation
- File validation
- File-size limits
- CORS configuration
- Secure HTTP headers
- Environment variables
- Proper error handling
- Parameterized SQL queries

Never expose:

- Database password
- JWT secret
- Admin password
- Other secrets

Create:

.env.example

Include variable names but NEVER include real secrets.

==================================================
28. ERROR HANDLING
==================================================

Create proper error handling.

Frontend should display clean messages such as:

"Something went wrong. Please try again."

Backend should log useful errors without exposing sensitive information to users.

Handle:

- Network errors
- Invalid forms
- Authentication failures
- Missing files
- Invalid uploads
- Database errors
- Unauthorized requests
- Not found errors

==================================================
29. RESPONSIVE DESIGN
==================================================

The portfolio must work perfectly on:

Desktop
Laptop
Tablet
Mobile

No horizontal scrolling.

Cards must resize correctly.

Text must remain readable.

Buttons must be easy to use on mobile.

The admin dashboard must also be responsive.

==================================================
30. ANIMATIONS
==================================================

Use subtle animations only.

Examples:

- Smooth scrolling
- Gentle fade-in sections
- Subtle hover effects
- Small card transitions
- Button hover states

Do NOT over-animate.

The website should feel fast and professional.

==================================================
31. FOOTER
==================================================

Create a clean footer.

Display:

NTANDO NDAWONDE

Computer Engineering Graduate | Software Developer | AWS Cloud Practitioner

Include:

LinkedIn
GitHub
Email

Use the real links.

==================================================
32. SEO
==================================================

Add proper SEO.

Page title:

Ntando Ndawonde | Computer Engineering Graduate | Software Developer

Meta description should professionally describe my background.

Add:

- Open Graph metadata
- Proper heading hierarchy
- Image alt text
- Semantic HTML

==================================================
33. ACCESSIBILITY
==================================================

Ensure:

- Good color contrast
- Keyboard navigation
- Accessible buttons
- Accessible form labels
- Proper alt text
- Semantic HTML
- Visible focus states

==================================================
34. PERFORMANCE
==================================================

Optimize the website for performance.

Use:

- Lazy loading where appropriate
- Optimized images
- Efficient API calls
- Reusable components
- Clean React state management

Avoid unnecessary dependencies.

==================================================
35. IMPORTANT CONTENT RULES
==================================================

Use ONLY real information supplied in this prompt.

Do NOT invent:

- Jobs
- Employers
- Clients
- Companies
- Statistics
- Awards
- Certifications
- GitHub repositories
- Project URLs
- Testimonials
- Work experience

Do not add an AI chatbot.

Do not add unnecessary features just to make the project look complicated.

The quality of the portfolio is more important than the number of features.

==================================================
36. FINAL CHECK BEFORE COMPLETION
==================================================

Before considering the project finished, test the complete application.

CHECK FRONTEND:

- Home works
- About works
- Skills works
- Projects work
- Certifications work
- Achievements work
- Education works
- Contact works
- Navigation works
- Mobile menu works
- Download CV works
- LinkedIn works
- GitHub works

CHECK BACKEND:

- Node.js server runs
- Express API works
- PostgreSQL connection works
- Authentication works
- JWT works
- Admin routes are protected
- CRUD operations work
- Contact form saves messages
- File uploads work
- CV upload/download works
- Certificate upload/viewing works
- Profile photo upload works

CHECK SECURITY:

- No secrets in frontend
- No plain-text passwords
- Admin routes protected
- Contact messages private
- File uploads validated
- Environment variables used

CHECK CONTENT:

Make absolutely sure there is NO Bachelor's degree anywhere.

Education must only show:

Cape Peninsula University of Technology (CPUT)
National Diploma in Computer Engineering
Completed April 2025

Make sure the LinkedIn URL is:

https://www.linkedin.com/in/ntando-ndawonde-367540392

Make sure the GitHub URL is:

https://github.com/Hackertho-viper

Make sure the website uses my actual uploaded photo.

Make sure the CV download uses my actual uploaded CV PDF.

Do not create fake certificates or fake files.

==================================================
37. FINAL DESIGN GOAL
==================================================

The final result should look like a serious professional portfolio that I can show to:

- Recruiters
- Software development companies
- Cloud/technology companies
- Graduate programmes
- Potential employers

It should communicate:

Computer Engineering
Software Development
Cloud Computing
AWS
Backend Development
IoT
Embedded Systems
Automation
Networking

The website must look clean, neat, professional and modern.

Use the dark blue + black theme consistently throughout the entire application.

Prioritize:

1. Professional design
2. Working frontend
3. Working backend
4. Database functionality
5. Security
6. Responsive design
7. Real personal information
8. Easy admin management

Do not add unnecessary complexity.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/62cd851c-28c9-4603-b9ef-3486716a9d6d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
