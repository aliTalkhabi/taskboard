export type BoardProps = {
  type: "todo" | "inwork" | "done";
};

export type Card = {
  id: string;
  columnId: string;
  title: string;
  description?: string;
  order?: number;
};


