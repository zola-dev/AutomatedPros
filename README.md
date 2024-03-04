# AutomatedPros

IMPORTANT: main.html file serves as the entry point for the assignment.

HTML Structure with Reusable Components:

I divided the main content of the webpage into a separate component, main, footer and menu, and reused menu, and the same could be done for all three files. 

Responsive Image Handling:

I modified the way images were implemented. Instead of fixed sizes in range, now we dynamically request images based on the required sizes. This optimization ensures that users receive the exact image resolution for their device, i served images from my node.js server. I think it's better to have one image that will be cached for all resolutions that clients require instead of keeping five images on the server that are not even exact image resolution.

Animations with GSAP:

All animations within the project are now powered by the GSAP (GreenSock Animation Platform) library.

CSS Classes:
For maintainability, I used only necessary CSS classes,  the rest are Bootstrap classes.

FontAwesome Icons:
I replaced some svg icons with Font Awesome icons, I could further change all of them, I think it's a good approach, they are easy to maintain, manipulate, and they are cached, so it reduces code complexity and maintainability.

Minimizing SCSS to CSS and JavaScript with Webpack:
Optimized for performance, original versions are in the folder.

