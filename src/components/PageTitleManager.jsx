import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ROUTE_TITLES = {
  "/": "Circuitron — Electronics & IoT Club | RVSCET Jamshedpur",
  "/about": "About Circuitron — Origin & Mission | RVSCET Jamshedpur",
  "/domains": "Technical Domains & Disciplines | Circuitron RVSCET",
  "/projects": "Hardware & IoT Projects | Circuitron RVSCET",
  "/activities": "Workshops & Activities Archive | Circuitron RVSCET",
  "/gallery": "Photographic Documentation & Archive | Circuitron RVSCET",
  "/team": "Faculty Mentors & Leadership Committee | Circuitron RVSCET",
  "/join": "Join Circuitron — Community Intake | RVSCET Jamshedpur",
  "/privacy-policy": "Privacy Policy | Circuitron RVSCET",
  "/terms": "Terms of Use & Lab Protocol | Circuitron RVSCET",
};

export default function PageTitleManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = ROUTE_TITLES[pathname] || "Circuitron — Electronics & IoT Club | RVSCET Jamshedpur";
    document.title = title;

    // Update canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const cleanPath = pathname === "/" ? "" : pathname;
    canonical.setAttribute("href", `https://www.circuitron.in${cleanPath}`);
  }, [pathname]);

  return null;
}
