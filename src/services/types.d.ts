export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type GithubLabel = {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
};

export type GithubReactions = {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
};
export type Assignee = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string; // Note: This URL may need to be further specified based on your use case
  gists_url: string;
  starred_url: string; // Note: This URL may need to be further specified based on your use case
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string; // Note: This URL may need to be further specified based on your use case
  received_events_url: string;
  type: string;
  site_admin: boolean;
};
export type PullRequest = {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: string | null;
};

export type GithubIssue = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GithubUser;
  labels: GithubLabel[];
  state: string;
  locked: boolean;
  assignee?: Assignee; // Replace 'any' with the actual type if needed
  assignees?: Assignee[]; // Replace 'any' with the actual type if needed
  milestone: null | any; // Replace 'any' with the actual type if needed
  comments: number;
  pull_request: PullRequest;
  created_at: string;
  updated_at: string;
  closed_at: null | string;
  author_association: string;
  active_lock_reason: null | string;
  body: string;
  reactions: GithubReactions;
  timeline_url: string;
  performed_via_github_app: null | any; // Replace 'any' with the actual type if needed
  state_reason: null | string;
};
export type GetGithubIssueResponse = GithubIssue[];
