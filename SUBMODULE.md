
## If You Want Upgrade to New Version

Checkout to version.

```sh
git checkout x.x.x
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
git checkout 1.0.4
```

## Admin Submodule ReInstallation

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
cd packages/

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

https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule

```sh
git rm submodule.packages/admin.path
```