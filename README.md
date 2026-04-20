# Isaiah Griego - Instaswitch homework

## Setup

Initialize the dependencies for this to run.

```bash
bun install
```

## Build

Builds the project from typescript to the more portable javascript version

```bash
bun run build
```

## Run

By default this will output the resulting metrics to the output.txt file at the root of this repo.

```bash
# one-liner
bun run build && bun run start -i<input_filename>
```

## Test

Run all the tests for this project

```bash
bun test
```

## Lint

```bash
bun run lint

# fix possible offenses
bun run lint:fix
```

## Technologies Used

### Bun

For runtime, building and bundling.

### csv-parser

For fast parsing of the input CSV files.

### Biome

For linting and style opinions.

### Commander

For robust command line options and switching

### Zustand

For shared global state

