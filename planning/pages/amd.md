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
- Clear path to defining the module value. Either use "return value;" or the CommonJS "exports" idiom, which can be useful for circular dependencies.
