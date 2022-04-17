export interface Vice {
  name: string;
  id: string;
  createdAt: number;
  createdBy: string;
  description: string;
  type: "save" | "track";
  frequency?: "daily" | "weekly" | "weekdays";
  history: [];
  balance?: number;
  price?: number;
}
