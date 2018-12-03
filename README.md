# TestRaf

See code in AppComponent which binds to RAF and detects changes (for when `__Zone_disable_requestAnimationFrame` is working)

Run with ng serve and it will say In Zone! despite `__Zone_disable_requestAnimationFrame` being set to `true` in the `polyfill.js` file.

Uncomment the setting in the index.html file and it works as expected (only in there to guarantee it runs before Zone.JS)
