import React, {useState} from 'react';
import './App.css';


function App(){
  const [state, setState] = useState([]);
  const images = ["https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/southern_resident_orca_katie_jones_header.jpg?itok=f5g_aQxd",
                  "https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_GPN7474/hero_small/63qidi36cn_Responsible_Forestry_8.10.2012_Biodiversiry_Loss_HI_7474.jpg",
                  "https://th-thumbnailer.cdn-si-edu.com/JSCi8yHXWnaczxVFAYrDwuiPqLk=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ae/98/ae980f74-fa29-4c42-9aff-eea13c2c1971/great_white_shark_south_africa.jpg",
                  "https://earth.org/wp-content/uploads/2024/03/Untitled-683-x-1024-px-5.png"
                  ];

  function nextImage(){
    setState(state === images.length -1 ? 0: state + 1);
  }

  function prevImage(){
    setState(state === images.length -1 ? 0: state -1);
  }
  


  return(
    <>
      <div>
        <h1>Fiercest Apex Predators in the World</h1>
        <div className='container'>
          <button className='leftArrow' onClick={prevImage}>
            ↩
          </button>
          <img src={images}></img>
          <button className='rightArrow' onClick={nextImage}>
            ↪
          </button>
        </div>
      </div>
    </>
  )



}

export default App;