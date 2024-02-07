
## If You Want Upgrade to New Version of olobase-admin

Checkout to version.

```sh
cd packages/admin
packages/admin#  git checkout x.x.x
```

## If You Edited Submodule and You Want to Restore

```sh
git restore .
// HEAD detached at 1.0.4
```

## Submodule Init

If you have already cloned a repository and want to load its submodules:

```sh
git submodule update --init
```

## Updating Submodule

```sh
git submodule update --recursive --remote
```

Pull the version you want

```sh
cd packages/admin
git checkout 1.0.4
```

## Adding/ReInstalling a Submodule - (olobase-admin)

Remove packages/ line from your .gitignore file

```sh
.DS_Store
lib
dist
/node_modules/
packages/
```

Add admin submodule

```sh
git submodule add git@github.com:olomadev/olobase-admin.git packages/admin
```

Add packages/ line again.

```sh
.DS_Store
lib
dist
/node_modules/
packages/
```

### List Submodules

```sh
git config --file .gitmodules --name-only --get-regexp path

submodule.packages/admin.path
```

## Removing Admin Submodule

```sh
git rm packages/admin
git commit & push
```

More details

https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule