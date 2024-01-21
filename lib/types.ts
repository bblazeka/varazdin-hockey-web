export type TPostInfo = {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly date: Date;
  readonly author: string;
  readonly image: string;
};

export type TPostData = {
  readonly title: string;
  readonly contentHtml: string;
};
