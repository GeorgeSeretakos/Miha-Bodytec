import Image from "next/image";

export default function SocialSection() {
  return (
    <section className="py-8">
      <div className="flex flex-col items-center gap-4">
        {/* top line */}
        <div className="w-16 h-1 bg-black"></div>

        {/* icons */}
        <div className="flex gap-4">
          <a
            href="" // TODO: Add link
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Facebook"
          >
            <img
              src="/icons/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              // style={{backgroundColor: "white", border: "2px solid white", borderRadius: "50%"}}
            />
          </a>
          <a
            href="" // TODO: Add link
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Instagram"
          >
            <img
              src="/icons/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              // style={{backgroundColor: "white", border: "2px solid white", borderRadius: "50%"}}
            />
          </a>
          <a
            href="" // TODO: Add link
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="TikTok"
          >
            <img
              src="/icons/tiktok.png"
              alt="TikTok"
              width={40}
              height={40}
              style={{border: "2px solid white", backgroundColor: "white", borderRadius: "50%"}}
            />
          </a>
          <a
            href="" // TODO: Add link
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <img
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              // style={{backgroundColor: "white", border: "2px solid white", borderRadius: "50%"}}
            />
          </a>
        </div>

        {/* bottom line */}
        <div className="w-16 h-1 bg-black"></div>
      </div>
    </section>
  );
}
