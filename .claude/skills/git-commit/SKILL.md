---
name: git-commit
description: Stage and commit all current changes in this repo with a Conventional Commits message. Only runs when the user invokes /git-commit.
disable-model-invocation: true
argument-hint: '[optional hint about what the change is]'
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git add:*), Bash(git commit:*), Bash(npm run lint:*), Bash(npm run format:check:*), Bash(npx tsc -b:*)
---

# git-commit

Commit everything that has changed in the working tree as **one** commit, with a clear, conventional message. The owner is learning, so the message should be a good example of professional practice, and the report afterwards should say briefly why the type was chosen.

Optional hint from the user: $ARGUMENTS

## 1. Look at what changed

Run these and read the output before writing anything:

```sh
git status --short
git diff
git diff --cached
git log --oneline -5
```

Also read new (untracked) files, since `git diff` doesn't show them. The goal is to understand _what_ changed and _why_, not just which files.

If there is nothing to commit, say so and stop.

## 2. Safety checks (stop and ask if any of these hit)

- **Secrets:** `.env*` files, API keys, tokens, passwords, private keys. Never commit these.
- **Things that should be gitignored:** `node_modules/`, `dist/`, OS junk (`Thumbs.db`, `.DS_Store`), editor files other than `.vscode/settings.json` and `.vscode/extensions.json`.
- **Unexpectedly large files** (over ~1 MB), e.g. an unoptimized image or a video. Images for the site should be compressed WebP; flag big ones.

If something looks wrong, show the user what you found and ask before continuing.

## 3. Run the project checks

```sh
npm run lint
npm run format:check
npx tsc -b
```

A failing type-check fails the Vercel deploy on push, so it's worth catching here. If any check fails, show the errors and ask whether to fix them first or commit anyway. Don't fix code on your own; this skill only commits.

## 4. Write the message

Format (Conventional Commits):

```
<type>(<optional scope>): <subject>

<optional body>
```

**Subject line**

- Imperative mood, like a command: "add navbar", not "added navbar" or "adds navbar". It should complete the sentence "If applied, this commit will ...".
- Lowercase after the colon, no trailing period, 72 characters max (aim for ~50).
- Describe the change at the level a reader of `git log` cares about, not a file list.

**Type**

| Type         | Use for                                                                        |
| ------------ | ------------------------------------------------------------------------------ |
| `feat`       | New user-visible feature or UI (a component, a section, design tokens, assets) |
| `fix`        | Bug fix                                                                        |
| `refactor`   | Restructuring code without changing behavior (moving files, renaming)          |
| `style`      | Code formatting only (whitespace, Prettier). **Not** CSS or visual design      |
| `docs`       | Documentation only (`docs/`, README, CLAUDE.md)                                |
| `chore`      | Tooling, config, dependencies, project setup                                   |
| `perf`       | Performance improvement (e.g. image compression, lazy loading)                 |
| `test`       | Tests                                                                          |
| `build`/`ci` | Build system or CI pipeline                                                    |

When the changes are mixed, pick the type of the most important change and mention the rest in the body. Visual/CSS work is `feat` (or `fix`), never `style`. That mix-up is common, so get it right.

**Scope** (optional): a short noun for the area, when it helps: `navbar`, `hero`, `theme`, `logo`, `deps`, `spec`. Skip it if the change spans many areas.

**Body:** add one when the commit includes several changes or the reason isn't obvious. Bullet points are fine. Wrap at 72 characters. Explain what and why, not how.

**Never** add `Co-Authored-By`, "Generated with Claude", or any other AI attribution. The owner wants the history to be theirs.

If the user gave a hint above, use it to shape the subject, but still follow the format.

### Examples

```
feat(navbar): add mobile navbar with logo and menu button
```

```
feat(theme): add design tokens, dark theme and Poppins font

- define color, font and breakpoint tokens in index.css
- add .dark overrides and color-scheme for both themes
- load Poppins from Google Fonts
- exclude docs/ from Tailwind's class scanning
```

```
refactor: move Logo into components/ui
```

```
chore(deps): add lucide-react, clsx and tailwind-merge
```

```
docs(spec): record sticky navbar and hero layout decisions
```

## 5. Commit

```sh
git add -A
git commit -F <message-file>
```

Write the message to a temporary file in the scratchpad directory and pass it with `-F`, so multi-line messages keep their line breaks on Windows. Write that file with the Write tool, not PowerShell's `Set-Content` or `>` (they add a BOM or use UTF-16).

Don't amend existing commits, don't use `--no-verify`, and **don't push**. Pushing deploys the site to Vercel, so leave that to the user.

## 6. Report

Keep it short:

- the commit hash and full message;
- one sentence on why you chose that type (and scope, if any), so the owner learns the convention;
- a reminder that it isn't pushed yet: `git push` when ready.
