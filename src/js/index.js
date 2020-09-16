import UndergraduateAdmissionsCard from './buildCard'
import { cardMaker, cardArray } from './cardArray'
import createCardModel from './cardModel'




counselorOverlayArray.forEach( s => {
  cardMaker({
    imageUrl:s[0].trim(),
    cardName:s[1].trim(),
    cardFrontJob:s[2].trim(),
    cardFrontLocation:s[3].trim(),
    cardOverlayEmail:s[4].trim(),
    cardOverlayText:s[5].trim()
    })
  })







// cardMaker({
//     imageUrl:'',
//     cardName:'Marianna Angland',
//     cardFrontJob:'Assistant Director of Enrollment Operations',
//     cardFrontLocation:'New York',
//     cardOverlayEmail:'enroll@stonybrook.edu',
//     cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
//   })
//   cardMaker({
//     imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
//     cardName:'Tom Jerry',
//     cardFrontJob:'Assistant Director of Enrollment Operations',
//     cardFrontLocation:'New York',
//     cardOverlayEmail:'enroll@stonybrook.edu',
//     cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
//   })
//   cardMaker({
//     imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
//     cardName:'Bruce Bruce',
//     cardFrontJob:'Assistant Director of Enrollment Operations',
//     cardFrontLocation:'New York',
//     cardOverlayEmail:'enroll@stonybrook.edu',
//     cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
//   })
//   cardMaker({
//     imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
//     cardName:'Jim Ang',
//     cardFrontJob:'Assistant Director of Enrollment Operations',
//     cardFrontLocation:'New York',
//     cardOverlayEmail:'enroll@stonybrook.edu',
//     cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
//   })
//   cardMaker({
//     imageUrl:'',
//     cardName:'Vin Angland',
//     cardFrontJob:'Assistant Director of Enrollment Operations',
//     cardFrontLocation:'New York',
//     cardOverlayEmail:'enroll@stonybrook.edu',
//     cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
//   })
//   cardMaker({
//     imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
//     cardName:'Bob Bobs',
//     cardFrontJob:'Assistant Director of Enrollment Operations',
//     cardFrontLocation:'New York',
//     cardOverlayEmail:'enroll@stonybrook.edu',
//     cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
//   })














  let cards = ``
  let UndergraduateAdmissionsProfileCardSnippetContainer = document.querySelector('#Undergraduate-Admissions-Profile-Card-Snippet #Undergraduate-Admissions-Profile-Card-Snippet-Container')
  
  cardArray.map(item => createCardModel(item))
  .forEach(card => {
      cards += card
  })

  UndergraduateAdmissionsProfileCardSnippetContainer.innerHTML += cards

let cardWrap = document.querySelectorAll('.Undergraduate-Admissions-Profile-Card-Snippet-CardWrapper')
let overlayWrap = document.querySelectorAll('.Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay')
let back = document.querySelectorAll('.Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Wrap')
const exitButton = document.querySelectorAll('#exit-div')

cardWrap
.forEach((item,index) => {
  item.addEventListener('click', event => {
        overlayWrap[index].classList.add('active')
         back[index].classList.add('active')
         back[index].addEventListener('click', ()=>{
          back[index].classList.remove('active')
          overlayWrap[index].classList.remove('active')
         })
  })
})


exitButton
.forEach((item,index) => {
  item.addEventListener('click', event => {
          back[index].classList.remove('active')
          overlayWrap[index].classList.remove('active')
         
  })
})