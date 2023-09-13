# productivity-webapp

## GitHub Help

### Make a local directory to clone

- Create a new folder on your local machine: `mkdir folder-name` (Note: mkdir is for linux. All `git commands` are universal as we are using git)
- Go into that new folder `cd folder-path`

Easy version:
- `git clone https://github.com/jubyaid123/productivity-webapp`

Alternative:
- Run `git init`
- Run `git remote add origin https://github.com/jubyaid123/productivity-webapp`
- Run `git pull origin master`

### Crete branch

If you didn't fork and will be using the main repo, use branches. (Essentially making a separate folder so it does not interfere with main branch)

To create a new branch: 
- Run `git branch your-branch`
- Checkout into that branch, `git checkout your-branch`

### Pushing

- Add your changes, run `git add .`
- Commit your changes `git commit -m "commit-message"` (Note: the message after -m must be in quotes so it is read as a string)
- To push run, `git push origin your-branch-name`

### Forks

1. Forks essentially make a copy of main to your own repository. You have to sync your own fork to keep up with main repository.
2. You can push to the forked main, but it will not make the changes on the main repositry.
3. You must merge the fork and main repositry to see all changes in effect.

Easy method:
- Use the fork button on the top right side of the repoitory in GitHub
- When you are in your fork, you will see a contribute and sync button on the top right, directly under the fork button. 


Using GitHub CLI:
- To fork, `gh repo fork https://github.com/jubyaid123/productivity-webapp --clone`

[Additional information about forks](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
