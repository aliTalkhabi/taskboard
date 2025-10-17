export type BoardProps = {
  type: "todo" | "inwork" | "done";
};

export type Card = {
  id: string;
  status?: "todo" | "inwork" | "done";
  title: string;
  description?: string;
  order?: number;
};



