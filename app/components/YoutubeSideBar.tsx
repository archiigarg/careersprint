import { useEffect, useState } from "react";

const API_KEY = "YOUR_YOUTUBE_API_KEY";
const CHANNEL_ID = "YOUR_CHANNEL_ID";
const MAX_RESULTS = 10;

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
  };
}

export default function YouTubeSidebar() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="w-64 bg-gradient-to-r from-[#e79345] to-[#d6af77] text-orange-900 p-6 overflow-y-auto h-screen border-r border-orange-300 rounded-lg" >
      <h2 className="text-3xl font-extrabold mb-6 text-white">Latest Videos</h2>
      <ul>
        {videos.length > 0 ? (
          videos.map((video) => (
            <li key={video.id.videoId} className="mb-6">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:bg-orange-100 p-3 rounded-lg transition duration-300 ease-in-out"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-24 h-14 object-cover rounded-lg border border-orange-400 shadow-md"
                />
                <span className="text-lg font-semibold line-clamp-2 text-orange-900">{video.snippet.title}</span>
              </a>
            </li>
          ))
        ) : (
          <p className="text-orange-600 text-lg">No videos available</p>
        )}
      </ul>
    </div>
  );
}