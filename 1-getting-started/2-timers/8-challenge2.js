let times = 0;

let interval = setInterval(
    () => {
      console.log("Hello World");
      if (times === 4) {
        console.log('Done');
        clearInterval(interval);
      }
      times++;
    },
    1000
);


// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
