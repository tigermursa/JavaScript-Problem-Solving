//!=========================================================================================
//!       Problem : Separate the attributes from the data and show only as key and value
//!=========================================================================================

//This is the data :

const response = {
  data: [
    {
      "Product Title":
        "Alex Vando Mens Golf Shirt Moisture Wicking Quick-Dry Short Sleeve Casual Polo Shirts for Men",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61gGPxW66tL.__AC_SY445_SX342_QL70_ML2_.jpg",
    },

    { Price: 19.99 },
    {
      attributes: ["Color:", "Mesh Sleeve White"],
    },
    {
      attributes: ["Size:", "Medium"],
    },
  ],
};

/* expected  result = here the attributes object array is not fixed that can be 3 or 4 , but in that array there will be
 always 2 element, so i want attributes[0] as key and  attributes[1] as value from them. the title image and price will come in the array
 object first three element i don't want those , I want only the attributes like key:Color:, value:Mesh Sleeve White,key:Size:, value:Medium

 */

//Solve :
const mainData = response.data;
const attributes = mainData.slice(3);

// Transform the attributes into key-value pairs
const onlyAttributes = attributes.map((attr) => {
  const [key, value] = attr.attributes;
  return { [key.trim()]: value };
});

console.log(onlyAttributes); //[ { 'Color:': 'Mesh Sleeve White' }, { 'Size:': 'Medium' } ]
