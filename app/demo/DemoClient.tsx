"use client";

import { useState } from "react";

export default function DemoClient() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const videos = [
        { id: "EMs-r0mGGYo", title: "How to Navigate", desc: "Learn the basics of navigating through the Vysera platform. Understand the main menu, sidebar navigation, and how to access different features and modules." },
        { id: "VVKDEMK2k1w", title: "Home Page", desc: "Learn how to view upcoming renewals, access quick actions, and monitor your important reminders at a glance." },
        { id: "VedMQCH49hQ", title: "Group Receivers", desc: "Learn how to set up group receivers for your documents." },
        { id: "e_T_r43Zqes", title: "Reminder Items", desc: "See how to add and manage reminder items for your organization." },
        { id: "hExq8D2mlyg", title: "Manage Notification Period", desc: "See how to adjust notification settings and manage reminder periods." },
        { id: "r8FVSuG8XA4", title: "Renew Document", desc: "Discover how to extend expiration dates, and update renewal detail." },

    ];

    return (
        <section id="demo" className="features">
            <style>{`
                .video-card-img-wrapper:hover .video-overlay {
                    background: rgba(0, 0, 0, 0.5) !important;
                }
                .video-overlay svg {
                    transition: transform 0.3s;
                }
                .video-card-img-wrapper:hover .video-overlay svg {
                    transform: scale(1.1);
                    color: #066FD1;
                    fill: #066FD1;
                }
                
                .modal-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(5px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    animation: backdropFadeIn 0.3s ease-out forwards;
                }

                .modal-content {
                    width: 100%;
                    max-width: 1000px;
                    background: #000;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    position: relative;
                    animation: modalScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .modal-close {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    color: white;
                    font-size: 2rem;
                    cursor: pointer;
                    background: none;
                    border: none;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }

                .modal-close:hover {
                    opacity: 1;
                }

                @keyframes backdropFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes modalScaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                
                @media (max-width: 768px) {
                    .modal-backdrop {
                        padding: 1rem;
                    }
                    .modal-close {
                        top: -35px;
                        font-size: 1.5rem;
                    }
                }
            `}</style>

            <div className="container">
                <div className="section-header">
                    <h2>See Vysera in <span className="gradient-text">Action</span></h2>
                    <p>Watch our demo videos to learn how Vysera simplifies employee certification and renewal tracking.</p>
                </div>

                <div className="feature-grid">
                    {videos.map((video, index) => (
                        <div key={index} className="feature-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                            <div
                                className="video-card-img-wrapper"
                                style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}
                                onClick={() => setSelectedVideo(video.id)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title}
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div className="video-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', transition: 'background 0.3s' }}>
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                    </svg>
                                </div>
                            </div>
                            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{video.title}</h3>
                            <p style={{ fontSize: '0.95rem' }}>{video.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedVideo && (
                <div className="modal-backdrop" onClick={() => setSelectedVideo(null)}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '1000px' }}>
                        <button className="modal-close" onClick={() => setSelectedVideo(null)}>&times;</button>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                                    title="Demo Video"
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
