// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(e => e.json())
    .then(json => {
      res.status(200).json({ data: json })
    })

  
}
