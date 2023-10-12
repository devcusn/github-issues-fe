import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <p className="text-4xl">Github Issues And Detail Page Frontend Clone</p>
      <Link className="underline" href="issues">
        Go Issues
      </Link>
      <div>
        <ul>
          <span className="font-semibold"> All Routes</span>
          <li>/issues</li>
          <li>/issues/[issue_number]</li>
        </ul>
        <ul className="mt-10">
          <span className="font-semibold"> Public Github APIs</span>
          <li>
            https://api.github.com/repos/facebook/react/issues?page=[page]
          </li>
          <li>
            https://api.github.com/repos/facebook/react/issues/[issue_number]
          </li>
          <li>
            https://api.github.com/repos/facebook/react/issues/[issue_number]/comments
          </li>
        </ul>
      </div>
    </main>
  );
}
