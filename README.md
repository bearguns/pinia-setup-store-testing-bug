# Example: testing watched or dependent setup store functions

## Running the example:

1. Install dependencies with yarn `$ yarn`
2. Run test with `$ yarn vites`

When spying on "actions" in a setup store, the spies are not tracked properly if those functions are called either from _another_ function in the store, or from a watcher.
