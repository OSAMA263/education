# Education Platform

A learning platform with role-based access for teachers and students. Teachers publish lessons and exams for three grade levels, and students unlock lessons, take timed exams, and track their results. All data lives in Supabase and updates live.

**Live demo:** [osama263.github.io/education](https://osama263.github.io/education/)

## Features

### Authentication and Roles
- Sign up and log in with Supabase Auth
- Two roles: **Admin** (teacher) and **User** (student)
- Create a profile with your personal data
- The dashboard is only accessible to admins

### Lessons
- Lessons and exams for three grades: Grade 1, Grade 2, and Grade 3
- Free and paid lessons
- Paid lessons are locked and cannot be watched unless you own them
- A list of the lessons you own
- Lessons can have a release date, and students cannot access them before it

### Exams
- Each exam has a different number of questions
- Every question has multiple answers to pick from
- A time limit starts counting as soon as you begin the exam
- Exams can only be taken once, no retakes
- Each exam has a start date and an expiry date, and it can only be taken in between

### Profile
- View the exams you took and your scores
- Update your profile data
- Change your password

### Admin Dashboard
- View all students, lessons, and exams
- Add, update, and delete lessons and exams
- Lessons: set a price or make them free, and set the date they become available
- Exams: set a start date and end date, add questions, add multiple answers to each question, and set a time limit that applies once a student starts

### Teacher Ownership
- Every lesson and exam shows which teacher created it
- Only the teacher who created a lesson or exam can edit or delete it

### Live Updates
- All data is stored on Supabase with live updating feedback

## Tech Stack

React, Vite, Supabase, TanStack Query, React Router, Chakra UI, Tailwind CSS, React Hook Form, Zod
