const VideoPlayer = ({ videoId }) => (
  <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-xl border border-white/10">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      className="w-full h-full"
      allowFullScreen
    ></iframe>
  </div>
);

export default VideoPlayer;
