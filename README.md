# RFMNg2024

## Start the application

Run `pnpm nx serve rfm-ng-2024` to start the development server. Happy coding!

## Build for production

Run `pnpm nx build rfm-ng-2024` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
pnpm nx <target> <project> <...options>
```

You can also run multiple targets:

```
pnpm nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
pnpm nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`.
