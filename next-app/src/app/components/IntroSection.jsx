export default function IntroSection({
                                       image,
                                       videoSrc,
                                       videoType = "video/mp4",
                                       poster,
                                       title,
                                       paragraph,
                                       imageClassName = "object-cover", // default
                                     }) {
  const hasVideo = !!videoSrc;

  return (
    <section className="relative text-white">
      <div className="relative h-[60vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          {hasVideo ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
            >
              <source src={videoSrc} type={videoType} />
            </video>
          ) : (
            <img
              src={image}
              alt="Background"
              className={`w-full h-full ${imageClassName}`}
            />
          )}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="font-bold">{title}</h1>
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-gray-700 leading-relaxed">{paragraph}</div>
        </div>
      </div>
    </section>
  );
}
