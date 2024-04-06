/////////////////////////////////////////////
/////////FUNCTIONS FOR COLLISION/////////////
/////////////////////////////////////////////

function checkCollision(worldCollisionBoard,tileSize) {
  for (let y = 0; y < worldCollisionBoard.length; y++) {
    const currentLine = worldCollisionBoard[y];
    for (let x = 0; x < currentLine.length; x++) {
      const currentTileValue = currentLine[x];
      if (currentTileValue === 2){
        if(rectIsInRect(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }
      if (currentTileValue === 3) {
        if(rectIsHalfRectLeft(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 4) {
        if(rectIsHalfRectRight(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 5) {
        if(rectIsHalfRectTop(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 6) {
        if(rectIsHalfRectBottom(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 7) {
        if(rectIsRectTopLeft(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 8) {
        if(rectIsRectTopRight(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 9) {
        if(rectIsRectBottomLeft(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 10) {
        if(rectIsRectBottomRight(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 11) {
        if(rectIsRect75Right(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 12) {
        if(rectIsHalfRectTop75(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 13) {
        if(rectIsRectBottomRight(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }
      
      if (currentTileValue === 14) {
        if(rectIsRectBottomLeft(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }

      if (currentTileValue === 15) {
        if(rectIsRectTopLeft(xHero, yHero, wHero, hHero, tileSize * x + 1, tileSize * y + 1, tileSize, tileSize)){
          return true 
        }
      }
    }
  }
};


function pointIsInRect(xHero,yHero,xR,yR,wR,hR) {
  if( (xHero > xR && xHero < xR + wR) && (yHero > yR && yHero < yR + hR))
  {
    return true;
  }else{
    return false;
  }
};


function rectIsInRect(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la droite");
      return true;
    }
  };
};







// On prends en compe ou la collison ce trouve.


/////////////////////////////////////////////
///////// COLISON Half on Left    /////////////
/////////////////////////////////////////////

function rectIsHalfRectRight(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero / 2.3, yHero + hHero / 2.3, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le bas");
    //   return true;
    // }
    
    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le haut");
    //   return true;
    // } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2.3, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2.3, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la droite");
    //   return true;
    // }
  };
};











/////////////////////////////////////////////
///////// COLISON Half on Right    /////////////
/////////////////////////////////////////////



function rectIsHalfRectLeft(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

    // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero + wHero / 1.7, yHero + hHero / 1.7, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le haut");
    //   return true;
    // }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le bas");
    //   return true;
    // }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 1.7, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par le bas et la droite");
    //   return true;
    // }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 1.7, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la gauche");
    //   return true;
    // }

    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la droite");
      return true;
    }
  };
};








/////////////////////////////////////////////
///////// COLISON HALF ON TOP    /////////////
/////////////////////////////////////////////

function rectIsHalfRectTop(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le bas");
    //   return true;
    // }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le bas");
    //   return true;
    // }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero /2 , xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par le bas et la droite");
    //   return true;
    // }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la droite");
      return true;
    }
  };
};














/////////////////////////////////////////////
///////// COLISON HALF ON Bottom   /////////////
/////////////////////////////////////////////



function rectIsHalfRectBottom(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le haut");
    //   return true;
    // }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le haut");
    //   return true;
    // } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la droite");
    //   return true;
    // }
  };
};



























/////////////////////////////////////////////
///////// COLISON en haut a gauche    /////////////
/////////////////////////////////////////////


function rectIsRectTopLeft(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le centre");
    //   return true;
    // }
    
    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le haut");
    //   return true;
    // }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le bas");
    //   return true;
    // }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le bas");
    //   return true;
    // }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero /2 , xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par le bas et la droite");
    //   return true;
    // }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la droite");
    //   return true;
    // }
  };
};












/////////////////////////////////////////////
///////// COLISON en haut a droite    /////////////
/////////////////////////////////////////////

function rectIsRectTopRight(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le bas");
    //   return true;
    // }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le bas");
    //   return true;
    // }
    
    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le haut");
    //   return true;
    // } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par le bas et la droite");
    //   return true;
    // }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le Haut et la droite");
    //   return true;
    // }
  };
};








/////////////////////////////////////////////
///////// COLISON en bas a gauche    /////////////
/////////////////////////////////////////////

function rectIsRectBottomLeft(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le haut");
    //   return true;
    // }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le bas");
    //   return true;
    // }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le haut");
    //   return true;
    // } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par le bas et la droite");
    //   return true;
    // }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la droite");
    //   return true;
    // }
  };
};






// /////////////////////////////////////////////
// ///////// COLISON en bas a droite    /////////////
// /////////////////////////////////////////////

function rectIsRectBottomRight(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le haut");
    //   return true;
    // }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le bas");
    //   return true;
    // }
    
    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le haut");
    //   return true;
    // } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    // if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la droite");
    //   return true;
    // }
  };
};




/////////////////////////////////////////////
///////// COLISON 75% GAUCHE    /////////////
/////////////////////////////////////////////


function rectIsRect75Right(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero / 1.5, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le bas");
    //   return true;
    // }
    
    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le haut");
    //   return true;
    // } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 1.5, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 1.5, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la droite");
    //   return true;
    // }
  };
};




/////////////////////////////////////////////
///////// COLISON 75% GAUCHE de moitié en haut/////////////
/////////////////////////////////////////////



function rectIsHalfRectTop75(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la droite et le bas");
    //   return true;
    // }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero / 1.5, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le bas");
    //   return true;
    // }
    
    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par la gauche et le haut");
    //   return true;
    // } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero / 2, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par la bas et la gauche");
    //   return true;
    // }

    // if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
    //   console.log("Par le bas et la droite");
    //   return true;
    // }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    // if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
    //   console.log("Par le haut et la droite");
    //   return true;
    // }
  };
};







/////////////////////////////////////////////
///////// COLISON case vide en bas a droite    /////////////
/////////////////////////////////////////////



function rectIsRectBottomRight(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la droite");
      return true;
    }
  };
};












/////////////////////////////////////////////
///////// COLISON case vide en bas a gauche    /////////////
/////////////////////////////////////////////



function rectIsRectBottomLeft(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par le haut et la droite");
      return true;
    }
  };
};




/////////////////////////////////////////////
///////// COLISON case vide en HAUT a gauche    /////////////
/////////////////////////////////////////////



function rectIsRectTopLeft(xHero, yHero, wHero, hHero, xR, yR, wR, hR) {

  // Arrivée par la droite.
  if (xHero < xR + wR) {
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le centre");
      return true;
    }
    
    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le haut");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la droite et le bas");
      return true;
    }  
  };

  // Arrivée par la gauche.
  if (xHero + wHero > xR) {
    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par la gauche et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le bas");
      return true;
    }
    
    if (pointIsInRect(xHero + wHero, yHero + hHero, xR, yR, wR, hR)) {
      console.log("Par la gauche et le haut");
      return true;
    } 
  };

  // Arrivée par le bas.
  if (yHero < yR + hR) {
    if (pointIsInRect(xHero + wHero / 2, yHero, xR ,yR ,wR ,hR)) {
      console.log("Par la bas et le centre");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero, xR, yR, wR, hR)) {
      console.log("Par la bas et la gauche");
      return true;
    }

    if (pointIsInRect(xHero, yHero, xR, yR, wR, hR)) {
      console.log("Par le bas et la droite");
      return true;
    }
  };

  // Arrivée par le haut.
  if (yHero + hHero > yR) {
    if (pointIsInRect(xHero + wHero / 2, yHero + hHero, xR, yR,wR ,hR)) {
      console.log("Par le haut et le centre");
      return true;
    }

    if (pointIsInRect(xHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par le haut et la gauche");
      return true;
    }

    if (pointIsInRect(xHero + wHero, yHero + hHero / 2, xR, yR, wR, hR)) {
      console.log("Par le haut et la droite");
      return true;
    }
  };
};