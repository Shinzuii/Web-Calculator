# Calculator UI

A simple, clean calculator built with vanilla HTML, CSS, and JavaScript. Features a dark-glass display, rounded button grid, and basic arithmetic operations.

## Features

- Add, subtract, multiply, divide, and percentage operations
- Clear (`AC`) and single-character delete (`DEL`)
- Decimal support
- Responsive hover feedback on buttons

## Files

| File | Purpose |
|---|---|
| `index.html` | Markup for the calculator layout (display + button grid) |
| `style.css` | Styling — gradient background, card layout, button colors |
| `script.js` | Handles button clicks, builds the expression, and evaluates it |

## How It Works

1. Tapping a number or operator appends it to the current `expression` string, shown live on the display.
2. `=` evaluates the expression using `eval()`, after converting `x` → `*`, `÷` → `/`, and `%` → `/100` so the symbols are valid JavaScript.
3. `AC` resets the expression and display; `DEL` removes the last character.
4. If the expression is invalid (e.g. `5++`), the display shows `Error` and resets.

## Running It

No build step needed — just open `index.html` in a browser. Make sure all three files stay in the same folder, since `index.html` links to `style.css` and `script.js` by relative path.

## Known Limitations

- Uses `eval()` to evaluate expressions, which is fine for a personal/learning project but isn't recommended for production apps handling untrusted input. A future improvement would be to write a small expression parser instead.
- No keyboard support yet (mouse/tap only).
- No operator chaining validation — e.g. `5++5` will error out rather than auto-correcting.

## Possible Next Steps

- Add keyboard input support
- Prevent invalid consecutive operators
- Add a running history of past calculations
- Add light/dark theme toggle