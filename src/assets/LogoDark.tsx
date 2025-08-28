import React from "react";

const LogoDark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 140"
        role="img"
        aria-label="omaBlog logo dark"
        {...props}
    >
        <defs>
            <linearGradient id="gradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
        </defs>

        {/* Icon <> */}
        <g
            stroke="url(#gradDark)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        >
            <path d="M30 30 L10 70 L30 110" />
            <path d="M40 30 L60 70 L40 110" />
        </g>

        {/* Wordmark */}
        <text
            x="90"
            y="90"
            fontSize="64"
            fontWeight="700"
            fill="#FFFFFF"
            fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
        >
            oma<tspan fontWeight="800">Blog</tspan>
        </text>
    </svg>
);

export default LogoDark;
