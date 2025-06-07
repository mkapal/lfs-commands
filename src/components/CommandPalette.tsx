import { Command, CommandInput, CommandItem, CommandList } from "cmdk";
import { type KeyboardEventHandler, useRef, useState } from "react";
import { commands } from "../data/commands.ts";

export function CommandPalette() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (value: string) => {
    setQuery(value);

    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: 0 });
    });
  };

  const handleFilter = (
    value: string,
    search: string,
    keywords: string[] = [],
  ) => {
    const normalizedValue = value.toLowerCase();
    const normalizedSearch = search.toLowerCase();

    const command = normalizedValue.split(" ")[0];

    if (command === `/${normalizedSearch}`) {
      return 1;
    }

    if (command.startsWith(`/${normalizedSearch}`)) {
      return 0.95;
    }

    if (command.includes(normalizedSearch)) {
      return 0.9;
    }

    const valueMatches = normalizedValue.includes(normalizedSearch);
    const keywordsMatches = normalizedSearch
      .split(" ")
      .some((word) => keywords.includes(word));

    if (valueMatches || keywordsMatches) {
      return 0.5;
    }

    return 0;
  };

  const handleInputKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Escape") {
      setSearch("");
    }
  };

  return (
    <div className="h-[360px] items-center justify-center w-full">
      <Command
        value={query}
        onValueChange={handleInputChange}
        filter={handleFilter}
        className="border border-slate-300 rounded-md shadow-md"
      >
        <CommandInput
          className="overflow-hidden rounded-md py-2 px-3 w-full bg-slate-50 focus-visible:outline-1 focus-visible:outline-sky-600"
          placeholder="Search LFS commands…"
          autoFocus
          inputMode="search"
          autoCapitalize="none"
          value={search}
          onValueChange={setSearch}
          onKeyUp={handleInputKeyUp}
        />
        {search ? (
          <>
            <Command.Empty className="py-2 px-3">
              No results found.
            </Command.Empty>
            <CommandList
              ref={listRef}
              className="max-h-[256px] h-(--cmdk-list-height) overflow-y-auto"
            >
              {commands.map((group) =>
                group.commands.map((cmd) => (
                  <CommandItem
                    key={`${group.name}-${cmd.command}`}
                    value={`/${cmd.command} ${cmd.description}`}
                    keywords={cmd.keywords}
                    className="data-[selected=true]:bg-sky-100 py-2 px-3 first:border-t border-slate-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium flex items-center gap-2">
                        <div className="rounded-sm border border-slate-400 bg-slate-200 px-1 font-mono">
                          /{cmd.command}
                        </div>
                        <div className="text-sm text-slate-900">
                          {cmd.description}
                        </div>
                      </div>
                      <div className="text-sm text-slate-600">{group.name}</div>
                    </div>
                  </CommandItem>
                )),
              )}
            </CommandList>
          </>
        ) : null}
      </Command>
    </div>
  );
}
