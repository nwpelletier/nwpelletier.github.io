import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    window.open("/npelletier-resume-2025.pdf", "_blank");
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>Opening resume PDF...</p>
      <p>
        If nothing happens,{" "}
        <a
          href="/Nicholas_Pelletier_Resume_August2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>
      </p>
    </div>
  );
}
