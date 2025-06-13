// app/components/VideoEmbed.tsx
export default function VideoEmbed() {
  return (
    <div className="w-full my-12 flex justify-center">
      <div className="w-[560px] h-[315px] rounded-md shadow-md overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/T6238-kxM3o"
          title="HIV Fellowship Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}