/* this is just a function that returns an image by image id 
images are apparently stored in a database 

CHECK THE URL TO FIGURE OUT HOW IMAGEID WAS EMBEDDED => rEMEMBER
*/

export function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
