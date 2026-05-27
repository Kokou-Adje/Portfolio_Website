import {
  mobile,
  backend,
  creator,
  web,
  python,
  tensorflow,
  pytorch,
  scikitlearn,
  pandas,
  numpy,
  matplotlib,
  java,
  csharp,
  git,
  education,
  certification,
  project_vision_scan,
  project_gradient_monitoring,
  project_ttml,
  project_graph_slam,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
    description: "Classical ML for prediction and classification. Comfortable with the standard toolkit and the trade-offs between models.",
  },
  {
    title: "Deep Learning",
    icon: mobile,
    description: "Neural networks for vision, language, and sequence tasks. CNNs, RNNs, transformers, and the training tricks that make them work.",
  },
  {
    title: "Computer Vision",
    icon: backend,
    description: "Object detection, segmentation, and image classification. Recently shipped a YOLOv8 PCB defect detector at 0.983 mAP.",
  },
  {
    title: "Natural Language Processing",
    icon: creator,
    description: "Text classification, summarization, translation. Both classical methods and modern transformer-based approaches.",
  },
  {
    title: "Reinforcement Learning",
    icon: mobile,
    description: "Training agents with Q-learning, Deep Q-Networks, and policy gradients. Reward shaping and the exploration problem.",
  },
  {
    title: "AI Ethics",
    icon: backend,
    description: "Fairness, bias detection, and what happens when models meet the real world. Hiring, lending, criminal justice.",
  },
  {
    title: "Generative AI & LLMs",
    icon: creator,
    description: "Prompt engineering, RAG, and fine-tuning. Building useful things on top of language models.",
  },
  {
    title: "MLOps",
    icon: web,
    description: "Getting models out of notebooks and into production. Training pipelines, deployment, monitoring.",
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "scikit-learn",
    icon: scikitlearn,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  // --- EDUCATION ---
  {
    title: "Master of Science in Artificial Intelligence",
    company_name: "Kennesaw State University",
    icon: education,
    iconBg: "#383E56",
    date: "Graduated May 2026 · GPA 3.7",
    category: "Education",
    points: [
      "Relevant Coursework:",
      "Machine Learning: Built classifiers and regressors from the ground up. kNN, decision trees, SVMs, random forests, gradient boosting, k-means, ensemble methods. A lot of time spent on what to do when the model overfits and how to tell which evaluation metric to trust.",
      "Artificial Intelligence: Russell & Norvig from cover to cover. Search (A*, D*, adversarial), constraint satisfaction, logical agents, first-order logic, planning, reasoning under uncertainty. The classical AI foundation that everything else is built on top of.",
      "Neural Networks and Deep Learning: Wrote my first neural networks in plain NumPy before touching PyTorch. CNNs for images, RNNs for sequences, transformers once we got to attention. GANs at the end. Transfer learning was where things started to feel practical.",
      "Machine Vision: Image filtering, feature extraction, edge and corner detection, camera models, 2D/3D geometry, segmentation, optical flow, stereo vision, structure from motion. Final project was a YOLOv8 model for catching defects on circuit boards. Got it to 0.983 mAP on the DeepPCB benchmark.",
      "Natural Language Processing: Tokenization and embeddings up through transformer-based language models. Regex, n-grams, WordNet, HMMs, POS tagging, NER, sentiment, summarization, machine translation, question answering. Compared the classical statistical stuff against modern LLM approaches on the same tasks. Built with Python and spaCy.",
      "AI & Robotics: Perception, sensors, actuators. SLAM, localization, mapping, navigation, path planning. PID control, filtering and estimation, reinforcement learning. Built in ROS. This is also where my Graph SLAM project lived.",
      "Data Warehousing and Mining: Linear and logistic regression, decision trees, hierarchical clustering, Naive Bayes, expectation-maximization, topic models. Final project was a Streamlit-based neural network visualizer (see GradientMonitoring below). Also got a brief intro to quantum ML at the end of the semester.",
      "Big Data Analytics: MapReduce, Hadoop, Apache Spark. SVMs and random forests at terabyte scale on commodity clusters. The point where you stop thinking about algorithms and start thinking about partitioning, shuffling, and what the network is doing.",
      "AI Ethics: When models meet the real world, things get messy. Worked through ethical frameworks, fairness metrics, interpretability tools like LIME and SHAP, data governance, privacy, informed consent, and case studies in hiring and lending. Finished CITI training in Biomedical, Behavioral, and AI Human Subject Protections.",
      "AI Capstone: End-to-end software delivery. Project scoping, SRS and SDD, development docs, test plan and report, presentations. I led the team for Teaching Tools for Machine Learning (see project below).",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    company_name: "Kennesaw State University",
    icon: education,
    iconBg: "#E6DEDD",
    date: "Graduated May 2024",
    category: "Education",
    points: [
      "Relevant Coursework:",
      "Programming Fundamentals: OOP in Python, Java, and C#. Console apps, GUI tools, the usual progression.",
      "Data Structures and Algorithms: Arrays through trees and graphs, sorting and searching, BFS, DFS, Dijkstra. Complexity analysis on everything.",
      "Databases: Wrote a lot of SQL across MySQL, PostgreSQL, and SQL Server. Also worked with MongoDB enough to have opinions about when NoSQL actually helps and when it doesn't.",
      "Software Engineering: Agile sprints, code reviews, Git, pull requests. Team projects where the hardest part wasn't the code.",
      "Honors: Dean's List Spring 2024, President's List Summer 2023.",
    ],
  },
  {
    title: "Associate of Applied Science in Computer Information Systems",
    company_name: "Chattahoochee Technical College",
    icon: education,
    iconBg: "#383E56",
    date: "Graduated July 2021 · GPA 3.6",
    category: "Education",
    points: [
      "Computer Programming specialization.",
      "First serious programming through Java and C#. Some database design, networking basics, and intro web development on the side.",
      "Picked up the Java Programmer Certificate (May 2021) and C# Programmer Certificate (December 2020) along the way.",
    ],
  },
  // --- CERTIFICATIONS ---
  {
    title: "IBM Machine Learning Professional Certificate",
    company_name: "IBM (Coursera)",
    icon: certification,
    iconBg: "#E6DEDD",
    date: "Status: In Progress",
    category: "Certifications",
    points: [
      "Six-course track covering supervised learning, unsupervised learning, deep learning, and time series.",
      "Each course includes a capstone project graded against industry rubrics.",
    ],
  },
  {
    title: "Java Programmer Certificate",
    company_name: "Chattahoochee Technical College",
    icon: certification,
    iconBg: "#383E56",
    date: "Completed: May 2021",
    category: "Certifications",
    points: [
      "Java fundamentals and application development.",
    ],
  },
  {
    title: "C# Programmer Certificate",
    company_name: "Chattahoochee Technical College",
    icon: certification,
    iconBg: "#E6DEDD",
    date: "Completed: December 2020",
    category: "Certifications",
    points: [
      "C# programming and .NET application development.",
    ],
  },
];

const projects = [
  {
    name: "Vision-Scan: PCB Defect Detection",
    description:
      "YOLOv8 trained to spot six kinds of defects on printed circuit boards. Hits 0.983 mAP@0.5 on the DeepPCB benchmark and runs at 99 FPS on a T4 GPU.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "yolov8", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
    ],
    image: project_vision_scan,
    source_code_link: "https://github.com/Kokou-Adje/vision-scan",
    details: {
      methodology: "Three stages. First, expand the 1,050-image training set roughly fourfold using bounding-box-aware augmentation: rotation, flipping, brightness shifts, Gaussian noise and blur. Second, fine-tune YOLOv8s from COCO-pretrained weights with AdamW, FP16 mixed precision, and cosine LR decay. Third, export to ONNX (opset 12) with graph simplification so the model runs the same on CPU, CUDA, or OpenVINO. Final project for CS 7367 Machine Vision.",
      tools: ["Python 3.12", "PyTorch 2.10", "Ultralytics YOLOv8", "Albumentations", "ONNX Runtime", "OpenCV"],
      results: "0.983 mAP@0.5, 0.627 mAP@0.5:0.95, 0.979 precision, 0.948 recall, 99.3 FPS on NVIDIA T4. Per-class mAP ranged from 0.965 (short) to 0.993 (pin-hole). Most residual error was missed detection, not class confusion.",
    },
  },
  {
    name: "GradientMonitoring: Neural Network Visualizer",
    description:
      "Streamlit app that lets you watch a neural network learn in real time. Decision boundary, weights, and loss curve all update as the model trains on XOR, Circles, and Moons.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "deep-learning", color: "pink-text-gradient" },
    ],
    image: project_gradient_monitoring,
    source_code_link: "https://github.com/Kokou-Adje/deep-learning-teaching-tool",
    details: {
      methodology: "Wrote the network in pure NumPy: forward pass with sigmoid activations, binary cross-entropy loss, and full backprop with gradient descent. Then wired it into Streamlit so the decision boundary and loss curve re-render after every training step. Users tune learning rate (0.01 to 1.0), hidden layer size (2 to 12 neurons), and epochs per step. Final project for CS7050 Data Warehousing & Mining.",
      tools: ["Python", "Streamlit", "NumPy", "Matplotlib"],
      results: "Solves XOR with as few as two hidden neurons, learns the radial boundary on Circles, and fits the non-convex Moons set. Watching the boundary move during training makes the link between hyperparameters and convergence obvious in a way that static plots never quite do.",
    },
  },
  {
    name: "Teaching Tools for Machine Learning (Capstone)",
    description:
      "Web platform for visualizing how ML algorithms work. Capstone for AI 7993 at Kennesaw State, supervised by Prof. Arthur Choi.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "capstone", color: "pink-text-gradient" },
    ],
    image: project_ttml,
    source_code_link: "https://github.com/Kokou-Adje/Teaching-Tools-For-Machine-Learning",
    live_demo_link: "https://kokou-adje.github.io/Teaching-Tools-For-Machine-Learning/",
    details: {
      methodology: "I was the Team Leader, which meant scope, architecture, and delivery sat with me. The system design is microservices: React frontend, Kong API gateway, Node.js for user management, a Python service running scikit-learn for the algorithms, a visualization service using matplotlib and seaborn, and MongoDB for storage. Process-wise, we ran a Kanban-flavored Agile loop. The course also required formal documentation, so I produced the Project Plan, SRS, SDD, Development Document, and Software Test Plan and Report. The shipped v1 covers linear regression on weather data. Next algorithms in the pipeline: kNN, K-means, SVM, logistic regression, hierarchical clustering.",
      tools: ["React", "Node.js", "Python", "Flask", "scikit-learn", "pandas", "NumPy", "matplotlib", "seaborn", "MongoDB", "Kong", "Streamlit"],
      results: "Linear regression visualizer shipped as v1 of the teaching suite. Full design and test documentation delivered alongside the code. The architecture is set up so new algorithms drop in without restructuring the core.",
    },
  },
  {
    name: "Graph SLAM with Modified Keyframe Tuning",
    description:
      "Forked the hdl_graph_slam ROS package and changed how keyframes are selected during 3D LIDAR mapping. Coursework dive into pose graph optimization, scan matching, and loop closure.",
    tags: [
      { name: "cpp", color: "blue-text-gradient" },
      { name: "ros", color: "green-text-gradient" },
      { name: "slam", color: "pink-text-gradient" },
    ],
    image: project_graph_slam,
    source_code_link: "https://github.com/Kokou-Adje/CS7075-hdl-graph-slam",
    details: {
      methodology: "Built on the open-source hdl_graph_slam package (BSD-2-Clause). I changed the keyframe delta and angular thresholds, then studied how those choices affect map quality and loop closure. The pipeline runs four ROS nodelets: prefiltering and downsampling, scan-matching odometry between consecutive LIDAR frames, RANSAC floor-plane detection, and a pose graph optimizer that fuses odometry, loop closures, GPS, IMU, and floor planes. CS 7075 coursework.",
      tools: ["C++", "ROS", "PCL", "g2o", "NDT/GICP scan matching", "Velodyne LIDAR"],
      results: "Mapped the trade-off between dense keyframe sampling (accurate but slow) and sparse sampling (fast but drift-prone) on indoor and outdoor bag files. Pinned down a setting that holds up well in both regimes.",
    },
  },
];

export { services, technologies, experiences, projects };
