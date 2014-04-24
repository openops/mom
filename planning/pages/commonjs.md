CommonJS
================

CommonJS are a volunteer working group which aim to design, prototype and standardize JavaScript APIs. 
To date they've attempted to ratify standards for both modules and packages. The CommonJS module proposal 
specifies a simple API for declaring modules server-side and unlike AMD attempts to cover a broader set of 
concerns such as io, filesystem, promises and more. 

AMD adopts a browser-first approach to development, opting for asynchronous behaviour and simplified 
backwards compatability but it doesn't have any concept of File I/O. It supports objects, functions, 
constructors, strings, JSON and many other types of modules, running natively in the browser. It's incredibly flexible.

CommonJS on the other hand takes a server-first approach, assuming synchronous behaviour, 
no global baggage and it attempts to cater for the future (on the server). CJS modules however only support 
objects as modules.

### Examples
