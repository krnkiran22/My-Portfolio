import { Button } from "@/components/ui/button";
import { PiStarFourFill } from "react-icons/pi";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitHubCalendar from "react-github-calendar";

gsap.registerPlugin(ScrollTrigger);

// Mock data for projects
const mockProjects = [
    {
        _id: "1",
        title: "ResolveAI - Web3 Dispute Resolution",
        description: "A sophisticated chat interface for Web3 dispute resolution on the Sepolia testnet, powered by Groq's Llama3-70B model. Features AI-driven transaction analysis, real-time blockchain data fetching, and a responsive UI with Tailwind CSS.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "ethers.js", "Groq API", "Sepolia Testnet"],
        sourceUrl: "https://github.com/krnkiran22/monad-blitz",
        liveUrl: "https://monad-blitz-sjs6.vercel.app/"
    },
    {
        _id: "2",
        title: "LigerGames Chess - Web3 Multiplayer",
        description: "A real-time multiplayer chess platform with ERC20 token (LGT) rewards on the Sepolia testnet. Integrates MetaMask for wallet connection, Ably for real-time gameplay, and Brewit SDK for escrow, with a responsive UI.",
        image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        tags: ["React", "Tailwind CSS", "ethers.js", "Ably", "Brewit SDK", "Solidity", "Sepolia Testnet"],
        sourceUrl: "https://github.com/krnkiran22/ChessGame-web3",
        liveUrl: "https://monad-blitz-sjs6.vercel.app/"
    },
    {
        _id: "3",
        title: "SRM Trichy Medical College Website",
        description: "A freelancing project for SRM Institute of Allied Health Sciences, featuring a modern, responsive website showcasing healthcare education programs, advanced facilities, and clinical training opportunities.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        sourceUrl: "https://github.com/krnkiran22/srm-website",
        liveUrl: "https://srm-website-cyan.vercel.app/"
    },
    {
        _id: "4",
        title: "SecureDapp Website",
        description: "A professional website for SecureDapp, showcasing blockchain-based solutions with a focus on security and scalability. Built with React and optimized for performance and user engagement.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        tags: ["React", "TypeScript", "JavaScript", "CSS"],
        sourceUrl: "https://github.com/krnkiran22/Securedapp_v2",
        liveUrl: "https://securedapp.io"
    },
    {
        _id: "5",
        title: "DeckDelight Paintings",
        description: "A visually appealing and responsive landing page for DeckDelight Paintings, designed to showcase artwork and services with a clean UI and smooth user experience.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
        tags: ["React", "JavaScript", "CSS"],
        sourceUrl: "https://github.com/krnkiran22/samcontracts",
        liveUrl: "https://www.deckdelightpainting.in/"
    }
];

const ProjectCard = ({ project, expanded, onExpandToggle }: { project: any; index: number; expanded: boolean; onExpandToggle: () => void }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        gsap.fromTo(
            card,
            {
                opacity: 0,
                y: 100,
                scale: 0.9,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Hover animation
        const handleMouseEnter = () => {
            gsap.to(card, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // Tag display logic
    const showTags = project.tags && project.tags.length > 0;
    const visibleTags = showTags ? (expanded ? project.tags : project.tags.slice(0, 4)) : [];

    return (
        <div
            ref={cardRef}
            className="group relative overflow-hidden rounded-xl border border-white/[0.15] bg-black/50 backdrop-blur-sm shadow-inner hover:shadow-amber-500/50 transition-all duration-300"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] to-rose-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative p-6 z-10">
                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-4 text-sm text-white/60">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                    {visibleTags.map((tag: string, i: number) => (
                        <span key={i} className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-white/60">{tag}</span>
                    ))}
                    {showTags && project.tags.length > 4 && !expanded && (
                        <button
                            type="button"
                            className="bg-gray-600 text-white px-2 py-1 rounded text-xs"
                            onClick={onExpandToggle}
                        >
                            +{project.tags.length - 4}
                        </button>
                    )}
                    {showTags && project.tags.length > 4 && expanded && (
                        <button
                            type="button"
                            className="bg-gray-600 text-white px-2 py-1 rounded text-xs"
                            onClick={onExpandToggle}
                        >
                            Show less
                        </button>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    {project.sourceUrl && (
                        <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors z-20 relative"
                        >
                            <FaGithub className="h-5 w-5" />
                            <span className="text-sm">Source</span>
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors z-20 relative"
                        >
                            <FaExternalLinkAlt className="h-5 w-5" />
                            <span className="text-sm">Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const titleRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [showAll, setShowAll] = useState(false);
    const hiddenProjectsRef = useRef<HTMLDivElement>(null);
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedTags, setExpandedTags] = useState<string[]>([]); // project._id array

    useEffect(() => {
        // Simulate loading time
        setLoading(true);
        setTimeout(() => {
            setProjects(mockProjects);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        const title = titleRef.current;
        const container = containerRef.current;
        if (!title || !container) return;

        // Title animation
        gsap.fromTo(
            title,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Background elements animation
        const bgElements = container.querySelectorAll(".bg-element");
        bgElements.forEach((element, index) => {
            gsap.fromTo(
                element,
                {
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    delay: index * 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top bottom",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    const toggleShowAll = () => {
        const hiddenProjects = hiddenProjectsRef.current;
        if (!hiddenProjects) return;

        if (!showAll) {
            // Show more animation
            gsap.fromTo(
                hiddenProjects,
                {
                    height: 0,
                    opacity: 0,
                },
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    onComplete: () => {
                        setShowAll(true);
                    },
                }
            );
        } else {
            // Hide animation
            gsap.to(hiddenProjects, {
                height: 0,
                opacity: 0,
                duration: 0.6,
                ease: "power3.in",
                onComplete: () => {
                    setShowAll(false);
                },
            });
        }
    };

    const visibleProjects = projects.slice(0, 3);
    const hiddenProjects = projects.slice(3);

    if (loading) {
        return <div className="text-white text-center py-20">Loading projects...</div>;
    }

    return (
        <div ref={containerRef} className="relative min-h-screen w-full bg-[#030303] py-10 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="bg-element absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/[0.05] to-transparent rounded-full blur-3xl" />
                <div className="bg-element absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-500/[0.05] to-transparent rounded-full blur-3xl" />
                <div className="bg-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] rounded-full blur-3xl" />
            </div>

            <div className="container relative mx-auto px-4">
                <div ref={titleRef} className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.03] border border-white/[0.08] px-3 py-1 mb-4">
                        <span className="text-xs md:text-sm text-white/60 tracking-wide flex items-center gap-1 md:gap-2">
                            Featured Projects
                            <PiStarFourFill className="h-3 w-3 text-amber-500/80" />
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-amber-500">Projects</span>
                    </h2>
                    <div className=" text-white flex justify-center py-4">
                <GitHubCalendar
                    username="vishalmet"
                    blockSize={10}
                    blockMargin={3}
                    fontSize={16}
                />
            </div>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Here are some of my recent projects. Each project is unique and built with different technologies and frameworks.
                    </p>
                </div>
               

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard
                            key={project._id || project.id || index}
                            project={project}
                            index={index}
                            expanded={expandedTags.includes(project._id)}
                            onExpandToggle={() => setExpandedTags(expandedTags => expandedTags.includes(project._id) ? expandedTags.filter(id => id !== project._id) : [...expandedTags, project._id])}
                        />
                    ))}
                </div>

                <div
                    ref={hiddenProjectsRef}
                    className="overflow-hidden"
                    style={{ height: showAll ? "auto" : 0 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
                        {hiddenProjects.map((project, index) => (
                            <ProjectCard
                                key={project._id || project.id || index}
                                project={project}
                                index={index + 3}
                                expanded={expandedTags.includes(project._id)}
                                onExpandToggle={() => setExpandedTags(expandedTags => expandedTags.includes(project._id) ? expandedTags.filter(id => id !== project._id) : [...expandedTags, project._id])}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <Button
                        onClick={toggleShowAll}
                        className="group relative overflow-hidden rounded-full bg-white/[0.03] border border-white/[0.08] px-6 py-3 text-white/60 hover:text-white transition-all duration-300 hover:border-white/30"
                    >
                        <span className="flex items-center gap-2">
                            {showAll ? (
                                <>
                                    Show Less
                                    <FaChevronUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                                </>
                            ) : (
                                <>
                                    Show More
                                    <FaChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                                </>
                            )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.1] to-rose-500/[0.1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                </div>
            </div>
        </div>
    );
} 