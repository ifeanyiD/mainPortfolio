import Aside from "../components/aside/Aside";

import "../styles/layout.scss";

export default function MainLayout({ children }) {
  return (
    <div className="layout">
      <Aside />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}