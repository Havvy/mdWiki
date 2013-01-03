This project is to see what it is like to implement a basic wiki before
moving to a more advanced wiki. It's goals are to allow editing of pages
using MarkDown, and provide the most useful set of special pages provided
by MediaWiki.

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