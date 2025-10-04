/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
export const script = async ({ context, github }) => {
  let us = await github.paginate(github.rest.activity.listStargazersForRepo, {
    owner: context.repo.owner,
    repo: context.repo.repo,
  });

  const foundUser = us.find((star) => star.owner?.login === context.payload.sender?.login);

  if (!foundUser) {
    github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: `> [!IMPORTANT]
> You have not 🙅‍♂️ ✨ starred ✨ the 🤩 repository 🤩 yet 😳. Please 🙏 star it first!`
    });
  }

  // NOTE: this requires a token that can write comments to the PR/Issue
  // close issue or pr
  github.rest.issues.update({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    state: 'closed',
  });

};
