const courseContents = {
  py: {
    id: "py",
    title: "Python for Beginners",
    price: 200,
    level: "Beginner",
    description: "Learn Python from scratch with hands-on projects.",
    thumbnail: "/images/python.jpg",

    modules: [
      // 🔓 FREE MODULE
      {
        title: "Getting Started with Python",
        free: true,
        lessons: [
          {
            id: "py-1",
            title: "What is Python?",
            duration: "08:20",
            video: "https://www.youtube.com/embed/rfscVS0vtbw",
            locked: false
          },
          {
            id: "py-2",
            title: "Installing Python & IDE",
            duration: "12:10",
            video: "https://www.youtube.com/embed/Y8Tko2YC5hA",
            locked: false
          }
        ]
      },

      // 🔒 PAID MODULES
      {
        title: "Python Basics",
        free: false,
        lessons: [
          {
            id: "py-3",
            title: "Variables & Data Types",
            duration: "15:30",
            video: "https://www.youtube.com/embed/kqtD5dpn9C8",
            locked: true
          },
          {
            id: "py-4",
            title: "Operators",
            duration: "11:50",
            video: "https://www.youtube.com/embed/kqtD5dpn9C8",
            locked: true
          },
          {
            id: "py-5",
            title: "Input & Output",
            duration: "09:40",
            video: "https://www.youtube.com/embed/kqtD5dpn9C8",
            locked: true
          }
        ]
      },

      {
        title: "Control Flow",
        free: false,
        lessons: [
          {
            id: "py-6",
            title: "If-Else Statements",
            duration: "13:25",
            video: "https://www.youtube.com/embed/6iF8Xb7Z3wQ",
            locked: true
          },
          {
            id: "py-7",
            title: "Loops (for & while)",
            duration: "18:10",
            video: "https://www.youtube.com/embed/6iF8Xb7Z3wQ",
            locked: true
          }
        ]
      },

      {
        title: "Final Project & Assessment",
        free: false,
        lessons: [
          {
            id: "py-8",
            title: "Mini Project: Calculator App",
            duration: "25:00",
            video: "https://www.youtube.com/embed/8PopR3x-VMY",
            locked: true
          },
          {
            id: "py-9",
            title: "Final Quiz & Submission",
            duration: "10:00",
            video: null,
            locked: true
          }
        ]
      }
    ] 
},
  
  c: {
  id: "c",
  title: "C Programming Mastery",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Master C programming from basics to real-world projects.",
  thumbnail: "/images/c.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Getting Started with C",
      free: true,
      lessons: [
        {
          id: "c-1",
          title: "Introduction to C Programming",
          duration: "10:15",
          video: "https://www.youtube.com/embed/KJgsSFOSQv0",
          locked: false
        },
        {
          id: "c-2",
          title: "History & Applications of C",
          duration: "08:30",
          video: "https://www.youtube.com/embed/irqbmMNs2Bo",
          locked: false
        },
        {
          id: "c-3",
          title: "Installing C Compiler (GCC)",
          duration: "12:00",
          video: "https://www.youtube.com/embed/PaPN51Mm5qQ",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "C Fundamentals",
      free: false,
      lessons: [
        {
          id: "c-4",
          title: "Structure of a C Program",
          duration: "14:20",
          video: "https://www.youtube.com/embed/7_ps8IipC5A",
          locked: true
        },
        {
          id: "c-5",
          title: "Variables & Data Types",
          duration: "16:10",
          video: "https://www.youtube.com/embed/irqbmMNs2Bo",
          locked: true
        },
        {
          id: "c-6",
          title: "Input & Output (scanf, printf)",
          duration: "11:45",
          video: "https://www.youtube.com/embed/7_ps8IipC5A",
          locked: true
        }
      ]
    },

    {
      title: "Control Statements",
      free: false,
      lessons: [
        {
          id: "c-7",
          title: "Conditional Statements",
          duration: "13:00",
          video: "https://www.youtube.com/embed/7_ps8IipC5A",
          locked: true
        },
        {
          id: "c-8",
          title: "Loops (for, while, do-while)",
          duration: "18:30",
          video: "https://www.youtube.com/embed/7_ps8IipC5A",
          locked: true
        },
        {
          id: "c-9",
          title: "Break & Continue",
          duration: "07:40",
          video: "https://www.youtube.com/embed/7_ps8IipC5A",
          locked: true
        }
      ]
    },

    {
      title: "Functions & Arrays",
      free: false,
      lessons: [
        {
          id: "c-10",
          title: "Functions in C",
          duration: "15:20",
          video: "https://www.youtube.com/embed/8PopR3x-VMY",
          locked: true
        },
        {
          id: "c-11",
          title: "Arrays (1D & 2D)",
          duration: "17:10",
          video: "https://www.youtube.com/embed/8PopR3x-VMY",
          locked: true
        }
      ]
    },

    {
      title: "Pointers & Memory",
      free: false,
      lessons: [
        {
          id: "c-12",
          title: "Introduction to Pointers",
          duration: "20:00",
          video: "https://www.youtube.com/embed/IrGjyfBC-u0",
          locked: true
        },
        {
          id: "c-13",
          title: "Pointer Arithmetic",
          duration: "14:50",
          video: "https://www.youtube.com/embed/IrGjyfBC-u0",
          locked: true
        }
      ]
    },

    {
      title: "Structures & File Handling",
      free: false,
      lessons: [
        {
          id: "c-14",
          title: "Structures & Unions",
          duration: "13:40",
          video: "https://www.youtube.com/embed/8PopR3x-VMY",
          locked: true
        },
        {
          id: "c-15",
          title: "File Handling in C",
          duration: "16:30",
          video: "https://www.youtube.com/embed/8PopR3x-VMY",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "c-16",
          title: "Mini Project: Student Record System",
          duration: "30:00",
          video: "https://www.youtube.com/embed/8PopR3x-VMY",
          locked: true
        },
        {
          id: "c-17",
          title: "Final Assessment & Submission",
          duration: "12:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
  
java: {
    id: "java",
    title: "Java Programming Mastery",
    price: 200,
    level: "Beginner to Advanced",
    description: "Master Java from basics to OOP, collections, and projects.",
    thumbnail: "/images/java.jpg",

    modules: [
      // 🔓 FREE
      {
        title: "Java Introduction",
        free: true,
        lessons: [
          {
            id: "java-1",
            title: "What is Java?",
            duration: "09:30",
            video: "https://www.youtube.com/embed/grEKMHGYyns",
            locked: false
          },
          {
            id: "java-2",
            title: "JDK, JRE, JVM Explained",
            duration: "12:40",
            video: "https://www.youtube.com/embed/WPvGqX-TXP0",
            locked: false
          }
        ]
      },

      // 🔒 PAID
      {
        title: "Java Basics",
        free: false,
        lessons: [
          {
            id: "java-3",
            title: "Variables & Data Types",
            duration: "14:50",
            video: "https://www.youtube.com/embed/WPvGqX-TXP0",
            locked: true
          },
          {
            id: "java-4",
            title: "Control Statements",
            duration: "16:20",
            video: "https://www.youtube.com/embed/6T_HgnjoYwM",
            locked: true
          }
        ]
      },

      {
        title: "Object-Oriented Programming",
        free: false,
        lessons: [
          {
            id: "java-5",
            title: "Classes & Objects",
            duration: "18:30",
            video: "https://www.youtube.com/embed/WPvGqX-TXP0",
            locked: true
          },
          {
            id: "java-6",
            title: "Inheritance & Polymorphism",
            duration: "21:10",
            video: "https://www.youtube.com/embed/6T_HgnjoYwM",
            locked: true
          }
        ]
      },

      {
        title: "Final Project & Certification",
        free: false,
        lessons: [
          {
            id: "java-7",
            title: "Mini Project: Banking Application",
            duration: "30:00",
            video: "https://www.youtube.com/embed/6T_HgnjoYwM",
            locked: true
          },
          {
            id: "java-8",
            title: "Final Quiz & Submission",
            duration: "10:00",
            video: null,
            locked: true
          }
        ]
      }
    ]
  },
cpp: {
  id: "cpp",
  title: "C++ for Competitive Coding",
  price: 200,
  level: "Beginner to Advanced",
  description: "Master C++ with STL, problem solving, and competitive programming.",
  thumbnail: "/images/cpp.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Getting Started with C++",
      free: true,
      lessons: [
        {
          id: "cpp-1",
          title: "Introduction to C++",
          duration: "09:40",
          video: "https://www.youtube.com/embed/vLnPwxZdW4Y",
          locked: false
        },
        {
          id: "cpp-2",
          title: "Setting up Compiler & IDE",
          duration: "11:20",
          video: "https://www.youtube.com/embed/1v_4dL8l9kI",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "C++ Fundamentals",
      free: false,
      lessons: [
        {
          id: "cpp-3",
          title: "Variables & Data Types",
          duration: "14:30",
          video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          locked: true
        },
        {
          id: "cpp-4",
          title: "Operators & Expressions",
          duration: "12:10",
          video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          locked: true
        }
      ]
    },

    {
      title: "Control Flow",
      free: false,
      lessons: [
        {
          id: "cpp-5",
          title: "If-Else & Switch",
          duration: "13:45",
          video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          locked: true
        },
        {
          id: "cpp-6",
          title: "Loops in C++",
          duration: "17:30",
          video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          locked: true
        }
      ]
    },

    {
      title: "Functions & OOP",
      free: false,
      lessons: [
        {
          id: "cpp-7",
          title: "Functions & Recursion",
          duration: "16:00",
          video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          locked: true
        },
        {
          id: "cpp-8",
          title: "Classes & Objects",
          duration: "19:10",
          video: "https://www.youtube.com/embed/8jLOx1hD3_o",
          locked: true
        }
      ]
    },

    {
      title: "STL & Competitive Coding",
      free: false,
      lessons: [
        {
          id: "cpp-9",
          title: "STL Containers (Vector, Map, Set)",
          duration: "22:30",
          video: "https://www.youtube.com/embed/g-1Cn3ccwXY",
          locked: true
        },
        {
          id: "cpp-10",
          title: "Algorithms & Problem Solving",
          duration: "24:00",
          video: "https://www.youtube.com/embed/g-1Cn3ccwXY",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "cpp-11",
          title: "Mini Project: Competitive Problem Solver",
          duration: "30:00",
          video: "https://www.youtube.com/embed/g-1Cn3ccwXY",
          locked: true
        },
        {
          id: "cpp-12",
          title: "Final Assessment & Submission",
          duration: "10:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},

csharp: {
  id: "csharp",
  title: "C# & .NET Fundamentals",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Learn C# and .NET from scratch and build real-world applications.",
  thumbnail: "/images/csharp.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Getting Started with C#",
      free: true,
      lessons: [
        {
          id: "cs-1",
          title: "What is C# & .NET?",
          duration: "09:30",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: false
        },
        {
          id: "cs-2",
          title: "Installing Visual Studio",
          duration: "12:40",
          video: "https://www.youtube.com/embed/0QUgvfuKvWU",
          locked: false
        },
        {
          id: "cs-3",
          title: "First C# Program",
          duration: "10:20",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "C# Fundamentals",
      free: false,
      lessons: [
        {
          id: "cs-4",
          title: "Variables & Data Types",
          duration: "15:10",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: true
        },
        {
          id: "cs-5",
          title: "Operators & Expressions",
          duration: "13:30",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: true
        },
        {
          id: "cs-6",
          title: "Input & Output",
          duration: "11:00",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: true
        }
      ]
    },

    {
      title: "Control Flow",
      free: false,
      lessons: [
        {
          id: "cs-7",
          title: "If-Else & Switch",
          duration: "14:20",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: true
        },
        {
          id: "cs-8",
          title: "Loops in C#",
          duration: "18:10",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: true
        }
      ]
    },

    {
      title: "OOP in C#",
      free: false,
      lessons: [
        {
          id: "cs-9",
          title: "Classes & Objects",
          duration: "19:30",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: true
        },
        {
          id: "cs-10",
          title: "Inheritance & Polymorphism",
          duration: "21:00",
          video: "https://www.youtube.com/embed/GhQdlIFylQ8",
          locked: true
         }
        ]
      }
    ]
  },
  rust: {
  id: "rust",
  title: "Rust Programming Essentials",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Learn Rust programming with safety, performance, and real projects.",
  thumbnail: "/images/rust.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Getting Started with Rust",
      free: true,
      lessons: [
        {
          id: "rust-1",
          title: "What is Rust?",
          duration: "08:50",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: false
        },
        {
          id: "rust-2",
          title: "Installing Rust & Cargo",
          duration: "11:30",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Rust Basics",
      free: false,
      lessons: [
        {
          id: "rust-3",
          title: "Variables & Mutability",
          duration: "15:10",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-4",
          title: "Data Types",
          duration: "13:40",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    {
      title: "Control Flow",
      free: false,
      lessons: [
        {
          id: "rust-5",
          title: "If & Match",
          duration: "14:20",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-6",
          title: "Loops in Rust",
          duration: "16:50",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    {
      title: "Ownership & Borrowing",
      free: false,
      lessons: [
        {
          id: "rust-7",
          title: "Ownership Explained",
          duration: "20:00",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-8",
          title: "Borrowing & Lifetimes",
          duration: "18:30",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    {
      title: "Structs & Enums",
      free: false,
      lessons: [
        {
          id: "rust-9",
          title: "Structs & Methods",
          duration: "17:10",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "rust-10",
          title: "Mini Project: CLI Tool",
          duration: "30:00",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-11",
          title: "Final Assessment",
          duration: "10:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
rust: {
  id: "rust",
  title: "Rust Programming Essentials",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Learn Rust programming with safety, performance, and real projects.",
  thumbnail: "/images/rust.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Getting Started with Rust",
      free: true,
      lessons: [
        {
          id: "rust-1",
          title: "What is Rust?",
          duration: "08:50",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: false
        },
        {
          id: "rust-2",
          title: "Installing Rust & Cargo",
          duration: "11:30",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Rust Basics",
      free: false,
      lessons: [
        {
          id: "rust-3",
          title: "Variables & Mutability",
          duration: "15:10",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-4",
          title: "Data Types",
          duration: "13:40",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    {
      title: "Control Flow",
      free: false,
      lessons: [
        {
          id: "rust-5",
          title: "If & Match",
          duration: "14:20",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-6",
          title: "Loops in Rust",
          duration: "16:50",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    {
      title: "Ownership & Borrowing",
      free: false,
      lessons: [
        {
          id: "rust-7",
          title: "Ownership Explained",
          duration: "20:00",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-8",
          title: "Borrowing & Lifetimes",
          duration: "18:30",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    {
      title: "Structs & Enums",
      free: false,
      lessons: [
        {
          id: "rust-9",
          title: "Structs & Methods",
          duration: "17:10",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "rust-10",
          title: "Mini Project: CLI Tool",
          duration: "30:00",
          video: "https://www.youtube.com/embed/zF34dRivLOw",
          locked: true
        },
        {
          id: "rust-11",
          title: "Final Assessment",
          duration: "10:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
kotlin: {
  id: "kotlin",
  title: "Kotlin for Android",
  price: 200,
  level: "Beginner to Advanced",
  description: "Build modern Android apps using Kotlin and Android Studio.",
  thumbnail: "/images/kotlin.jpg",

  modules: [
    {
      title: "Getting Started with Kotlin",
      free: true,
      lessons: [
        { id: "kt-1", title: "What is Kotlin?", duration: "09:10", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: false },
        { id: "kt-2", title: "Installing Android Studio", duration: "12:40", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: false }
      ]
    },
    {
      title: "Kotlin Basics",
      free: false,
      lessons: [
        { id: "kt-3", title: "Variables & Data Types", duration: "15:00", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: true },
        { id: "kt-4", title: "Functions & Conditions", duration: "14:20", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: true }
      ]
    },
    {
      title: "Android UI",
      free: false,
      lessons: [
        { id: "kt-5", title: "Layouts & Views", duration: "18:30", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: true },
        { id: "kt-6", title: "RecyclerView", duration: "16:40", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: true }
      ]
    },
    {
      title: "Android Advanced",
      free: false,
      lessons: [
        { id: "kt-7", title: "Intents & Navigation", duration: "14:50", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: true },
        { id: "kt-8", title: "Firebase Integration", duration: "19:20", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: true }
      ]
    },
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        { id: "kt-9", title: "Build Android App", duration: "35:00", video: "https://www.youtube.com/embed/F9UC9DY-vIU", locked: true },
        { id: "kt-10", title: "Final Assessment", duration: "10:00", video: null, locked: true }
      ]
    }
  ]
},
web: {
  id: "web",
  title: "HTML, CSS & JavaScript",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Learn web development from scratch.",
  thumbnail: "/images/web.jpg",

  modules: [
    {
      title: "Web Basics",
      free: true,
      lessons: [
        { id: "web-1", title: "How Web Works", duration: "08:30", video: "https://www.youtube.com/embed/qz0aGYrrlhU", locked: false },
        { id: "web-2", title: "HTML Structure", duration: "12:10", video: "https://www.youtube.com/embed/qz0aGYrrlhU", locked: false }
      ]
    },
    {
      title: "CSS Styling",
      free: false,
      lessons: [
        { id: "web-3", title: "CSS Basics", duration: "15:40", video: "https://www.youtube.com/embed/qz0aGYrrlhU", locked: true },
        { id: "web-4", title: "Flexbox & Grid", duration: "18:00", video: "https://www.youtube.com/embed/qz0aGYrrlhU", locked: true }
      ]
    },
    {
      title: "JavaScript Fundamentals",
      free: false,
      lessons: [
        { id: "web-5", title: "Variables & Functions", duration: "16:20", video: "https://www.youtube.com/embed/PkZNo7MFNFg", locked: true },
        { id: "web-6", title: "DOM Manipulation", duration: "19:10", video: "https://www.youtube.com/embed/PkZNo7MFNFg", locked: true }
      ]
    },
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        { id: "web-7", title: "Portfolio Website", duration: "30:00", video: "https://www.youtube.com/embed/PkZNo7MFNFg", locked: true },
        { id: "web-8", title: "Final Assessment", duration: "10:00", video: null, locked: true }
      ]
    }
  ]
},
react: {
  id: "react",
  title: "React.js Bootcamp",
  price: 200,
  level: "Intermediate",
  description: "Build modern frontend apps using React.",
  thumbnail: "/images/react.jpg",

  modules: [
    {
      title: "React Basics",
      free: true,
      lessons: [
        { id: "r-1", title: "Intro to React", duration: "09:30", video: "https://www.youtube.com/embed/bMknfKXIFA8", locked: false }
      ]
    },
    {
      title: "Core Concepts",
      free: false,
      lessons: [
        { id: "r-2", title: "JSX & Components", duration: "16:00", video: "https://www.youtube.com/embed/bMknfKXIFA8", locked: true },
        { id: "r-3", title: "State & Props", duration: "18:10", video: "https://www.youtube.com/embed/bMknfKXIFA8", locked: true }
      ]
    },
    {
      title: "Advanced React",
      free: false,
      lessons: [
        { id: "r-4", title: "Hooks", duration: "20:00", video: "https://www.youtube.com/embed/bMknfKXIFA8", locked: true },
        { id: "r-5", title: "API Integration", duration: "17:50", video: "https://www.youtube.com/embed/bMknfKXIFA8", locked: true }
      ]
    },
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        { id: "r-6", title: "Build React App", duration: "35:00", video: "https://www.youtube.com/embed/bMknfKXIFA8", locked: true }
      ]
    }
  ]
},
node: {
  id: "node",
  title: "Backend with Node.js",
  price: 200,
  level: "Intermediate",
  description: "Create REST APIs using Node.js & Express.",
  thumbnail: "/images/node.jpg",

  modules: [
    {
      title: "Node Basics",
      free: true,
      lessons: [
        { id: "n-1", title: "What is Node.js?", duration: "10:00", video: "https://www.youtube.com/embed/TlB_eWDSMt4", locked: false }
      ]
    },
    {
      title: "Express & APIs",
      free: false,
      lessons: [
        { id: "n-2", title: "Express Framework", duration: "15:40", video: "https://www.youtube.com/embed/TlB_eWDSMt4", locked: true },
        { id: "n-3", title: "REST APIs", duration: "18:00", video: "https://www.youtube.com/embed/TlB_eWDSMt4", locked: true }
      ]
    },
    {
      title: "Database",
      free: false,
      lessons: [
        { id: "n-4", title: "MongoDB Integration", duration: "20:10", video: "https://www.youtube.com/embed/TlB_eWDSMt4", locked: true }
      ]
    },
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        { id: "n-5", title: "Build REST API", duration: "35:00", video: "https://www.youtube.com/embed/TlB_eWDSMt4", locked: true }
      ]
    }
  ]
},
django: {
  id: "django",
  title: "Django Full Stack",
  price: 200,
  level: "Beginner to Advanced",
  description: "Build full-stack web applications using Django, REST APIs, authentication, and deployment.",
  thumbnail: "/images/django.jpg",

  modules: [

    // 🔓 FREE MODULE
    {
      title: "Getting Started with Django",
      free: true,
      lessons: [
        {
          id: "dj-1",
          title: "What is Django & Why Use It?",
          duration: "09:20",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: false
        },
        {
          id: "dj-2",
          title: "Installing Python & Django",
          duration: "12:30",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: false
        },
        {
          id: "dj-3",
          title: "Django Project Structure",
          duration: "11:40",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Django Core Fundamentals",
      free: false,
      lessons: [
        {
          id: "dj-4",
          title: "Creating Apps & URL Routing",
          duration: "16:10",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-5",
          title: "Views & HTTP Responses",
          duration: "14:50",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    {
      title: "Templates & Static Files",
      free: false,
      lessons: [
        {
          id: "dj-6",
          title: "HTML Templates & Jinja",
          duration: "18:00",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-7",
          title: "CSS, JS & Static Files",
          duration: "15:40",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    {
      title: "Database & ORM",
      free: false,
      lessons: [
        {
          id: "dj-8",
          title: "Models & Database Design",
          duration: "20:30",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-9",
          title: "Django ORM Queries",
          duration: "19:10",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-10",
          title: "Migrations & Admin Panel",
          duration: "14:00",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    {
      title: "Forms & User Input",
      free: false,
      lessons: [
        {
          id: "dj-11",
          title: "Django Forms",
          duration: "13:45",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-12",
          title: "Model Forms & Validation",
          duration: "16:20",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    {
      title: "Authentication & Authorization",
      free: false,
      lessons: [
        {
          id: "dj-13",
          title: "User Login & Registration",
          duration: "21:30",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-14",
          title: "Permissions & User Roles",
          duration: "17:40",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    {
      title: "REST APIs with Django REST Framework",
      free: false,
      lessons: [
        {
          id: "dj-15",
          title: "Introduction to DRF",
          duration: "14:30",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-16",
          title: "Serializers & API Views",
          duration: "18:50",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-17",
          title: "JWT Authentication",
          duration: "20:00",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    {
      title: "Frontend Integration",
      free: false,
      lessons: [
        {
          id: "dj-18",
          title: "Connecting Django with React",
          duration: "19:40",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-19",
          title: "CORS & API Security",
          duration: "13:30",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    {
      title: "Deployment & Production",
      free: false,
      lessons: [
        {
          id: "dj-20",
          title: "Environment Variables & Settings",
          duration: "12:50",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-21",
          title: "Deploying Django App (Railway/Render)",
          duration: "22:00",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "dj-22",
          title: "Full Stack Project: Course Management System",
          duration: "45:00",
          video: "https://www.youtube.com/embed/F5mRW0jo-U4",
          locked: true
        },
        {
          id: "dj-23",
          title: "Final Assessment & Certificate Generation",
          duration: "10:00",
          video: null,
          locked: true
        }
      ]
    }

  ]
},
spring: {
  id: "spring",
  title: "Spring Boot & Java APIs",
  price: 200,
  level: "Beginner to Advanced",
  description: "Build production-ready REST APIs using Spring Boot, JPA, Security, and Microservices concepts.",
  thumbnail: "/images/spring.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Getting Started with Spring Boot",
      free: true,
      lessons: [
        {
          id: "sp-1",
          title: "What is Spring & Spring Boot?",
          duration: "09:30",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: false
        },
        {
          id: "sp-2",
          title: "Spring Boot Installation & Project Setup",
          duration: "12:10",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Core Spring Boot Concepts",
      free: false,
      lessons: [
        {
          id: "sp-3",
          title: "Spring Boot Project Structure",
          duration: "14:20",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        },
        {
          id: "sp-4",
          title: "Dependency Injection & Annotations",
          duration: "18:40",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        }
      ]
    },

    {
      title: "REST API Development",
      free: false,
      lessons: [
        {
          id: "sp-5",
          title: "Creating REST Controllers",
          duration: "16:30",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        },
        {
          id: "sp-6",
          title: "Request Mapping & HTTP Methods",
          duration: "15:50",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        }
      ]
    },

    {
      title: "Spring Data JPA & Database",
      free: false,
      lessons: [
        {
          id: "sp-7",
          title: "JPA & Hibernate Basics",
          duration: "19:10",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        },
        {
          id: "sp-8",
          title: "CRUD Operations with MySQL",
          duration: "21:00",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        }
      ]
    },

    {
      title: "Exception Handling & Validation",
      free: false,
      lessons: [
        {
          id: "sp-9",
          title: "Global Exception Handling",
          duration: "13:40",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        },
        {
          id: "sp-10",
          title: "Request Validation with Hibernate Validator",
          duration: "14:50",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        }
      ]
    },

    {
      title: "Spring Security",
      free: false,
      lessons: [
        {
          id: "sp-11",
          title: "Spring Security Basics",
          duration: "20:10",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        },
        {
          id: "sp-12",
          title: "JWT Authentication & Authorization",
          duration: "25:00",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        }
      ]
    },

    {
      title: "Microservices & Deployment",
      free: false,
      lessons: [
        {
          id: "sp-13",
          title: "Microservices with Spring Boot",
          duration: "18:30",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        },
        {
          id: "sp-14",
          title: "Dockerizing Spring Boot Application",
          duration: "17:40",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "sp-15",
          title: "Final Project: REST API for E-Commerce",
          duration: "40:00",
          video: "https://www.youtube.com/embed/9SGDpanrc8U",
          locked: true
        },
        {
          id: "sp-16",
          title: "Final Assessment & Certificate Generation",
          duration: "12:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
dsa: {
  id: "dsa",
  title: "Data Structures & Algorithms",
  price: 200,
  level: "Beginner to Advanced",
  description: "Master Data Structures and Algorithms with step-by-step explanations, coding practice, and real interview problems.",
  thumbnail: "/images/dsa.jpg",

  modules: [

    // 🔓 FREE MODULE
    {
      title: "Introduction to DSA",
      free: true,
      lessons: [
        {
          id: "dsa-1",
          title: "What is Data Structures & Algorithms?",
          duration: "10:00",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: false
        },
        {
          id: "dsa-2",
          title: "Why DSA is Important for Placements",
          duration: "08:30",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Time & Space Complexity",
      free: false,
      lessons: [
        {
          id: "dsa-3",
          title: "Big-O Notation",
          duration: "15:40",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-4",
          title: "Best, Average & Worst Case",
          duration: "12:20",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Arrays & Strings",
      free: false,
      lessons: [
        {
          id: "dsa-5",
          title: "Array Basics & Operations",
          duration: "18:00",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-6",
          title: "String Manipulation Problems",
          duration: "20:30",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Linked List",
      free: false,
      lessons: [
        {
          id: "dsa-7",
          title: "Singly Linked List",
          duration: "22:10",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-8",
          title: "Doubly & Circular Linked List",
          duration: "19:50",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Stack & Queue",
      free: false,
      lessons: [
        {
          id: "dsa-9",
          title: "Stack Implementation & Applications",
          duration: "17:45",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-10",
          title: "Queue, Deque & Priority Queue",
          duration: "18:30",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Recursion & Backtracking",
      free: false,
      lessons: [
        {
          id: "dsa-11",
          title: "Recursion Basics",
          duration: "16:20",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-12",
          title: "Backtracking Problems",
          duration: "21:00",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Searching & Sorting",
      free: false,
      lessons: [
        {
          id: "dsa-13",
          title: "Linear & Binary Search",
          duration: "14:50",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-14",
          title: "Bubble, Selection & Insertion Sort",
          duration: "20:10",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-15",
          title: "Merge Sort & Quick Sort",
          duration: "23:40",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Trees",
      free: false,
      lessons: [
        {
          id: "dsa-16",
          title: "Binary Tree & Traversals",
          duration: "22:30",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-17",
          title: "Binary Search Tree",
          duration: "18:40",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Graphs",
      free: false,
      lessons: [
        {
          id: "dsa-18",
          title: "Graph Representation",
          duration: "19:00",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-19",
          title: "BFS & DFS",
          duration: "21:15",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    {
      title: "Dynamic Programming",
      free: false,
      lessons: [
        {
          id: "dsa-20",
          title: "DP Introduction",
          duration: "18:30",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-21",
          title: "Classic DP Problems",
          duration: "25:00",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "dsa-22",
          title: "Mini Project: Interview Problem Solver",
          duration: "35:00",
          video: "https://www.youtube.com/embed/8hly31xKli0",
          locked: true
        },
        {
          id: "dsa-23",
          title: "Final Assessment & Certification",
          duration: "12:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
os: {
  id: "os",
  title: "Operating Systems – Complete Guide",
  price: 200,
  level: "Beginner to Advanced",
  description: "Master Operating Systems concepts with real-world examples, internals, and projects.",
  thumbnail: "/images/os.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Operating Systems",
      free: true,
      lessons: [
        {
          id: "os-1",
          title: "What is an Operating System?",
          duration: "10:30",
          video: "https://www.youtube.com/embed/26QPDBe-NB8",
          locked: false
        },
        {
          id: "os-2",
          title: "Types of Operating Systems",
          duration: "12:10",
          video: "https://www.youtube.com/embed/26QPDBe-NB8",
          locked: false
        },
        {
          id: "os-3",
          title: "OS Functions & Structure",
          duration: "11:45",
          video: "https://www.youtube.com/embed/26QPDBe-NB8",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Process Management",
      free: false,
      lessons: [
        {
          id: "os-4",
          title: "Processes & States",
          duration: "15:20",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-5",
          title: "Process Control Block (PCB)",
          duration: "12:40",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-6",
          title: "Context Switching",
          duration: "14:10",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        }
      ]
    },

    {
      title: "CPU Scheduling",
      free: false,
      lessons: [
        {
          id: "os-7",
          title: "Scheduling Criteria",
          duration: "13:00",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-8",
          title: "FCFS, SJF, Priority Scheduling",
          duration: "20:10",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-9",
          title: "Round Robin Scheduling",
          duration: "16:30",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        }
      ]
    },

    {
      title: "Thread Management",
      free: false,
      lessons: [
        {
          id: "os-10",
          title: "Threads vs Processes",
          duration: "14:45",
          video: "https://www.youtube.com/embed/J5fZt6vZb3c",
          locked: true
        },
        {
          id: "os-11",
          title: "Multithreading Models",
          duration: "13:20",
          video: "https://www.youtube.com/embed/J5fZt6vZb3c",
          locked: true
        }
      ]
    },

    {
      title: "Process Synchronization",
      free: false,
      lessons: [
        {
          id: "os-12",
          title: "Critical Section Problem",
          duration: "16:00",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-13",
          title: "Semaphores & Mutex",
          duration: "18:30",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-14",
          title: "Classical Problems (Producer-Consumer)",
          duration: "21:00",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        }
      ]
    },

    {
      title: "Deadlocks",
      free: false,
      lessons: [
        {
          id: "os-15",
          title: "Deadlock Conditions",
          duration: "12:50",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-16",
          title: "Deadlock Prevention & Avoidance",
          duration: "17:40",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-17",
          title: "Banker's Algorithm",
          duration: "19:10",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        }
      ]
    },

    {
      title: "Memory Management",
      free: false,
      lessons: [
        {
          id: "os-18",
          title: "Paging & Segmentation",
          duration: "18:20",
          video: "https://www.youtube.com/embed/pPzVV2kkGHc",
          locked: true
        },
        {
          id: "os-19",
          title: "Virtual Memory",
          duration: "20:00",
          video: "https://www.youtube.com/embed/pPzVV2kkGHc",
          locked: true
        },
        {
          id: "os-20",
          title: "Page Replacement Algorithms",
          duration: "22:15",
          video: "https://www.youtube.com/embed/pPzVV2kkGHc",
          locked: true
        }
      ]
    },

    {
      title: "File Systems",
      free: false,
      lessons: [
        {
          id: "os-21",
          title: "File Concepts & Access Methods",
          duration: "14:30",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-22",
          title: "Directory Structures",
          duration: "13:40",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-23",
          title: "Disk Scheduling Algorithms",
          duration: "19:30",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        }
      ]
    },

    {
      title: "I/O & Device Management",
      free: false,
      lessons: [
        {
          id: "os-24",
          title: "I/O Hardware & Software",
          duration: "12:30",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-25",
          title: "Interrupts & DMA",
          duration: "14:00",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        }
      ]
    },

    {
      title: "Linux Internals",
      free: false,
      lessons: [
        {
          id: "os-26",
          title: "Linux Architecture",
          duration: "16:10",
          video: "https://www.youtube.com/embed/IVquJh3DXUA",
          locked: true
        },
        {
          id: "os-27",
          title: "Basic Linux Commands",
          duration: "18:45",
          video: "https://www.youtube.com/embed/IVquJh3DXUA",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "os-28",
          title: "Mini Project: OS Scheduler Simulation",
          duration: "35:00",
          video: "https://www.youtube.com/embed/9GDX-IyZ_C8",
          locked: true
        },
        {
          id: "os-29",
          title: "Final Assessment & Certificate Unlock",
          duration: "12:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
cn: {
  id: "cn",
  title: "Computer Networks – Complete Course",
  price: 200,
  level: "Beginner to Advanced",
  description: "Learn networking concepts, protocols, models, routing, and real-world applications.",
  thumbnail: "/images/cn.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Computer Networks",
      free: true,
      lessons: [
        {
          id: "cn-1",
          title: "What is a Computer Network?",
          duration: "10:00",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: false
        },
        {
          id: "cn-2",
          title: "Types of Networks",
          duration: "11:20",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Network Models",
      free: false,
      lessons: [
        {
          id: "cn-3",
          title: "OSI Model",
          duration: "18:00",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        },
        {
          id: "cn-4",
          title: "TCP/IP Model",
          duration: "14:30",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        }
      ]
    },

    {
      title: "Physical & Data Link Layer",
      free: false,
      lessons: [
        {
          id: "cn-5",
          title: "Transmission Media",
          duration: "15:10",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        },
        {
          id: "cn-6",
          title: "Error Detection & Correction",
          duration: "17:40",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        }
      ]
    },

    {
      title: "Network Layer",
      free: false,
      lessons: [
        {
          id: "cn-7",
          title: "IP Addressing",
          duration: "19:00",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        },
        {
          id: "cn-8",
          title: "Routing Algorithms",
          duration: "20:30",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        }
      ]
    },

    {
      title: "Transport Layer",
      free: false,
      lessons: [
        {
          id: "cn-9",
          title: "TCP vs UDP",
          duration: "16:50",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        },
        {
          id: "cn-10",
          title: "Flow & Congestion Control",
          duration: "18:20",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        }
      ]
    },

    {
      title: "Application Layer",
      free: false,
      lessons: [
        {
          id: "cn-11",
          title: "HTTP, FTP, SMTP",
          duration: "17:00",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        },
        {
          id: "cn-12",
          title: "DNS & DHCP",
          duration: "15:40",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "cn-13",
          title: "Mini Project: Network Simulation",
          duration: "30:00",
          video: "https://www.youtube.com/embed/qiQR5rTSshw",
          locked: true
        },
        {
          id: "cn-14",
          title: "Final Assessment",
          duration: "10:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
dbms: {
  id: "dbms",
  title: "Database Management Systems",
  price: 200,
  level: "Beginner to Advanced",
  description: "Master DBMS concepts from fundamentals to advanced database design and SQL.",
  thumbnail: "/images/dbms.jpg",

  modules: [

    // 🔓 FREE MODULE
    {
      title: "Introduction to DBMS",
      free: true,
      lessons: [
        {
          id: "dbms-1",
          title: "What is a Database?",
          duration: "08:40",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: false
        },
        {
          id: "dbms-2",
          title: "DBMS vs File System",
          duration: "11:10",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Database Architecture & Models",
      free: false,
      lessons: [
        {
          id: "dbms-3",
          title: "Three-Level Architecture",
          duration: "14:30",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-4",
          title: "Data Models (ER, Relational, Hierarchical)",
          duration: "16:20",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        }
      ]
    },

    {
      title: "Entity Relationship (ER) Model",
      free: false,
      lessons: [
        {
          id: "dbms-5",
          title: "Entities, Attributes & Relationships",
          duration: "15:00",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-6",
          title: "ER Diagrams & Constraints",
          duration: "18:10",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        }
      ]
    },

    {
      title: "Relational Model",
      free: false,
      lessons: [
        {
          id: "dbms-7",
          title: "Keys (Primary, Foreign, Candidate)",
          duration: "14:45",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-8",
          title: "Relational Algebra & Calculus",
          duration: "19:30",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        }
      ]
    },

    {
      title: "SQL – Structured Query Language",
      free: false,
      lessons: [
        {
          id: "dbms-9",
          title: "DDL & DML Commands",
          duration: "17:20",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-10",
          title: "Joins, Subqueries & Views",
          duration: "22:00",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        }
      ]
    },

    {
      title: "Normalization",
      free: false,
      lessons: [
        {
          id: "dbms-11",
          title: "Functional Dependencies",
          duration: "13:40",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-12",
          title: "1NF, 2NF, 3NF & BCNF",
          duration: "20:15",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        }
      ]
    },

    {
      title: "Transactions & Concurrency Control",
      free: false,
      lessons: [
        {
          id: "dbms-13",
          title: "ACID Properties",
          duration: "14:50",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-14",
          title: "Concurrency Problems & Locks",
          duration: "18:30",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        }
      ]
    },

    {
      title: "Indexing & Query Processing",
      free: false,
      lessons: [
        {
          id: "dbms-15",
          title: "Indexing Techniques (B-Tree, Hashing)",
          duration: "16:40",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-16",
          title: "Query Optimization",
          duration: "15:30",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "dbms-17",
          title: "Mini Project: Student Database System",
          duration: "30:00",
          video: "https://www.youtube.com/embed/HXV3zeQKqGY",
          locked: true
        },
        {
          id: "dbms-18",
          title: "Final Assessment & Certificate",
          duration: "12:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
compiler: {
  id: "compiler",
  title: "Compiler Design",
  price: 200,
  level: "Intermediate",
  description: "Understand how compilers work internally with hands-on phases and mini projects.",
  thumbnail: "/images/compiler.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Compiler Design",
      free: true,
      lessons: [
        {
          id: "cd-1",
          title: "What is a Compiler?",
          duration: "10:20",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: false
        },
        {
          id: "cd-2",
          title: "Compiler vs Interpreter",
          duration: "09:10",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: false
        }
      ]
    },

    {
      title: "Lexical Analysis",
      free: false,
      lessons: [
        {
          id: "cd-3",
          title: "Tokens, Lexemes & Patterns",
          duration: "16:40",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: true
        },
        {
          id: "cd-4",
          title: "Lexical Analyzer Design",
          duration: "18:00",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: true
        }
      ]
    },

    {
      title: "Syntax Analysis",
      free: false,
      lessons: [
        {
          id: "cd-5",
          title: "Context Free Grammar",
          duration: "17:30",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: true
        },
        {
          id: "cd-6",
          title: "Parse Trees & Parsing",
          duration: "19:00",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: true
        }
      ]
    },

    {
      title: "Intermediate Code Generation",
      free: false,
      lessons: [
        {
          id: "cd-7",
          title: "Three Address Code",
          duration: "14:40",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: true
        }
      ]
    },

    {
      title: "Code Optimization",
      free: false,
      lessons: [
        {
          id: "cd-8",
          title: "Optimization Techniques",
          duration: "16:50",
          video: "https://www.youtube.com/embed/5ZmFlxrNaN8",
          locked: true
        }
      ]
    },

    // 🎓 FINAL
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "cd-9",
          title: "Mini Compiler Project",
          duration: "30:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
se: {
  id: "se",
  title: "Software Engineering",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Learn software development life cycle, models, and real-world practices.",
  thumbnail: "/images/se.jpg",

  modules: [
    {
      title: "Introduction to Software Engineering",
      free: true,
      lessons: [
        {
          id: "se-1",
          title: "What is Software Engineering?",
          duration: "09:30",
          video: "https://www.youtube.com/embed/9NwT5E3zM6M",
          locked: false
        }
      ]
    },

    {
      title: "Software Development Life Cycle",
      free: false,
      lessons: [
        {
          id: "se-2",
          title: "SDLC Phases",
          duration: "15:20",
          video: "https://www.youtube.com/embed/9NwT5E3zM6M",
          locked: true
        }
      ]
    },

    {
      title: "Software Process Models",
      free: false,
      lessons: [
        {
          id: "se-3",
          title: "Waterfall Model",
          duration: "12:10",
          video: "https://www.youtube.com/embed/9NwT5E3zM6M",
          locked: true
        },
        {
          id: "se-4",
          title: "Agile & Scrum",
          duration: "16:45",
          video: "https://www.youtube.com/embed/9NwT5E3zM6M",
          locked: true
        }
      ]
    },

    {
      title: "Software Testing",
      free: false,
      lessons: [
        {
          id: "se-5",
          title: "Testing Levels & Types",
          duration: "14:30",
          video: "https://www.youtube.com/embed/9NwT5E3zM6M",
          locked: true
        }
      ]
    },

    {
      title: "Project Management",
      free: false,
      lessons: [
        {
          id: "se-6",
          title: "Estimation & Scheduling",
          duration: "13:50",
          video: "https://www.youtube.com/embed/9NwT5E3zM6M",
          locked: true
        }
      ]
    },

    // 🎓 FINAL
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "se-7",
          title: "Software Project Case Study",
          duration: "25:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},

ml: {
  id: "ml",
  title: "Machine Learning Basics",
  price: 200,
  level: "Beginner",
  description: "Learn machine learning concepts, algorithms, and real-world applications.",
  thumbnail: "/images/ml.jpg",

  modules: [
    {
      title: "Introduction to Machine Learning",
      free: true,
      lessons: [
        {
          id: "ml-1",
          title: "What is Machine Learning?",
          duration: "10:00",
          video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
          locked: false
        }
      ]
    },

    {
      title: "ML Fundamentals",
      free: false,
      lessons: [
        {
          id: "ml-2",
          title: "Types of Machine Learning",
          duration: "14:20",
          video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
          locked: true
        }
      ]
    },

    {
      title: "Supervised Learning",
      free: false,
      lessons: [
        {
          id: "ml-3",
          title: "Linear Regression",
          duration: "18:30",
          video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
          locked: true
        },
        {
          id: "ml-4",
          title: "Classification Algorithms",
          duration: "20:00",
          video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
          locked: true
        }
      ]
    },

    {
      title: "Unsupervised Learning",
      free: false,
      lessons: [
        {
          id: "ml-5",
          title: "Clustering & K-Means",
          duration: "17:40",
          video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
          locked: true
        }
      ]
    },

    {
      title: "Model Evaluation",
      free: false,
      lessons: [
        {
          id: "ml-6",
          title: "Accuracy, Precision & Recall",
          duration: "15:10",
          video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
          locked: true
        }
      ]
    },

    // 🎓 FINAL
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "ml-7",
          title: "ML Mini Project",
          duration: "30:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
ai: {
  id: "ai",
  title: "Artificial Intelligence",
  price: 200,
  level: "Beginner to Advanced",
  description: "Learn Artificial Intelligence concepts from fundamentals to real-world AI systems.",
  thumbnail: "/images/ai.jpg",

  modules: [
    {
      title: "Introduction to AI",
      free: true,
      lessons: [
        { id: "ai-1", title: "What is Artificial Intelligence?", duration: "10:30", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: false },
        { id: "ai-2", title: "History & Applications of AI", duration: "12:00", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: false }
      ]
    },

    {
      title: "Problem Solving & Search",
      free: false,
      lessons: [
        { id: "ai-3", title: "State Space Search", duration: "18:20", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true },
        { id: "ai-4", title: "BFS & DFS Algorithms", duration: "20:15", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true }
      ]
    },

    {
      title: "Knowledge Representation",
      free: false,
      lessons: [
        { id: "ai-5", title: "Logic & Inference", duration: "17:45", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true },
        { id: "ai-6", title: "Semantic Networks", duration: "15:30", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true }
      ]
    },

    {
      title: "Planning & Reasoning",
      free: false,
      lessons: [
        { id: "ai-7", title: "Planning Algorithms", duration: "18:40", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true },
        { id: "ai-8", title: "Constraint Satisfaction Problems", duration: "19:10", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true }
      ]
    },

    {
      title: "Expert Systems",
      free: false,
      lessons: [
        { id: "ai-9", title: "Rule-Based Systems", duration: "16:20", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true }
      ]
    },

    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        { id: "ai-10", title: "Mini Project: AI Chatbot Logic", duration: "35:00", video: "https://www.youtube.com/embed/JMUxmLyrhSk", locked: true },
        { id: "ai-11", title: "Final Assessment", duration: "12:00", video: null, locked: true }
      ]
    }
  ]
},
da: {
  id: "da",
  title: "Data Analytics with Python",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Analyze, visualize, and extract insights from data using Python.",
  thumbnail: "/images/da.jpg",

  modules: [
    {
      title: "Getting Started with Data Analytics",
      free: true,
      lessons: [
        { id: "da-1", title: "What is Data Analytics?", duration: "09:30", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: false },
        { id: "da-2", title: "Analytics Workflow", duration: "11:10", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: false }
      ]
    },

    {
      title: "Python for Data Analysis",
      free: false,
      lessons: [
        { id: "da-3", title: "NumPy Basics", duration: "18:00", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: true },
        { id: "da-4", title: "Pandas DataFrames", duration: "22:10", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: true }
      ]
    },

    {
      title: "Data Cleaning",
      free: false,
      lessons: [
        { id: "da-5", title: "Handling Missing Data", duration: "16:40", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: true },
        { id: "da-6", title: "Data Transformation", duration: "17:50", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: true }
      ]
    },

    {
      title: "Data Visualization",
      free: false,
      lessons: [
        { id: "da-7", title: "Matplotlib & Seaborn", duration: "21:30", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: true }
      ]
    },

    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        { id: "da-8", title: "Project: Sales Data Dashboard", duration: "40:00", video: "https://www.youtube.com/embed/r-uOLxNrNk8", locked: true },
        { id: "da-9", title: "Final Assessment", duration: "10:00", video: null, locked: true }
      ]
    }
  ]
},
nlp: {
  id: "nlp",
  title: "Natural Language Processing",
  price: 200,
  level: "Beginner to Advanced",
  description: "Learn how machines understand human language using NLP techniques, ML, and deep learning.",
  thumbnail: "/images/nlp.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to NLP",
      free: true,
      lessons: [
        {
          id: "nlp-1",
          title: "What is Natural Language Processing?",
          duration: "09:10",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: false
        },
        {
          id: "nlp-2",
          title: "Applications of NLP",
          duration: "10:40",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Text Processing Basics",
      free: false,
      lessons: [
        {
          id: "nlp-3",
          title: "Tokenization & Normalization",
          duration: "15:30",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-4",
          title: "Stop Words & Stemming",
          duration: "14:20",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-5",
          title: "Lemmatization",
          duration: "12:45",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        }
      ]
    },

    {
      title: "Text Representation",
      free: false,
      lessons: [
        {
          id: "nlp-6",
          title: "Bag of Words Model",
          duration: "16:10",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-7",
          title: "TF-IDF",
          duration: "15:00",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-8",
          title: "Word Embeddings (Word2Vec & GloVe)",
          duration: "18:30",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        }
      ]
    },

    {
      title: "Linguistic Analysis",
      free: false,
      lessons: [
        {
          id: "nlp-9",
          title: "Part of Speech Tagging",
          duration: "14:50",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-10",
          title: "Named Entity Recognition (NER)",
          duration: "17:40",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        }
      ]
    },

    {
      title: "Text Classification",
      free: false,
      lessons: [
        {
          id: "nlp-11",
          title: "Sentiment Analysis",
          duration: "18:20",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-12",
          title: "Spam Detection",
          duration: "16:00",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        }
      ]
    },

    {
      title: "Advanced NLP",
      free: false,
      lessons: [
        {
          id: "nlp-13",
          title: "Sequence Models & RNNs",
          duration: "19:10",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-14",
          title: "Transformers & BERT",
          duration: "21:30",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "nlp-15",
          title: "Mini Project: Sentiment Analysis App",
          duration: "30:00",
          video: "https://www.youtube.com/embed/CMrHM8a3hqw",
          locked: true
        },
        {
          id: "nlp-16",
          title: "Final Assessment & Certificate",
          duration: "12:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},

bigdata: {
  id: "bigdata",
  title: "Big Data Analytics (Hadoop & Spark)",
  price: 200,
  level: "Beginner to Advanced",
  description: "Master Big Data processing using Hadoop, HDFS, MapReduce, Spark, and real-world analytics projects.",
  thumbnail: "/images/bigdata.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Big Data",
      free: true,
      lessons: [
        {
          id: "bd-1",
          title: "What is Big Data?",
          duration: "09:30",
          video: "https://www.youtube.com/embed/1vbXmCrkT3Y",
          locked: false
        },
        {
          id: "bd-2",
          title: "5 V's of Big Data",
          duration: "08:40",
          video: "https://www.youtube.com/embed/1vbXmCrkT3Y",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Hadoop Ecosystem Overview",
      free: false,
      lessons: [
        {
          id: "bd-3",
          title: "Hadoop Architecture",
          duration: "15:20",
          video: "https://www.youtube.com/embed/aReuLtY0YMI",
          locked: true
        },
        {
          id: "bd-4",
          title: "Hadoop Ecosystem Tools",
          duration: "14:10",
          video: "https://www.youtube.com/embed/aReuLtY0YMI",
          locked: true
        }
      ]
    },

    {
      title: "HDFS (Hadoop Distributed File System)",
      free: false,
      lessons: [
        {
          id: "bd-5",
          title: "HDFS Architecture",
          duration: "16:40",
          video: "https://www.youtube.com/embed/W5eYzvO6Y0g",
          locked: true
        },
        {
          id: "bd-6",
          title: "HDFS Read & Write Operations",
          duration: "18:00",
          video: "https://www.youtube.com/embed/W5eYzvO6Y0g",
          locked: true
        }
      ]
    },

    {
      title: "MapReduce Programming",
      free: false,
      lessons: [
        {
          id: "bd-7",
          title: "MapReduce Basics",
          duration: "17:30",
          video: "https://www.youtube.com/embed/1vbXmCrkT3Y",
          locked: true
        },
        {
          id: "bd-8",
          title: "Word Count Program",
          duration: "19:10",
          video: "https://www.youtube.com/embed/1vbXmCrkT3Y",
          locked: true
        }
      ]
    },

    {
      title: "Apache Spark Fundamentals",
      free: false,
      lessons: [
        {
          id: "bd-9",
          title: "Why Spark?",
          duration: "12:50",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        },
        {
          id: "bd-10",
          title: "Spark Architecture",
          duration: "16:20",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        }
      ]
    },

    {
      title: "Spark Core & RDDs",
      free: false,
      lessons: [
        {
          id: "bd-11",
          title: "RDD Concepts",
          duration: "18:30",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        },
        {
          id: "bd-12",
          title: "Transformations & Actions",
          duration: "20:00",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        }
      ]
    },

    {
      title: "Spark SQL & DataFrames",
      free: false,
      lessons: [
        {
          id: "bd-13",
          title: "Introduction to DataFrames",
          duration: "17:10",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        },
        {
          id: "bd-14",
          title: "Spark SQL Queries",
          duration: "18:50",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        }
      ]
    },

    {
      title: "Spark Streaming",
      free: false,
      lessons: [
        {
          id: "bd-15",
          title: "Streaming Basics",
          duration: "16:40",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        },
        {
          id: "bd-16",
          title: "Real-Time Data Processing",
          duration: "19:00",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        }
      ]
    },

    {
      title: "Big Data Analytics Use Cases",
      free: false,
      lessons: [
        {
          id: "bd-17",
          title: "Log Analysis",
          duration: "14:30",
          video: "https://www.youtube.com/embed/1vbXmCrkT3Y",
          locked: true
        },
        {
          id: "bd-18",
          title: "Recommendation Systems",
          duration: "16:20",
          video: "https://www.youtube.com/embed/1vbXmCrkT3Y",
          locked: true
        }
      ]
    },

    // 🎓 FINAL + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "bd-19",
          title: "Mini Project: Big Data Analytics Pipeline",
          duration: "35:00",
          video: "https://www.youtube.com/embed/_C8kWso4ne4",
          locked: true
        },
        {
          id: "bd-20",
          title: "Final Assessment & Certificate",
          duration: "12:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
aws: {
  id: "aws",
  title: "AWS Cloud Practitioner",
  price: 200,
  level: "Beginner",
  description: "Understand AWS Cloud fundamentals, services, pricing, security, and real-world cloud usage.",
  thumbnail: "/images/aws.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Cloud & AWS",
      free: true,
      lessons: [
        {
          id: "aws-1",
          title: "What is Cloud Computing?",
          duration: "09:30",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: false
        },
        {
          id: "aws-2",
          title: "Introduction to AWS",
          duration: "10:45",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: false
        },
        {
          id: "aws-3",
          title: "AWS Global Infrastructure",
          duration: "12:10",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Core AWS Services",
      free: false,
      lessons: [
        {
          id: "aws-4",
          title: "Compute Services (EC2, Lambda)",
          duration: "18:20",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-5",
          title: "Storage Services (S3, EBS, Glacier)",
          duration: "17:40",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-6",
          title: "Database Services (RDS, DynamoDB)",
          duration: "16:50",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        }
      ]
    },

    {
      title: "Networking & Security",
      free: false,
      lessons: [
        {
          id: "aws-7",
          title: "VPC, Subnets & Security Groups",
          duration: "19:00",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-8",
          title: "IAM – Users, Roles & Policies",
          duration: "15:30",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-9",
          title: "AWS Shared Responsibility Model",
          duration: "11:40",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        }
      ]
    },

    {
      title: "Monitoring & Pricing",
      free: false,
      lessons: [
        {
          id: "aws-10",
          title: "CloudWatch & CloudTrail",
          duration: "14:20",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-11",
          title: "AWS Pricing & Billing Models",
          duration: "16:00",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-12",
          title: "Cost Optimization Strategies",
          duration: "13:50",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        }
      ]
    },

    {
      title: "Architecting on AWS",
      free: false,
      lessons: [
        {
          id: "aws-13",
          title: "High Availability & Scalability",
          duration: "18:10",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-14",
          title: "Auto Scaling & Load Balancers",
          duration: "17:30",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        }
      ]
    },

    // 🎓 FINAL PROJECT + CERTIFICATE
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "aws-15",
          title: "Mini Project: Host a Website on AWS",
          duration: "35:00",
          video: "https://www.youtube.com/embed/ulprqHHWlng",
          locked: true
        },
        {
          id: "aws-16",
          title: "AWS Cloud Practitioner Practice Test",
          duration: "15:00",
          video: null,
          locked: true
        },
        {
          id: "aws-17",
          title: "Course Completion & Certificate",
          duration: "05:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
devops: {
  id: "devops",
  title: "Docker & Kubernetes",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Master containerization and orchestration using Docker & Kubernetes.",
  thumbnail: "/images/devops.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "DevOps Fundamentals",
      free: true,
      lessons: [
        {
          id: "dev-1",
          title: "What is DevOps?",
          duration: "09:40",
          video: "https://www.youtube.com/embed/9pZ2xmsSDdo",
          locked: false
        },
        {
          id: "dev-2",
          title: "DevOps Tools Overview",
          duration: "10:30",
          video: "https://www.youtube.com/embed/9pZ2xmsSDdo",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULES
    {
      title: "Docker Essentials",
      free: false,
      lessons: [
        {
          id: "dev-3",
          title: "Docker Architecture",
          duration: "14:20",
          video: "https://www.youtube.com/embed/9pZ2xmsSDdo",
          locked: true
        },
        {
          id: "dev-4",
          title: "Docker Images & Containers",
          duration: "17:00",
          video: "https://www.youtube.com/embed/9pZ2xmsSDdo",
          locked: true
        },
        {
          id: "dev-5",
          title: "Dockerfile & Volumes",
          duration: "16:10",
          video: "https://www.youtube.com/embed/9pZ2xmsSDdo",
          locked: true
        }
      ]
    },

    {
      title: "Kubernetes Basics",
      free: false,
      lessons: [
        {
          id: "dev-6",
          title: "Kubernetes Architecture",
          duration: "18:30",
          video: "https://www.youtube.com/embed/X48VuDVv0do",
          locked: true
        },
        {
          id: "dev-7",
          title: "Pods, Services & Deployments",
          duration: "19:20",
          video: "https://www.youtube.com/embed/X48VuDVv0do",
          locked: true
        }
      ]
    },

    {
      title: "CI/CD & Monitoring",
      free: false,
      lessons: [
        {
          id: "dev-8",
          title: "CI/CD Pipelines",
          duration: "15:50",
          video: "https://www.youtube.com/embed/9pZ2xmsSDdo",
          locked: true
        },
        {
          id: "dev-9",
          title: "Monitoring & Logging",
          duration: "14:40",
          video: "https://www.youtube.com/embed/9pZ2xmsSDdo",
          locked: true
        }
      ]
    },

    // 🎓 FINAL
    {
      title: "Final Project & Certification",
      free: false,
      lessons: [
        {
          id: "dev-10",
          title: "Deploy App with Docker & Kubernetes",
          duration: "35:00",
          video: "https://www.youtube.com/embed/X48VuDVv0do",
          locked: true
        },
        {
          id: "dev-11",
          title: "Final Assessment",
          duration: "10:00",
          video: null,
          locked: true
        }
      ]
    }
  ]
},
linux: {
  id: "linux",
  title: "Linux Fundamentals",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Master Linux fundamentals, commands, scripting, and system administration.",
  thumbnail: "/images/linux.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Linux",
      free: true,
      lessons: [
        {
          id: "linux-1",
          title: "What is Linux?",
          duration: "08:40",
          video: "https://www.youtube.com/embed/IVquJh3DXUA",
          locked: false
        },
        {
          id: "linux-2",
          title: "Linux Distributions & Uses",
          duration: "10:20",
          video: "https://www.youtube.com/embed/IVquJh3DXUA",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULE 1
    {
      title: "Linux Installation & Environment Setup",
      free: false,
      lessons: [
        {
          id: "linux-3",
          title: "Installing Linux (Dual Boot & VirtualBox)",
          duration: "15:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-4",
          title: "Linux Desktop Environments (GNOME, KDE)",
          duration: "09:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-5",
          title: "Understanding Linux File System Structure",
          duration: "12:10",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 2
    {
      title: "Linux Command Line Basics",
      free: false,
      lessons: [
        {
          id: "linux-6",
          title: "Terminal Basics & Navigation Commands",
          duration: "14:20",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-7",
          title: "File & Directory Operations",
          duration: "16:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-8",
          title: "Viewing & Editing Files (cat, less, nano, vim)",
          duration: "18:35",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 3
    {
      title: "Permissions, Ownership & Users",
      free: false,
      lessons: [
        {
          id: "linux-9",
          title: "Linux File Permissions Explained",
          duration: "13:50",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-10",
          title: "User & Group Management",
          duration: "15:10",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-11",
          title: "sudo, root & Security Best Practices",
          duration: "11:45",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 4
    {
      title: "Package Management",
      free: false,
      lessons: [
        {
          id: "linux-12",
          title: "APT, YUM & DNF Explained",
          duration: "12:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-13",
          title: "Installing, Updating & Removing Software",
          duration: "14:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-14",
          title: "Managing Repositories",
          duration: "09:55",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 5
    {
      title: "Process & System Management",
      free: false,
      lessons: [
        {
          id: "linux-15",
          title: "Understanding Linux Processes",
          duration: "13:20",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-16",
          title: "top, htop, ps & kill Commands",
          duration: "16:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-17",
          title: "Disk Usage & Memory Monitoring",
          duration: "11:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 6
    {
      title: "Shell Scripting Basics",
      free: false,
      lessons: [
        {
          id: "linux-18",
          title: "Introduction to Bash Scripting",
          duration: "14:10",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-19",
          title: "Variables, Conditions & Loops",
          duration: "18:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-20",
          title: "Writing Your First Automation Script",
          duration: "16:25",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 7
    {
      title: "Networking & Services",
      free: false,
      lessons: [
        {
          id: "linux-21",
          title: "Linux Networking Basics",
          duration: "12:45",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-22",
          title: "SSH, SCP & Remote Access",
          duration: "14:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-23",
          title: "System Services & systemctl",
          duration: "11:50",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 8
    {
      title: "Real-World Linux & Career Prep",
      free: false,
      lessons: [
        {
          id: "linux-24",
          title: "Linux in DevOps & Cloud",
          duration: "10:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-25",
          title: "Common Linux Interview Questions",
          duration: "14:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "linux-26",
          title: "Final Project: Linux System Setup",
          duration: "20:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    }
  ]
},
git: {
  id: "git",
  title: "Git & GitHub Mastery",
  price: 200,
  level: "Beginner to Intermediate",
  description: "Master Git version control and GitHub collaboration workflows used in real-world software development.",
  thumbnail: "/images/git.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Version Control",
      free: true,
      lessons: [
        {
          id: "git-1",
          title: "What is Version Control?",
          duration: "07:50",
          video: "https://www.youtube.com/embed/8JJ101D3knE",
          locked: false
        },
        {
          id: "git-2",
          title: "Git vs GitHub Explained",
          duration: "09:30",
          video: "https://www.youtube.com/embed/8JJ101D3knE",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULE 1
    {
      title: "Git Installation & Configuration",
      free: false,
      lessons: [
        {
          id: "git-3",
          title: "Installing Git on Windows, Linux & macOS",
          duration: "11:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-4",
          title: "Git Configuration & SSH Setup",
          duration: "14:10",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 2
    {
      title: "Git Basics & Local Repository",
      free: false,
      lessons: [
        {
          id: "git-5",
          title: "Initializing a Git Repository",
          duration: "10:20",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-6",
          title: "git add, commit & status",
          duration: "15:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-7",
          title: "Understanding Git Logs & History",
          duration: "12:35",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 3
    {
      title: "Branching & Merging",
      free: false,
      lessons: [
        {
          id: "git-8",
          title: "Git Branches Explained",
          duration: "13:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-9",
          title: "Merging & Resolving Conflicts",
          duration: "17:20",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 4
    {
      title: "Working with GitHub",
      free: false,
      lessons: [
        {
          id: "git-10",
          title: "Creating & Managing GitHub Repositories",
          duration: "12:50",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-11",
          title: "Push, Pull & Clone",
          duration: "14:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 5
    {
      title: "Collaboration & Team Workflow",
      free: false,
      lessons: [
        {
          id: "git-12",
          title: "Forking & Pull Requests",
          duration: "16:10",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-13",
          title: "Code Reviews & Issues",
          duration: "13:20",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 6
    {
      title: "Advanced Git Concepts",
      free: false,
      lessons: [
        {
          id: "git-14",
          title: "git stash, reset & revert",
          duration: "15:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-15",
          title: "Rebasing & Cherry-Pick",
          duration: "14:55",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 7
    {
      title: "Git for Developers & DevOps",
      free: false,
      lessons: [
        {
          id: "git-16",
          title: "Git Workflow in Real Projects",
          duration: "13:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-17",
          title: "GitHub Actions & CI/CD Basics",
          duration: "16:50",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 8
    {
      title: "Projects & Interview Preparation",
      free: false,
      lessons: [
        {
          id: "git-18",
          title: "Mini Project: Team Collaboration Using GitHub",
          duration: "20:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "git-19",
          title: "Git & GitHub Interview Questions",
          duration: "14:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    }
  ]
},
security: {
  id: "security",
  title: "Cyber Security Basics",
  price: 200,
  level: "Beginner",
  description: "Learn core cyber security concepts, common threats, and basic defensive techniques to stay secure online.",
  thumbnail: "/images/cyber-security.jpg",

  modules: [
    // 🔓 FREE MODULE
    {
      title: "Introduction to Cyber Security",
      free: true,
      lessons: [
        {
          id: "security-1",
          title: "What is Cyber Security?",
          duration: "09:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: false
        },
        {
          id: "security-2",
          title: "Why Cyber Security Matters",
          duration: "10:10",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: false
        }
      ]
    },

    // 🔒 PAID MODULE 1
    {
      title: "Cyber Security Fundamentals",
      free: false,
      lessons: [
        {
          id: "security-3",
          title: "CIA Triad (Confidentiality, Integrity, Availability)",
          duration: "12:20",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "security-4",
          title: "Types of Cyber Threats",
          duration: "14:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 2
    {
      title: "Malware & Attacks",
      free: false,
      lessons: [
        {
          id: "security-5",
          title: "Malware: Virus, Worm, Trojan, Ransomware",
          duration: "15:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "security-6",
          title: "Phishing & Social Engineering Attacks",
          duration: "13:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 3
    {
      title: "Network & System Security",
      free: false,
      lessons: [
        {
          id: "security-7",
          title: "Basics of Network Security",
          duration: "14:10",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "security-8",
          title: "Firewalls, Antivirus & IDS",
          duration: "13:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 4
    {
      title: "Web & Application Security",
      free: false,
      lessons: [
        {
          id: "security-9",
          title: "Common Web Vulnerabilities (SQLi, XSS)",
          duration: "16:20",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "security-10",
          title: "Secure Browsing & HTTPS",
          duration: "11:50",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 5
    {
      title: "Personal & Organizational Security",
      free: false,
      lessons: [
        {
          id: "security-11",
          title: "Password Security & Authentication",
          duration: "12:40",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "security-12",
          title: "Data Protection & Backup Strategies",
          duration: "13:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    },

    // 🔒 PAID MODULE 6
    {
      title: "Careers & Cyber Awareness",
      free: false,
      lessons: [
        {
          id: "security-13",
          title: "Cyber Security Career Paths",
          duration: "10:30",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        },
        {
          id: "security-14",
          title: "Beginner Certifications & Next Steps",
          duration: "12:00",
          video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          locked: true
        }
      ]
    }
  ]
}
};
  
export default courseContents;
   