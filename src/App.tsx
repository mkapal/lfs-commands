import { CommandPalette } from "./components/CommandPalette";
import { Link } from "./components/Link";
import { GitHubIcon } from "./components/icons/GitHubIcon";

export function App() {
  return (
    <main className="min-h-screen p-4 flex items-center flex-col justify-center">
      <div className="flex-auto">
        <h1 className="text-2xl font-bold mb-4 text-center text-slate-800">
          <span className="text-sky-600 text-3xl font-normal">/</span> Live for
          Speed Commands
        </h1>
      </div>
      <div className="max-w-[730px] w-full justify-center flex flex-col items-center">
        <CommandPalette />
      </div>
      <ul className="flex items-center justify-end flex-auto flex-col text-sm">
        <li>
          <Link href="https://www.lfs.net">
            Live for Speed - official website
          </Link>
        </li>
        <li>
          <Link href="https://en.lfsmanual.net/wiki/Commands">
            LFS Manual - commands
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/mkapal/lfs-commands"
            className="flex items-center gap-1"
          >
            <GitHubIcon /> mkapal/lfs-commands
          </Link>
        </li>
      </ul>
    </main>
  );
}
