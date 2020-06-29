const createCardModel = (cardObj) => {
  
  console.log(cardObj)
    const element = `
    
    <div class="Undergraduate-Admissions-Profile-Card-Snippet-CardWrapper">
                    <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card" style="background-image:url('${cardObj.imageUrl}')">
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
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content-Name">${cardObj.cardName}</div>
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content-Email">${cardObj.cardOverlayEmail}</div>
                                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Content-Body"><p>${cardObj.cardOverlayText}</p></div>
                            </div>
                        </div>
    
    
    `;



    return element;
};


export default createCardModel