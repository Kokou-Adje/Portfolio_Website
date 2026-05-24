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
    description: "Building predictive models using supervised and unsupervised learning, ensemble methods, and model evaluation techniques.",
  },
  {
    title: "Deep Learning",
    icon: mobile,
    description: "Designing neural network architectures including CNNs, RNNs, and transformers for complex pattern recognition tasks.",
  },
  {
    title: "Computer Vision",
    icon: backend,
    description: "Developing image processing pipelines for object detection, image segmentation, and visual classification systems.",
  },
  {
    title: "Natural Language Processing",
    icon: creator,
    description: "Building text analysis systems for sentiment classification, summarization, and machine translation.",
  },
  {
    title: "Reinforcement Learning",
    icon: mobile,
    description: "Training intelligent agents using reward-based learning, Deep Q-Networks, and exploration strategies.",
  },
  {
    title: "AI Ethics",
    icon: backend,
    description: "Analyzing algorithmic fairness, detecting bias in AI systems, and implementing responsible AI practices.",
  },
  {
    title: "Generative AI & LLMs",
    icon: creator,
    description: "Working with large language models, prompt engineering, retrieval-augmented generation (RAG), and fine-tuning transformers for domain-specific tasks.",
  },
  {
    title: "MLOps",
    icon: web,
    description: "Deploying machine learning models to production, building reproducible training pipelines, and monitoring model performance over time.",
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
    name: "Scikit-learn",
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
    name: "Git",
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
    date: "September 2024 - May 2026",
    category: "Education",
    points: [
      "Relevant Coursework:",
      "Machine Learning: Supervised and unsupervised learning algorithms, ensemble learning, and model evaluation.",
      "Deep Learning: Linear classifiers, activation functions, neural networks, CNNs, RNNs, and transformers.",
      "Reinforcement Learning: Exploration and exploitation strategies, deep reinforcement learning methods.",
      "Natural Language Processing: Text preprocessing, sentiment analysis, summarization, and machine translation.",
      "Computer Vision: Image processing, feature extraction, object detection, image segmentation, CNNs.",
      "AI Ethics: Explored ethical considerations and societal impacts of AI technologies.",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    company_name: "Kennesaw State University",
    icon: education,
    iconBg: "#E6DEDD",
    date: "Graduated: May 2024",
    category: "Education",
    points: [
      "Relevant Coursework:",
      "Programming Fundamentals: Object-oriented programming, algorithms using Python, Java, and C#.",
      "Data Structures and Algorithms: Arrays, linked lists, graphs; sorting and searching algorithms.",
      "Databases: SQL, SQL Server, MySQL, MongoDB, PostgreSQL, and NoSQL.",
      "Software Engineering: Software development lifecycle, Agile practices, and version control with Git.",
      "Dean's List: Spring 2024 | President's List: Summer 2023.",
    ],
  },
  {
    title: "Associate of Applied Science in Computer Information Systems",
    company_name: "Chattahoochee Technical College",
    icon: education,
    iconBg: "#383E56",
    date: "Graduated: July 2021",
    category: "Education",
    points: [
      "Completed Computer Programming specialization.",
      "Built a strong foundation in programming fundamentals and software development.",
    ],
  },
  // --- CERTIFICATIONS ---
  {
    title: "IBM Machine Learning Professional Certificate",
    company_name: "IBM — Coursera",
    icon: certification,
    iconBg: "#E6DEDD",
    date: "Expected Completion: December 2025",
    category: "Certifications",
    points: [
      "Comprehensive professional certificate covering machine learning concepts and applications.",
      "Hands-on projects using industry-standard tools and frameworks.",
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
      "Certified in Java programming fundamentals and application development.",
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
      "Certified in C# programming and .NET application development.",
    ],
  },
];

const projects = [
  {
    name: "Vision-Scan: PCB Defect Detection",
    description:
      "Deep learning pipeline for automated PCB defect inspection using YOLOv8. Detects six defect classes on the DeepPCB benchmark at 0.983 mAP@0.5 and 99 FPS on a T4 GPU.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "yolov8", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
    ],
    image: project_vision_scan,
    source_code_link: "https://github.com/Kokou-Adje/vision-scan",
    details: {
      methodology: "Three-stage pipeline: synthetic augmentation (rotation, flipping, brightness shifts, Gaussian noise/blur) expands the 1,050-image training set roughly four-fold with bounding-box-aware transforms; YOLOv8s transfer-learning from COCO-pretrained weights with AdamW, FP16 mixed precision, and cosine LR decay; ONNX export with opset 12 and graph simplification for portable CPU/CUDA/OpenVINO deployment. Final project for CS 7367 Machine Vision at Kennesaw State.",
      tools: ["Python 3.12", "PyTorch 2.10", "Ultralytics YOLOv8", "Albumentations", "ONNX Runtime", "OpenCV"],
      results: "0.983 mAP@0.5, 0.627 mAP@0.5:0.95, mean precision 0.979, mean recall 0.948, 99.3 FPS on NVIDIA T4. Per-class mAP ranged 0.965 (short) to 0.993 (pin-hole). Residual error dominated by missed detection rather than class confusion.",
    },
  },
  {
    name: "GradientMonitoring: Neural Network Visualizer",
    description:
      "Interactive Streamlit app that visualizes how neural networks learn through backpropagation. Real-time decision boundary evolution, weight updates, and loss curves on XOR, Circles, and Moons datasets.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "deep-learning", color: "pink-text-gradient" },
    ],
    image: project_gradient_monitoring,
    source_code_link: "https://github.com/Kokou-Adje/deep-learning-teaching-tool",
    details: {
      methodology: "Built a from-scratch neural network in NumPy implementing forward propagation, sigmoid activations, binary cross-entropy loss, and full backpropagation with gradient descent weight updates. Wired the network into a Streamlit UI that re-renders the decision boundary and loss curve after each training step, letting users adjust learning rate (0.01–1.0), hidden layer size (2–12 neurons), and epochs per step. Final project for CS7050 Data Warehousing & Mining at Kennesaw State.",
      tools: ["Python", "Streamlit", "NumPy", "Matplotlib"],
      results: "Solves XOR with as few as 2 hidden neurons, learns radial boundaries on Circles, and fits the non-convex Moons dataset. Decision boundary and loss curve update live during training, making the relationship between hyperparameters and convergence visible to students.",
    },
  },
  {
    name: "Teaching Tools for Machine Learning (TTML)",
    description:
      "Web-based educational tool for interactive machine learning visualization. First release covers linear regression with planned extensions to k-means clustering and other foundational algorithms.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "education", color: "pink-text-gradient" },
    ],
    image: project_ttml,
    source_code_link: "https://github.com/Kokou-Adje/Teaching-Tools-For-Machine-Learning",
    details: {
      methodology: "Built a Streamlit interface for visualizing linear regression on real-world weather data. Users adjust model parameters and immediately see the regression line, residuals, and fit quality update on a 2D plot. Designed as the foundation for a broader ML teaching suite. Capstone project for CS 7993 AI Capstone at Kennesaw State, Spring 2025.",
      tools: ["Python", "Streamlit", "Pandas", "Matplotlib", "HTML"],
      results: "Interactive linear regression visualizer running on real weather data. Architected to be extended with additional algorithms (k-means clustering planned next) without restructuring the core app.",
    },
  },
  {
    name: "Graph SLAM with Modified Keyframe Tuning",
    description:
      "Extended the hdl_graph_slam ROS package with modified keyframe parameters for 3D LIDAR-based SLAM. Coursework exploration of pose graph optimization, scan matching, and loop closure constraints.",
    tags: [
      { name: "cpp", color: "blue-text-gradient" },
      { name: "ros", color: "green-text-gradient" },
      { name: "slam", color: "pink-text-gradient" },
    ],
    image: project_graph_slam,
    source_code_link: "https://github.com/Kokou-Adje/CS7075-hdl-graph-slam",
    details: {
      methodology: "Built on top of the open-source hdl_graph_slam package (BSD-2-Clause). Modified keyframe delta and angular thresholds to study their effect on map quality and loop closure behavior. The underlying pipeline runs four ROS nodelets: prefiltering for downsampling, scan-matching odometry between consecutive LIDAR frames, RANSAC floor-plane detection, and pose graph optimization with constraints from odometry, loop closures, GPS, IMU, and floor planes. CS 7075 coursework at Kennesaw State.",
      tools: ["C++", "ROS", "PCL", "g2o", "NDT/GICP scan matching", "Velodyne LIDAR"],
      results: "Tuned keyframe parameters to balance map accuracy against compute cost. Documented the trade-offs between dense keyframe sampling (accurate but slow) and sparse sampling (fast but prone to drift) on indoor and outdoor bag files.",
    },
  },
];

export { services, technologies, experiences, projects };
