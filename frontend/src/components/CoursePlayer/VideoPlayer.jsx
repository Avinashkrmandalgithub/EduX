import YouTube from "react-youtube";

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl)
    return (
      <div className="w-full aspect-video flex justify-center items-center bg-black/20 text-gray-400 rounded-xl">
        No video available
      </div>
    );

  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  // if YouTube → old player
  if (isYouTube) {
    const extractVideoId = (url) => {
      try {
        const urlObj = new URL(url);
        return (
          urlObj.searchParams.get("v") || urlObj.pathname.replace("/", "") || ""
        );
      } catch {
        return url;
      }
    };

    const videoId = extractVideoId(videoUrl);

    return (
      <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  // Otherwise — play normal mp4
  return (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
      <video
        src={videoUrl}
        controls
        className="w-full h-full"
        controlsList="nodownload"
      />
    </div>
  );
};

export default VideoPlayer;
