const createCardModel = (cardObj) => {
  
  console.log(cardObj)
    const element = `
    
    <div class="Undergraduate-Admissions-Profile-Card-Snippet-CardWrapper">
                    <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card" >

                    <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Image" style="background-image:url('${cardObj.imageUrl}')">
                    
                    
                    </div>
                        <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Bottom">
                            <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Bottom-Caption">
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Bottom-Caption-Name">${cardObj.cardName}</div>
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Bottom-Caption-Job">${cardObj.cardFrontJob}</div>
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Bottom-Caption-Location">${cardObj.cardFrontLocation}</div>
                            </div>
                        </div>
                    </div>
                  
             </div>
             <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Wrap">
                        
             </div>
             <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay">
                            <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content">
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content-Image" style="background-image:url('${cardObj.imageUrl}')"></div>
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content-Name">${cardObj.cardName}</div>
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content-Email"><a href="mailto:${cardObj.cardOverlayEmail}">${cardObj.cardOverlayEmail}</a></div>
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content-Body"><p>${cardObj.cardOverlayText}</p></div>
                                <div id="exit-div">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                           <g>
                               <g>
                                   <path d="M256,0C114.508,0,0,114.497,0,256c0,141.493,114.497,256,256,256c141.492,0,256-114.497,256-256
                                       C512,114.507,397.503,0,256,0z M256,472c-119.384,0-216-96.607-216-216c0-119.385,96.607-216,216-216
                                       c119.384,0,216,96.607,216,216C472,375.385,375.393,472,256,472z"/>
                               </g>
                           </g>
                           <g>
                               <g>
                                   <path d="M343.586,315.302L284.284,256l59.302-59.302c7.81-7.81,7.811-20.473,0.001-28.284c-7.812-7.811-20.475-7.81-28.284,0
                                       L256,227.716l-59.303-59.302c-7.809-7.811-20.474-7.811-28.284,0c-7.81,7.811-7.81,20.474,0.001,28.284L227.716,256
                                       l-59.302,59.302c-7.811,7.811-7.812,20.474-0.001,28.284c7.813,7.812,20.476,7.809,28.284,0L256,284.284l59.303,59.302
                                       c7.808,7.81,20.473,7.811,28.284,0C351.398,335.775,351.397,323.112,343.586,315.302z"/>
                               </g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           <g>
                           </g>
                           </svg>
                             </div>
                                                          </div>
                        </div>
    
    
    `;



    return element;
};


export default createCardModel
