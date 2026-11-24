export const activityCategories = [
  "All",
  "Workshops",
  "Technical Sessions",
  "Competitions",
  "Demonstrations",
  "Seminars",
];

export const completedActivities = [
  {
    id: "act-01",
    title: "Microcontroller Bring-Up & Embedded C Workshop",
    type: "Workshops",
    badge: "Hands-on Workshop",
    date: "October 2024",
    venue: "Circuitron Electronics Lab, RVSCET",
    description:
      "A comprehensive laboratory session guiding student engineers through breadboard prototyping, GPIO register manipulation, UART serial debugging, and sensor telemetry on microcontrollers.",
    highlights: [
      "Interfaced ultrasonic, PIR, and analog temperature sensors",
      "Hands-on oscilloscope waveform inspection and logic analysis",
      "Over 45 student engineers built working sensor circuits",
    ],
    image: "/assets/gallery/IMG-20251024-WA0003.webp",
    participants: "RVSCET Engineering Students",
    outcomes: "Practical familiarity with hardware peripherals and firmware flashing",
  },
  {
    id: "act-02",
    title: "All-Terrain Robo-Race Championship & Trials",
    type: "Competitions",
    badge: "Robotics Competition",
    date: "October 2024",
    venue: "Main Campus Arena, RVSCET",
    description:
      "A high-stakes robotics track featuring speed chicanes, 40-degree incline ramps, sand pits, and rock obstacle courses testing chassis suspension, drivetrain torque, and pilot control.",
    highlights: [
      "Rigorous time-trial runs across 8 multi-terrain zones",
      "Chassis durability and telemetry latency benchmarks",
      "Trophy and certificate felicitations for top-performing builds",
    ],
    image: "/assets/gallery/all-terrain-robo-race-championship.webp",
    participants: "Multi-department Robotics Teams",
    outcomes: "Demonstrated real-world electromechanical resilience under mechanical shock",
  },
  {
    id: "act-03",
    title: "Applied IoT & Smart Infrastructure Exhibition",
    type: "Demonstrations",
    badge: "Technical Demonstration",
    date: "October 2024",
    venue: "Central Exhibition Hall, RVSCET",
    description:
      "Public exhibition of working student engineering models spanning autonomous agriculture rovers, industrial conveyor sorting belts, and green energy telemetry grids.",
    highlights: [
      "Interactive presentations evaluated by department professors & mentors",
      "Real-time sensor telemetry displayed on connected web interfaces",
      "Featured both school innovators and undergraduate engineering teams",
    ],
    image: "/assets/gallery/smart-agriculture-iot-exhibition.webp",
    participants: "Circuitron Innovators & Campus Community",
    outcomes: "Peer validation, technical critique, and proof-of-concept testing",
  },
  {
    id: "act-04",
    title: "Robo War Combat Arena Engineering Session",
    type: "Technical Sessions",
    badge: "Engineering Clinic",
    date: "October 2024",
    venue: "Hardware Fabrication Lab, RVSCET",
    description:
      "In-depth mechanical and electrical review of combat robotics: material shear resistance, brushless motor weapon drivetrains, high-discharge battery safety, and wireless radio kill-switches.",
    highlights: [
      "Analysis of armor deflection angles and welded joint integrity",
      "Calibration of 40A electronic speed controllers (ESCs)",
      "Strict safety protocols and remote fail-safe power cut-off validation",
    ],
    image: "/assets/gallery/IMG-20251024-WA0008.webp",
    participants: "Robotics Core Team",
    outcomes: "Safe fabrication standards for high-energy combat robots",
  },
  {
    id: "act-05",
    title: "Clean Energy & Sensor Telemetry Seminar",
    type: "Seminars",
    badge: "Technical Seminar",
    date: "September 2024",
    venue: "Seminar Hall 1, RVSCET",
    description:
      "Technical lecture and hardware demonstration on hybrid renewable power monitoring, current/voltage sensing ICs (INA219), and power stage regulation for off-grid IoT sensors.",
    highlights: [
      "Dual-axis solar tracking algorithms using LDR arrays",
      "Efficiency comparisons between static and tracked solar panels",
      "Low-dropout regulator (LDO) vs switching buck converter efficiency curves",
    ],
    image: "/assets/gallery/eco-power-plant-clean-energy-model.webp",
    participants: "ECE, EEE, and Mechanical Students",
    outcomes: "Deepened understanding of energy harvesting and power budgeting",
  },
  {
    id: "act-06",
    title: "Young Innovators Mentorship (Eklavya & Lakshya)",
    type: "Workshops",
    badge: "Outreach & Mentorship",
    date: "October 2024",
    venue: "RVSCET Auditorium",
    description:
      "Mentorship initiative where Circuitron senior leads demonstrated electronics fundamentals, simple sensor circuits, and robotics principles to aspiring school and higher secondary students.",
    highlights: [
      "Fostered interest in engineering and hands-on technology",
      "Interactive hands-on demonstrations with LED arrays and motors",
      "Award felicitation for school innovation projects",
    ],
    image: "/assets/gallery/eklavya-school-innovation-award.webp",
    participants: "School & Higher Secondary Innovators",
    outcomes: "Community building and early STEM encouragement",
  },
];

export const upcomingActivities = [
  {
    id: "up-01",
    title: "Weekly Hardware Lab & Prototyping Clinic",
    type: "Workshops",
    badge: "Standing Weekly Session",
    schedule: "Every Saturday • 2:00 PM – 5:00 PM",
    venue: "Circuitron Hardware Lab, Dept. of ECE, RVSCET",
    description:
      "Regular weekend open lab hours for active club members. Hands-on debugging on oscilloscopes, PCB soldering stations, microcontroller flashing, and peer code reviews.",
    status: "Active & Ongoing",
    eligibility: "Open to enrolled Circuitron members",
  },
  {
    id: "up-02",
    title: "Spring Embedded Firmware & RTOS Masterclass",
    type: "Technical Sessions",
    badge: "Scheduled Series",
    schedule: "Upcoming Academic Session",
    venue: "Electronics Seminar Hall, RVSCET",
    description:
      "An intensive technical track focusing on ARM Cortex-M architecture, FreeRTOS task scheduling, inter-process communication, and hardware interrupt optimization.",
    status: "Curriculum In Review",
    eligibility: "RVSCET 2nd, 3rd, and 4th Year Engineering Students",
  },
];
