AMD
=========
### Asynchronous Modular Design

- Simple, flexible modular format
- Designed with the browser environment in mind
- Designed to accomidate asynchronous loading
- Plugins for loading other resource types

The AMD format comes from wanting a module format that was better than today's 
"write a bunch of script tags with implicit dependencies that you have to manually order" and 
something that was easy to use directly in the browser. Something with good debugging characteristics that did not 
require server-specific tooling to get started. It grew out of Dojo's real world experience 
with using XHR+eval and wanting to avoid its weaknesses for the future.

It is an improvement over the web's current "globals and script tags" because:

- Uses the CommonJS practice of string IDs for dependencies. Clear declaration 
  of dependencies and avoids the use of globals.
- IDs can be mapped to different paths. This allows swapping out implementation. This is great for creating 
  mocks for unit testing. For the above code sample, the code just expects something that implements the 
  jQuery API and behavior. It does not have to be jQuery.
- Encapsulates the module definition. Gives you the tools to avoid polluting the global namespace.
- Clear path to defining the module value. Either use "return value;" or the CommonJS "exports" idiom, which can be useful   for circular dependencies.

It is an improvement over CommonJS modules because:

- It works better in the browser, it has the least amount of gotchas. 
  Other approaches have problems with debugging, cross-domain/CDN usage, file:// usage and the need 
  for server-specific tooling.
- Defines a way to include multiple modules in one file. In CommonJS terms, 
  the term for this is a "transport format", and that group has not agreed on a transport format.
- Allows setting a function as the return value. This is really useful for constructor functions. 
  In CommonJS this is more awkward, always having to set a property on the exports 
  object. Node supports module.exports = function () {}, but that is not part of a CommonJS spec.


### Why AMD is A Better Choice For Writing Modular JavaScript

- Provides a clear proposal for how to approach defining flexible modules.
- Significantly cleaner than the present global namespace and script tag solutions many of us rely on. 
  There's a clean way to declare stand-alone modules and dependencies they may have.
- Module definitions are encapsulated, helping us to avoid pollution of the global namespace.
- Works better than some alternative solutions (eg. CommonJS). Doesn't have issues with cross-domain, local 
  or debugging and doesn't have a reliance on server-side tools to be used. Most AMD loaders 
  support loading modules in the browser without a build process.
- Provides a 'transport' approach for including multiple modules in a single file. 
- It's possible to lazy load scripts if this is needed.
