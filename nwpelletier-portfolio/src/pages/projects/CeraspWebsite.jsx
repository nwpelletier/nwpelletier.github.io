import React from "react";

const CeraspWebsite = () => {
  return (
    <div className="project-single-container">
      <div className="project-single-header">
        <img
          src="/pictures/cerasp-overview.jpg"
          height="48px"
          width="48px"
          alt="CERASP overview thumbnail"
        />
        <h1>CERASP Website</h1>
        <span>|</span>
        <a
          href="https://cerasp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the live site!
        </a>
      </div>

      <div className="project-single-scrollable">
        <div className="project-single-column">
          <img src="/pictures/cerasp-overview.jpg" alt="CERASP site overview" />
          <p>
            Redesign of CERASP's website using React for the frontend and Strapi
            as a headless CMS, replacing their outdated WordPress setup. The new
            site is significantly faster and more responsive, combining
            public-facing static content (like localization files and structured
            JSON) with a CMS-driven backend for the sections the client needs to
            manage dynamically. Strapi allows the team to add, edit, or delete
            content entries without touching code, while the frontend remains
            highly performant and lightweight.
          </p>
        </div>

        <div className="project-single-column">
          <p>
            The site is fully bilingual (English/French), using React Context
            and localized JSON files to provide near-instant switching between
            languages—no reloads, no delays. This was a major improvement over
            the older WordPress version, which suffered from slower load times
            and buried content navigation. We preserved the original site's
            palette and general layout, but focused on a cleaner, more intuitive
            design that simplifies access for users and administrators alike.
          </p>
          <figure>
            <img src="/pictures/cerasp-mobile.jpg" alt="CERASP mobile view" />
            <figcaption>Mobile-first layout for responsive access</figcaption>
          </figure>
        </div>

        <div className="project-single-column">
          <p>
            The frontend is built with modern React patterns: functional
            components, useState, useEffect, useContext, and react-router-dom
            for navigation. A number of custom hooks were written to track
            scroll progress, handle smooth section scrolling, and manage
            language toggles. CSS animations are used subtly to give polish to
            key UI elements. The entire experience is mobile-first and fluid,
            offering a fast, app-like experience across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CeraspWebsite;
