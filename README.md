
# Olobase UI Demo

Demo application installation.

```sh
git clone git@github.com:olomadev/olobase-ui-demo myproject
```

Go to your project root

```sh
cd /var/www/olobase-ui-demo
```

Init olobase-admin submodule

```sh
git submodule update --init
```

Install npm packages

```sh
npm i 
```

<a href="https://oloma.dev/olobase-docs/1.0/vuetify/environments.html" target="_blank">Configure environments</a>

Start your local server

```sh
npm run dev
```

If you are working on a local computer, you can visit http://127.0.0.1:3000. If you are working on a local virtual server, you can type the IP address of your server into your browser and visit an IP address like in this example; http://192.168.231.129:3000.

Exporting your project

With this command, your javascript files compiled for the production environment are exported to the <b>/dist</b> folder.

```sh
npm run build
```

## Installing Node.js Using Nvm Manager

Install nvm

```sh
sudo apt update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm --version
```

Please install the following components in your working environment.

* Node.js 18.15.0 and above

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
```

Take a look and make sure you are comfortable with the changes it is making. When you are satisfied, run the command again with | bash appended at the end. The URL you use will change depending on the latest version of nvm, but as of right now, the script can be downloaded and executed by typing:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

This will install the nvm script to your user account. To use it, you must first source your .bashrc file:

```
source ~/.bashrc
```

Now, you can ask NVM which versions of Node are available:

```
nvm list-remote
```

```
. . .
       v16.11.1
       v16.12.0
       v16.13.0   (LTS: Gallium)
       v16.13.1   (LTS: Gallium)
       v16.13.2   (LTS: Gallium)
       v16.14.0   (Latest LTS: Gallium)
        v17.0.0
        v17.0.1
        v17.1.0
        v17.2.0
        v17.3.0
        v17.3.1
        v17.4.0
        v17.5.0
        v17.6.0
        v20.9.0  (Latest)
        v20.11.1 (Latest LTS: Iron)
        v21.0.0
```

It’s a very long list! You can install a version of Node by typing any of the release versions you see. For instance, to get version v16.14.0 (another LTS release), you can type:

```
node -v

// output: v16.14.0
```

```
nvm install 20.11.1
```

if you already have another version use "use" keyword

```
nvm use 20.11.1
```

Set default version

```
nvm alias default node
```

You can see the different versions you have installed by typing:

```
nvm list
```



## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).


### Upgrading Vue-Vuetify to Next Versions

```
npm remove vuetify
npm install --save vuetify@3.4.9
```
