export type LayoutProps = {
  children: React.ReactNode;
};
export type PageProps<T = {}, G> = {
  params: Object<T>;
  searchParams: Object<G>;
};

export type FilterSearchParams = {
  page: string;
  creator: string;
};

export type IssuePageProps = PageProps<{}, FilterSearchParams>;
