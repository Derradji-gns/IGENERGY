import './leader.css'
import "tailwindcss";

const people = [
    {
      name: 'Bendriss Anis',
      role: 'President | Premium Member',
      imageUrl:
        './graphics/anis.jpg',
    },

    {
            name: 'Hadjij Chourouk',
    role: 'Vice President | Designer',
    imageUrl:'./graphics/sun.jpg',
    },

    {
        name : "Benouali Omar Walid",
        role:'Ex president | Premium Member',
        imageUrl:'./graphics/walid.jpg'
    },

    {
        name:'Derradji Amine Abdelbasset',
<<<<<<< HEAD
        role:'Head of RE Department | Developer',
=======
        role:'President of RE Department | Developer',
>>>>>>> 7046b4d (save modifing project)
        imageUrl:'./graphics/me.jpg'
    }, {
        name: 'Taleb Ali',
        role:'Secretary General',
         imageUrl:'./graphics/ali2.jpg'

    },
    {
        name:"Sibelkhir Moncef",
<<<<<<< HEAD
        role:"  Head of Developemnt Department",
=======
        role:"  President of Developemnt Department",
>>>>>>> 7046b4d (save modifing project)
        imageUrl:"./graphics/nmoncef.jpg"
    },
    {
      name:"Guerroudj Abdelwaheb",
      role:"Ex vice president | Social Media Manager",
      imageUrl:"./graphics/waheb.jpg"
    },
    {
      name:"Farah Messaouden",
<<<<<<< HEAD
      role:"Head of Design Department",
=======
      role:"president of Design Department",
>>>>>>> 7046b4d (save modifing project)
      imageUrl:"./graphics/farah3.jpg",
    },
    {
      name:"Nour Meriem",
<<<<<<< HEAD
      role:"Head of Communication Department",
=======
      role:"President of Communication Department",
>>>>>>> 7046b4d (save modifing project)
      imageUrl:"./graphics/nour.jpg",
    },
    {
      name:"Touati Billal",
<<<<<<< HEAD
      role:" Head of Social Media Department",
      imageUrl:"./graphics/2098873.svg"
=======
      role:" President of Social Media Department",
      imageUrl:"./graphics/billal.jpg"
>>>>>>> 7046b4d (save modifing project)
    },

    {
      name : "Rouba Amina",
      role:"Designer",
      imageUrl :'./graphics/amina.jpg'
    },
    {
      name:"Bouarroudj Meriem",
<<<<<<< HEAD
      role:"Ex Head of Dev Department | Project Department | Premium Member",
=======
      role:"Ex President of Dev Department | Project Department | Premium Member",
>>>>>>> 7046b4d (save modifing project)
      imageUrl:"./graphics/meriem.jpg"
    },
    {
      name:"Tayeb-Bey Akram",
      role:"RE Manager",
      imageUrl:"./graphics/akram1.jpg"
    },
    {
      name:"Dahmene Chaima",
      role:"Social Media | Sponsorship",
      imageUrl:"./graphics/2098873.svg",
    },
    {
      name:"Achouri Sara",

      role:" Active Membre",
      role:"Ex Vice President of External Relations",
7046b4d (save modifing project)
      imageUrl:"./graphics/2098873.svg",
    },
    {
      name:"Boudelal Abderrahman",

      role:"EX Head of Design Department | Premium Member",

      role:"EX president of Design Department | Premium Member",
7046b4d (save modifing project)
      imageUrl:"./graphics/boud.jpg"
    },
    {
      name:"Kawther",
      role:"EX Vice President | Premium Member",
      imageUrl:"./graphics/kawter.jpg"
    },
    {
      name:"Soufi Yacine",
      role:"Designer",
      imageUrl:"./graphics/yasin.jpg",
    },
    {
      name:"Djemai Abla",
      role:"Active Membre",
      imageUrl:"./graphics/2098873.svg"
    },
    {
      name:"Ghedir Israa",
      role:"Active Membre ",
      imageUrl:"./graphics/2098873.svg",
    },
    {
      name:"Bouziane Mohammed",
      role:"Ex vice President of interior relations ",
      imageUrl:"./graphics/2098873.svg"
    }
  ]
  
  export default function Leaders() {
    return (
      <div className="firstOne">
        <div className="secondOne">
                  <div  className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our Leaders
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We  have great members who together form the Egenergy community which is the secret of our success and continuous development.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" width="100px" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>

      </div>
      
    )
  }
