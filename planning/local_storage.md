Local Storage
=================
Storing objects locally in the browser with HTML5i

## Specifications

	| IE     | Firefox    | Safari  | Chrome | Opera | iPhone | Android|
--------| ------ |:----------:| -------:|--------|-------|--------|--------|
|Version| 8.0+   | 3.5+       | 4.0+    | 4.0+   | 10.5+ | 2.0+   | 2.0+   |
|LocalStorage|10.0Mb| 5.0Mb   | 5.0Mb   | 5.0Mb  | 5.0Mb | 5.0Mb\* | 5.0Mb\* |

\* iPhone and Android will be ask you to increase the LocalStorage when reaching maximum

    
## Strategy

We will use Local Storage to store the current tasks(jobs) by MOM. If there is no
local storage on the device then we will load the test or default jobs. Otherwise it will
load the jobs in the local storage.
