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
  project_pneumonia_cnn,
  project_diabetic_retinopathy,
  project_knn_digits,
  project_naive_bayes,
  project_ragnosis,
  project_cyber_intrusion,
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
      "AI & Robotics: Perception, sensors, actuators. SLAM, localization, mapping, navigation, path planning. PID control, filtering and estimation, reinforcement learning. Built in ROS.",
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
      "Web platform for visualizing how ML algorithms work. Capstone for AI CS 7993 at Kennesaw State, supervised by Prof. Arthur Choi.",
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
    name: "Pneumonia Detection from Chest X-Rays",
    description:
      "DenseNet-121 transfer learning to classify chest X-rays as normal or pneumonia, paired with a Streamlit app for live predictions. About 88% accuracy and 0.95 ROC-AUC, with balanced sensitivity and specificity.",
    tags: [
      { name: "tensorflow", color: "blue-text-gradient" },
      { name: "transfer-learning", color: "green-text-gradient" },
      { name: "medical-imaging", color: "pink-text-gradient" },
    ],
    image: project_pneumonia_cnn,
    source_code_link: "https://github.com/Kokou-Adje/pneumonia-detection-densenet121",
    details: {
      methodology: "Started as a from-scratch CNN for the course, then upgraded to DenseNet-121 transfer learning, which performed far better on a small dataset. Images are 224x224 RGB run through DenseNet's preprocessing; the ImageNet-pretrained backbone acts as a feature extractor with a new classification head on top. Balanced class weights handle the dataset's imbalance (pneumonia outnumbers normal ~2.7 to 1) so the model doesn't ignore the rarer normal class. Trained with Adam, binary cross-entropy, early stopping, and a learning-rate scheduler. A Streamlit app loads the trained model for live predictions. DenseNet-121 was a deliberate choice: it's the same architecture as CheXNet, the radiologist-level pneumonia model.",
      tools: ["Python", "TensorFlow", "Keras", "DenseNet-121", "scikit-learn", "Streamlit"],
      results: "About 88% test accuracy and 0.95 ROC-AUC on the Kaggle Chest X-Ray dataset. Class weighting lifted normal-case recall from 0.55 (the original from-scratch CNN) to 0.81 while keeping pneumonia recall at 0.93 — a far more balanced, trustworthy classifier than the first version.",
    },
  },
  {
    name: "Diabetic Retinopathy Detection",
    description:
      "Fine-tuned a ResNet18 to detect diabetic retinopathy in retinal fundus images using transfer learning. Reaches 84.6% accuracy and 91.2% sensitivity on the held-out test set.",
    tags: [
      { name: "pytorch", color: "blue-text-gradient" },
      { name: "transfer-learning", color: "green-text-gradient" },
      { name: "medical-imaging", color: "pink-text-gradient" },
    ],
    image: project_diabetic_retinopathy,
    source_code_link: "https://github.com/Kokou-Adje/diabetic-retinopathy-transfer-learning",
    details: {
      methodology: "Used transfer learning rather than training from scratch, since the dataset is small. Started from a ResNet18 pretrained on ImageNet, replaced the final layer with a 2-class head, and fine-tuned on retinal images from the IDRiD dataset (grade 0 as NonDR, grades 3-4 as DR). Images resized to 224x224, normalized with ImageNet statistics, with random horizontal flips for augmentation. Trained with SGD (lr 0.001, momentum 0.9), a step LR scheduler, and cross-entropy loss; kept the best-accuracy epoch. The code swaps in AlexNet, VGG16, or GoogLeNet by changing one list. Project for the graduate machine learning course.",
      tools: ["Python", "PyTorch", "torchvision", "ResNet18", "scikit-learn", "Matplotlib"],
      results: "84.6% accuracy, 91.2% sensitivity (recall on DR), and 77.4% specificity. The model catches most disease cases while being more cautious on healthy eyes, which is the right balance for a screening tool where a missed case is costlier than a false alarm.",
    },
  },
  {
    name: "Handwritten Digit Recognition (KNN)",
    description:
      "K-Nearest Neighbors built from scratch to recognize handwritten digits, with k chosen by cross-validation. 98.7% accuracy, matching scikit-learn on every test image.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "knn", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
    ],
    image: project_knn_digits,
    source_code_link: "https://github.com/Kokou-Adje/knn-digit-recognition",
    details: {
      methodology: "Implemented KNN directly in NumPy: Euclidean distance from each test image to every training image, then a majority vote of the k nearest labels. Pixel values are scaled to [0,1] and the data is split 70/30 with stratification. Crucially, k is chosen by 5-fold cross-validation on the training set alone (testing k from 1 to 15), never touching the test set, so the reported accuracy is honest. The from-scratch model is then validated against scikit-learn's KNeighborsClassifier on the same split.",
      tools: ["Python", "NumPy", "scikit-learn", "Matplotlib"],
      results: "Cross-validation selected k=1, and the model scored 98.7% on the held-out test set (533 of 540 digits correct). The from-scratch and scikit-learn implementations agreed on 100% of test images, confirming the hand-written distance and voting logic is correct. The few misclassified digits are genuinely ambiguous.",
    },
  },
  {
    name: "Naive Bayes Cancer Classifier",
    description:
      "Gaussian Naive Bayes from scratch with 5-fold cross-validation and ROC analysis on the Wisconsin Breast Cancer dataset. Around 93% mean accuracy across folds.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "naive-bayes", color: "green-text-gradient" },
      { name: "machine-learning", color: "pink-text-gradient" },
    ],
    image: project_naive_bayes,
    source_code_link: "https://github.com/Kokou-Adje/naive-bayes-breast-cancer",
    details: {
      methodology: "Modeled each feature as a Gaussian per class and combined the class prior with per-feature likelihoods using Bayes' theorem. Log-probabilities are summed rather than multiplying raw probabilities, since multiplying 30 small numbers underflows to zero. Evaluated two ways: a single stratified 70/30 split and 5-fold stratified cross-validation, the more honest estimate since every sample is tested exactly once. ROC analysis summarizes the sensitivity/specificity trade-off across thresholds.",
      tools: ["Python", "NumPy", "scikit-learn", "Matplotlib"],
      results: "94.0% accuracy on the holdout split and roughly 93.3% mean across the five folds (per-fold: 87.0, 95.1, 95.1, 94.3, 95.1%). The spread across folds is a reminder that a single train/test split can flatter or punish a model depending on which samples land where.",
    },
  },
  {
    name: "Network Intrusion Detection",
    description:
      "Benchmarking a Random Forest, a 1D-CNN, and a Transformer to flag network attacks on CIC-IDS2017. The honest finding: the classical Random Forest wins, at 99.8% accuracy with a 0.001 false-positive rate.",
    tags: [
      { name: "scikit-learn", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "cybersecurity", color: "pink-text-gradient" },
    ],
    image: project_cyber_intrusion,
    source_code_link: "https://github.com/Kokou-Adje/cyber-intrusion-detection",
    details: {
      methodology: "Per-flow classification of ~2.5M CIC-IDS2017 network flows into nine traffic categories. The pipeline is built to be defensible: identifier columns (IPs, ports, timestamps) are dropped so the model learns behavior rather than memorizing addresses, and the scaler is fit on the training split only to avoid leakage. Three models compete — a Random Forest baseline, a 1D-CNN, and a Transformer — all trained with balanced class weights to counter the heavily benign-dominated data (Heartbleed has only 11 samples). Evaluation reports per-class recall, macro-averaged F1, and a dedicated attack false-positive rate, because accuracy alone is misleading on an 80%-benign dataset. Deep models were trained on a Kaggle GPU.",
      tools: ["Python", "scikit-learn", "TensorFlow", "Keras", "Streamlit", "NumPy", "pandas"],
      results: "The Random Forest won decisively: 99.8% accuracy, 0.92 macro F1, and a 0.001 attack false-positive rate, meaning it almost never flags benign traffic. The CNN caught attacks but was noisy (~16% false positives); the Transformer failed to learn on this tabular, non-sequential data. The takeaway, reported plainly rather than hidden, is that a classical tree ensemble beats deep models on CIC-IDS2017 flow features — exactly the kind of negative result a benchmark exists to surface.",
    },
  },
  {
    name: "RAGnosis — Chest X-Ray Triage Assistant",
    status: "In progress",
    description:
      "A chest X-ray triage assistant pairing a multi-label DenseNet-121 classifier with retrieval-augmented report generation grounded in ACR and Fleischner Society clinical guidelines. AUC 0.84 on NIH ChestX-ray14.",
    tags: [
      { name: "pytorch", color: "blue-text-gradient" },
      { name: "rag", color: "green-text-gradient" },
      { name: "medical-imaging", color: "pink-text-gradient" },
    ],
    image: project_ragnosis,
    source_code_link: "https://github.com/Kokou-Adje/ragnosis",
    details: {
      methodology: "Two components working together. First, a multi-label DenseNet-121 classifies findings across the NIH ChestX-ray14 dataset, where a single image can carry several conditions at once. Second, the classifier's outputs drive a retrieval-augmented generation pipeline that drafts a structured triage report, retrieving relevant passages from ACR Appropriateness Criteria and Fleischner Society guidelines so recommendations are grounded in real clinical sources rather than free-form model output.",
      tools: ["Python", "PyTorch", "DenseNet-121", "Retrieval-Augmented Generation", "Vector database", "LLM"],
      results: "AUC 0.84 across multi-label findings on NIH ChestX-ray14. Pairing the classifier with guideline-grounded retrieval keeps the generated reports tied to recognized clinical standards, which is the difference between a model that predicts and an assistant a clinician could actually reason with.",
    },
  },
];

export { services, technologies, experiences, projects };
