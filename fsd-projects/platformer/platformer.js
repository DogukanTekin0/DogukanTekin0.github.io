$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    


    // TODO 2 - Create Platforms
    createPlatform(200, 700, 100, 20, "black");
    createPlatform(400, 600, 100, 20, "black");
    createPlatform(600, 500, 100, 20, "black");
    createPlatform(600, 300, 20, 100, "black");
    createPlatform(600, 380, 220, 20, "black");
    createPlatform(800, 380, 20, 240, "black");
    createPlatform(700, 500, 20, 2400, "black");
    createPlatform(1000, 700, 100, 20, "black");
    createPlatform(800, 600, 100, 20, "black");
    createPlatform(1000, 500, 100, 20, "black");
    createPlatform(800, 380, 100, 20, "black");
    createPlatform(400, 180, 100, 20, "black");
    createPlatform(700, 180, 100, 20, "black");
    createPlatform(1000, 180, 100, 20, "black");
    createPlatform(400, 400, 100, 20, "black");
    createPlatform(200, 400, 100, 20, "black");
    createPlatform(100, 300, 100, 20, "black");
    createPlatform(100, 180, 100, 20, "black");
    createPlatform(200, 100, 200, 20, "black");
    createPlatform(500, 100, 200, 20, "black");
    createPlatform(800, 100, 200, 20, "black");
    createPlatform(1180, 100, 20, 520, "black");
    createPlatform(1200, 600, 200, 20, "black");
    createPlatform(1300, 480, 200, 20, "black");
    createPlatform(1300, 100, 20, 400, "black");

    




    // TODO 3 - Create Collectables
    createCollectable("diamond", 730, 425, 0, 0);
    createCollectable("max", 130, 230, 0, 0);
    createCollectable("grace", 1325, 530, 0, 0);



    
    // TODO 4 - Create Cannons
    createCannon("right", 700, 1250);
    createCannon("left", 400, 1250);
    createCannon("right", 300, 1250);
    createCannon("left", 0, 1250);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
