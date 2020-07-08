function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0 ) { return undefined }
  else { const result = length * width;
    return result; 
  }
}
function calculateTriangleArea(base, height) {
  if ( base < 0 || height < 0 ) { return undefined }
  else { const result = ( base * height) / 2;
    return result; 
  }
}

function calculateCircleArea(radius) {
  if ( radius < 0 ) { return undefined }
  else { 
  
    return Math.PI * radius * radius  
  }
}
