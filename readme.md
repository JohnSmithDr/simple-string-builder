# string-writer

Simple string writer for both browser javascript and nodejs.

# Example

```JavaScript
var str = StringWriter
  .start()
  .write('Lorem ipsum dolor sit amet, ')
  .writeFormat('consectetur %s elit, ', 'adipisicing')
  .writeLine('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  .toString();
```

# Install

Install via npm:

```
npm install string-writer --save
```

# Build

Build with browserify, install browserify and uglifyjs first, then run build:

```
npm run build
```

# License

MIT