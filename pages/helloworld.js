const fetch =  require('node-fetch');
async function getDetailsInpreview(preview){
  console.log(preview)
  console.log(`https://api.contentstack.io/v3/content_types/helloworld/entries/blt6e1da181a14bf7ef?${preview?"":"environment=production"}`)
  return new Promise((resolve,reject)=>{
      fetch(`https://api.contentstack.io/v3/content_types/helloworld/entries/blt6e1da181a14bf7ef?${preview?"":"environment=production"}`, {
        method: 'get',
        headers: {
      api_key:'blt22ec27e4a9805c70',
      access_token:'blt6a09aa30ba6745cc'},
    })
    .then(res => res.json())
    .then(json => resolve(json));
  })
}

export default function Index(data) {
  // const heroPost = allPosts[0].node
  // const morePosts = allPosts.slice(1)
  return (
    <>
    <div>{data.entry.multi_line}</div>
    </>
  )
}


export async function getStaticProps(context) {
  console.log(context)
  console.log("___")
  const allPosts = await getDetailsInpreview(context.preview || null)
  return {
    props: allPosts,
  }
}