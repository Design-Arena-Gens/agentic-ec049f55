import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agentic Project Builder",
  description:
    "Autonomous CLI agent dashboard demonstrating iterative project planning and execution.",
  openGraph: {
    title: "Agentic Project Builder",
    description:
      "Visualize the workflow of an autonomous CLI agent taking a project from idea to deployment.",
    url: "https://agentic-ec049f55.vercel.app",
    siteName: "Agentic Project Builder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Project Builder",
    description:
      "Explore the lifecycle of an autonomous CLI agent as it plans, builds, tests, and deploys.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="app-body">
        <div className="page-shell">
          <header className="site-header">
            <nav className="site-nav">
              <div className="brand">
                <span className="brand-logo">
                  AG
                </span>
                <div className="brand-copy">
                  <p className="eyebrow">
                    Agentic CLI
                  </p>
                  <p className="brand-title">
                    Project Orchestrator
                  </p>
                </div>
              </div>
              <div className="nav-links">
                <a className="nav-link" href="#workflow">
                  Workflow
                </a>
                <a className="nav-link" href="#capabilities">
                  Capabilities
                </a>
                <a className="nav-link" href="#insights">
                  Insights
                </a>
              </div>
              <a className="nav-cta" href="#start">
                View Demo
              </a>
            </nav>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <div className="footer-content">
              <p>Built by an autonomous CLI agent with modern web tooling.</p>
              <div className="footer-links">
                <a className="footer-link" href="https://nextjs.org">
                  Next.js
                </a>
                <a className="footer-link" href="https://vercel.com">
                  Deploy on Vercel
                </a>
                <a className="footer-link" href="https://github.com">
                  GitHub Repo
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
