This project is to see what it is like to implement a basic wiki before
moving to a more advanced wiki. It's goals are to allow editing of pages
using MarkDown, and provide the most useful set of special pages provided
by MediaWiki.

This is a draft document of features and whatnot. It'll probably be moved away
from the README.md as progress occurs. Also, the license will either be BSD or
Apache. I'm not sure which yet.

These are non-goals:

* Templates - This means don't use this for big projects. Or if you want 
infoboxes.
* Semantic Data - It's provided via extension for MediaWiki, and my ultimate
goal is to have a wiki with it built in. But that goal is not going to be met
with mdWiki.
* NoSQL - The wiki is going to be SQL based. I honestly don't see the point
of using NoSQL, and the literature on SQL I've read has me more prepared to
use it.
* Namespaces - Without templates, your wiki should be for small projects. As
such, you shouldn't need custom namespaces.
* Categories - Like Templates, this stops use from big projects.
* UserScripts - Another complex mediawiki thing.

These are some of the goals:

* User rights plus sane defaults.
* Easy to install.
* WYSIWYG editing. Hopefully one already exists.
* Escape to HTML, though no WYSIWYG for that. No security vulnerabilites.
* Performant loading and saving.
* Special/Sidebar
* User pages and Talk pages.
* Search
* Move/Edit/Create/Delete/View page
* Images
* Copyrights

The top level structure looks like this:

* /
* /user/
* /special/
* /image/
* /%PAGE%/

## Limitations of Page Names

* No subpages via '/'. Sorry.
* Cannot be one of "user", "special", or "image".
* Case-insensitive.
* ASCII Printable Characters

The first limitation is because of all the special magic through the URL that
this wiki does. I /should/ be using GET and POST variables here, but just to
have some fun, I'm storing some of the important data in the URL under
subnames. This limitation will not be in the successor wiki, whenever that
will be.

The second limitation is hopefully obvious. I think I can get rid of this by
making the main namespace be called /wiki/ instead, but I want to keep the
'View the damn page' URL as short as possible for this project.

It is my opinion that the case-sensitivity of MediaWiki is a flaw. As such,
I am not inheriting that flaw. All pages are case-insensitive. For now, I do
not want to deal with Unicode. So pages must contain printable ASCII
characters.