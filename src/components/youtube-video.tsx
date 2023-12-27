const YouTubeVideo = ({ videoId }: { videoId: string }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (

        <iframe
            className="w-full border-none h-[450px]"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    )
};

export default YouTubeVideo;