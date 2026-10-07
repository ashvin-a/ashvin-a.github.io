import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../Projects/ProjectCards';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { SiGooglescholar} from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import on_robot_learning from '../../Assets/Projects/on-robot-learning.gif';
import robocup from '../../Assets/Projects/robocup-2026.jpg';
import visual_odometry from '../../Assets/Projects/visual-odometry.gif';
import obst_avoidance from '../../Assets/Projects/obstacle-avoidance.svg';
import chrono_agentic from '../../Assets/Projects/chrono-rag.svg';
import learn_rl from '../../Assets/Projects/learn-rl.gif';

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <h1 className="project-heading">
                    Research <strong className="purple">Projects </strong>
                </h1>
                <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={on_robot_learning}
                            isBlog={false}
                            title="Recurrent State Space Model with Data-Driven RL for Partially Observable Conditions"
                            description="Devised a learning algorithm for scoring a goal using SAC architecture with less than 50 expert demonstration and world model using a GRU with a recurrent state space model, bypassing sim-to-real transfer limitations and optimizing sample efficiency to train continuous control policies from scratch within a strict 20-minute wall-clock constraint. Advised by Prof. Josiah Hanna."
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={robocup}
                            isBlog={true}
                            title="RoboCup 2026"
                            description="Engineered a decentralized multi-agent coordination stack using ROS 2 and deep reinforcement learning for a fleet of autonomous Booster K1s. Migrated simulation environments from Isaac Sim (PhysX) to MuJoCo, boosting training reliability by 40%, and developed a custom sim-to-real deployment pipeline that cut iterative hardware testing overhead by 20%. Advised by Prof. Josiah Hanna."
                            demoLink="https://pages.cs.wisc.edu/~jphanna/robocup.html"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={visual_odometry}
                            isBlog={false}
                            title="Real-Time Visual Odometry using State Space Models"
                            description="Benchmarked State Space Models (SSMs) for real-time visual odometry inference under strict compute constraints within a ROS/Gazebo environment. Built a simulation of a differential drive robot equipped with a monocular RGB camera and synthesized multi-modal datasets of sequential imagery and ground-truth trajectories via precise teleoperation."
                            ghLink="https://github.com/ashvin-a/Visual-Odometry-Using-SSM"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={obst_avoidance}
                            isBlog={false}
                            title="Obstacle Avoidance & Detection"
                            description="Designed a deterministic obstacle avoidance and detection pipeline for a Mars rover utilizing HOG feature extraction and SVM classification, as a member of Wisconsin Robotics. Profiled throughput and latency bottlenecks, accelerating execution via OpenMP multi-threading and custom CUDA kernels, achieving 8.4x and 33.5x speedups from the baseline, respectively."
                            ghLink="https://github.com/ashvin-a/WRover-Obstacle-Avoidance"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chrono_agentic}
                            isBlog={false}
                            title="ChronoAgentic"
                            description="Co-developed ChronoAgentic, a code-based multi-agent framework that compiles natural-language prompts into verifiable PyChrono simulations instead of latent video rollouts. Coordinated five specialized agents — planning, code generation, visual analysis, physics checking, and review — over a curated PyChrono skill library, a generative 3D asset pipeline, and retrieval across the simulator source, with an iterative repair loop that enforces physical constraints. Reached 82.5% full correctness (semantic and physical) on PhyWorldBench versus 52.5% for the strongest of 10 text-to-video baselines, and extended the system to interactive ROS-based driving in generated environments. Advised by Prof. Dan Negrut; available as arXiv preprint 2605.14398."
                            ghLink="https://github.com/uwsbel/chrono-rag"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={learn_rl}
                            isBlog={false}
                            title="Learn RL - A Reinforcement Learning Tutorial"
                            description="A tutorial hand-tailored to cover basic concepts in reinforcement learning along with their implementations, encouraging a hands-on way of learning. Covers topics like PPO and SAC using libraries such as OpenAI Gym and Stable Baselines3, and physics engines such as MuJoCo."
                            ghLink="https://github.com/ashvin-a/Learn-RL"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/ashvin-a"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/AshvinA001"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/ashvin-anilkumar/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://scholar.google.com/citations?user=SA0MzSwAAAAJ&hl=en"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <SiGooglescholar />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
