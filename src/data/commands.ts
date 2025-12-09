type CommandArgument = {
  placeholder: string;
  isRequired?: boolean;
  hint?: string;
};

type Command = {
  command: string;
  args?: CommandArgument[];
  description: string;
  keywords: string[];
};

type CommandGroup = {
  name: string;
  commands: Command[];
};

export const commands: CommandGroup[] = [
  {
    name: "Host",
    commands: [
      {
        command: "restart",
        description: "Start a race",
        keywords: ["restart", "race", "session"],
      },
      {
        command: "qualify",
        description: "Start qualifying",
        keywords: ["start", "qualify", "qualifying", "session"],
      },
      {
        command: "end",
        description: "Return to race setup screen",
        keywords: ["end", "race", "setup", "lobby"],
      },
      {
        command: "help",
        description: "Get list of commands",
        keywords: ["help", "commands"],
      },
      {
        command: "ck",
        description: "Cancel any kick or ban votes in progress",
        keywords: ["cancel", "kick", "ban", "vote"],
      },
      {
        command: "cv",
        description: "Cancel game votes (restart, end, qualify)",
        keywords: ["cancel", "vote", "restart", "end", "qualify"],
      },
      {
        command: "zero_all",
        description: "Reset lap counters on all cars",
        keywords: ["reset", "lap", "car"],
      },
      {
        command: "track",
        args: [
          {
            placeholder: "XXCR",
            isRequired: true,
            hint: "XX = two-letter track short name, C = config number, R = reversed direction or open config",
          },
          {
            placeholder: "0-4",
          },
        ],
        description: "Set track config and weather",
        keywords: ["map"],
      },
      {
        command: "weather",
        args: [
          {
            placeholder: "0-4",
            isRequired: true,
          },
        ],
        description: "Set lighting",
        keywords: ["track"],
      },
      {
        command: "qual",
        args: [
          {
            placeholder: "0-240",
            isRequired: true,
            hint: "0 = no qualifying",
          },
        ],
        description: "Set qualifying minutes",
        keywords: ["qualifying", "qualification", "minute"],
      },
      {
        command: "laps",
        args: [
          {
            placeholder: "0-1000",
            isRequired: true,
            hint: "0 = practice",
          },
        ],
        description: "Set number of laps",
        keywords: ["race"],
      },
      {
        command: "hours",
        args: [
          {
            placeholder: "0-48",
            isRequired: true,
          },
        ],
        description: "Set number of hours (if laps not specified)",
        keywords: ["race"],
      },
      {
        command: "wind",
        args: [
          {
            placeholder: "0-2",
            isRequired: true,
            hint: "0 = no wind / 1 = low wind / 2 = high wind",
          },
        ],
        description: "Set wind condition",
        keywords: ["weather"],
      },
      {
        command: "maxguests",
        args: [
          {
            placeholder: "0-79",
            isRequired: true,
          },
        ],
        description: "Set maximum number of guests that can join host",
        keywords: ["max", "count", "multiplayer", "server"],
      },
      {
        command: "adminslots",
        args: [
          {
            placeholder: "0-8",
            isRequired: true,
          },
        ],
        description: "Set slots reserved for admins",
        keywords: ["server"],
      },
      {
        command: "carsmax",
        args: [
          {
            placeholder: "1-40",
            isRequired: true,
          },
        ],
        description: "Set maximum number of cars in a race",
        keywords: ["cars", "max", "host", "server"],
      },
      {
        command: "carshost",
        args: [
          {
            placeholder: "0-32",
            isRequired: true,
          },
        ],
        description: "Set maximum number of cars (real+AI) on host PC",
        keywords: ["host", "cars"],
      },
      {
        command: "carsguest",
        args: [
          {
            placeholder: "0-32",
            isRequired: true,
          },
        ],
        description: "Set maximum number of cars (real+AI) per guest PC",
        keywords: ["guest", "cars"],
      },
      {
        command: "pps",
        args: [
          {
            placeholder: "3-12",
            isRequired: true,
          },
        ],
        description: "Set smoothness - maximum car updates per second",
        keywords: [
          "max",
          "packet",
          "second",
          "update",
          "multiplayer",
          "server",
          "host",
        ],
      },
      {
        command: "msg",
        args: [
          {
            placeholder: "text",
            isRequired: true,
          },
        ],
        description: "Send a system message",
        keywords: [],
      },
      {
        command: "vote",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow or disallow guest voting",
        keywords: ["multiplayer", "kick", "ban", "vote"],
      },
      {
        command: "select",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow or disallow guests to select track",
        keywords: ["multiplayer"],
      },
      {
        command: "rstmin",
        args: [
          {
            placeholder: "0-240",
            isRequired: true,
          },
        ],
        description: "Prevent restart for X seconds after race start",
        keywords: ["restart", "race", "start"],
      },
      {
        command: "rstend",
        args: [
          {
            placeholder: "0-240",
            isRequired: true,
          },
        ],
        description: "Prevent restart for X seconds after race finish",
        keywords: ["restart", "finish", "race"],
      },
      {
        command: "specdnf",
        args: [
          {
            placeholder: "0-240",
            isRequired: true,
          },
        ],
        description: "Result blockers spectate with DNF after X seconds",
        keywords: ["spectate", "dnf", "result", "blockers", "seconds"],
      },
      {
        command: "autokick",
        args: [
          {
            placeholder: "no|kick|ban|spec",
            isRequired: true,
          },
        ],
        description: "Set automatic action for wrong way drivers",
        keywords: ["spectate"],
      },
      {
        command: "midrace",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow or disallow joining during race",
        keywords: ["join", "race"],
      },
      {
        command: "mustpit",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Require a pit stop",
        keywords: ["pit", "pit stop", "pitstop"],
      },
      {
        command: "canrefuel",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow or disallow refuelling",
        keywords: ["fuel", "refuel"],
      },
      {
        command: "showfuel",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Show remote fuel gauges",
        keywords: ["fuel", "gauges"],
      },
      {
        command: "canreset",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow or disallow car reset",
        keywords: ["reset", "car"],
      },
      {
        command: "fcv",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Force cockpit view",
        keywords: ["view", "cockpit"],
      },
      {
        command: "cruise",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow wrong way driving",
        keywords: ["cruise", "wrong way"],
      },
      {
        command: "allowmods",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow or disallow mods",
        keywords: ["mods", "cars"],
      },
      {
        command: "unapproved",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Allow or disallow unapproved mods",
        keywords: ["unapproved", "mods", "cars"],
      },
      {
        command: "start",
        args: [
          {
            placeholder: "fixed|finish|reverse|random",
            isRequired: true,
          },
        ],
        description: "Set default race start type without qualifying",
        keywords: [],
      },
      {
        command: "pass",
        args: [
          {
            placeholder: "password",
            hint: "blank = no password",
          },
        ],
        description: "Set new password",
        keywords: ["password"],
      },
      {
        command: "setlap",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
          {
            placeholder: "lap",
            isRequired: true,
            hint: "negative = subtract",
          },
        ],
        description: "Set user's current lap",
        keywords: ["user", "count", "number"],
      },
      {
        command: "setstops",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
          {
            placeholder: "number",
            isRequired: true,
          },
        ],
        description: "Set user's number of stops",
        keywords: ["number", "user", "pit", "pit stop", "pitstop"],
      },
      {
        command: "cansiren",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
          {
            placeholder: "0|1",
            isRequired: true,
          },
        ],
        description: "Allow or disallow siren",
        keywords: ["car"],
      },
      {
        command: "ujoin",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Add user to the race",
        keywords: ["join", "add", "user", "race"],
      },
      {
        command: "uai",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Add user's AI driver to the race",
        keywords: ["ai", "driver"],
      },
      {
        command: "cars",
        args: [
          {
            placeholder: "cars",
            isRequired: true,
            hint: "Example: XFG+XRG - allow XF GTI and XR GT",
          },
        ],
        description: "Define allowed cars using car strings or groups",
        keywords: ["cars", "groups", "allowed"],
      },
      {
        command: "mods",
        args: [
          {
            placeholder: "mods",
            isRequired: true,
          },
        ],
        description: "Set a list of allowed mods",
        keywords: ["mods", "allowed"],
      },
      {
        command: "enforce",
        description: "Spectate anyone who is driving a disallowed car",
        keywords: ["disallowed", "car", "spectate"],
      },
      {
        command: "welcome",
        args: [
          {
            placeholder: "file.txt",
            isRequired: true,
          },
        ],
        description: "Set welcome text file",
        keywords: ["text"],
      },
      {
        command: "tracks",
        args: [
          {
            placeholder: "file.txt",
            isRequired: true,
          },
        ],
        description: "Set list of allowed tracks",
        keywords: ["tracks", "allowed"],
      },
      {
        command: "autosave",
        args: [
          {
            placeholder: "0-2",
            isRequired: true,
            hint: "0 = no / 1 = manual / 2 = auto",
          },
        ],
        description: "Multiplayer replay autosave",
        keywords: ["mpr"],
      },
      {
        command: "save_mpr",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        description:
          "Save multiplayer replay with name X (autosave must be 1 or 2)",
        keywords: ["save", "mpr"],
      },
      {
        command: "mprflush",
        args: [
          {
            placeholder: "0-10",
            isRequired: true,
            hint: "0 = disable",
          },
        ],
        description: "Flush multiplayer replay to file every X seconds",
        keywords: ["flush", "mpr"],
      },
      {
        command: "ndebug",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Enable or disable network debug",
        keywords: ["multiplayer", "server", "host"],
      },
      {
        command: "h_mass",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
          {
            placeholder: "0-200",
            isRequired: true,
          },
        ],
        description: "Set added mass for user's car",
        keywords: ["handicap"],
      },
      {
        command: "h_tres",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
          {
            placeholder: "0-50",
            isRequired: true,
          },
        ],
        description: "Set intake restriction for user's car",
        keywords: ["handicap", "restriction"],
      },
      {
        command: "teamarrows",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description:
          "Enable or disable arrows on non-race small map using name colour",
        keywords: ["team", "map", "color", "colour"],
      },
      {
        command: "axlist",
        args: [
          {
            placeholder: "XXCR",
            isRequired: true,
            hint: "XX = two-letter track short name, C = config number, R = reversed direction or open config",
          },
        ],
        description: "Get list of layouts for track",
        keywords: ["autocross", "autox", "layout", "track"],
      },
      {
        command: "axload",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        description: "Load layout on host",
        keywords: ["autocross", "autox", "layout", "track", "server"],
      },
      {
        command: "axsave",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        description: "Save layout on host",
        keywords: ["autocross", "autox", "layout", "track", "server"],
      },
      {
        command: "axlaps",
        args: [
          {
            placeholder: "0-1000",
            isRequired: true,
          },
        ],
        description: "Set autocross number of laps",
        keywords: ["autocross", "autox", "laps"],
      },
      {
        command: "axclear",
        description: "Clear autocross layout",
        keywords: ["autocross", "autox", "layout"],
      },
      {
        command: "spec",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Make user X join the spectators",
        keywords: ["spectate"],
      },
      {
        command: "kick",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Disconnect user X",
        keywords: ["admin"],
      },
      {
        command: "ban",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
          {
            placeholder: "0-999",
            isRequired: true,
            hint: "0 = 12 hours",
          },
        ],
        description: "Ban user for a given number of days",
        keywords: ["admin"],
      },
      {
        command: "unban",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Remove ban on user X",
        keywords: ["admin"],
      },
      {
        command: "pitlane",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Send user X to the pit lane",
        keywords: [],
      },
      {
        command: "pit_all",
        description: "Send all cars to the pit lane",
        keywords: [],
      },
      {
        command: "p_dt",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Give drive through penalty",
        keywords: ["penalty", "drive through"],
      },
      {
        command: "p_sg",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Give stop-go penalty",
        keywords: ["penalty", "stop&go"],
      },
      {
        command: "p_30",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Give 30 second time penalty",
        keywords: ["penalty"],
      },
      {
        command: "p_45",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Give 45 second time penalty",
        keywords: ["penalty"],
      },
      {
        command: "p_clear",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Clear a time or pit penalty",
        keywords: ["penalty", "clear", "pitstop", "pit stop"],
      },
      {
        command: "rcm",
        args: [
          {
            placeholder: "message",
            isRequired: true,
          },
        ],
        description: "Set a Race Control Message to be sent",
        keywords: ["central text"],
      },
      {
        command: "rcm_ply",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Send the RCM to USERNAME",
        keywords: ["central text", "player"],
      },
      {
        command: "rcm_all",
        description: "Send the RCM to all",
        keywords: ["central text", "players"],
      },
      {
        command: "rcc_ply",
        args: [
          {
            placeholder: "username",
            isRequired: true,
          },
        ],
        description: "Clear USERNAME's RCM",
        keywords: ["central text", "player"],
      },
      {
        command: "rcc_all",
        description: "Clear all RCMs",
        keywords: ["central text"],
      },
    ],
  },
  {
    name: "Local",
    commands: [
      {
        command: "ready",
        description: "Set ready",
        keywords: ["lobby", "setup", "race"],
      },
      {
        command: "cancel",
        description: "Cancel ready",
        keywords: ["lobby", "setup", "race"],
      },
      {
        command: "clear",
        description: "Clear all racers from list",
        keywords: ["lobby", "setup", "race"],
      },
      {
        command: "car",
        args: [
          {
            placeholder: "car",
            isRequired: true,
            hint: "e.g. XRT",
          },
        ],
        description: "Select car",
        keywords: [],
      },
      {
        command: "setup",
        args: [
          {
            placeholder: "name",
            hint: "Default if no name",
          },
        ],
        description: "Select setup",
        keywords: [],
      },
      {
        command: "colour",
        args: [
          {
            placeholder: "name",
            hint: "Default if no name",
          },
        ],
        description: "Select colour",
        keywords: ["color"],
      },
      {
        command: "join",
        args: [
          {
            placeholder: "server",
            hint: "Server name if on entry screen",
          },
        ],
        description: "Join the race or an internet server from entry screen",
        keywords: ["multiplayer"],
      },
      {
        command: "ai",
        args: [
          {
            placeholder: "name",
          },
        ],
        description: "Add AI driver",
        keywords: [],
      },
      {
        command: "spec",
        description: "Spectate or leave grid",
        keywords: [],
      },
      {
        command: "leave",
        description: "Disconnect from host",
        keywords: ["server", "multiplayer"],
      },
      {
        command: "player",
        args: [
          {
            placeholder: "name",
            isRequired: true,
          },
        ],
        description: "Select existing player",
        keywords: [],
      },
      {
        command: "lang",
        args: [
          {
            placeholder: "name",
            isRequired: true,
            hint: "data/language/name.txt",
          },
        ],
        description: "Load language",
        keywords: ["text", "file", "translation"],
      },
      {
        command: "horn",
        args: [
          {
            placeholder: "1-5",
            isRequired: true,
          },
        ],
        description: "Select car horn type",
        keywords: [],
      },
      {
        command: "siren",
        args: [
          {
            placeholder: "off|slow|fast",
            isRequired: true,
          },
        ],
        description: "Switch siren (if allowed by host)",
        keywords: ["server", "car"],
      },
      {
        command: "cp",
        args: [
          {
            placeholder: "view",
            hint: "Restore previously copied free view",
          },
        ],
        description:
          "Copy free view text to clipboard or restore previously copied free view",
        keywords: ["Shift+U", "camera"],
      },
      {
        command: "axsel",
        description: "Copy selected objects text to clipboard",
        keywords: ["autocross", "autox", "editor"],
      },
      {
        command: "aiskill",
        description: "Set AI skill level (for adding AI)",
        keywords: [],
      },
      {
        command: "aiset",
        args: [
          {
            placeholder: "name",
            isRequired: true,
          },
          {
            placeholder: "1-5",
            isRequired: true,
          },
        ],
        description: "Set AI driver to skill level",
        keywords: [],
      },
      {
        command: "aiset_all",
        description: "Set all local AI drivers to skill level",
        args: [
          {
            placeholder: "1-5",
            isRequired: true,
          },
        ],
        keywords: [],
      },
      {
        command: "spr",
        description: "Run a single player replay from entry (front end) screen",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        keywords: [],
      },
      {
        command: "mpr",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        description: "Run a multiplayer replay from entry (front end) screen",
        keywords: [],
      },
      {
        command: "end",
        description: "Exit from replay back to entry screen",
        keywords: ["quit"],
      },
      {
        command: "sp",
        description: "Go into single player from entry screen",
        keywords: [],
      },
      {
        command: "mp",
        args: [
          {
            placeholder: "ip",
            isRequired: true,
          },
          {
            placeholder: "port",
            isRequired: true,
            hint: "0-65536",
          },
        ],
        description: "Join a local server from entry screen",
        keywords: ["multiplayer", "host"],
      },
      {
        command: "mprlag",
        description: "Simulate packet delay in milliseconds",
        args: [
          {
            placeholder: "ms",
            isRequired: true,
          },
        ],
        keywords: ["multiplayer", "debug"],
      },
      {
        command: "mprsmooth",
        args: [
          {
            placeholder: "0|1",
            isRequired: true,
          },
        ],
        description: "Disable or enable input smoothing",
        keywords: ["multiplayer"],
      },
      {
        command: "exit",
        description: "Exit LFS",
        keywords: ["quit"],
      },
      {
        command: "entry",
        description: "Return to entry screen",
        keywords: ["menu"],
      },
      {
        command: "spectv",
        args: [
          {
            placeholder: "yes|no",
            isRequired: true,
          },
        ],
        description: "Auto select TV camera on spectate",
        keywords: ["view"],
      },
      {
        command: "speedreduce",
        args: [
          {
            placeholder: "0-1",
            isRequired: true,
          },
        ],
        description: "Set total speed steer reduction",
        keywords: ["keyboard", "controls"],
      },
      {
        command: "reducehalf",
        args: [
          {
            placeholder: "speed",
            isRequired: true,
          },
        ],
        description: "Set speed in m/s for half of reduction",
        keywords: ["keyboard", "controls"],
      },
      {
        command: "loadkb",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        description: "Load keyboard settings file (data/misc/X.kbs)",
        keywords: ["controls"],
      },
      {
        command: "savekb",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        description: "Save keyboard settings file (data/misc/X.kbs)",
        keywords: ["controls"],
      },
      {
        command: "out",
        args: [
          {
            placeholder: "message",
            isRequired: true,
          },
        ],
        description: "Only seen by external programs",
        keywords: ["insim"],
      },
      {
        command: "log",
        args: [
          {
            placeholder: "file.txt",
            isRequired: true,
          },
        ],
        description: "Set message log file",
        keywords: ["chat"],
      },
      {
        command: "refresh",
        description: "Refresh list of setups / hosts / replays",
        keywords: [],
      },
      {
        command: "rsh",
        description: "Reload shaders",
        keywords: ["graphics", "refresh"],
      },
      {
        command: "rtex",
        description: "Reload textures",
        keywords: ["graphics", "refresh"],
      },
      {
        command: "window",
        args: [
          {
            placeholder: "width",
            isRequired: true,
          },
          {
            placeholder: "height",
            isRequired: true,
          },
        ],
        description:
          "Set window client area width and height or adjust window (min/max/monitor/virtual)",
        keywords: ["size"],
      },
      {
        command: "status",
        args: [
          {
            placeholder: "none|F9|F10|F11|F12|next|prev",
            isRequired: true,
          },
        ],
        description: "Sets status screen",
        keywords: [
          "display",
          "tyre",
          "tire",
          "temperature",
          "clutch",
          "damage",
          "pit",
        ],
      },
      {
        command: "light ind",
        args: [
          {
            placeholder: "off|left|right|all",
            isRequired: true,
          },
        ],
        description: "Switch indicators|hazard",
        keywords: ["turn signal", "blinker", "car"],
      },
      {
        command: "light head",
        args: [
          {
            placeholder: "off|side|low|high|low_off|low_high|next|prev",
            isRequired: true,
          },
        ],
        description: "Switch headlights",
        keywords: ["beam", "car"],
      },
      {
        command: "light",
        args: [
          {
            placeholder: "rfog|ffog|extra",
            isRequired: true,
          },
          {
            placeholder: "off|on|toggle",
            isRequired: true,
          },
        ],
        description: "Switch fog/extra lights",
        keywords: ["car"],
      },
      {
        command: "light all",
        args: [
          {
            placeholder: "off|on",
            isRequired: true,
          },
        ],
        description: "Switch all switchable lights off/on at once",
        keywords: ["car"],
      },
      {
        command: "pitins fuel",
        args: [
          {
            placeholder: "percent",
            isRequired: true,
          },
        ],
        description: "Set pit instructions for refuel",
        keywords: ["pitstop", "tyres", "tires"],
      },
      {
        command: "pitins tyres",
        args: [
          {
            placeholder: "always|0-100",
            isRequired: true,
          },
        ],
        description: "Set pit instructions for tyre change depending on wear",
        keywords: ["pitstop", "tyres", "tires"],
      },
      {
        command: "pitins repair",
        args: [
          {
            placeholder: "yes|no",
            isRequired: false,
          },
        ],
        description: "Set pit instructions for damage repair",
        keywords: ["pitstop"],
      },
      {
        command: "pitins symmetric",
        args: [
          {
            placeholder: "yes|no",
            isRequired: false,
          },
        ],
        description: "Set pit instructions for symmetric setup changes",
        keywords: ["pitstop"],
      },
      {
        command: "pitins",
        args: [
          {
            placeholder: "ftyre|rtyre",
            isRequired: true,
          },
          {
            placeholder: "r1|r2|r3|r4|super|normal|knobbly|hybrid",
            isRequired: true,
          },
        ],
        description: "Set pit instructions for front/rear tyre changes",
        keywords: ["pitstop", "tyres", "tires"],
      },
      {
        command: "pitins",
        args: [
          {
            placeholder: "fcamber_l|fcamber_r|rcamber_l|rcamber_r",
            isRequired: true,
          },
          {
            placeholder: "degrees",
            isRequired: true,
          },
        ],
        description: "Set pit instructions for camber adjustment",
        keywords: ["pitstop", "tyres", "tires", "camber"],
      },
      {
        command: "pitins",
        args: [
          {
            placeholder: "fpressure_l|fpressure_r|rpressure_l|rpressure_r",
            isRequired: true,
          },
          {
            placeholder: "value",
            isRequired: true,
          },
        ],
        description: "Set pit instructions for tyre pressure adjustment",
        keywords: ["pitstop", "tyres", "tires", "pressure"],
      },
      {
        command: "pitins",
        args: [
          {
            placeholder: "fwing|rwing",
            isRequired: true,
          },
          {
            placeholder: "degrees",
            isRequired: true,
          },
        ],
        description: "Set pit instructions for wing angle adjustment",
        keywords: ["pitstop", "aero"],
      },
      {
        command: "pitins cancel",
        description: "Cancel all pit instructions",
        keywords: [],
      },
      {
        command: "liveset",
        args: [
          {
            placeholder: "bbal|farb|rarb",
            isRequired: true,
          },
          {
            placeholder: "value",
            isRequired: true,
          },
        ],
        description: "Adjust live car settings (brake balance, anti-roll bars)",
        keywords: ["arb"],
      },
      {
        command: "run",
        args: [
          {
            placeholder: "filename",
            isRequired: true,
          },
        ],
        description: "Run the script in data/script/X.lfs",
        keywords: ["file"],
      },
      {
        command: "exec",
        args: [
          {
            placeholder: "program",
            isRequired: true,
          },
          {
            placeholder: "command line",
            isRequired: true,
          },
        ],
        description: "Run program with command line arguments",
        keywords: [],
      },
      {
        command: "wait",
        args: [
          {
            placeholder: "program",
            isRequired: true,
          },
          {
            placeholder: "command line",
            isRequired: true,
          },
        ],
        description: "Like exec but LFS hangs until program exits",
        keywords: [""],
      },
      {
        command: "fov",
        args: [
          {
            placeholder: "30-160",
            isRequired: true,
          },
        ],
        description: "Set field of view in degrees",
        keywords: ["camera"],
      },
      {
        command: "vlock",
        args: [
          {
            placeholder: "car|filter|horizon",
            isRequired: true,
          },
        ],
        description: "Set view lock",
        keywords: ["camera", "tilt"],
      },
      {
        command: "lookf",
        args: [
          {
            placeholder: "joystick|axis|steer|mouse_x|mouse_xy",
            isRequired: true,
          },
        ],
        description: "Set look function",
        keywords: ["camera", "input", "view", "controls"],
      },
      {
        command: "control",
        args: [
          {
            placeholder: "mouse_kb|wheel_js",
            isRequired: true,
          },
        ],
        description: "Set controller type",
        keywords: ["device", "keyboard", "joystick", "wheel", "controls"],
      },
      {
        command: "ff",
        args: [
          {
            placeholder: "0-200",
            isRequired: true,
          },
        ],
        description: "Set force feedback strength",
        keywords: ["ffb", "gain", "wheel", "controls"],
      },
      {
        command: "axis",
        args: [
          {
            placeholder: "number",
            isRequired: true,
          },
          {
            placeholder: "function",
            isRequired: true,
            hint: "steer | combined | throttle | brake | lookh | lookp | lookr | clutch | handbrake | shiftx | shifty",
          },
        ],
        description: "Assign axis to function",
        keywords: ["axis", "wheel", "pedal", "controls"],
      },
      {
        command: "invert",
        args: [
          {
            placeholder: "0|1",
            isRequired: true,
          },
          {
            placeholder: "function",
            isRequired: true,
            hint: "steer | combined | throttle | brake | lookh | lookp | lookr | clutch | handbrake | shiftx | shifty",
          },
        ],
        description: "Invert axis for a function",
        keywords: ["wheel", "pedal", "inversion", "controls"],
      },
      {
        command: "button",
        args: [
          {
            placeholder: "number",
            isRequired: true,
          },
          {
            placeholder: "function",
            isRequired: true,
            hint: "steer | combined | throttle | brake | lookh | lookp | lookr | clutch | handbrake | shiftx | shifty",
          },
        ],
        description: "Assign button to function",
        keywords: ["shifter", "mapping", "controls"],
      },
      {
        command: "key",
        args: [
          {
            placeholder: "key",
            isRequired: true,
          },
          {
            placeholder: "function",
            isRequired: true,
            hint: "steer | combined | throttle | brake | lookh | lookp | lookr | clutch | handbrake | shiftx | shifty",
          },
        ],
        description: "Assign key to function",
        keywords: ["keyboard"],
      },
      {
        command: "head_tilt",
        args: [
          {
            placeholder: "meters",
            isRequired: true,
          },
        ],
        description: "Set 1g head tilt in degrees",
        keywords: ["g-force", "view"],
      },
      {
        command: "lateral_shift",
        args: [
          {
            placeholder: "meters",
            isRequired: true,
          },
        ],
        description: "Set 1g lateral shift in meters",
        keywords: ["g-force", "view"],
      },
      {
        command: "forward_shift",
        args: [
          {
            placeholder: "meters",
            isRequired: true,
          },
        ],
        description: "Set 1g forward shift in meters",
        keywords: ["g-force", "view"],
      },
      {
        command: "vertical_shift",
        args: [
          {
            placeholder: "meters",
            isRequired: true,
          },
        ],
        description: "Set 1g vertical shift in meters",
        keywords: ["g-force", "view"],
      },
      {
        command: "hidetext",
        args: [
          {
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Hide or show text (SHIFT + F)",
        keywords: ["ui", "gui", "interface"],
      },
      {
        command: "block",
        args: [
          {
            isRequired: true,
            placeholder: "0|1|2",
            hint: "0 = none / 1 = user / 2 = all",
          },
        ],
        description: "Block messages",
        keywords: ["chat"],
      },
      {
        command: "showmouse",
        args: [
          {
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Show or hide mouse (SHIFT + Z)",
        keywords: ["cursor"],
      },
      {
        command: "say",
        args: [
          {
            isRequired: true,
            placeholder: "message",
          },
        ],
        description: "Same as typing a chat message",
        keywords: ["text"],
      },
      {
        command: "echo",
        args: [
          {
            isRequired: true,
            placeholder: "text",
          },
        ],
        description: "Show text only on local screen",
        keywords: [],
      },
      {
        command: "ctrlf",
        args: [
          {
            isRequired: true,
            placeholder: "1-12",
          },
          {
            isRequired: true,
            placeholder: "text",
          },
        ],
        description: 'Change text (e.g. "ctrlf 1 hello")',
        keywords: ["bind", "fn", "function"],
      },
      {
        command: "altf",
        args: [
          {
            isRequired: true,
            placeholder: "1-12",
          },
          {
            isRequired: true,
            placeholder: "text",
          },
        ],
        description: 'Change text (e.g. "altf 1 bye")',
        keywords: ["bind", "fn", "function"],
      },
      {
        command: "wheel_turn",
        args: [
          {
            isRequired: true,
            placeholder: "90-1080",
          },
        ],
        description: "Specify turn angle of controller in degrees",
        keywords: ["steering wheel", "angle"],
      },
      {
        command: "press",
        args: [
          {
            isRequired: true,
            placeholder: "key",
          },
        ],
        description: "Simulate key press",
        keywords: ["keyboard", "shortcut"],
      },
      {
        command: "shift",
        args: [
          {
            isRequired: true,
            placeholder: "key",
          },
        ],
        description: "Simulate SHIFT + key",
        keywords: ["keyboard", "press", "shortcut"],
      },
      {
        command: "ctrl",
        args: [
          {
            isRequired: true,
            placeholder: "key",
          },
        ],
        description: "Simulate CTRL + key",
        keywords: ["keyboard", "press", "shortcut"],
      },
      {
        command: "alt",
        args: [
          {
            isRequired: true,
            placeholder: "key",
          },
        ],
        description: "Simulate ALT + key",
        keywords: ["keyboard", "press", "shortcut"],
      },
      {
        command: "autoclutch",
        args: [
          {
            isRequired: true,
            placeholder: "0|1",
          },
        ],
        description: "Turn autoclutch off / on",
        keywords: ["clutch", "pedal"],
      },
      {
        command: "shifter",
        args: [
          {
            isRequired: true,
            placeholder: "auto|sequential|shifter",
          },
        ],
        description: "Set shift type",
        keywords: ["gear"],
      },
      {
        command: "view",
        args: [
          {
            isRequired: true,
            placeholder: "fol|heli|cam|driver|custom",
          },
        ],
        description: "Select view",
        keywords: ["camera", "helicopter", "follow", "chase"],
      },
      {
        command: "vr reset",
        description: "Reset VR position and orientation (default F8)",
        keywords: ["virtual reality", "headset", "3D", "view"],
      },
      {
        command: "vr reset_headset",
        description: "Instantly reset headset position in VR",
        keywords: ["virtual reality", "3D", "view"],
      },
      {
        command: "vr use_relative",
        description: "Instantly use relative position in VR",
        keywords: ["virtual reality", "headset", "3D", "view"],
      },
      {
        command: "vr",
        args: [
          {
            isRequired: true,
            placeholder: "on|off|toggle|rift|openvr",
          },
        ],
        description: "Instantly enter or leave VR mode",
        keywords: ["virtual reality", "headset", "3D", "view", "oculus"],
      },
      {
        command: "view save",
        description: "Save any changes made to a custom view",
        keywords: [],
      },
      {
        command: "view reload",
        description: "Reload custom view (without saving)",
        keywords: [],
      },
    ],
  },
  {
    name: "LFS World",
    commands: [
      {
        command: "w pb",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World for personal best on this track with this car",
        keywords: ["online", "stats", "PB"],
      },
      {
        command: "w hl",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World for uploaded hotlap on this track with this car",
        keywords: ["online", "stats"],
      },
      {
        command: "w wr",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World for world record on this track with this car",
        keywords: ["online", "stats", "WR"],
      },
      {
        command: "w laps",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World for total laps on this track with this car",
        keywords: ["online", "stats", "PB"],
      },
      {
        command: "w fuel",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World for fuel usage on this track with this car",
        keywords: ["online", "stats"],
      },
      {
        command: "w tlaps",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World for all-time total laps driven",
        keywords: ["online", "stats"],
      },
      {
        command: "w distance",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description: "Sends command to LFS World for all-time driven distance",
        keywords: ["online", "stats"],
      },
      {
        command: "w win",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description: "Sends command to LFS World for all-time race wins",
        keywords: ["online", "stats", "victory"],
      },
      {
        command: "w second",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description: "Sends command to LFS World for all-time second places",
        keywords: ["online", "stats"],
      },
      {
        command: "w third",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description: "Sends command to LFS World for all-time third places",
        keywords: ["online", "stats"],
      },
      {
        command: "w drags",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World for all-time total drag races / wins",
        keywords: ["online", "stats"],
      },
      {
        command: "w finished",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description: "Sends command to LFS World for all-time finishes",
        keywords: ["online", "stats"],
      },
      {
        command: "w find",
        args: [
          {
            isRequired: false,
            placeholder: "username",
            hint: "blank - own stats",
          },
        ],
        description:
          "Sends command to LFS World to check if someone is online on any host",
        keywords: ["online", "stats", "server"],
      },
      {
        command: "w help",
        description: "LFS World command lis and usage",
        keywords: ["online", "stats"],
      },
      {
        command: "ws",
        args: [
          {
            placeholder: "XXCR",
            isRequired: true,
            hint: "XX = two-letter track short name, C = config number, R = reversed direction or open config",
          },
          {
            placeholder: "car",
            isRequired: true,
          },
          {
            placeholder: "command",
            isRequired: true,
            hint: "pb | hl | wr | laps | fuel | tlaps | distance | win | second | third | drags | finished",
          },
        ],
        description: "Sends command for specified car/track to LFS World",
        keywords: ["online", "stats"],
      },
      {
        command: "m users",
        description: "Get the number of users online for each license level",
        keywords: ["online", "stats", "LFS World"],
      },
      {
        command: "m demo",
        description: "Get the number of users online for each license level",
        keywords: ["online", "stats", "LFS World", "master"],
      },
      {
        command: "m hosts",
        description: "Get the number of hosts online for each license level",
        keywords: ["online", "stats", "LFS World", "master"],
      },
    ],
  },
];
