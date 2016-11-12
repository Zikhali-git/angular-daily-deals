# AngularDailyDeals

Angular 2 Authentication Tutorial implementation.

<https://auth0.com/blog/angular-2-authentication>

## Requirements

* [Angular CLI](https://cli.angular.io)

## Usage

Run Node back end server.

Export `AUTH0_SECRET` as an environment variable.

```shell
$ cd server; AUTH0_SECRET=<your-auth0-secret> node server
```

Run Angular front end development client.

```shell
$ cd client; ng serve
```

### App

<http://localhost:4200>

### API

<http://localhost:3001>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
