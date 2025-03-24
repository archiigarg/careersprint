import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const MAX_RESULTS = 5;

interface Video {
  id: { videoId?: string; playlistId?: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
  };
}

export default function YouTubeSidebar({ queries }: { queries: string[] }) {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const videoList: Video[] = [];
        for (const query of queries) {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${query}&part=snippet&type=video&order=relevance&maxResults=${MAX_RESULTS}`
          );
          const data = await response.json();
          if (data.items) {
            videoList.push(...data.items);
          }
        }
        setVideos(videoList);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    }

    fetchVideos();
  }, [queries]);

  return (
    <div className="w-80 bg-gradient-to-r from-[#ff3131] to-[#ff914d] p-6 overflow-y-auto h-screen border-l border-orange-300 fixed right-0 top-0">
      <h2 className="text-3xl font-extrabold mb-6 text-white">Recommended Videos For You</h2>
      <ul>
        {videos.length > 0 ? (
          videos.map((video) => (
            <li key={video.id.videoId || video.id.playlistId} className="mb-6">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId || video.id.playlistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-orange-100 p-3 rounded-lg transition duration-300 ease-in-out "
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  className="w-full h-32 object-cover rounded-lg border border-orange-400 shadow-md"
                />
                <span className="block mt-2 text-lg font-semibold line-clamp-2 text-white ">
                  {video.snippet.title}
                </span>
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