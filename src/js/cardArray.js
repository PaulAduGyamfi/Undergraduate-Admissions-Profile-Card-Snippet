import UndergraduateAdmissionsCard from './buildCard'

const isDefined = (string) => string != null || string != undefined

let cardArray = []


const cardMaker = ({
        imageUrl,
        cardName,
        cardFrontJob,
        cardFrontLocation,
        cardOverlayEmail,
        cardOverlayText
}) =>{

    const card = UndergraduateAdmissionsCard();
    
    if(isDefined(imageUrl)){
       if(imageUrl == ""){
         card.withImageUrl('https://groovespotimages.s3.us-east-2.amazonaws.com/profile-img.png')
       }
       if(imageUrl != ""){
          card.withImageUrl(imageUrl)
       }
       
    }
    

    if(isDefined(cardName)) card.withCardName(cardName)
    if(isDefined(cardFrontJob)) card.withCardFrontJob(cardFrontJob)
    if(isDefined(cardFrontLocation)) card.withCardFrontLocation(cardFrontLocation)
    if(isDefined(cardOverlayEmail)) card.withCardOverlayEmail(cardOverlayEmail)
    if(isDefined(cardOverlayText)) card.withCardOverlayText(cardOverlayText)


    cardArray.push(card.build())

}

export {cardMaker, cardArray}