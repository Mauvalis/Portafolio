import self from "../img/self.png"
import imag1 from "../img/imag1.png"
import imag2 from "../img/imag2.png"
import imag3 from "../img/imag3.png"
import imag4 from "../img/imag4.png"
import imag5 from "../img/imag5.png"
import imag6 from "../img/imag6.png"
import imag7 from "../img/imag7.png"
import imag8 from "../img/imag8.png"
import imag9 from "../img/imag9.png"
import imag10 from "../img/imag10.png"
import imag11 from "../img/imag11.png"
import imag12 from "../img/imag12.png"
import imag13 from "../img/imag13.png"
import imag14 from "../img/imag14.png"
import imag15 from "../img/imag15.png"
import imag16 from "../img/imag16.png"


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
            live: "http://localhost:3000/semana1",
            image: imag1,
        },
        {
            title: "Semana 2",
            live: "http://localhost:3000/semana2",
            image: imag2
        },
        {
            title: "Semana 3",
            live: "http://localhost:3000/semana3",
            image: imag3
        },
        {
            title: "Semana 4",
            live: "http://localhost:3000/semana4",
            image: imag4
        },
        {
            title: "Semana 5",
            live: "http://localhost:3000/semana5",
            image: imag5
        },
        {
            title: "Semana 6",
            live: "http://localhost:3000/semana6",
            image: imag6
        },
        {
            title: "Semana 7",
            live: "http://localhost:3000/semana7",
            image: imag7
        },
        {
            title: "Semana 8",
            live: "http://localhost:3000/semana8",
            image: imag8
        },
        {
            title: "Semana 9",
            live: "http://localhost:3000/semana9",
            image: imag9
        },
        {
            title: "Semana 10",
            live: "http://localhost:3000/semana10",
            image: imag10
        },
        {
            title: "Semana 11",
            live: "http://localhost:3000/semana11",
            image: imag11
        },
        {
            title: "Semana 12",
            live: "http://localhost:3000/semana12",
            image: imag12
        },
        {
            title: "Semana 13",
            live: "http://localhost:3000/semana13",
            image: imag13
        },
        {
            title: "Semana 14",
            live: "http://localhost:3000/semana14",
            image: imag14
        },
        {
            title: "Semana 15",
            live: "http://localhost:3000/semana15",
            image: imag15
        },
        {
            title: "Semana 16",
            live: "http://localhost:3000/semana16",
            image: imag16
        }
    ]
}