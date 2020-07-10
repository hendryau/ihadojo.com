# ihadojo.com

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy
```
> ng build --prod --base-href="https://ihadojo.com"
> git checkout gh-pages
> git pull origin gh-pages
> git pull origin master
> git add src/*
> git commit
> git push origin gh-pages
> git checkout master
> npx ngh
```

And don't forget to update the CNAME field in the repository settings. It gets wiped out every time I deploy.
