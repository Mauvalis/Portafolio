import self from "../img/self.png"
import imag1 from "../img/imag1.png"
import imag2 from "../img/imag2.png"
import imag3 from "../img/imag3.png"
import imag4 from "../img/imag4.png"
import imag5 from "../img/imag5.png"
import imag6 from "../img/imag6.png"
import imag7 from "../img/imag7.png"
import imag8 from "../img/imag8.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mauricio ",
    lastName: "Valenzuela Isidro",
    initials: "MV", // the example uses first and last, but feel free to use three or more if you like.
    position: "un programador web",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💼",
            text: "Ingeniero de Sistemas de la UNCP"
        },
        {
            emoji: "📧",
            text: "mauvalen1998@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/mauricio.valenzuelaisidro",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/mauriciovalenzuelaisidro/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://twitter.com/Maurici68895106",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hola! Soy Mauricio. Soy estudiante de la facultad de ingeniería de sistemas de la UNCP. Disfruto programar, y tengo un amplio conocimeinto en programas. Soy un chico al que le encantan los desafíos. Tengo algunos hobbies que los realizo cuando estoy cansado de estar en la computadora y adoro el deporte.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'Leer',
            emoji: '📖'
        },
        {
            label: 'Deportes',
            emoji: '⛹️'
        },
        {
            label: 'Peliculas',
            emoji: '🎥'
        },
        {
            label: 'Música',
            emoji: '🎶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Semana 1",
            live: "https://www.figma.com/file/QMIzRF79RkCCoL2wZKou1g/Untitled?type=design&node-id=0-1&t=Hy2GvkGbl9kixbxo-0",
            image: imag1,
        },
        {
            title: "Semana 2",
            live:"https://github.com/Mauvalis/emmet/blob/main/emmet.html",
            image: imag2
        },
        {
            title: "Semana 3",
            live: "https://wp.ditsolution.net/techno/home-8/",
            image: imag3
        },
        {
            title: "Semana 4",
            live: "https://mauvalis.github.io/emmet/",
            image: imag4
        },
        {
            title: "Semana 5",
            live: "https://mauvalis.github.io/json/",
            image: imag5
        },
        {
            title: "Semana 6",
            image: imag6
        },
        {
            title: "Semana 7",
            image: imag7
        },
        {
            title: "Semana 8",
            
            image: imag8
        }
    ]
}