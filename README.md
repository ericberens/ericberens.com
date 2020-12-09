# ericberens.com

Front-end code base for ericberens.com

## Prerequisites

[nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (>=0.36.0)

- node (>=14.15)
- npm (>=6.0)

See also:

- https://github.com/nvm-sh/nvm#installing-and-updating
- https://github.com/nvm-sh/nvm#deeper-shell-integration

## Installation

Clone from this repository

```bash
$ git clone git@github.com:ericberens/ericberens.com.git
$ cd ericberens.com
```

then create a personal access token and store in a `.npmrc` config file

```
//npm.pkg.github.com/:_authToken=<GITHUB__PERSONAL_ACCESS_TOKEN>
@ericberens:registry=https://npm.pkg.github.com/
always-auth=true
```

then install package dependencies

```bash
$ yarn
```