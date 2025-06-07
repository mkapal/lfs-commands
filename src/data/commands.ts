type CommandArgument = {
  label: string;
  isRequired?: boolean;
  placeholder: string;
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
            label: "track+config",
            isRequired: true,
            placeholder: "XXCR",
            hint: "XX = two-letter track short name, C = config number, R = reversed direction or open config",
          },
          {
            label: "weather",
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
            label: "weather",
            isRequired: true,
            placeholder: "0-4",
          },
        ],
        description: "Set lighting",
        keywords: ["track"],
      },
      {
        command: "qual",
        args: [
          {
            label: "minutes",
            isRequired: true,
            placeholder: "0-240",
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
            label: "laps",
            isRequired: true,
            placeholder: "0-1000",
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
            label: "hours",
            isRequired: true,
            placeholder: "0-48",
          },
        ],
        description: "Set number of hours (if laps not specified)",
        keywords: ["race"],
      },
      {
        command: "wind",
        args: [
          {
            label: "strength",
            isRequired: true,
            placeholder: "0-2",
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
            label: "number",
            isRequired: true,
            placeholder: "0-79",
          },
        ],
        description: "Set maximum number of guests that can join host",
        keywords: ["max", "count", "multiplayer", "server"],
      },
      {
        command: "adminslots",
        args: [
          {
            label: "number",
            isRequired: true,
            placeholder: "0-8",
          },
        ],
        description: "Set slots reserved for admins",
        keywords: ["server"],
      },
      {
        command: "carsmax",
        args: [
          {
            label: "number",
            isRequired: true,
            placeholder: "1-40",
          },
        ],
        description: "Set maximum number of cars in a race",
        keywords: ["cars", "max", "host", "server"],
      },
      {
        command: "carshost",
        args: [
          {
            label: "number",
            isRequired: true,
            placeholder: "0-32",
          },
        ],
        description: "Set maximum number of cars (real+AI) on host PC",
        keywords: ["host", "cars"],
      },
      {
        command: "carsguest",
        args: [
          {
            label: "number",
            isRequired: true,
            placeholder: "0-32",
          },
        ],
        description: "Set maximum number of cars (real+AI) per guest PC",
        keywords: ["guest", "cars"],
      },
      {
        command: "pps",
        args: [
          {
            label: "number",
            isRequired: true,
            placeholder: "3-12",
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
            label: "text",
            isRequired: true,
            placeholder: "text",
          },
        ],
        description: "Send a system message",
        keywords: [],
      },
      {
        command: "vote",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow or disallow guest voting",
        keywords: ["multiplayer", "kick", "ban", "vote"],
      },
      {
        command: "select",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow or disallow guests to select track",
        keywords: ["multiplayer"],
      },
      {
        command: "rstmin",
        args: [
          {
            label: "seconds",
            isRequired: true,
            placeholder: "0-240",
          },
        ],
        description: "Prevent restart for X seconds after race start",
        keywords: ["restart", "race", "start"],
      },
      {
        command: "rstend",
        args: [
          {
            label: "seconds",
            isRequired: true,
            placeholder: "0-240",
          },
        ],
        description: "Prevent restart for X seconds after race finish",
        keywords: ["restart", "finish", "race"],
      },
      {
        command: "specdnf",
        args: [
          {
            label: "seconds",
            isRequired: true,
            placeholder: "0-240",
          },
        ],
        description: "Result blockers spectate with DNF after X seconds",
        keywords: ["spectate", "dnf", "result", "blockers", "seconds"],
      },
      {
        command: "autokick",
        args: [
          {
            label: "action",
            isRequired: true,
            placeholder: "no|kick|ban|spec",
          },
        ],
        description: "Set automatic action for wrong way drivers",
        keywords: ["spectate"],
      },
      {
        command: "midrace",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow or disallow joining during race",
        keywords: ["join", "race"],
      },
      {
        command: "mustpit",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Require a pit stop",
        keywords: ["pit", "pit stop", "pitstop"],
      },
      {
        command: "canrefuel",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow or disallow refuelling",
        keywords: ["fuel", "refuel"],
      },
      {
        command: "showfuel",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Show remote fuel gauges",
        keywords: ["fuel", "gauges"],
      },
      {
        command: "canreset",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow or disallow car reset",
        keywords: ["reset", "car"],
      },
      {
        command: "fcv",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Force cockpit view",
        keywords: ["view", "cockpit"],
      },
      {
        command: "cruise",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow wrong way driving",
        keywords: ["cruise", "wrong way"],
      },
      {
        command: "allowmods",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow or disallow mods",
        keywords: ["mods", "cars"],
      },
      {
        command: "unapproved",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Allow or disallow unapproved mods",
        keywords: ["unapproved", "mods", "cars"],
      },
      {
        command: "start",
        args: [
          {
            label: "type",
            isRequired: true,
            placeholder: "fixed|finish|reverse|random",
          },
        ],
        description: "Set default race start type without qualifying",
        keywords: [],
      },
      {
        command: "pass",
        args: [
          {
            label: "password",
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
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
          {
            label: "lap",
            isRequired: true,
            placeholder: "lap",
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
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
          {
            label: "stops",
            isRequired: true,
            placeholder: "number",
          },
        ],
        description: "Set user's number of stops",
        keywords: ["number", "user", "pit", "pit stop", "pitstop"],
      },
      {
        command: "cansiren",
        args: [
          {
            label: "allow-disallow",
            isRequired: true,
            placeholder: "0|1",
          },
        ],
        description: "Allow or disallow siren",
        keywords: ["car"],
      },
      {
        command: "ujoin",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Add user to the race",
        keywords: ["join", "add", "user", "race"],
      },
      {
        command: "uai",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Add user's AI driver to the race",
        keywords: ["ai", "driver"],
      },
      {
        command: "cars",
        args: [
          {
            label: "cars",
            isRequired: true,
            placeholder: "cars",
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
            label: "mods",
            isRequired: true,
            placeholder: "mods",
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
            label: "file",
            isRequired: true,
            placeholder: "file.txt",
          },
        ],
        description: "Set welcome text file",
        keywords: ["text"],
      },
      {
        command: "tracks",
        args: [
          {
            label: "file",
            isRequired: true,
            placeholder: "file.txt",
          },
        ],
        description: "Set list of allowed tracks",
        keywords: ["tracks", "allowed"],
      },
      {
        command: "autosave",
        args: [
          {
            label: "mode",
            isRequired: true,
            placeholder: "0-2",
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
            label: "filename",
            isRequired: true,
            placeholder: "filename",
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
            label: "seconds",
            isRequired: true,
            placeholder: "0-10",
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
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
          },
        ],
        description: "Enable or disable network debug",
        keywords: ["multiplayer", "server", "host"],
      },
      {
        command: "h_mass",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
          {
            label: "kilograms",
            isRequired: true,
            placeholder: "0-200",
          },
        ],
        description: "Set added mass for user's car",
        keywords: ["handicap"],
      },
      {
        command: "h_tres",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
          {
            label: "percentage",
            isRequired: true,
            placeholder: "0-50",
          },
        ],
        description: "Set intake restriction for user's car",
        keywords: ["handicap", "restriction"],
      },
      {
        command: "teamarrows",
        args: [
          {
            label: "yes-no",
            isRequired: true,
            placeholder: "yes|no",
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
            label: "track+config",
            isRequired: true,
            placeholder: "XXCR",
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
            label: "filename",
            isRequired: true,
            placeholder: "filename",
          },
        ],
        description: "Load layout on host",
        keywords: ["autocross", "autox", "layout", "track", "server"],
      },
      {
        command: "axsave",
        args: [
          {
            label: "filename",
            isRequired: true,
            placeholder: "filename",
          },
        ],
        description: "Save layout on host",
        keywords: ["autocross", "autox", "layout", "track", "server"],
      },
      {
        command: "axlaps",
        args: [
          {
            label: "laps",
            isRequired: true,
            placeholder: "0-1000",
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
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Make user X join the spectators",
        keywords: ["spectate"],
      },
      {
        command: "kick",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Disconnect user X",
        keywords: ["admin"],
      },
      {
        command: "ban",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
          {
            label: "days",
            isRequired: true,
            placeholder: "0-999",
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
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Remove ban on user X",
        keywords: ["admin"],
      },
      {
        command: "pitlane",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
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
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Give drive through penalty",
        keywords: ["penalty", "drive through"],
      },
      {
        command: "p_sg",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Give stop-go penalty",
        keywords: ["penalty", "stop&go"],
      },
      {
        command: "p_30",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Give 30 second time penalty",
        keywords: ["penalty"],
      },
      {
        command: "p_45",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Give 45 second time penalty",
        keywords: ["penalty"],
      },
      {
        command: "p_clear",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
          },
        ],
        description: "Clear a time or pit penalty",
        keywords: ["penalty", "clear", "pitstop", "pit stop"],
      },
      {
        command: "rcm",
        args: [
          {
            label: "message",
            isRequired: true,
            placeholder: "message",
          },
        ],
        description: "Set a Race Control Message to be sent",
        keywords: ["central text"],
      },
      {
        command: "rcm_ply",
        args: [
          {
            label: "username",
            isRequired: true,
            placeholder: "username",
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
            label: "username",
            isRequired: true,
            placeholder: "username",
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
            label: "car",
            isRequired: true,
            placeholder: "car",
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
            label: "name",
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
            label: "name",
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
            label: "server",
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
            label: "name",
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
            label: "name",
            isRequired: true,
            placeholder: "name",
          },
        ],
        description: "Select existing player",
        keywords: [],
      },
      {
        command: "lang",
        args: [
          {
            label: "name",
            isRequired: true,
            placeholder: "name",
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
            label: "type",
            isRequired: true,
            placeholder: "1-5",
          },
        ],
        description: "Select car horn type",
        keywords: [],
      },
      {
        command: "siren",
        args: [
          {
            label: "mode",
            isRequired: true,
            placeholder: "off|slow|fast",
          },
        ],
        description: "Switch siren (if allowed by host)",
        keywords: ["server", "car"],
      },
      {
        command: "cp",
        args: [
          {
            label: "view",
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
            label: "name",
            isRequired: true,
            placeholder: "name",
          },
          {
            label: "level",
            isRequired: true,
            placeholder: "1-5",
          },
        ],
        description: "Set AI driver to skill level",
        keywords: [],
      },
      {
        command: "aiset_all",
        description: "Set all local AI drivers to skill level X",
        keywords: [],
      },
      {
        command: "spr",
        description: "Run a SP replay from entry (front end) screen",
        keywords: ["single player"],
      },
      {
        command: "mpr",
        description: "Run a MP replay from entry (front end) screen",
        keywords: ["multiplayer"],
      },
      {
        command: "end",
        description: "Exit from replay back to entry screen",
        keywords: ["quit"],
      },
      {
        command: "sp",
        description: "Go into single player from entry screen",
        keywords: ["single player"],
      },
      {
        command: "mp",
        description: "Join a local server from entry screen",
        keywords: ["multiplayer", "host"],
      },
      {
        command: "mprlag",
        description: "Simulate packet delay of X ms (+ no smoothing)",
        keywords: ["multiplayer", "debug"],
      },
      {
        command: "mprsmooth",
        description: "Disable or enable input smoothing (0 / 1)",
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
        description: "Auto select TV camera on spectate (no/yes)",
        keywords: [],
      },
      {
        command: "speedreduce",
        description: "Set total speed steer reduction (0 to 1)",
        keywords: ["keyboard", "controls"],
      },
      {
        command: "reducehalf",
        description: "Set speed in m/s for half of reduction",
        keywords: ["keyboard", "controls"],
      },
      {
        command: "loadkb",
        description: "Load keyboard settings file (data\\misc\\X.kbs)",
        keywords: ["controls"],
      },
      {
        command: "savekb",
        description: "Save keyboard settings file (data\\misc\\X.kbs)",
        keywords: ["controls"],
      },
      {
        command: "out",
        description: "Only seen by external programs",
        keywords: ["insim"],
      },
      {
        command: "log",
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
        description:
          "Set window client area width and height or adjust window (min/max/monitor/virtual)",
        keywords: ["size"],
      },
      {
        command: "status",
        description: "Sets status screen (none|F9|F10|F11|F12|next|prev)",
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
        description: "Switch indicators/hazard",
        keywords: ["turn signal", "blinker", "car"],
      },
      {
        command: "light head",
        description:
          "Switch headlights (off/side/low/high/low_off/low_high/next/prev)",
        keywords: ["beam", "car"],
      },
      {
        command: "light",
        description: "Switch fog/extra lights (off/on/toggle)",
        keywords: ["car"],
      },
      {
        command: "light all",
        description: "Switch all switchable lights off/on at once",
        keywords: ["car"],
      },
      {
        command: "pitins",
        description:
          "Set pit stop instructions (e.g., tyre changes, fuel, repair, pressure)",
        keywords: ["pitstop", "pit stop", "tyres", "tires"],
      },
      {
        command: "liveset",
        description: "Adjust live car settings (brake balance, anti-roll bars)",
        keywords: [],
      },
      {
        command: "run",
        description: "Run the script X (data\\script\\X.lfs)",
        keywords: ["file"],
      },
      {
        command: "exec",
        description: "Run program E with command line C",
        keywords: [],
      },
      {
        command: "wait",
        description: "Like exec but LFS hangs until E exits",
        keywords: [""],
      },
      {
        command: "fov",
        description: "Set field of view in degrees",
        keywords: ["camera"],
      },
      {
        command: "vlock",
        description: "Set view lock (car/filter/horizon)",
        keywords: ["camera", "tilt"],
      },
      {
        command: "lookf",
        description: "Set look function (joystick/axis/steer/mouse_x/mouse_xy)",
        keywords: ["camera", "input", "controls"],
      },
      {
        command: "control",
        description: "Set controller type (mouse_kb/wheel_js)",
        keywords: ["device", "keyboard", "joystick", "wheel", "controls"],
      },
      {
        command: "ff",
        description: "Set force feedback strength (0-200)",
        keywords: ["ffb", "gain", "wheel", "controls"],
      },
      {
        command: "axis",
        description: "Assign axis to function (e.g. /axis 2 throttle)",
        keywords: ["axis", "wheel", "pedal", "controls"],
      },
      {
        command: "invert",
        description: "Invert axis (0/1) for a function (e.g. /invert 1 brake)",
        keywords: ["wheel", "pedal", "inversion", "controls"],
      },
      {
        command: "button",
        description: "Assign button to function (e.g. /button 5 shift_up)",
        keywords: ["shifter", "mapping", "controls"],
      },
      {
        command: "key",
        description: "Assign key to function (e.g. /key Q handbrake)",
        keywords: ["keyboard"],
      },
      {
        command: "head_tilt",
        description: "Set 1g head tilt in degrees",
        keywords: ["g-force", "view"],
      },
      {
        command: "lateral_shift",
        description: "Set 1g lateral shift in meters",
        keywords: ["g-force", "view"],
      },
      {
        command: "forward_shift",
        description: "Set 1g forward shift in meters",
        keywords: ["g-force", "view"],
      },
      {
        command: "vertical_shift",
        description: "Set 1g vertical shift in meters",
        keywords: ["g-force", "view"],
      },
      {
        command: "hidetext",
        description: "Hide or show text (SHIFT + F)",
        keywords: ["ui", "gui", "interface"],
      },
      {
        command: "block",
        description: "Block messages (none / user / all)",
        keywords: ["chat"],
      },
      {
        command: "showmouse",
        description: "Show or hide mouse (SHIFT + Z)",
        keywords: ["cursor"],
      },
      {
        command: "say",
        description: "Same as typing a chat message",
        keywords: ["text"],
      },
      {
        command: "echo",
        description: "Show text only on local screen",
        keywords: [],
      },
      {
        command: "ctrlf",
        description: 'Change text (e.g. "ctrlf 1 hello")',
        keywords: ["bind", "fn", "function"],
      },
      {
        command: "altf",
        description: 'Change text (e.g. "altf 1 bye")',
        keywords: ["bind", "fn", "function"],
      },
      {
        command: "wheel_turn",
        description: "Specify turn angle of controller in degrees",
        keywords: ["steering wheel", "angle"],
      },
      {
        command: "press",
        description: "Simulate key press",
        keywords: ["keyboard", "shortcut"],
      },
      {
        command: "shift",
        description: "Simulate SHIFT + key",
        keywords: ["keyboard", "press", "shortcut"],
      },
      {
        command: "ctrl",
        description: "Simulate CTRL + key",
        keywords: ["keyboard", "press", "shortcut"],
      },
      {
        command: "alt",
        description: "Simulate ALT + key",
        keywords: ["keyboard", "press", "shortcut"],
      },
      {
        command: "autoclutch",
        description: "Turn autoclutch off / on (0-1)",
        keywords: ["clutch", "pedal"],
      },
      {
        command: "shifter",
        description: "Set shift type (auto/sequential/shifter)",
        keywords: ["gear"],
      },
      {
        command: "view",
        description: "Select view (fol/heli/cam/driver/custom)",
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
        description:
          "Instantly enter or leave VR mode (on/off/toggle/rift/openvr)",
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
        command: "w",
        description: "Sends command to LFS World for current car/track",
        keywords: ["online", "stats"],
      },
      {
        command: "ws",
        description: "Sends command for specified car/track to LFS World",
        keywords: ["online", "stats"],
      },
      {
        command: "m find",
        description: "Find a user online via master server",
        keywords: ["multiplayer"],
      },
      {
        command: "m ?",
        description: "Get a list of master commands",
        keywords: ["server", "help"],
      },
    ],
  },
];
