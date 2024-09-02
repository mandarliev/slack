"use client";

import Sidebar from "./sidebar";
import Toolbar from "./toolbar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full b">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceLayout;
