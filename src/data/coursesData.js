const coursesData = [
    {
      name: "Web Development Bootcamp",
      description: "Learn the fundamentals of web development using HTML, CSS, and JavaScript.",
      ytv: "https://www.youtube.com/embed/G10vMyRj8Aw",
      creatorName: "Sarah Johnson",
      creatorProfession: "Full Stack Developer",
      creatorProfile: "https://pbs.twimg.com/profile_images/1271544502340198400/8Fq7zjbq_400x400.jpg",
      stars: 5,
      usersReviewed: 1500,
      level: "All levels",
      status: false,
      language: "English",
      img: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        { name: "HTML Basics", description: "Introduction to HTML", ytv: "https://youtube.com/example1-1", status: false },
        { name: "CSS Basics", description: "Learn CSS for styling", ytv: "https://youtube.com/example1-2", status: false },
        { name: "JavaScript Basics", description: "Introduction to JavaScript", ytv: "https://youtube.com/example1-3", status: false },
        { name: "Responsive Design", description: "Learn responsive web design", ytv: "https://youtube.com/example1-4", status: false },
      ],
    },
    {
      name: "Python for Data Science",
      description: "Master Python programming for data analysis and visualization.",
      ytv: "https://www.youtube.com/embed/i9uAgkKEuNU",
      creatorName: "Michael Smith",
      creatorProfession: "Data Scientist",
      creatorProfile: "https://cdn.shopify.com/s/files/1/0313/7676/9157/files/Player-Profiles_Michael-Smith_1000x1000px.jpg?v=1687917909%22",
      stars: 4,
      usersReviewed: 1200,
      level: "Intermediate",
      status: false,
      language: "English",
      img: "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        { name: "Python Basics", description: "Learn Python fundamentals", ytv: "https://youtube.com/example2-1", status: false },
        { name: "Data Analysis", description: "Pandas for data analysis", ytv: "https://youtube.com/example2-2", status: false },
        { name: "Data Visualization", description: "Plotting with Matplotlib", ytv: "https://youtube.com/example2-3", status: false },
      ],
    },
    {
      name: "Full Stack Development",
      description: "Learn to build scalable full-stack web applications.",
      ytv: "https://www.youtube.com/embed/ZxKM3DCV2kE",
      creatorName: "Emily Davis",
      creatorProfession: "Software Engineer",
      creatorProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDyfV5EumlcN5ozihDQn5qh9LFyz-9zfadg&s",
      stars: 3,
      usersReviewed: 2000,
      level: "Beginner",
      status: false,
      language: "English",
      img: "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        { name: "Frontend Basics", description: "HTML, CSS, JS overview", ytv: "https://youtube.com/example3-1", status: false },
        { name: "Backend Basics", description: "Introduction to Node.js", ytv: "https://youtube.com/example3-2", status: false },
        { name: "Databases", description: "Database concepts and MongoDB", ytv: "https://youtube.com/example3-3", status: false },
        { name: "APIs", description: "Building REST APIs", ytv: "https://youtube.com/example3-4", status: false },
      ],
    },
    {
      name: "UI/UX Design Essentials",
      description: "Learn the basics of UI/UX design to create stunning interfaces.",
      ytv: "https://www.youtube.com/embed/dX8396ZmSPk",
      creatorName: "David Brown",
      creatorProfession: "UI/UX Designer",
      creatorProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxi01fApN6wDu1hzVBXLJ7UICS1bWfUfYg3A&s",
      stars: 4,
      usersReviewed: 800,
      level: "Intermediate",
      status: false,
      language: "English",
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        { name: "UX Basics", description: "Understanding user experience", ytv: "https://youtube.com/example4-1", status: false },
        { name: "Wireframing", description: "Creating wireframes", ytv: "https://youtube.com/example4-2", status: false },
        { name: "UI Basics", description: "Designing user interfaces", ytv: "https://youtube.com/example4-3", status: false },
      ],
    },
    {
      name: "Machine Learning Mastery",
      description: "Build machine learning models from scratch.",
      ytv: "https://www.youtube.com/embed/ZKlUDaV8bh4",
      creatorName: "Jessica Lee",
      creatorProfession: "Machine Learning Engineer",
      creatorProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlXf4VIXakCEHWx-kh82oklSk1oVIelRu-A&s",
      stars: 5,
      usersReviewed: 1800,
      level: "All levels",
      status: false,
      language: "English",
      img: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        { name: "ML Basics", description: "Introduction to machine learning", ytv: "https://youtube.com/example5-1", status: false },
        { name: "Linear Regression", description: "Understanding regression models", ytv: "https://youtube.com/example5-2", status: false },
        { name: "Classification", description: "Building classifiers", ytv: "https://youtube.com/example5-3", status: false },
        { name: "Deep Learning", description: "Introduction to neural networks", ytv: "https://youtube.com/example5-4", status: false },
      ],
    },
];
  
export default coursesData;
  