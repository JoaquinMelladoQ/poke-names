
// building an object

const cityFacts = {
        name: 'x',
        city: 'y',
  population: 'z',
     economy: [2,4,5,6,7,8]
}


 //Array on a object

const web = {
      name: 'jamq',
         links: {
           url: 'www.jamq.com'
  },
   socialNetwork: {
    facebook: {
     link: 'facebook.com/jamq',
     name: 'jamq fb',

    }
 }
}

// destructuring objects

 const {link, name} = web.socialNetwork.facebook
 //console.log(link, name)

// Using API fetch plus forEach

fetch('https://pokeapi.co/api/v2/pokemon/')
 .then(res=>res.json())
 .then(data=>{
  //console.log(data.results)
 data.results.forEach(element => {
    //console.log(element.name)
  })
})
.catch(error => console.log(error))


//Using async and await 

const obtenerPokemones = async() => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' )
   const data = await res.json()
   //console.log(data.results)
  const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur')

    console.log(arrayNombres)

  } catch (error) {
    console.log(error)
  }
}
obtenerPokemones()