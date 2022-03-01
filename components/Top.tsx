import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Top = () => {
    const router = useRouter();

    const [ lights, setLights ] = useState( typeof window !== "undefined" ? sessionStorage.getItem("dm") ? true : false : false); 

    useEffect(() => {
        if(lights) {
            document.body.classList.add("dm");
            sessionStorage.setItem("dm", "indeed yes i am in dark mode")
        } else {
            document.body.classList.remove("dm");
            sessionStorage.removeItem("dm")
        }
    }, [ lights])

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            paddingBottom: "2.5rem"
        }}>
            {(router.asPath === "/" ) ? (
                <h1 style={{
                    color: lights ? "rgba(255,255,255, 0.28)" : "black"
                }}>jaewuchun</h1>
            ) : (
                <Link href="/" passHref>
                    <h1 className="linkable" style={{
                        cursor: "pointer",
                        color: lights ? "#6c9bf3a2" : "#2e61c0"
                    }}>jaewuchun</h1>
                </Link>
            )}
            <div style={{
                display: "flex",
                gap: "0.3rem"
            }}>
                <a className="icon" href="mailto:jaewuchun@gmail.com" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                <a className="icon" href="https://github.com/naijwu" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a className="icon" href="https://linkedin.com/in/jaewuchun" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a className="icon" href="https://instagram.com/jaewuchun" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a className="icon" href="https://facebook.com/jaewuchun" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
            </div>
            <div style={{
                display: "flex",
                flexGrow: "2",
                justifyContent: "flex-end"
            }}>
                <span className="icon" onClick={()=>setLights(!lights)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </span>
            </div>
        </div>
    )
}

export default Top;