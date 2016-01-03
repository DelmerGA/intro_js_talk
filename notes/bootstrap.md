### Setting Up A New Project

Do the following to get started with Bootstrap

* Make a new **project folder** on your desktop, `bootstrap_concepts`.
* Open it with Sublime
* Make a new file and save it as `index.html`.
* Make a folder in your project called `public`.

> **Note**: the `public` folder is going to be where we put public `assets`: `CSS`, `javascript`, and images.

> **Note**: `assets` is just a general term for the `CSS`, `javascript`, `images`.

### Setup \w Bootstrap

Let's start by downloading bootstrap. This isn't always a neccessary step, but it does give you everything you could possibly need with bootstrap.

[click here to download](https://github.com/twbs/bootstrap/releases/download/v3.3.6/bootstrap-3.3.6-dist.zip)

> **Note**: this is the same as going to [bootstrap's site](http://getbootstrap.com/getting-started/#download) and clicking <form method="get" action="https://github.com/twbs/bootstrap/releases/download/v3.3.6/bootstrap-3.3.6-dist.zip"><button class='btn btn-default'>Download Bootstrap</button></form>

Right now we are intentionally trying to stay away from just using the **CDN** links provided bootstrap because knowing how to do this is an important exercise in patience needed to deal with setting up projects.

Now that we have **downloaded** Bootstrap we want to unzip (just by clicking it) and then do the following:

* We right-click and select `Copy bootstrap-3.3.6-dist`
* Open our project on our `bootstrap_concepts` project on our desktop
* Paste into the `public` folder

  <img class="img-responsive" src="images/beginner/paste_bs.png" width="500" alt="paste item into public">

* Our project sidebar should look like the following:

  <img class="img-responsive" src="images/beginner/post_bs_dir.png" width="500" alt="paste item into public">

* The `bootstrap-3.3.6-dist` folder has a huge name. Let's change it to just `bootstrap`.

  <img class="img-responsive" src="images/beginner/rename_bs.png" width="500" alt="change distribution folder name to bootstrap">

### Setup jQuery

Start [Downloading jQuery](http://code.jquery.com/jquery-1.11.2.js). Make a `public/jquery` folder. Then move the `jquery-1.11.2.js` file into the jquery folder. Rename the `jquery-1.11.2.js` to just be `jquery.js`.

You should now have something like the following...

* `public/`
  * `jquery/`
    * `jquery.js`
  * `bootstrap/`
* `index.html`

## Setting Up The Index.html

Let's setup the `index.html`

* Start with some simple boilerplate

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Grid Concepts</title>
  </head>
  <body>

  </body>
  </html>
  ```

* Then let's add some required meta tags to the head. These meta tags add viewport scaling information so that Bootstrap can actually scale to device appropriately. Without them your site won't be mobile first.

  ```html
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  ```

  The html should look something like the following:

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Grid Concepts</title>
  </head>
  <body>

  </body>
  </html>
  ```

* Everything in the Bootstrap world belongs inside an html element with a `container` class. This helps to control the margins and padding of the page.

  ```html
  ...
  <body>
    <div class="container">
    </div>
  </body>
  ...
  ```

