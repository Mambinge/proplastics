import { Heart, Share2, CalendarDays, ExternalLink } from "lucide-react";

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/proplastics",
    icon: FacebookIcon,
    color: "text-blue-600",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/proplastics",
    icon: InstagramIcon,
    color: "text-pink-600",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/proplastics",
    icon: LinkedInIcon,
    color: "text-sky-700",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@proplastics",
    icon: YoutubeIcon,
    color: "text-red-600",
  },
];

const updates = [
  {
    platform: "LinkedIn",
    icon: LinkedInIcon,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-700",
    time: "2 days ago",
    text: "We are thrilled to announce the completion of our automated manufacturing line upgrade. This expansion increases our high-diameter HDPE pipe production capacity by 35%, helping us better support mining and irrigation projects across SADC.",
    hashtags: ["#Infrastructure", "#MiningAfrica", "#Growth"],
  },
  {
    platform: "Facebook",
    icon: FacebookIcon,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    time: "1 week ago",
    text: "Driving sustainable progress. Over 30% of our Ardbennie facility is now powered by clean solar energy, reducing our carbon footprint while we manufacture the pipe systems that last.",
    hashtags: ["#GoGreen", "#SolarEnergy", "#Sustainability"],
  },
  {
    platform: "Instagram",
    icon: InstagramIcon,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    time: "2 weeks ago",
    text: "Behind the scenes at our factory floor — precision extrusion, rigorous quality testing and decades of expertise going into every metre of pipe we produce.",
    hashtags: ["#BehindTheScenes", "#MadeInZimbabwe", "#Quality"],
  },
];

export default function SocialFeed() {
  return (
    <div>
      {/* Stay connected panel */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink-200 bg-ink-50 p-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand-950">
            Stay Connected
          </p>
          <p className="mt-1 text-sm text-ink-600">
            Follow our official feeds for live updates
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-ink-200 transition-colors hover:bg-ink-50 ${social.color}`}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      {/* Live corporate updates card */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200 shadow-sm">
        {/* Header bar */}
        <div className="flex items-center justify-between bg-flow-600 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-white">
              Live Corporate Updates
            </p>
          </div>
          <a
            href="https://www.proplastics.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-white/80"
          >
            proplastics.co.zw <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Scrollable feed */}
        <div className="max-h-[420px] divide-y divide-ink-100 overflow-y-auto bg-white">
          {updates.map((update, i) => (
            <div key={i} className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${update.iconBg} ${update.iconColor}`}
                  >
                    <update.icon className="h-4 w-4" />
                  </div>
                  <p className="font-bold text-brand-950">{update.platform} Update</p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 text-xs text-ink-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {update.time}
                </div>
              </div>

              <p className="mt-3 leading-relaxed text-ink-600">{update.text}</p>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold text-flow-600">
                  {update.hashtags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="flex shrink-0 items-center gap-3 text-ink-300">
                  <button aria-label="Like" className="transition-colors hover:text-flow-600">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button aria-label="Share" className="transition-colors hover:text-flow-600">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
