# How to contribute

We're really glad you're reading this, because we need volunteer developers to help this project come to fruition. :clap:

 If you want to know more about this project please check our [README.md](https://github.com/prettier/tslint-config-prettier/blob/master/README.md).This project uses [semantic-release](https://github.com/semantic-release/semantic-release) to keep a clean CI/CD pipe.

So, you only will be required to follow [conventional-commit](https://github.com/commitizen/conventional-commit-types) messages. Everything else happens magically.

## Forking repo

Fork the repo. Then, clone it and install dependencies:

```bash
git clone https://github.com/YOUR-USERNAME/tslint-config-prettier
npm install
```

This will set up the pre-push and commit-msg hooks, making sure your commits have the correct style, tests are passing and the coverage is met, so your commit don't break the build.

You can run the command npm run commit to make you easier to write a conventional commit. Keep every PR as scoped as possible.

Finally, Submit your changes by pull request :point_down:!

## Submitting changes

Please send a [GitHub Pull Request](https://github.com/prettier/tslint-config-prettier/pull/new/master) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include test and keep the coverage up, since checked when you submit a PR by our CI server. Make sure all of your commits are atomic (one feature per commit).
