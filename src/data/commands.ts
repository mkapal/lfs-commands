type Command = {
  command: string;
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
        description: "Set track and config",
        keywords: ["track", "config"],
      },
      {
        command: "weather",
        description: "Set lighting",
        keywords: ["weather", "lighting"],
      },
      {
        command: "qual",
        description: "Set qualifying minutes (0 = no qualifying)",
        keywords: ["qualifying", "qualification", "minute"],
      },
      {
        command: "laps",
        description: "Set number of laps (0 = practice)",
        keywords: ["laps", "number"],
      },
      {
        command: "hours",
        description: "Set number of hours (if laps not specified)",
        keywords: ["hours", "duration"],
      },
      {
        command: "wind",
        description: "Set wind condition (0 no / 1 low / 2 high)",
        keywords: ["wind", "weather"],
      },
      {
        command: "maxguests",
        description: "Set maximum number of guests that can join host",
        keywords: ["guests", "max"],
      },
      {
        command: "adminslots",
        description: "Set slots reserved for admins (0 to 8)",
        keywords: ["admin", "slots"],
      },
      {
        command: "carsmax",
        description: "Set maximum number of cars in a race",
        keywords: ["cars", "max"],
      },
      {
        command: "carshost",
        description: "Set maximum number of cars (real+ai) on host pc",
        keywords: ["host", "cars"],
      },
      {
        command: "carsguest",
        description: "Set maximum number of cars (real+ai) per guest pc",
        keywords: ["guest", "cars"],
      },
      {
        command: "pps",
        description: "Set smoothness (3-12) maximum car updates per second",
        keywords: ["max", "packet", "second", "update"],
      },
      {
        command: "msg",
        description: "Send a system message",
        keywords: [],
      },
      {
        command: "vote",
        description: "Allow or disallow guest voting",
        keywords: ["multiplayer", "kick", "ban", "vote"],
      },
      {
        command: "select",
        description: "Allow or disallow guests to select track",
        keywords: ["multiplayer"],
      },
      {
        command: "rstmin",
        description: "Prevent restart for X seconds after race start",
        keywords: ["restart", "race", "start"],
      },
      {
        command: "rstend",
        description: "Prevent restart for X seconds after race finish",
        keywords: ["restart", "finish", "race"],
      },
      {
        command: "specdnf",
        description: "Result blockers spectate with DNF after X seconds",
        keywords: ["spectate", "dnf", "result", "blockers", "seconds"],
      },
      {
        command: "autokick",
        description:
          "Set automatic action for wrong way drivers (no, kick, ban, spec)",
        keywords: ["spectate"],
      },
      {
        command: "midrace",
        description: "Allow or disallow joining during race",
        keywords: ["join", "race"],
      },
      {
        command: "mustpit",
        description: "Require a pit stop",
        keywords: ["pit", "pit stop", "pitstop"],
      },
      {
        command: "canrefuel",
        description: "Allow or disallow refuelling",
        keywords: ["fuel", "refuel"],
      },
      {
        command: "showfuel",
        description: "Show remote fuel gauges",
        keywords: ["fuel", "gauges"],
      },
      {
        command: "canreset",
        description: "Allow or disallow car reset",
        keywords: ["reset", "car"],
      },
      {
        command: "fcv",
        description: "Force cockpit view",
        keywords: ["view", "cockpit"],
      },
      {
        command: "cruise",
        description: "Allow wrong way driving",
        keywords: ["cruise", "wrong way"],
      },
      {
        command: "allowmods",
        description: "Allow or disallow mods",
        keywords: ["mods", "cars"],
      },
      {
        command: "unapproved",
        description: "Allow or disallow unapproved mods",
        keywords: ["unapproved", "mods", "cars"],
      },
      {
        command: "start",
        description:
          "Set default race start type (fixed, finish, reverse, random)",
        keywords: ["start", "race"],
      },
      {
        command: "pass",
        description: "Set new password (BLANK = no password)",
        keywords: ["password"],
      },
      {
        command: "setlap",
        description: "Set user's current lap to Y (negative = subtract)",
        keywords: ["lap", "user", "count", "number"],
      },
      {
        command: "setstops",
        description: "Set user's number of stops to Y",
        keywords: ["number", "user", "pit", "pit stop", "pitstop"],
      },
      {
        command: "cansiren",
        description: "Allow or disallow siren (Y = 0 or 1)",
        keywords: ["siren", "car"],
      },
      {
        command: "ujoin",
        description: "Add user to the race",
        keywords: ["join", "add", "user", "race"],
      },
      {
        command: "uai",
        description: "Add user's AI driver to the race",
        keywords: ["ai", "driver"],
      },
      {
        command: "cars",
        description: "Define allowed cars using car strings or groups",
        keywords: ["cars", "groups", "allowed"],
      },
      {
        command: "mods",
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
        description: "Set welcome text file",
        keywords: ["text"],
      },
      {
        command: "tracks",
        description: "Set list of allowed tracks",
        keywords: ["tracks", "allowed"],
      },
      {
        command: "autosave",
        description: "MPR autosave (0-no / 1-manual / 2-auto)",
        keywords: ["autosave", "mpr", "replay", "multiplayer"],
      },
      {
        command: "save_mpr",
        description: "Save MPR with name X (autosave must be 1 or 2)",
        keywords: ["save", "mpr", "replay", "multiplayer"],
      },
      {
        command: "mprflush",
        description: "Flush mpr to file every X seconds (0 = disable)",
        keywords: ["flush", "mpr", "replay", "multiplayer"],
      },
      {
        command: "ndebug",
        description: "Enable or disable network debug (no / yes)",
        keywords: ["network", "debug"],
      },
      {
        command: "h_mass",
        description: "Set added mass for user's car",
        keywords: ["handicap", "mass", "car"],
      },
      {
        command: "h_tres",
        description: "Set restriction for user's car",
        keywords: ["handicap", "restriction", "intake"],
      },
      {
        command: "teamarrows",
        description:
          "Enable or disable arrows on non-race small map using name colour",
        keywords: ["team", "map", "color", "colour"],
      },
      {
        command: "axlist",
        description: "Get list of layouts for track X",
        keywords: ["autocross", "autox", "layout", "track"],
      },
      {
        command: "axload",
        description: "Load layout X on host",
        keywords: ["autocross", "autox", "layout", "track", "server"],
      },
      {
        command: "axsave",
        description: "Save layout X on host",
        keywords: ["autocross", "autox", "layout", "track", "server"],
      },
      {
        command: "axlaps",
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
        description: "Make user X join the spectators",
        keywords: ["spectate"],
      },
      {
        command: "kick",
        description: "Disconnect user X",
        keywords: ["admin"],
      },
      {
        command: "ban",
        description: "Ban user X for Y days (0 = 12 hours)",
        keywords: ["admin"],
      },
      {
        command: "unban",
        description: "Remove ban on user X",
        keywords: ["admin"],
      },
      {
        command: "pitlane",
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
        description: "Give drive through penalty",
        keywords: ["penalty", "drive through"],
      },
      {
        command: "p_sg",
        description: "Give stop-go penalty",
        keywords: ["penalty", "stop&go"],
      },
      {
        command: "p_30",
        description: "Give 30 second time penalty",
        keywords: ["penalty"],
      },
      {
        command: "p_45",
        description: "Give 45 second time penalty",
        keywords: ["penalty"],
      },
      {
        command: "p_clear",
        description: "Clear a time or pit penalty",
        keywords: ["penalty", "clear", "pitstop", "pit stop"],
      },
      {
        command: "rcm",
        description: "Set a Race Control Message to be sent",
        keywords: ["central text"],
      },
      {
        command: "rcm_ply",
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
        description: "Select car (e.g. XRT)",
        keywords: [],
      },
      {
        command: "setup",
        description: "Select setup X (default if no X)",
        keywords: [],
      },
      {
        command: "colour",
        description: "Select colour X (default if no X)",
        keywords: ["color"],
      },
      {
        command: "join",
        description: "Join the race or an internet server from entry screen",
        keywords: ["multiplayer"],
      },
      {
        command: "ai",
        description: "Add AI driver (can specify NAME)",
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
        description: "Select existing player X",
        keywords: [],
      },
      {
        command: "lang",
        description: "Load language X (data\\language\\X.txt)",
        keywords: ["text", "file"],
      },
      {
        command: "horn",
        description: "Select horn type X (1 to 5)",
        keywords: ["car"],
      },
      {
        command: "siren",
        description: "Switch siren (if allowed by host)",
        keywords: ["server", "car"],
      },
      {
        command: "cp",
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
        description: "Set AI driver to skill level X (1 to 5)",
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
