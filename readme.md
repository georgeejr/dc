# Front End Test

Tools:

- json2html for JSON templates
- Babel compiling es6 code  
- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

### Setup

Download it with Git:

```bash
git clone https://github.com/georgeejr/dc.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname(dc)
npm install
bower install
```

Finally, run `npm start` to run Gulp. The finished and compiled site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed and minified, production-ready assets, run `npm run build`.

### Structure 

```
- RestAPI setup for displaying data using json2html templating
```