/** @param {import('@types/github-script').AsyncFunctionArguments} AsyncFunctionArguments */
export const script = async ({ context, github }) => {
  let us = await github.paginate(github.rest.activity.listStargazersForRepo, {
    owner: context.repo.owner,
    repo: context.repo.repo,
  });
  if (!us.some((star) => star.owner.login === context.payload.sender.login)) {
    github.rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: "You have not 🙅‍♂️ ✨ starred ✨ the 🤩 repository 🤩 yet 😳. Please 🙏 star it 1️⃣ first.",
    });
  }
};
