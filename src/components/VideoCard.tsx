import { Play } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  url?: string;
}

const VideoCard = ({ title, thumbnail, duration, category, url }: VideoCardProps) => {
  const Wrapper = url ? 'a' : 'div';
  const wrapperProps = url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper {...wrapperProps} className="group cursor-pointer block">
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
          </div>
        </div>
        <span className="absolute bottom-3 right-3 bg-foreground/70 text-primary-foreground text-xs font-body px-2 py-1 rounded">
          {duration}
        </span>
      </div>
      <span className="font-body text-xs uppercase tracking-wider text-warm-glow mb-1 block">
        {category}
      </span>
      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>
    </Wrapper>
  );
};

export default VideoCard;
