# preview
> set JEKYLL_ENV=development
> bundle exec jekyll serve

# build
> cd E:\Blog\WhatsAppNETClient
> set JEKYLL_ENV=production
> bundle exec jekyll build --verbose

# copy
> cd E:\Blog\WhatsAppNETClient-deploy
> git pull origin master

# deploy
> xcopy E:\Blog\WhatsAppNETClient\_site\*.* /y /s /e
> git add -A
> git commit -m "Site updated at 2020-07-05 06:32:00 PM"
> git push origin master