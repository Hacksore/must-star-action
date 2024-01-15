# must-star

example of how to use

```
name: Check Stars on PRs and Issues

on:
  pull_request:
    types: [opened]

  issues:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - uses: hacksore/must-star-action@master
```
