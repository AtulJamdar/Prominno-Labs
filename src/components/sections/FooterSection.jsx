const footerLinks = [
  {
    title: "Heading",
    links: ["Link here", "Link here", "Link here", "Link here"],
  },
  {
    title: "Heading",
    links: ["Link here", "Link here", "Link here", "Link here"],
  },
  {
    title: "Heading",
    links: ["Link here", "Link here", "Link here", "Link here"],
  },
];

export default function FooterSection() {
  return (
    <div>
      {/* 1. TOP SECTION: Pure White Background */}
      <div className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 translate-y-1/2">
          {/* CTA Banner */}
          <div className="bg-[#262626] rounded-[10px] px-6 sm:px-8 lg:px-[50px] py-6 sm:py-7 lg:py-[27px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-sm">
            {/* Left Content */}
            <div>
              <h2 className="text-white text-[24px] sm:text-[28px] lg:text-3xl font-semibold">
                Need more information?
              </h2>
              <p className="text-gray-300 mt-2 sm:mt-3 text-[14px] sm:text-base">
                Write your concern to us and our specialist will get back to you.
              </p>
            </div>

            {/* Button */}
            <button className="bg-white text-black px-10 py-4 font-medium rounded-md hover:bg-gray-200 transition-all duration-300 hover:scale-105">
              Button
            </button>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM SECTION: Light Gray Background */}
      <footer className="bg-[#F8F8F8] pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-14 mt-6 sm:mt-8 lg:mt-10">
            {/* Logo + Description */}
            <div className="max-w-[267px]">
              {/* Logo */}
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <p className="mt-4 sm:mt-6 text-[14px] sm:text-base text-gray-500 leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelit officia consequat.
              </p>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-[#262626]">
                  {section.title}
                </h3>
                <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="/"
                        className="text-[14px] sm:text-base text-gray-500 hover:text-black transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Socials */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-[#262626]">
                Connect with us
              </h3>

              <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-8">
                {/* Facebook */}
                <a
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="/"
                  className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}