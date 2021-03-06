export interface EmbedAuthor {
  value: string;
  iconUrl?: string;
}

export interface Embed {
  author?: EmbedAuthor;
  title?: string;
  description?: string;
  color?: number;
  footer?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
}

export type MessageCreateArgs = { content: string } | { embed: Embed };
