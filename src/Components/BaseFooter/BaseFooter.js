import React from 'react';
import './BaseFooter.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import {Link} from "react-router-dom";
const BaseFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer_inner">
                <div className="c-footer">
                    <div className="layout justify-between">
                        <div className="layout_item w-50">
                            <div className="newsletter">
                                <h3 className="newsletter_title mb-5">
                                    Help your business grow with the best chatbot app by combining automated AI answers with dedicated flows.
                                </h3>
                            </div>
                        </div>
                        <div className="layout_item w-25">
                            <nav className="c-nav-tool">
                                <h4 className="c-nav-tool_title">Support</h4>
                                <ul className="c-nav-tool_list gap-y-2">
                                    <li className="c-nav-tool_item">
                                        <a href="/" className="c-link">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="c-nav-tool_item">
                                        <a href="/" className="c-link">Privacy Policy</a>
                                    </li>
                                    <li className="c-nav-tool_item">
                                        <a href="/" className="c-link">Contact</a>
                                    </li>
                                    <li className="c-nav-tool_item">
                                        <Link className={"c-link"} to="/login">Login</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>

                    <div className="layout c-2">
                        <div className="layout_item w-50">
                            <ul className="flex">
                                <li>
                                    <a><FaGithub className={"footer-icon text-2xl"}/></a>
                                </li>
                                <li>
                                    <a><FaLinkedinIn className={"footer-icon text-2xl"}/></a>
                                </li>
                                <li>
                                   <a><SiGmail className={"footer-icon text-2xl"}/></a>
                                </li>
                                <li>
                                   <a><IoLogoVercel className={"footer-icon text-2xl"}/></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className={"copyright-section justify-end items-end"}>
                        <p className={"copyright-text"}>© 2024 AYZEN AI. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaseFooter;
