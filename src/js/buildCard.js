const UndergraduateAdmissionsCard = () =>{
    let imageUrl =''
    let cardName =''
    let cardFrontJob =''
    let cardFrontLocation =''
    let cardOverlayEmail =''
    let cardOverlayText =''

    return {
        
        withImageUrl(value){
            imageUrl = value;
            return this;
        },
        withCardName(value){
            cardName = value;
            return this;
        },
        withCardFrontJob(value){
            cardFrontJob = value;
            return this;
        },
        withCardFrontLocation(value){
            cardFrontLocation = value;
            return this;
        },
        withCardOverlayEmail(value){
            cardOverlayEmail = value;
            return this;
        },
        withCardOverlayText(value){
            cardOverlayText = value;
            return this;
        },

        build(){
            return{
                imageUrl,
                cardName,
                cardFrontJob,
                cardFrontLocation,
                cardOverlayEmail,
                cardOverlayText
            }
        }
    
    }

}



export default UndergraduateAdmissionsCard