# must-star-action

This will prevent noobs from raising an issue/pr if they have not starred it. It will instantly close the issue or PR.

### Usage

You will need to create a `GH_PAT` that has write access so that it can comment and close PRs/Issues.

```yaml
name: Check Stars on PRs and Issues

on:
  pull_request:
    types: [opened]
    branches:
      - "*"

  issues:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - uses: hacksore/must-star-action@master
        with:
          github-token: ${{ secrets.GH_PAT }}
```

can i update the readme pls
