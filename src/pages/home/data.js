import {
  RiGlobalLine,
  RiBookOpenFill,
  RiGenderlessFill,
  RiFileList2Fill,
  RiLayoutGridFill,
  RiAwardFill,
  RiUser3Line,
  RiUserFollowLine,
  RiBookShelfLine,
  RiCalendar2Line,
} from "react-icons/ri";

const grid_cards = [
  {
    icon: RiGlobalLine,
    title: "Anytime, Anywhere Learning",
    service:
      "All you need is an internet connection. Our responsive platform works perfectly on desktops, tablets, and smartphones. so, you can learn from your home, on the bus, or even during your break at work.",
  },
  {
    icon: RiBookOpenFill,
    title: "Structured Online Courses",
    service:
      "Explore a wide variety of subjects taught by experienced educators. Each course is divided into modules and lessons that build progressively, helping students grasp core concepts with ease.",
  },
  {
    icon: RiGenderlessFill,
    title: "Interactive & Engaging Lessons",
    service:
      "Each lesson on EduPress is designed not just to teach, but to inspire. Our expert instructors use visuals, storytelling, real-life examples, and interactive quizzes to make even the most complex topics simple and enjoyable.",
  },
  {
    icon: RiFileList2Fill,
    title: "Exam Preparation Programs",
    service:
      "Whether you’re preparing for national exams like Thanaweya Amma or international ones like IGCSE or SAT, EduSphere provides dedicated exam-focused content, practice tests, and revision tools to boost your confidence.",
  },
  {
    icon: RiLayoutGridFill,
    title: "Teacher Dashboard",
    service:
      "If you're an educator, EduPress gives you the tools to create, upload, and manage your own courses, track student engagement, and receive feedback — all in one place.",
  },
  {
    icon: RiAwardFill,
    title: "Real Certification",
    service:
      "After completing a course or program, you’ll receive an official certificate you can add to your resume, share on LinkedIn, or print proudly. Show the world what you've accomplished.",
  },
];

const users_amount = [
  { icon: RiUser3Line, number: "2000", label: "Student" },
  { icon: RiUserFollowLine, number: "30", label: "Instructor" },
  { icon: RiBookShelfLine, number: "100", label: "Lessons" },
  { icon: RiCalendar2Line, number: "10", label: "Years Of Experience" },
];

const reviews = [
  {
    review:
      "I love how I can access my courses from anywhere. I study during my commute and review at night. The progress tracking keeps me motivated.",
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Shrekson MClovin",
    role: "student",
  },
  {
    review:
      "EduPress gives me the tools to upload lessons, manage my students, and track their progress easily. It’s modern, intuitive, and saves me a lot of time.",
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Rizzlord Gigglepants",
    role: "instructor",
  },
  {
    review:
      "I was struggling with math and physics, but the way the instructors explain concepts here is just brilliant. The quizzes and feedback really made me confident.",

    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Pepeo Pepewitz",
    role: "student",
  },
  {
    review:
      "I used to teach locally, but now I can reach students across Egypt and the Middle East. The platform supports videos, assignments, and even live sessions.",
    avatar: "https://i.pravatar.cc/150?img=4",
    name: "Sussy von Shrektok",
    role: "instructor",
  },
  {
    review:
      "The revision courses and exam simulations helped me prepare efficiently. I highly recommend this platform to any high schooler aiming for high scores.",
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "Cheemsly Cheemsworth",
    role: "student",
  },
];

export { grid_cards, users_amount, reviews };
