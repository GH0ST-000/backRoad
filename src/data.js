import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


export const pageLink = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];


export const externalLInk = [
    {id:1 , href:'https://www.twitter.com',icon:'fab fa-facebook'},
    {id:2 , href:'https://www.twitter.com',icon:'fab fa-twitter'},
    {id:3 , href:'https://www.twitter.com',icon:'fab fa-squarespace'},
    
]


export const services = [
  {id:1 , serviceIcon:'fas fa-wallet fa-fw',serviceTitle:'saving money',serviceText:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
  {id:2 , serviceIcon:'fas fa-tree fa-fw',serviceTitle:'endless hiking',serviceText:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},
  {id:3 , serviceIcon:'fas fa-socks fa-fw',serviceTitle:'saving money',serviceText:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},

]


export const tours = [
  {id:1 , date:'august 26th, 2020',img:tour1,title:'Tibet Adventure' , text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',day:'6 days',price:'from $2100',country:'china'},
  {id:2 , date:'october 1th, 2020',img:tour2,title:'best of java' , text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',day:'11 days',price:'from $1400',country:'usa'},
  {id:3 , date:'september 15th, 2020',img:tour3,title:'explore hong kong' , text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',day:'8 days',price:'from $5000',country:'germany'},
  {id:4 , date:'december 5th, 2019',img:tour4,title:'kenya highlights' , text:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',day:'20 days',price:'from $3300',country:'japan'},
]

