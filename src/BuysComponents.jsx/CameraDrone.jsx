import React, { useState } from 'react';
import { Text, Box, Divider, Image } from "@chakra-ui/react";
import Navbar from '../Components/Navbar';

function CameraDrone() {
  // Array of images
  const images = [
    { img_url: "https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png", pro_name: "Dji Mavic" },
    {img_url:"https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png",pro_name:"Dji Air"},
    {img_url:"https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png",pro_name:"Dji Mini"},
    {img_url:"https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png",pro_name:""},
    
    {img_url: "https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png", pro_name : ""},
    {img_url:  "https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png", pro_name : ""},
    {img_url: "https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png", pro_name : ""},
    {img_url: "https://dji-official-fe.djicdn.com/dps/ab660f7a8c5a5ab1b776f800c8cbc6ee.svg", pro_name : ""},
    {img_url: "", pro_name : ""},
   
  ];

  // State to track the current index of displayed images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle clicking the navigation buttons
  const handleNavigation = (direction) => {
    const newIndex = direction === 'next' ? currentIndex + 3 : currentIndex - 3;
    const maxIndex = Math.max(images.length - 3, 0);
    const boundedIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(boundedIndex);
  };

  return (
    <>
      <Navbar />
      <Box w="100%" h="100vh" bg="#fff">
        <Box w="100%" h="20vh" bg="#eee">

          <Box w={{ base: "100%", md: "80%" }} m="auto" h="100%" border={"1px solid red"} bg="#" style={{ overflow: "hidden" }}>
            {/* Render images based on currentIndex */}
           
          </Box>
        </Box>
        <button onClick={() => handleNavigation('prev')}>Previous</button>
        <button onClick={() => handleNavigation('next')}>Next</button>
      </Box>
    </>
  );
}

export default CameraDrone;






// import React, { useState } from 'react';
// import { Text, Box, Divider, Image } from "@chakra-ui/react";
// import Navbar from '../Components/Navbar';

// function CameraDrone() {
//   // Array of images
//   const images = [
//     { img_url: "https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png", pro_name: "Dji Mavic" },
//     {img_url:"https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png",pro_name:"Dji Air"},
//     {img_url:"https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png",pro_name:"Dji Mini"},
//     {img_url:"https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png",pro_name:""},
    
//     {img_url: "https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png", pro_name : ""},
//     {img_url:  "https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png", pro_name : ""},
//     {img_url: "https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png", pro_name : ""},
//     {img_url: "https://dji-official-fe.djicdn.com/dps/ab660f7a8c5a5ab1b776f800c8cbc6ee.svg", pro_name : ""},
//     {img_url: "", pro_name : ""},
   
//   ];

//   // State to track the current index of displayed images
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to handle clicking the navigation buttons
//   const handleNavigation = (direction) => {
//     const newIndex = direction === 'next' ? currentIndex + 3 : currentIndex - 3;
//     const maxIndex = Math.max(images.length - 3, 0);
//     const boundedIndex = Math.max(0, Math.min(newIndex, maxIndex));
//     setCurrentIndex(boundedIndex);
//   };

//   return (
//     <>
//       <Navbar />
//       <Box w="100%" h="100vh" bg="#fff">
//         <Box w="100%" h="20vh" bg="#eee">

//           <Box w={{ base: "100%", md: "80%" }} m="auto" h="100%" border={"1px solid red"} bg="#" style={{ overflow: "hidden" }}>
//             {/* Render images */}
           
//           </Box>
//         </Box>
//         <button onClick={() => handleNavigation('prev')}>Previous</button>
//         <button onClick={() => handleNavigation('next')}>Next</button>
//       </Box>
//     </>
//   );
// }

// export default CameraDrone;


// i want to display those img_url and pro_name inside my box also i want to render 3 images at one frame next 3 at next frame and next 3 as next frame along with pro_name text