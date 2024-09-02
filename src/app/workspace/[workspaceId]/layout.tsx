"use client"

import Toolbar from "./toolbar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full b">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceLayout;
