export interface Comment {
  id: number;
  commentText: string;
  name: string;
  likes?: number;
  replies?: Comment[];
}
