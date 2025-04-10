import React from "react";

function Header(): React.JSX.Element {
  return (
    <header className="flex justify-between w-full h-10 border-b border-[#314158]">
      {/* Left side */}
      <div className="flex h-full">
        <div className="flex justify-center items-center pl-4 pr-26 border-r border-[#314158]">gabriel-batista</div>
        <nav className="flex h-full">
          <div className="flex justify-center items-center px-6 border-r border-[#314158]">_hello</div>
          <div className="flex justify-center items-center px-6 border-r border-[#314158]">_about-me</div>
          <div className="flex justify-center items-center px-6 border-r border-[#314158]">_projects</div>
        </nav>
      </div>
      {/* Right side */}
      <div className="flex justify-center items-center px-4 border-l border-[#314158]">_contact-me</div>
    </header>
  );
}

export default Header;
