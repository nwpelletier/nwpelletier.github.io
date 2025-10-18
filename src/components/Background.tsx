import "./Background.css";

export default function Background() {
  return (
    <div className="fixed z-0 w-[100vw] h-[100vh]">
      <div className="app-background"></div>
      <div className="app-mask"></div>
    </div>
  );
}
