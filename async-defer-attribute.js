//async, defer attribute are boolean value in javaScript
//which are used to load external script efficently

// normal script tag
// using async atrribute in script tag
// using defer atrribute in script tag

//when we load a webpage, then 2 major things happen in  browser
// 1️⃣ HTML parsing
// 2️⃣ loading of scripts
//             / \
//            /   \
//           /     \
//   fetching      executing
//     of          the scripts
//    script       line by line
//  from network

// normal script tag :
// html parsing happens and when it notices script tag, html parsing pauses
// it fetch and execute then and there, and then html pasing continues

// async attribute in script tag:
// html parsing happening, parallely script fetching from network is happening too
// and when fetching is complete,  html parsing is paused, execution of scripts happens
// and after execution is done, parsing continue

// defer attribute in script tag:
// html parsing happening, parallely script fetching from network is happening too
// execution of script happen only after html parsing is complete
