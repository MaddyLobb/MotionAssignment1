import { gsap } from "gsap";


// const duration = 0.75;

const mainTL = gsap.timeline();

// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}

mainTL.to("#path",{duration: 2, rotation: 360, alpha: 0})

mainTL.from("#text",{duration:2, alpha: 0, x: 1000});