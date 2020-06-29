import UndergraduateAdmissionsCard from './buildCard'
import { cardMaker, cardArray } from './cardArray'
import createCardModel from './cardModel'



cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Marianna Angland',
    cardFrontJob:'Assistant Director of Enrollment Operations',
    cardFrontLocation:'New York',
    cardOverlayEmail:'enroll@stonybrook.edu',
    cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
  })
  cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Tom Jerry',
    cardFrontJob:'Assistant Director of Enrollment Operations',
    cardFrontLocation:'New York',
    cardOverlayEmail:'enroll@stonybrook.edu',
    cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
  })
  cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Bruce Bruce',
    cardFrontJob:'Assistant Director of Enrollment Operations',
    cardFrontLocation:'New York',
    cardOverlayEmail:'enroll@stonybrook.edu',
    cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
  })
  cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Jim Ang',
    cardFrontJob:'Assistant Director of Enrollment Operations',
    cardFrontLocation:'New York',
    cardOverlayEmail:'enroll@stonybrook.edu',
    cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
  })
  cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Vin Angland',
    cardFrontJob:'Assistant Director of Enrollment Operations',
    cardFrontLocation:'New York',
    cardOverlayEmail:'enroll@stonybrook.edu',
    cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
  })
  cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Bob Bobs',
    cardFrontJob:'Assistant Director of Enrollment Operations',
    cardFrontLocation:'New York',
    cardOverlayEmail:'enroll@stonybrook.edu',
    cardOverlayText:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates voluptatum quis, placeat quam necessitatibus, exercitationem quasi qui numquam accusantium nihil non ut, autem hic natus omnis dolore quidem dolorem. Blanditiis repellendus consectetur nostrum, aut cum eum reprehenderit fugiat tempora aliquam, suscipit in officiis omnis modi ratione non soluta eaque aspernatur temporibus pariatur eos quia eveniet.`
  })















  let UndergraduateAdmissionsProfileCardSnippetContainer = document.querySelector('#Undergraduate-Admissions-Profile-Card-Snippet #Undergraduate-Admissions-Profile-Card-Snippet-Container')
  
  cardArray.map(item => createCardModel(item))
  .forEach(card => {
    UndergraduateAdmissionsProfileCardSnippetContainer.innerHTML += card
  })



let cardWrap = document.querySelectorAll('.Undergraduate-Admissions-Profile-Card-Snippet-CardWrapper')
let overlayWrap = document.querySelectorAll('.Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay')
let back = document.querySelectorAll('.Undergraduate-Admissions-Profile-Card-Snippet-Card-Overlay-Wrap')


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