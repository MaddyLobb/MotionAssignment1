import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



// gsap.set("#path",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});
// const duration = 0.75;

const mainTL = gsap.timeline();


// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}

mainTL.to("#pathOne",{duration: 2, drawSVG:"0%"});

//mainTL.to("#path", {duration: 2, drawSVG: "50%"});

// mainTL.from("#text",{duration:2, alpha: 0, x: 1000});